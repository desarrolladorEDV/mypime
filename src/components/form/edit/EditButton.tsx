"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FormElements, FormElementInstance } from "@/components/form/disingner/FormElemets";

interface EditButtonWithModalProps {
  rowData: Record<string, any>;
  columns: {
    id: string;
    label: string;
    required: boolean;
    type: string;
  }[];
}

export default function EditButtonWithModal({
  rowData,
  columns,
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

              return (
                <FormComponent
                  key={column.id}
                  elementInstance={
                    {
                      id: column.id,
                      type: column.type,
                      value: rowData[column.id],
                      extraAttributes: { label: column.label },
                    } as FormElementInstance
                  }
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
