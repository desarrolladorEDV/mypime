"use client";

import { ArrowDown10, CaseSensitive } from "lucide-react";
import { ElementsType, FormElement, FormElementInstance, SubmitFunction } from "../FormElemets";
import Designer from "../Designer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import useDesigner from "../../hooks/useDesigner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";



const type: ElementsType = "NumberField";

const extraAttributes = {
  label: "Campo de numero",
  helperText: "Helper text",
  required: false,
  placeHolder: "Escriba aqui...",
};

const propiertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

export const NumberFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: ArrowDown10,
    label: " Campo de numero",
  },

  desingerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: (
    formElemet: FormElementInstance,
    currentValue: string
  ): boolean => {
    const element = formElemet as CustomInstance;
    if (
      element.extraAttributes.required){
        return currentValue.length > 0;
      }
      return true; 
  }
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

type PropertiesFormSchemaType = z.infer<typeof propiertiesSchema>;
function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { updateElemet } = useDesigner();
  const form = useForm<PropertiesFormSchemaType>({
    resolver: zodResolver(propiertiesSchema),
    mode: "onBlur",
    defaultValues: {
      label: element.extraAttributes.label,
      helperText: element.extraAttributes.helperText,
      required: element.extraAttributes.required,
      placeHolder: element.extraAttributes.placeHolder,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: PropertiesFormSchemaType) {
    const { label, helperText, required, placeHolder } = values;

    updateElemet(element.id, {
      ...element,
      extraAttributes: {
        label,
        helperText,
        required,
        placeHolder,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Etiqueta</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>La etiqueta de este campo.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="placeHolder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Texto de fondo</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                El texto de fondo de este campo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="helperText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Texto de ayuda</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                El texto de ayuda para este campo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem
              className="flex items-center justify-between rounded-lg
            border p-3 shadow-sm"
            >
              <div className="espace-y-0.5">
                <FormLabel>Requerido</FormLabel>
                <FormDescription>
                  Determina si este campo es requerido.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, helperText, required, placeHolder } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="font-medium text-sm">
        {element.extraAttributes.label}
        {element.extraAttributes.required && "*"}
      </Label>
      <Input
        readOnly
        disabled
        type="number"
        placeholder={element.extraAttributes.placeHolder}
      />
      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}

function FormComponent({
    elementInstance,
    submitValue,
    isInvalid,
    defaultValue
  }: {
    elementInstance: FormElementInstance;
    submitValue?:SubmitFunction;
    isInvalid?:boolean;
    defaultValue?:string;
  }) {
    const element = elementInstance as CustomInstance;

    const [value, setValue] = useState(defaultValue || "");
    const [error, setError] = useState(false);

    useEffect(() => {
      setError(isInvalid===true);
    }, [isInvalid]);

    const { label, helperText, required, placeHolder } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className={cn(error && "text-red-500")}>
          {element.extraAttributes.label}
          {element.extraAttributes.required && "*"}
        </Label>
        <Input
        type="number"
        className={cn(error && "border-red-500")}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            if(!submitValue) return;
            const valid = NumberFieldFormElement.validate(element, e.target.value);
            setError(!valid);
            if(!valid) return;
            submitValue(element.id, e.target.value)
          }}
          value={value}
          placeholder={element.extraAttributes.placeHolder}
        />
        {helperText && (
          <p className={cn("text-xs text-muted-foreground",
            error && "text-red-500"
           )}>{helperText}</p>
        )}
      </div>
    );
  }