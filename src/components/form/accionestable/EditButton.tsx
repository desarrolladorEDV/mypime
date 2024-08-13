"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FormElements, FormElementInstance, ElementsType } from "@/components/form/disingner/FormElemets";
import { ClipboardPenLine } from "lucide-react";

interface EditButtonWithModalProps {
  rowData: Record<string, any>;
  columns: {
    id: string;
    label: string;
    required: boolean;
    type: string;
  }[];
  formContent: FormElementInstance[];  // Añadido: El contenido completo del formulario
}

export  function EditButtonWithModal({
  rowData,
  columns,
  formContent,  // Añadido: El contenido completo del formulario
}: EditButtonWithModalProps) {


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size={"icon"}><ClipboardPenLine className="h-4 w-4" /></Button>
        </DialogTrigger>
        <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
        <div className="px-4 py-2 border-b">
          <p className="text-lg font-bold text-muted-foreground">
            Editar respuesta
          </p>
         
        </div>
          
          <div className="bg-accent flex flex-col flex-grow items-center justify-center p-4 bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)] overflow-y-auto">
          <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
            {columns.map((column) => {
              const FormComponent =
                FormElements[column.type as keyof typeof FormElements]
                  ?.formComponent;

              if (!FormComponent) {
                return null;
              }

              // Encuentra el elemento original para obtener las opciones u otros atributos
              const originalElement = formContent.find(
                (el) => el.id === column.id
              );

              return (
                <FormComponent
                  key={column.id}
                  elementInstance={{
                    id: column.id,
                    type: column.type as ElementsType,
                    value: rowData[column.id],
                    extraAttributes: {
                      ...originalElement?.extraAttributes,
                      label: column.label,
                    },
                  }}
                  defaultValue={rowData[column.id]}
                />
              );
            })}
          </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}


