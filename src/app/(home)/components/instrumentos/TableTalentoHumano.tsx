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

export default function TableTalentoHumano() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">TALENTO HUMANO</TableHead>
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
          <TableHead className="w-[300px]">PLANEACION Y ORGANIZACION</TableHead>
        </TableRow>
        <TableRow>
          {/* PRIMERA FILA ESTRUCTURA ORGANIZACIONAL */}
          <TableCell className="font-medium">
          ¿Existe en la empresa un manual de funciones del personal que refleje el perfil de cargos contemplados en la estructura organizacional, que redunde en la productividad y competitivad de la empresa?

          <TableCell>
          ¿En la empresa se maneja un plan de capacitación anual con el respaldo de un presupuesto y sus correspondientes indicadores, que incluyan actualización tecnológica con evaluación y seguimiento con miras a tener personal altamente productivo y que genere valor para la organización?
          </TableCell>
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no cuenta con un manual de funciones, ni perfiles de cargos, ni plan de capacitación



          </TableCell>
          <TableCell>
          La empresa no cuenta con un manual de funciones, posee  perfiles de cargos, no tiene plan de capacitación

          </TableCell>
          <TableCell>
          La empresa cuenta con perfiles de cargos pero no incorporados en un manual de funciones. Capacita a su personal, sin un plan de capacitacion


          </TableCell>
          <TableCell>
          La empresa cuenta con un manual de funciones. Capacita a su personal, con un plan dec capacitacion establecido.


          </TableCell>
          <TableCell>
          La empresa cuenta un manual de funciones en permanente actualizacion y plan de capacitaciones anual con evaluación y seguimiento..



          </TableCell>

        </TableRow>
          <TableRow>
          <TableHead className="w-[300px]">RECLUTAMIENTO, SELECCIÓN Y CONTRATACIÓN</TableHead>
        </TableRow>
        {/* SEGUNDA FILA reclutamiento */}
        <TableRow>
          <TableCell className="font-medium">
          ¿Cuenta la empresa con una política clara y aprobada sobre la forma de reclutar, seleccionar y contratar el personal idóneo para el cargo, considerando en todo momento la proyección tecnológia de la organización, orientada a mejorar constantemente la productividad y la competitividad?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empres no cuenta política clara y aprobada sobre la forma de reclutar, seleccionar y contratar el personal

          </TableCell>
          <TableCell>
          La empresa cuenta con procedimientos definidos en temas de Reclutamiento, Selección y Contratación no incorporta de una política definida

          </TableCell>
          <TableCell>
          La empresa cuenta con un procedimiento  incormporado a una política sin aproación para el proceso de Reclutamiento, Selección, y Contratación

          </TableCell>
          <TableCell>
          La empresa cuenta con un procedimiento incorporado a una política de Reclutamiento, Selección y Contratación pero no tiene criterios definidos para la toma de decisiones

          </TableCell>
          <TableCell>
          La empresa cuenta con un procedimiento establecido con políticas que definen los lineamientos y criterios para tomar decisiones en cuanto al proceso de Reclutamiento, Selección y Contratación 

          </TableCell>
        </TableRow>

        {/* LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableHead className="w-[300px]">DESARROLLO HUMANO</TableHead>
        </TableRow>
        {/* PRIMERA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          ¿Reconoce el potencial individual de cada uno de sus colaboradores considerando su aporte a la productividad y competitividad de la organización?
          <br /><br />¿Posee la empresa y es de conocimiento de los colaboradores una política de ascenso o promoción interna que compense el valor aportado a la organización por cada uno de sus colaboradores?
          <br /><br />¿Existen en la empresa mecanismos para promover la inclusión, diversidad y equidad de género?
          <br /><br /> ¿El reglamento interno de trabajo ha sido aprobado y socializado con todos los colaboradores y se encuentra publicado en lugar visible?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no cuenta con un reglamento interno de trabajo aprobado, ni planes ni políticas para promover el desarrollo del talento humano, ni posee mecanismos claros y socializados de inclusión




          </TableCell>
          <TableCell>
          La empresa no cuenta con un reglamento interno de trabajo aprobado, ni planes, ni políticas para promover el desarrollo del talento humano, aplica criterios de ascenso sin procedimiento aprobado y socializado




          </TableCell>
          <TableCell>
          La empresa cuenta con un reglamento interno de trabajo aprobado,  planes  para promover el desarrollo del talento humano, sin lineamientos establecidos




          </TableCell>
          <TableCell>
          La empresa cuenta con un reglamento interno de trabajo aprobado, planes y políticas para promover el desarrollo del talento humano




          </TableCell>
          <TableCell>
          La empresa cuenta con un reglamento interno de trabajo aprobado, planes y políticas para promover el desarrollo del talento humano socializados




          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="w-[300px]">COMPENSACIÓN, BIENESTAR Y RETENCIÓN</TableHead>
        </TableRow>
        {/* SEGUNDA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          ¿Existe una política de beneficios laborales y compensaciones socializada con los colaboradores que genere personal altamente comprometido con las metas de productividad y competitividad que aporta a la cadena de valor?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no cuenta con política de beneficios y compensaciones laborales con el cumplimiento de los mandatos legales

          </TableCell>
          <TableCell>
          La empresa cuenta con política de beneficios y compensaciones laborales sin aprobación para su aplicación en la organización

          </TableCell>
          
          <TableCell>
          La empresa cumple con los mandatos legales en materia de beneficios y compensaciones, plasmado en una política aprobada

          </TableCell>
          <TableCell>
          La empresa cumple con los mandatos legales en materia de beneficios y compensaciones y posee políticas y planes diseñados y socializados con el personal

          </TableCell>
          <TableCell>
          La empresa cumple con los mandatos legales en materia de beneficios y compensaciones y posee políticas y planes diseñados socializados, en ejecución, con seguimiento constante

          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="w-[300px]">EVALUACIÓN Y DESVINCULACIÓN</TableHead>
        </TableRow>
        {/* tercera FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
          ¿Se realizan evaluaciones de desempeño y son tenidos en cuenta para el diseño de los planes y programas de capacitación considerando la evolución de la productividad y la competividad ajustada con las tecnologías de información y comunicación?
          <br /><br />¿Se realiza evaluación periódica del clima laboral, empleando herramientas tecnológicas?
          <br /><br />¿Existe en la empresa un procedimiento o política de desvinculación y post retiro de sus colaboradores?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
          La empresa no realiza evaluaciones de desempeño, ni adelanta medición del clima laboral y no cuenta con procedimientos para desvinculación



          </TableCell>
          <TableCell>
          La empresa no realiza evaluaciones de desempeño,  adelanta medición del clima laboral y no cuenta con procedimientos para desvinculación



          </TableCell>
          <TableCell>
          La empresa no realiza evaluaciones de desempeño, adelanta medición del clima laboral y posee procedimientos para desvinculación



          </TableCell>
          <TableCell>
          La empresa realiza evaluaciones de desempeño con periodicidad preestablecida, la cual es tenida en cuenta para establecer mecanismos de compensación, cuenta con procedimiento de desvnculación y post retiro



          </TableCell>
          <TableCell>
          La empresa realiza evaluaciones de desempeño anuales para planeación de asignación e incrementos salariales, con seguimietno permanente



          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
