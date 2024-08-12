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
  const [totals, setTotals] = useState<{ [key: string]: number }>({});

  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    formValues.current = { ...initialValues };
    calculateTotals();
  }, [initialValues]);

  const calculateTotals = useCallback(() => {
    const newTotals: { [key: string]: number } = {};
    content.forEach((element) => {
      if (element.type === "NumberField" && formValues.current[element.id]) {
        const value = parseFloat(formValues.current[element.id]);
        const identifier = (element as any).extraAttributes.identifier;
        if (identifier) {
          newTotals[identifier] = (newTotals[identifier] || 0) + value;
        }
      }
    });
    setTotals(newTotals);
  }, [content]);

  useEffect(() => {
    calculateTotals();
  }, [content, calculateTotals]);

  const validateForm = useCallback(() => {
    for (const field of content) {
      const actualValue = formValues.current[field.id] || "";
      const valid = FormElements[field.type].validate(field, actualValue);

      if (!valid) {
        formErrors.current[field.id] = true;
      }
    }

    return Object.keys(formErrors.current).length === 0;
  }, [content]);

  const submitValue = useCallback((key: string, value: string) => {
    formValues.current[key] = value;
    calculateTotals();
  }, [calculateTotals]);

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
      const jsonContent = JSON.stringify({ ...formValues.current, totals });

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
  };

  if (submitted) {
    return (
      <div className="flex justify-center w-full h-full items-center p-8">
        <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border rounded">
          <h1 className="text-2xl font-bold">Formulario enviado</h1>
          <p className="text-muted-foreground">
            Gracias por tu tiempo, puedes cerrar esta ventana ahora.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full h-full items-center p-8">
      <div key={renderKey} className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border rounded">
        {content.map((element) => {
          const FormElement = FormElements[element.type].formComponent;
          return (
            <FormElement
              key={element.id}
              elementInstance={element}
              submitValue={submitValue}
              isInvalid={formErrors.current[element.id]}
              defaultValue={formValues.current[element.id]}   
            />
          );
        })}
        <div className="mt-4 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Totales por identificador:</h2>
          {Object.entries(totals).map(([identifier, total]) => (
            <p key={identifier} className="text-md">
              {identifier}: {total}
            </p>
          ))}
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