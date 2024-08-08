"use server";

import prisma from "@/lib/prisma";

import { currentUser } from '@clerk/nextjs/server';
import { formSchema, formSchemaType } from "../schemas/form";

class UserNotFoundErr extends Error {}

export async function GetFormStats() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });
  
    // Obtiene el total de visitas y envíos, asignando 0 si no hay datos
    const visits = stats._sum.visits || 0;
    const submissions = stats._sum.submissions || 0;
  
    // Calcula la tasa de envíos
    let submissionRate = 0;
    if (visits > 0) {
      submissionRate = (submissions / visits) * 100;
    }
  
    // Calcula la tasa de rebote
    const bounceRate = 100 - submissionRate;
  
    // Retorna un objeto con las estadísticas del formulario
    return {
      visits,         // Total de visitas
      submissions,    // Total de envíos
      submissionRate, // Tasa de envíos (en porcentaje)
      bounceRate      // Tasa de rebote (en porcentaje)
    };
  }


 
// Función asincrónica para crear un formulario
export async function CreateForm(data: formSchemaType) {
  // Validación de los datos del formulario utilizando el esquema de Zod
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("form not valid"); // Lanza un error si la validación falla
  }

  // Obtiene el usuario actual desde Clerk
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr(); // Lanza un error si no hay un usuario actual
  }

  // almacena el name y la descripcion
  const { name, description } = data;

  // Creación del formulario en la base de datos utilizando Prisma
  const form = await prisma.form.create({
    data: {
      userId: user.id, // Asocia el formulario con el ID del usuario actual
      name,           // Nombre del formulario
      description,    // Descripción del formulario
    },
  });

  // Verifica si la creación del formulario fue exitosa
  if (!form) {
    throw new Error("something went wrong"); // Lanza un error si algo salió mal
  }

  // Retorna el ID del formulario creado
  return form.id;
}


// Función para obtener los formularios del usuario actual
export async function GetForms() {
  // Obtiene el usuario actual desde Clerk
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr(); // Lanza un error si no hay un usuario actual
  }

  // Busca y retorna los formularios del usuario, ordenados por fecha de creación
  return await prisma.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function GetFormById(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr(); // Lanza un error si no hay un usuario actual
  }
  // Busca y retorna el formulario con el ID proporcionado
  return prisma.form.findUnique({
    where: {
      userId: user.id,
      id
    }
  })
}

export async function UpdateFormContent(id: number, jsoncontent: string) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr(); // Lanza un error si no hay un usuario actual
  }
  return prisma.form.update({
    where: {
      userId: user.id,
      id
    },
    data: {
      content: jsoncontent
    }
  })
}

export async function PublishForm(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr(); // Lanza un error si no hay un usuario actual
  }
  return prisma.form.update({
    where: {
      userId: user.id,
      id
    },
    data: {
      published: true
    }
  })
}

export async function GetFormContentByUrl(formUrl: string) {
  return prisma.form.update({
    select: {
      content: true
    },
    data: {
      visits: {
        increment: 1
      }
    },
    where: {
      shareURL: formUrl
    }
  })
}

export async function SubmitForm(formUrl: string, content: string) {
  try {
    // Parsear el contenido JSON para extraer el campo total
    const parsedContent = JSON.parse(content);
    const { total, ...otherFields } = parsedContent;

    return await prisma.form.update({
      data: {
        submissions: {
          increment: 1,
        },
        FormSubmissions: {
          create: {
            content: JSON.stringify(otherFields), // Guardar el resto del contenido
            total: parseFloat(total), // Guardar el campo total
          },
        },
      },
      where: {
        shareURL: formUrl,
        published: true,
      },
    });
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    throw new Error("Error al enviar el formulario");
  }
}

export async function GetFormWithSubmissions (id: number) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr(); // Lanza un error si no hay un usuario actual
  }

  return prisma.form.findUnique({
    where: {
      id
    },
    include: {
      FormSubmissions: true
    }
  })
}

export async function getSubmissionsData() {
  const submissions = await prisma.formSubmission.findMany({
    select: {
      createdAt: true,
      total: true,
    },
  });

  return submissions;
}


