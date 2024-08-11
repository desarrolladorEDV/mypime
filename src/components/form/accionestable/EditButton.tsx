"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FormElements, FormElementInstance } from "@/components/form/disingner/FormElemets";
import { useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={toggleModal}>
        <DialogTrigger asChild>
          <Button variant="outline">Editar</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="space-y-4">
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
                    type: column.type,
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
        </DialogContent>
      </Dialog>
    </>
  );
}


