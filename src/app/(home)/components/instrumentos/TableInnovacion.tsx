"use client";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableInnovacion() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">INNOVACION</TableHead>
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
          <TableHead className="w-[300px]">CULTURA DE INNOVACIÓN</TableHead>
        </TableRow>
        <TableRow>
          {/* PRIMERA FILA ESTRUCTURA ORGANIZACIONAL */}
          <TableCell className="font-medium">
          ¿Cuenta la organización con un estrategia o un modelo para generar cultura de innovación en la organización, en sus procesos y productos? 
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          No existe un plan definido para generar cultura de la innovación en la organización 
          </TableCell>
          <TableCell>
          Desarrollan actividades sin saber que hacen parte del desarrollo de la cultura de la innovación por tanto no las registran ni las publican como parte de un plan 
          </TableCell>
          <TableCell>
          Existen algunas actividades que permiten que las ideas de los colaboradores se tengan en cuenta para la toma de decisiones, no se encuentran documentadas ni socializadas.
          </TableCell>
          <TableCell>
          Existen algunas actividades que permiten que promoción de la creatividad, trabajo en equipo y colaboración, aprendizaje continuo y experimentación, no se miden ni se evalúan en su implementación.
          </TableCell>
          <TableCell>
          Existe un plan documentado para la cultura de la innovación que incluye promoción de la creatividad, trabajo en equipo y colaboración, aprendizaje continuo y experimentación que se miden y evalúan al implementarse.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="w-[300px]">GESTIÓN DE LA INNOVACIÓN</TableHead>
        </TableRow>
        {/* SEGUNDA FILA ESTRUCTURA ORGANIZACIONAL */}
        <TableRow>
          <TableCell className="font-medium">
          ¿Utiliza la organización herramientas que faciliten la vigilancia tecnológica y la identificación de tecnologías blandas y duras, emergentes y claves?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          No existe un proceso que permita hacer vigilancia de las tecnologías (blandas y duras) con las que cuenta la empresa y las que están en tendencia. 
          </TableCell>
          <TableCell>
          Cuentan con un inventario de tecnologías pero estas no son identificadas como blandas, duras y tampoco llevan seguimiento de su ciclo de vida o tendencias asociadas a ellas.
          </TableCell>
          <TableCell>
          Existen proceso simples y que utilizan cada colaborador de manera independiente que les permite proponer mejoras a las tecnologías (blandas y duras) que utilizan para desarrollar sus actividades 
          </TableCell>
          <TableCell>
          Existen herramientas de vigilancia tecnológica establecidos en la organización, no se evalúa el desempeño durante y  posterior.
          </TableCell>
          <TableCell>
          Existen proceso de vigilancia tecnológica establecidos en la organización que les permite proponer mejoras en las tecnologías (blandas y duras) que utilizan para desarrollar sus actividades y se evalúa el desempeño durante y  posterior. Hay evidencia.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
          ¿La organización tiene un plan de desarrollo de  productos y procesos nuevos o mejoradas derivado de un plan de formación adaptado a las necesidades de la organización y su entorno? 
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          En la organización desconocen cómo se generan productos y procesos de innovación.
          </TableCell>
          <TableCell>
          Se cuenta con un listado de productos caracterizados para el sistema de gestión de la compañía, pero no está asociado a cambios, mejoras ni a procesos de innovación 
          </TableCell>
          <TableCell>
          En la organización se han generado algunos cambios en productos (bien/servicio) pero no están identificados como innovación 
          </TableCell>
          <TableCell>
          En la organización se genera de manera constante productos y procesos nuevos o mejorados pero con un plan de capacitaciones asociado a la innovación
          </TableCell>
          <TableCell>
          La organización tiene un plan de capacitaciones que permite el desarrollo de productos y procesos nuevos o mejorados 
          </TableCell>
        </TableRow>

        {/* PRIMERA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
           ¿La organización participa de proyectos de investigación e innovación con inversión en efectivo o en especie en conjunto con actores aliados que permita desarrollar investigaciones de interés y tener productos publicados y registrados?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La organización no ha tenido la experiencia de participar de proyectos de investigación e innovación.
          </TableCell>
          <TableCell>
          La organización ha intentado en varias ocasiones participar de proyectos de investigación e innovación pero no ha sido posible por recursos físicos y monetarios.
          </TableCell>
          <TableCell>
          La organización participa de proyectos de investigación e innovación con inversión en efectivo o en especie de manera individual.
          </TableCell>
          <TableCell>
          La organización participa de proyectos de investigación e innovación con inversión en efectivo o en especie en conjunto con actores aliados.
          </TableCell>
          <TableCell>
          La organización participa de proyectos de investigación e innovación con inversión en efectivo o en especie en conjunto con actores aliados que permita desarrollar productos, publicarlos y registrarlos.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
