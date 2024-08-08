"use client"
import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export default function TableGestionFinanciera() {
  return (
     <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">GESTION FINANCIERA</TableHead>
          <TableHead>No Aplica</TableHead>
          <TableHead>1</TableHead>
          <TableHead>2</TableHead>
          <TableHead>3</TableHead>
          <TableHead>4</TableHead>
          <TableHead>5</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        
        <TableRow>
          {/* PRIMERA FILA ESTRUCTURA ORGANIZACIONAL */}
          <TableCell className="font-medium">
          La Organización ha implementado acciones para la gestión financiera (planificación financiera y/o presupuesto)
          
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          El proceso financero no ha identificado áreas claves ni pronósticos o gestión documentada


          </TableCell>
          <TableCell>
          El proceso financero ha identificado áreas clave identificadas con algunas acciones de gestión diseñadas pero no se han implementado
          </TableCell>
          <TableCell>
          Hay áreas clave identificadas con algunas acciones de gestión implementadas de manera independiente con evaluación posterior

          </TableCell>
          <TableCell>
          Hay áreas clave identificadas con acciones de gestión implementadas de manera integrada con evaluación durante y posterior al proceso. Hay evidencia de mejoramiento

          </TableCell>
          <TableCell>
          Hay áreas clave identificadas con acciones de gestión implementadas de manera integrada con información generada en tiempo real, consultada por los usuarios de manera directa y evaluada durante y posterior al proceso. Hay evidencia de mejoramiento significativo (rendimiento superior al promedio en las áreas gestionadas).

Las acciones implementadas tienen la capacidad de predecir cambios en tiempo real e incluyen aspectos del entorno (competidores, economía, política, impuestos o similares)


          </TableCell>

        </TableRow>
          
        {/* SEGUNDA FILA FINACIERA*/}
        <TableRow>
          <TableCell className="font-medium">
          La Organización ha diseñado e implementado acciones para la gestión eficiente de los costos</TableCell>
          <TableCell></TableCell>
          <TableCell>
          No hay elementos del costo identificados
          </TableCell>
          <TableCell>
          Hay elementos de costo identificados pero su gestión no se evidencia claramente
          </TableCell>
          <TableCell>
          Hay elementos de costo identificados y algunos se gestionan con herramientas independientes (entre áreas o etapas del proceso)
          </TableCell>
          <TableCell>
          Hay elementos de costo identificados y todos se gestionan con herramientas que integran las etapas y áreas involucradas
          </TableCell>
          <TableCell>
          Los elementos del costo están identificados y hay evidencia de su gestión bajo criterios predefinidos. Hay herramientas efectivas para gestionar los costos indirectos de fabricación
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">
          La Organización ejecuta acciones para la gestión financiera orientada a la cadena de suministro
         </TableCell>
          <TableCell></TableCell>
          <TableCell>
          No hay herramientas documentadas para generar eficiencia en la cadena de suministro



          </TableCell>
          <TableCell>
          Hay herramientas documentadas pero no existe evidencia clara de su implementación


          </TableCell>
          <TableCell>
          Hay herramientas independientes para generar eficiencia en algunos elementos representativos de la cadena de suministro


          </TableCell>
          <TableCell>
          Hay herramientas integradas para generar eficiencia en todos los elementos de la cadena de suministro. Hay evidencia de su buen funcionamiento



          </TableCell>
          <TableCell>
          Existe un modelo de gestión financiera para asegurar la eficiencia en la cadena de suministro. Hay evidencia de funcionamiento por encima del promedio


          </TableCell>
        </TableRow>
        
       
        <TableRow>
          <TableCell className="font-medium">
          La Organización cuenta con acciones efectivas para la gestion de su liquidez
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          No hay políticas ni controles documentados para gestión de la liquidez
          </TableCell>
          <TableCell>
          Hay algunas políticas o controles documentados pero no hay evidencia de su implementación
          </TableCell>
          
          <TableCell>
          Hay políticas y controles documentados. Además existen algunas herramientas para gestionar la liquidez
          </TableCell>
          <TableCell>
          Hay herramientas articuladas entre áreas que facilitan la gestión de la liquidez
          </TableCell>
          <TableCell>
          Existe un sistema que gestiona la liquidez, facilitando el avance organizacional y la generación de valor sin exposición innecesaria al riesgo
          </TableCell>
        </TableRow>
       
      </TableBody>
    </Table>
  )
}
