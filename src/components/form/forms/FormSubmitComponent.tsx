"use client";
import React, { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { FormElementInstance, FormElements } from "../disingner/FormElemets";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { SubmitForm } from "../../../../actions/form";

function FormSubmitComponent({
  formUrl,
  content,
  initialValues = {},
  onClose,
}: {
  content: FormElementInstance[];
  formUrl: string;
  initialValues?: { [key: string]: string };
  onClose?: () => void;
}) {
  const formValues = useRef<{ [key: string]: string }>({});
  const formErrors = useRef<{ [key: string]: boolean }>({});
  const [renderKey, setRenderKey] = useState(new Date().getTime());
  const [total, setTotal] = useState(0);

  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    formValues.current = { ...initialValues };
    calculateTotal();
  }, [initialValues]);

  const calculateTotal = useCallback(() => {
    const sum = content.reduce((acc, element) => {
      if (element.type === "NumericSelectField" && formValues.current[element.id] !== undefined) {
        return acc + parseFloat(formValues.current[element.id] || "0");
      }
      return acc;
    }, 0);
    setTotal(sum);
  }, [content]);

  useEffect(() => {
    calculateTotal();
  }, [content, calculateTotal]);

  const validateForm: () => boolean = useCallback(() => {
    for (const field of content) {
      const actualValue = formValues.current[field.id] || "";
      const valid = FormElements[field.type].validate(field, actualValue);

      if (!valid) {
        formErrors.current[field.id] = true;
      }
    }

    if (Object.keys(formErrors.current).length > 0) {
      return false;
    }

    return true;
  }, [content]);

  const submitValue = useCallback((key: string, value: string) => {
    formValues.current[key] = value;
    calculateTotal();  // Update total when a value is submitted
  }, [calculateTotal]);

  const submitForm = async () => {
    formErrors.current = {};
    const validForm = validateForm();
    if (!validForm) {
      setRenderKey(new Date().getTime());
      toast({
        title: "Error",
        description: "Por favor revisa los campos",
        variant: "destructive",
      });
      return;
    }

    try {
      const jsonContent = JSON.stringify({ ...formValues.current, total });
      await SubmitForm(formUrl, jsonContent);
      setSubmitted(true);
      if (onClose) onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Algo salió mal",
        variant: "destructive",
      });
    }

    console.log(formValues.current);
  };

  if (submitted) {
    return (
      <div className="flex justify-center w-full h-full items-center p-8">
        <div
          key={renderKey}
          className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background
           w-full p-8 overflow-y-auto border  rounded"
        >
          <h1 className="text-2xl font-bold">Formulario enviado</h1>
          <p className="text-muted-foreground">
            Gracias por tu tiempo, tú puedes cerrar esta ventana ahora.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full h-full items-center p-8">
      <div
        key={renderKey}
        className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background
         w-full p-8 overflow-y-auto border  rounded"
      >
        {content.map((element) => {
          const FormElement = FormElements[element.type].formComponent;
          return (
            <FormElement
              key={element.id}
              elementInstance={element}
              submitValue={submitValue}
              isInvalid={formErrors.current[element.id]}
              defaultValue={formValues.current[element.id]}
              options={element.extraAttributes.options} 
            />
          );
        })}
        <div className="mt-4 p-4 rounded-md">
          <p className="text-lg font-bold">Total: {total}</p>
        </div>
        <Button
          className="mt-8"
          onClick={() => {
            startTransition(submitForm);
          }}
          disabled={pending}
        >
          {!pending && <>Enviar</>}
          {pending && <Loader className="w-4 h-4 animate-spin" />}
        </Button>
      </div>
    </div>
  );
}

export default FormSubmitComponent;
