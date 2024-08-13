import React, { ReactNode } from "react";
import {
  GetFormById,
  GetFormWithSubmissions,
} from "../../../../../../actions/form";
import VisitBtn from "@/components/form/forms/VisitBtn";
import FormLinkShare from "@/components/form/forms/FormLinkShare";

import {
  BookText,
  CirclePlus,
  FilePenLine,
  MousePointerClick,
} from "lucide-react";
import {
  ElementsType,
  FormElementInstance,
} from "@/components/form/disingner/FormElemets";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Araña } from "@/components/Araña";

import { SubmissionRow } from "@/components/form/accionestable/SubmissionRow";
import { Separator } from "@/components/ui/separator";
import { StatsCard } from "@/app/(home)/page";

async function FormDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error("Form no encontrado");
  }

  // Obtiene el total de visitas y envíos, asignando 0 si no hay datos
  const { visits, submissions } = form;

  // Calcula la tasa de envíos
  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  // Calcula la tasa de rebote
  const bounceRate = 100 - submissionRate;

  return (
    <>
      <div className="flex-1 space-y-4 p-2 border rounded ">
        <div className="mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total visitas"
            icon={<BookText className="h-4 w-4" />}
            helperText="Todas las visitas"
            value={visits?.toLocaleString() || ""}
            loading={false}
            className=""
          />

          <StatsCard
            title="Total envíos"
            icon={<CirclePlus className="h-4 w-4" />}
            helperText="Todos los envíos"
            value={submissions?.toLocaleString() || ""}
            loading={false}
            className=""
          />

          <StatsCard
            title="Tasa de envíos"
            icon={<MousePointerClick className="h-4 w-4" />}
            helperText="Vistas en envíos de formularios"
            value={submissionRate?.toLocaleString() + "%" || ""}
            loading={false}
            className=""
          />

          <StatsCard
            title="Porcentaje de rebotes"
            icon={<CirclePlus className="h-4 w-4" />}
            helperText="Visitas que te dejan sin interactuar"
            value={bounceRate?.toLocaleString() + "%" || ""}
            loading={false}
            className=""
          />
        </div>
        <div className="flex justify-between container">
          <h1 className="text-4xl font-bold truncate">{form.name}</h1>
          <VisitBtn shareURL={form.shareURL} />
        </div>
        <div className="py-4 border-b flex gap-2 items-center justify-between container">
          <div className=" w-full p-2 flex gap-2 items-center justify-between">
            <FormLinkShare shareURL={form.shareURL} />
          </div>
        </div>


        <div className="container p-10">
          <SubmissionsTable id={form.id} />
        </div>
      </div>

    </>
  );
}

export default FormDetailPage;

type Rows = {
  id: number;  // Asegúrate de incluir id
  submittedAt: Date;  // Asegúrate de incluir submittedAt
  [key: string]: string | number | Date;  // Otras propiedades pueden ser string, number o Date
};


async function SubmissionsTable({ id }: { id: number }) {
  const form = await GetFormWithSubmissions(id);

  if (!form) {
    throw new Error("Form no encontrado");
  }

  // Aquí se define formContent a partir de form.content
  const formContent = JSON.parse(form.content) as FormElementInstance[];

  const columns: {
    id: string;
    label: string;
    required: boolean;
    type: ElementsType;
  }[] = [];

  formContent.forEach((element) => {
    switch (element.type) {
      case "TextField":
      case "DateFíeld":
      case "NumberField":
      case "TextAreaField":
      case "SelectField":
      case "CheckboxField":
        columns.push({
          id: element.id,
          label: element.extraAttributes?.label,
          required: element.extraAttributes?.required,
          type: element.type,
        });
        break;
      default:
        break;
    }
  });

  const rows: Rows[] = [];
  const radarData: { [key: string]: number } = {};

  form.FormSubmissions.forEach((submission) => {
    const { formValues, submittedAt, totals } = JSON.parse(submission.content);


    // Agrega los datos de totals al radarData
    for (const [key, value] of Object.entries(totals)) {
      if (typeof value === "number") {
        radarData[key] = (radarData[key] || 0) + value;
      } else {
        console.warn(`Expected number but received ${typeof value} for key ${key}`);
      }
    }
    
    

    rows.push({
      id: submission.id, // Asegúrate de que el id se está incluyendo aquí
      ...formValues,
      submittedAt: submission.createdAt,
    });
  });

  // Convertir radarData en un array de objetos adecuado para el RadarChart
  const chartData = Object.entries(radarData).map(([key, value]) => ({
    identifier: key,
    total: value,
  }));


  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold my-4">Enviados</h1>
      </div>

      <div className="rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className="uppercase">
                  {column.label}
                </TableHead>
              ))}

              <TableHead className="text-muted-foreground text-right uppercase">
                Enviado hace
              </TableHead>
              <TableHead className="uppercase">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <SubmissionRow
                key={row.id} // Usa row.id en lugar de index si está disponible
                row={row}
                columns={columns}
                formContent={formContent}
                formId={id}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      <Separator className="my-4" />
      <Araña chartData={chartData} />
    </>
  );
}