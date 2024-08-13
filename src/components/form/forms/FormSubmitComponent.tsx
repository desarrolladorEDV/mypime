"use client";
import React, { useCallback, useEffect, useState, useTransition } from "react";
import { FormElementInstance, FormElements } from "../disingner/FormElemets";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { SubmitForm } from "../../../../actions/form";

function FormSubmitComponent({
  formName, // Añadir aquí la prop formName
  formUrl,
  content,
  initialValues = {},
  onClose,
}: {
  formName: string;  // Declarar la prop formName aquí
  content: FormElementInstance[];
  formUrl: string;
  initialValues?: { [key: string]: string };
  onClose?: () => void;
}) {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>(initialValues);
  const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({});
  const [totals, setTotals] = useState<{ [key: string]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    console.log("Initial values:", initialValues);
    calculateTotals(initialValues); // Calcula los totales iniciales solo una vez al montar
  }, [initialValues]);

  const calculateTotals = useCallback(
    (values: { [key: string]: string }) => {
      const totalsSum: { [key: string]: number } = {};
      const counts: { [key: string]: number } = {};

      console.log("Calculating totals with formValues:", values);

      content.forEach((element) => {
        if (element.type === "NumberField") {
          const identifier = (element.extraAttributes as any).identifier;
          const value = parseFloat(values[element.id] || "0");

          console.log(`Processing element ID: ${element.id}, value: ${value}, identifier: ${identifier}`);

          if (value !== 0) {
            // Sumar los valores y contar las entradas para cada identificador
            if (!totalsSum[identifier]) {
              totalsSum[identifier] = 0;
              counts[identifier] = 0;
            }
            totalsSum[identifier] += value;
            counts[identifier] += 1;
          }
        }
      });

      // Calcular el promedio para cada identificador
      const newTotals: { [key: string]: number } = {};
      Object.keys(totalsSum).forEach((identifier) => {
        newTotals[identifier] = totalsSum[identifier] / counts[identifier];
      });

      console.log("New averages calculated:", newTotals);
      setTotals((prevTotals) => {
        const totalsChanged = Object.keys(newTotals).some((key) => newTotals[key] !== prevTotals[key]);
        if (totalsChanged) {
          console.log("Updating totals state.");
          return newTotals;
        }
        return prevTotals;
      });
    },
    [content]
  );

  const validateForm = useCallback(() => {
    const errors: { [key: string]: boolean } = {};
    let isValid = true;

    content.forEach((field) => {
      const actualValue = formValues[field.id] || "";
      const valid = FormElements[field.type].validate(field, actualValue);

      if (!valid) {
        errors[field.id] = true;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  }, [content, formValues]);

  const submitValue = useCallback(
    (key: string, value: string) => {
      console.log(`Submitting value: ${value} for key: ${key}`);
      const updatedValues = { ...formValues, [key]: value };
      setFormValues(updatedValues);
      calculateTotals(updatedValues);
    },
    [formValues, calculateTotals]
  );

  const submitForm = async () => {
    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Por favor revisa los campos",
        variant: "destructive",
      });
      return;
    }

    try {
      const formData = {
        formValues,
        totals,
        content,
      };
      console.log("Form data to be submitted:", formData);
      await SubmitForm(formUrl, JSON.stringify(formData));
      setSubmitted(true);
      if (onClose) onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
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
      <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border rounded">
     <div className="mb-3 border-b p-2">
     <h1 className="text-2xl font-bold  truncate">{formName}</h1>
  
     </div>
    
        {content.map((element) => {
          const FormElement = FormElements[element.type].formComponent;
          return (
            <FormElement
              key={element.id}
              elementInstance={element}
              submitValue={submitValue}
              isInvalid={formErrors[element.id]}
              defaultValue={formValues[element.id]}
            />
          );
        })}

        <div className="mt-4 p-4 border-t">
          <h2 className="text-lg font-bold">Promedios por Identificador</h2>
          <ul>
            {Object.entries(totals).map(([identifier, total]) => (
              <li key={identifier}>
                <span className="font-semibold">{identifier}: </span>
                <span>{total.toFixed(2)}</span> {/* Muestra el promedio con 2 decimales */}
              </li>
            ))}
          </ul>
        </div>

        <Button className="mt-8" onClick={() => startTransition(submitForm)} disabled={pending}>
          {!pending && <>Enviar</>}
          {pending && <Loader className="w-4 h-4 animate-spin" />}
        </Button>
      </div>
    </div>
  );
}

export default FormSubmitComponent;
