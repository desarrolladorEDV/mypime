import React from "react";
import SidebarBtnElement from "./SidebarBtnElement";
import { FormElements } from "./FormElemets";
import { Separator } from "@/components/ui/separator";

function FormElementsSidebar() {
  return (
    <div>
      <p className="text-sm text-foreground/70"> Arrastra y suelta los elementos</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2
        place-self-start">
          Elementos de diseño
        </p>
      
      <SidebarBtnElement formElement={FormElements.TitleField} />
      <SidebarBtnElement formElement={FormElements.SubTitleField} />
      <SidebarBtnElement formElement={FormElements.ParagraphField} />
      <SidebarBtnElement formElement={FormElements.SeparatorField} />
      <SidebarBtnElement formElement={FormElements.SpacerField} />
     
      <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2
        place-self-start">
          Elementos de formulario
        </p>
        <SidebarBtnElement formElement={FormElements.NumericSelectField} />
        <SidebarBtnElement formElement={FormElements.TextField} />
        <SidebarBtnElement formElement={FormElements.NumberField} />
        <SidebarBtnElement formElement={FormElements.TextAreaField} />
        <SidebarBtnElement formElement={FormElements.DateFíeld} />
        <SidebarBtnElement formElement={FormElements.SelectField} />
        <SidebarBtnElement formElement={FormElements.CheckboxField} />
      </div>
    </div>
  );
}

export default FormElementsSidebar;
