"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Form,FormControl,FormDescription, FormField,FormItem, FormLabel, FormMessage } from "../ui/form";
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { ClipboardPlus, Loader } from "lucide-react";
import { toast } from "../ui/use-toast";
import { formSchema, formSchemaType } from "../../../schemas/form";
import { CreateForm } from "../../../actions/form";
import { useRouter } from "next/navigation";

  
  // Componente para crear un nuevo formulario
  function CreateFormBtn() {

    const router = useRouter();

    // Inicializa el formulario con react-hook-form y zodResolver
    const form = useForm<formSchemaType>({
      resolver: zodResolver(formSchema),
    });
  
    // Función que se ejecuta al enviar el formulario
    async function onSubmit(values: formSchemaType) {
      try {
       const formId = await CreateForm(values);
        toast({
            title:"Success",
            description:"Formulario creado y completado"
        })
        //Envia a ruta para contruir el formulario 
       router.push(`/formularios/builder/${formId}`)
        
      } catch (error) {
        // Muestra un mensaje de error si algo sale mal
        toast({
          title: "Error",
          description: "Algo salió mal, intente más tarde",
          variant: "destructive",
        });
      }
    }
  
    return (
      <Dialog>
        {/* Botón que dispara el diálogo */}
        <DialogTrigger asChild>
          <Button variant={"outline"} className="group border border-primary/20 h-[190px]
          items-center justify-center flex flex-col hover:border-primary
          hover:cursor-pointer border-dashed gap-4 ">
            <ClipboardPlus className=" text-muted-foreground group-hover:text-primary"/>
            <p className="font-bold text-xl text-muted-foreground group-hover:text-primary"> Crear nuevo formulario</p>
            </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear formulario</DialogTitle>
            <DialogDescription>
              Crea un nuevo formulario para empezar tu colección
            </DialogDescription>
          </DialogHeader>
          {/* Formulario con react-hook-form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          {/* Pie de diálogo con botón para guardar el formulario */}
          <DialogFooter>
            <Button
              onClick={form.handleSubmit(onSubmit)}
              disabled={form.formState.isSubmitting}
              className="w-full mt-4"
            >
              {!form.formState.isSubmitting && <span>Guardar</span>}
              {form.formState.isSubmitting && (
                <Loader className="animate-spin" />
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  
  export default CreateFormBtn;