"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Edit } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FormElements } from "../disingner/FormElemets";

interface EditButtonProps {
  submission: any; // Ajusta el tipo según el formato de tu envío
  columns: any[]; // Ajusta el tipo según tu definición de columnas
  formUrl: string;
}

function EditButton({ submission, columns, formUrl }: EditButtonProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant={"outline"} className="gap-2">
        <Edit />
        Editar
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="hidden">Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
          <div className="px-4 py-2 border-b">
            <p className="text-lg font-bold text-muted-foreground">
              Editar formulario
            </p>
            <p className="text-sm text-muted-foreground">
              Aquí puedes editar los datos del formulario.
            </p>
          </div>
          <div className="bg-accent flex flex-col flex-grow items-center justify-center p-4 bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)] overflow-y-auto">
            <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
              {columns.map((column) => {
                const FormComponent = FormElements[column.type].formComponent;
                const defaultValue = submission[column.id];

                return (
                  <FormComponent
                    key={column.id}
                    elementInstance={{
                      id: column.id,
                      type: column.type,
                      extraAttributes: {
                        label: column.label,
                        required: column.required,
                        placeHolder: column.placeHolder || "",
                        options: column.options || [],
                        helperText: column.helperText || "",
                      },
                    }}
                    defaultValue={defaultValue}
                    // Aquí podrías añadir submitValue y otras props si es necesario
                  />
                );
              })}
              <Button
                className="mt-8"
                onClick={handleClose}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditButton;
