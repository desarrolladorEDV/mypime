"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
 // Asume que este componente ya existe y maneja la lógica de edición
import { Button } from "@/components/ui/button";
import FormSubmitComponent from "../forms/FormSubmitComponent";
import { FormElements } from "../disingner/FormElemets";
import useDesigner from "../hooks/useDesigner";
import { FilePenLine } from "lucide-react";

function EditButton() {
    const { elements } = useDesigner();
    const [total, setTotal] = useState<number>(0);
  
  const [open, setOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="gap-2">
          <FilePenLine />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
        <div className="px-4 py-2 border-b">
          <p className="text-lg font-bold text-muted-foreground">
            Preview del formulario
          </p>
          <p className="text-sm text-muted-foreground">
            Aquí se mostrará el formulario que los usuarios verán.
          </p>
        </div>
        <div className="bg-accent flex flex-col flex-grow items-center justify-center p-4 bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)] overflow-y-auto">
          <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
            {elements.map((element) => {
              const FormComponent = FormElements[element.type].formComponent;
              return <FormComponent key={element.id} elementInstance={element} />;
            })}
            <div className="mt-4 p-4 rounded-md">
              <p className="text-lg font-bold">Total: {total}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditButton;
