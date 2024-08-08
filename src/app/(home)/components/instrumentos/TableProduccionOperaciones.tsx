"use client";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function TableProduccionOperaciones() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">OPERACION Y PRODUCCION</TableHead>
          <TableHead>No Aplica</TableHead>
          <TableHead>1</TableHead>
          <TableHead>2</TableHead>
          <TableHead>3</TableHead>
          <TableHead>4</TableHead>
          <TableHead>5</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHead className="w-[300px]">PRODUCCIÓN Y OPERACIONES</TableHead>
        </TableRow>
        <TableRow>
          {/* PRIMERA FILA ESTRUCTURA ORGANIZACIONAL */}
          <TableCell className="font-medium">
            La empresa realiza una planificación de la producción y las
            operaciones contemplando la demanda, la capacidad y la asignación de
            recursos
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa elabora los productos de su portafolio sin definir la
            cantidad a fabricar, los recursos a utilizar y el momento a
            procesarlos
          </TableCell>
          <TableCell>
            La empresa fabrica los productos teniendo en cuenta la experiencia
            de las ventas y lo que dispone en el proceso sin contemplar datos
            históricos y recursos disponibles para ello
          </TableCell>
          <TableCell>
            La empresa define la cantidad de productos a producir y/o prestar
            servicio, el momento en el cual lo debe elaborar, no define un orden
            para fabricarlo y no tiene claramente establecido los recursos que
            utilizará
          </TableCell>
          <TableCell>
            La empresa tiene definido la cantidad de productos a producir y/o
            prestar servicio, el momento en el cual lo debe elaborar y el orden
            o secuencia para hacerlo, pero no tiene asignado claramente los
            recursos a utilizar
          </TableCell>
          <TableCell>
            La empresa tiene estandarizado el proceso para determinar la
            cantidad de productos a producir y/o prestar servicio, el momento en
            el cual lo debe elaborar y el orden o secuencia para hacerlo con los
            recursos necesarios para su elaboración.
          </TableCell>
        </TableRow>
        {/* SEGUNDA FILA ESTRUCTURA ORGANIZACIONAL */}
        <TableRow>
          <TableCell className="font-medium">
            La empresa tiene estandarizado el proceso para determinar la
            cantidad de productos a producir y/o prestar servicio, el momento en
            el cual lo debe elaborar y el orden o secuencia para hacerlo con los
            recursos necesarios para su elaboración.{" "}
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa produce sin tener en cuenta los recursos asignados, sin
            contemplar un orden de necesidades y generando desperdicios de
            materiales, tiempos extras entre otros{" "}
          </TableCell>
          <TableCell>
            La empresa elabora los productos que requiere en la secuencia
            asignada, pero utilizando recursos adicionales como materiales y
            tiempo extra{" "}
          </TableCell>
          <TableCell>
            La empresa tiene definido la forma como realizará el proceso
            productivo, la secuencia de los productos a elaborar, pero no cumple
            con los tiempos de entrega de productos elaborados{" "}
          </TableCell>
          <TableCell>
            La empresa tiene definido la forma como realizará el proceso
            productivo, la secuencia de los productos a elaborar y cumpliendo
            los tiempos de entrega de productos elaborados{" "}
          </TableCell>
          <TableCell>
            La empresa tiene estandarizado la forma como realizará el proceso
            productivo, la secuencia de los productos a elaborar y cumpliendo
            los tiempos de entrega de productos elaborados{" "}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            La empresa realiza el control del uso de los recursos disponibles
            como materiales y recurso humano como también la identificación de
            no conformidades y cuellos de botella
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa produce sin tener en cuenta los recursos asignados, sin
            contemplar un orden de necesidades y generando desperdicios de
            materiales, tiempos extras entre otros{" "}
          </TableCell>
          <TableCell>
          La empresa controla la producción de las cantidades producidas, pero no monitorea el uso de los recursos de tiempo de mano de obra y no controla los desperdicios generados de materiales
          </TableCell>
          <TableCell>
          La empresa tiene definido el proceso productivo controlando el cronograma de producción, pero no cumple con los tiempos de entrega y no realiza seguimiento al uso de los recursos disponibles
          </TableCell>
          <TableCell>
          La empresa tiene definido en el proceso productivo los controles a los tiempos de producción, el cronograma de entrega y los desperdicios generados
          </TableCell>
          <TableCell>
          La empresa tiene estandarizado el proceso productivo controlando los tiempos de producción, el cronograma de producción, los desperdicios generados y el cronograma de entrega 
          </TableCell>
        </TableRow>

        {/* LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableHead className="w-[300px]">SEGUIRDAD E HIGIENE</TableHead>
        </TableRow>
        {/* PRIMERA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          La empresa tiene organizada las instalaciones cumpliendo con las condiciones mínimas de orden, aseo, señalización y condiciones para el desarrollo de las actividades propias de esta
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no tiene protocolos establecidos para mantener el orden y aseo 
          </TableCell>
          <TableCell>
          La empresa realiza aseo en sus instalaciones realizando medianamente una disposición adecuada de residuos.
          </TableCell>
          <TableCell>
          La empresa cuenta con unas instalaciones limpias y ordenadas, pero no tienen identificadas las zonas y las condiciones establecidas para el desarrollo de las actividades
          </TableCell>
          <TableCell>
          La empresa cuenta con unas instalaciones limpias y ordenadas, en la que se identifican algunas zonas de acuerdo a las condiciones establecidas para el desarrollo de las actividades
          </TableCell>
          <TableCell>
          La empresa cuenta con unas instalaciones limpias y ordenadas, debidamente identificadas en su infraestructura, las máquinas y equipos para garantizar la interacción adecuada entre los miembros de la organización
          </TableCell>
        </TableRow>
        {/* SEGUNDA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          La empresa cuenta con un sistema de Gestión de Seguridad y Salud en el Trabajo
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no cumple con los requisitos estipulados por la normatividad relacionadas con la seguridad y Salud en el Trabajo
          </TableCell>
          <TableCell>
          La empresa reconoce la importancia en el cumplimiento de la normatividad en seguridad y salud en el trabajo, pero no cumple con los requisitos mínimos que se deben contemplar en la empresa.
          </TableCell>
          <TableCell>
          La empresa tiene definida la política, organización y planificación de la seguridad y salud en el trabajo, pero no realiza seguimiento a las acciones tomadas de esta
          </TableCell>
          <TableCell>
          La empresa tiene definida las políticas, la organización, planificación, implementación, evaluación continua, auditoría y acciones de mejora con respecto a las seguridad y salud en el trabajo
          </TableCell>
          <TableCell>
          La empresa cuenta con un sistema de gestión de seguridad y salud en el Trabajo que contiene las políticas, la organización, planificación, implementación, evaluación continua, auditoría y acciones de mejora
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="w-[300px]">AMBIENTE</TableHead>
        </TableRow>
        {/* tercera FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          La empresa cuenta con un programa bajo un Sistema de Gestión Ambiental
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no cumple con los requisitos estipulados por la normatividad relacionadas con el medio ambiente
          </TableCell>
          <TableCell>
          La empresa reconoce la importancia en el cumplimiento de la normatividad medio ambiental, pero no cumple con los requisitos mínimos que se deben contemplar en la empresa.
          </TableCell>
          <TableCell>
          La empresa tiene definida la política, organización y planificación de la gestión medio ambiental, pero no realiza seguimiento a las acciones tomadas de esta.
          </TableCell>
          <TableCell>
          La empresa tiene definida las políticas, la organización, planificación, implementación, evaluación continua, auditoría y acciones de mejora con respecto al impacto ambiental
          </TableCell>
          <TableCell>
          La empresa cuenta con un sistema de gestión ambiental que contiene las políticas, la organización, planificación, implementación, evaluación continua, auditoría y acciones de mejora
          </TableCell>
        </TableRow>

        {/* cuarta LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          La empresa cuenta con una estrategia de prevención de contaminación ambiental o disminución de riesgos ambientales, en su proceso productivo y/o en la prestación del servicio, y la transmite al consumidor final
          </TableCell>
          <TableCell></TableCell>
          <TableCell>La empresa no tiene definido acciones para evita, mitigar o disminuir el impacto que los procesos de producción de bienes y/o servicios generan en los ecosistemas ambientales</TableCell>
          <TableCell>
          La empresa toma acciones para disminuir o mitigar el impacto de las acciones que generan los procesos productivos y/o servicios que ponen en riesgo los ecosistemas ambientales
          </TableCell>
          <TableCell>
          La empresa tiene definida acciones para prevenir el impacto de las acciones que generan los procesos productivos y/o servicios que ponen en riesgo los ecosistemas ambientales, pero no se implementan y no se hace seguimiento de esta
          </TableCell>
          <TableCell>
          La empresa tiene definidas acciones que permite la prevención de contaminación ambiental o la disminución de riesgos ambientales que generan los procesos productivos y/o servicios
          </TableCell>
          <TableCell>
          La empresa tiene un plan de manejo ambiental que permite la prevención de contaminación ambiental o la disminución de riesgos ambientales que generan los procesos productivos y/o servicios
          </TableCell>
        </TableRow>
        {/* quinta LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          ¿Qué tipo de desperdicios genera la empresa y cuál es el manejo que se les da?
          La empresa desarrolla un plan de manejo de residuos sólidos
          </TableCell>
          <TableCell></TableCell>
          <TableCell>La empresa realiza la disposición final de residuos con particulares no autorizados para la gestión</TableCell>
          <TableCell>
          La empresa realiza la disposición final de los residuos con los operadores generales
          </TableCell>
          <TableCell>
          La empresa define acciones para el manejo de los residuos, pero no organiza la disposición final de estos
          </TableCell>
          <TableCell>
          La empresa define las acciones para la disposición final de los residuos que se generan en los procesos, utilizando los operadores especializados autorizados
          </TableCell>
          <TableCell>
          La empresa tiene estandarizado el proceso para dar manejo a los residuos que se generan en el proceso, dándole la disposición final con los operadores autorizados por los entes gubernamentales
          </TableCell>
        </TableRow>

        {/* PLANEACION Y ESTRATEGIA */}
        <TableRow>
          <TableHead className="w-[300px]">MANTENIMIENTO E INFRAESTRUCTURA</TableHead>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
          La empresa cuenta con un esquema de mantenimiento para garantizar la disponibilidad y fiabilidad de los activos; maximizando la vida útil de los equipos y reducir los costos
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no tiene definido un esquema de mantenimiento de activos y solamente repara los equipos cuando estos fallan o tiene averías.
          </TableCell>
          <TableCell>
          La empresa tiene un esquema de mantenimiento preventivo que se realiza cuando el equipo así lo requiere y correctivo que se realiza cuando el activo falla.
          </TableCell>
          <TableCell>
          La empresa tiene un esquema de mantenimiento preventivo y correctivo, pero no le realiza seguimiento a las actividades que se realizan o se han realizado
          </TableCell>
          <TableCell>
          La empresa tiene un esquema de mantenimiento preventivo y correctivo al que le realiza seguimiento para tomar acciones correspondientes para la disponibilidad del activo
          </TableCell>
          <TableCell>
          La empresa planifica el mantenimiento centrado en la fiabilidad, preventivo, predictivo y correctivo con un seguimiento sistemático para garantizar la vida útil de los equipos a un costo bajo
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">
            La empresa cuenta con un sistema de Gestión de Activos que incluye la operatividad, mantenibilidad, la confiabilidad y la disposición de los activos de los procesos empresariales
          </TableCell>
          <TableCell></TableCell>
          <TableCell>La empresa no cumple con los requisitos estipulados por para la gestión de activos</TableCell>
          <TableCell>
          La empresa reconoce la importancia en el cumplimiento de la adquisición, el mantenimiento y la eliminación de todo tipo de activos, pero no realiza acciones para poder gestionarlo
          </TableCell>
          <TableCell>
          La empresa tiene definida la adquisición, el mantenimiento y la eliminación de todo tipo de activos, pero no realiza seguimiento de esta
          </TableCell>
          <TableCell>
          La empresa tiene definida la adquisición, el mantenimiento y la eliminación de todo tipo de activos
          </TableCell>
          <TableCell>La empresa tiene definida la adquisición, el mantenimiento y la eliminación de todo tipo de activos</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">
          La empresa cuenta con conexiones a los Servicios Públicos para garantizar la operación de los procesos de bienes y/o servicios
          </TableCell>
          <TableCell></TableCell>
          <TableCell>La empresa tiene conexiones irregulares en alguno de los servicios públicos de energía eléctrica, acueducto, alcantarillado, manejo de residuos sólidos, comunicación y gas natural, que usa en las operaciones de los procesos de bienes y/o servicios</TableCell>
          <TableCell>
          La empresa cuenta con los servicios públicos de energía eléctrica y acueducto, para garantizar la operación de los procesos de bienes y/o servicios
          </TableCell>
          <TableCell>
          La empresa cuenta con los servicios públicos de energía eléctrica, acueducto, comunicación y gas natural para garantizar la operación de los procesos de bienes y/o servicios
          </TableCell>
          <TableCell>
          La empresa cuenta con los servicios públicos de energía eléctrica, acueducto, comunicación y gas natural para garantizar la operación de los procesos de bienes y/o servicios
          </TableCell>
          <TableCell>
          La empresa cuenta con todos los servicios públicos de energía eléctrica, acueducto, alcantarillado, manejo de residuos sólidos, comunicación y gas natural para garantizar la operación de los procesos de bienes y/o servicios
          </TableCell>
        </TableRow>
       
      </TableBody>
    </Table>
  );
}
