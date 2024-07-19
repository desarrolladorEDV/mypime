"use client"

import { create } from "domain";
import { FormElementInstance } from "../FormElemets";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type DesignerContextType={
    elements: FormElementInstance[];
    addElement: (index: number, element: FormElementInstance)=>void;
    removeElement: (id: string)=>void;    
    //permite que se pueda seleccionar un elemento
    selectedElement: FormElementInstance | null;
    setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>> ;
}

export const DesignerContext =createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
    children,
}:{
    children: ReactNode;
}) {
    //permite agregar elementos al formulario
    const [elements, setElements]  = useState<FormElementInstance[]>([]);
    const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);

    const addElement=(index: number, element: FormElementInstance)=>{
        setElements((prev)=>{
            const newElements = [...prev];
            newElements.splice(index,0, element);
            return newElements;
        });
    };

    const removeElement=(id: string)=>{
        setElements((prev)=>prev.filter((element)=>element.id !== id));
    }

    return(
    <DesignerContext.Provider 
    value={{
        elements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement
    }}>{children}</DesignerContext.Provider>
    );
}

