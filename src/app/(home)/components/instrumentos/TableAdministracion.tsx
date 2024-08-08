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

export default function TableAdministracion() {
  return (
    <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">
                      ESTRUCTURA ORGANIZACIONAL
                    </TableHead>
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
                    La Organización ha definido y documentado formalmente la estructura Organizacional
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    La estructura organización está definida pero no está documentada formalmente
                    </TableCell>
                    <TableCell>
                    La estructura organización está definida pero no está documentada formalmente
                    </TableCell>
                    <TableCell>
                    La estructura organización está definida y documentada formalmente sin socialización ni revisión reciente (más de tres años sin socializar ni revisar)
                    </TableCell>
                    <TableCell>
                    La estructura organización está definida y documentada formalmente con socialización y revisión reciente (máximo dos años)
                    </TableCell>
                    <TableCell>
                    La estructura organización está definida y documentada formalmente con socialización a los nuevos colaboradores y revisión reciente (máximo un año)
                    </TableCell>
                  </TableRow>
                     {/* SEGUNDA FILA ESTRUCTURA ORGANIZACIONAL */}
                  <TableRow>
                    <TableCell className="font-medium">
                    La Organización ha definido e implementado criterios para evaluar el desempeño del personal acordes a los objetivos organizacionales y su estructura
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No  existen criterios formales de desempeño del personal
                    </TableCell>
                    <TableCell>
                    Existen criterios formales para evaluar el desempeño pero no están asociados  a la estructura
                    </TableCell>
                    <TableCell>
                    Existen criterios documentados para evaluar el desempeño asociados a algunos elementos de la estructura
                    </TableCell>
                    <TableCell>
                    Existen criterios documentados para evaluar el desempeño asociados a la estructura e implementados y evaluados al final del periodo
                    </TableCell>
                    <TableCell>
                    Existen criterios documentados para evaluar el desempeño implementados, asociados a la estrategia de la Organización y  evaluados durante el periodo
                    </TableCell>
                  </TableRow>
                  
                  {/* LIDERAZGO Y COMUNICACION */}
                  <TableRow>
                    <TableHead className="w-[300px]">
                      LIDERAZGO Y COMUNICACION
                    </TableHead>
                    
                  </TableRow>
                  {/* PRIMERA FILA LIDERAZGO Y COMUNICACION */}
                  <TableRow> 
                  <TableCell className="font-medium">
                      La organización ha implementado sistemas de comunicación interna que son efectivos, seguros, confiables, claros y precisos. 
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    La información interna fluye mayoritariamente sin control formal en la Organización
                    </TableCell>
                    <TableCell>
                    La Organización dispone de canales formales pero la mayor parte de la información fluye a través de otros canales no controlados
                    </TableCell>
                    <TableCell>
                    La Organización dispone de canales formales que gestionan la mayor parte de la información
                    </TableCell>
                    <TableCell>
                    La Organización dispone de canales formales que gestionan la mayor parte de la información. Dichos canales son seguros y han sido socializados
                    </TableCell>
                    <TableCell>
                    La Organización dispone de canales formales que gestionan la mayor parte de la información. Dichos canales  han sido socializados y están certificados como seguros por entidades independientes. Dichos sistemas son administrados por la Oganización
                    </TableCell>
                  </TableRow>
                  {/* SEGUNDA FILA LIDERAZGO Y COMUNICACION */}
                  <TableRow> 
                  <TableCell className="font-medium">
                  La organización ha implementado procedimientos efectivos para el manejo de información tanto externa como interna, asegurando su seguridad, confidencialidad y precisión.
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No existen responsabilidades ni protocolos para el manejo de información externa
                    </TableCell>
                    <TableCell>
                    Se han asignado responsabilidades formales aunque no hay protocolos documentados para el manejo de información externa
                    </TableCell>
                    <TableCell>
                    Se han asignado responsabilidades formales y hay algunos protocolos y/o canales documentados para el manejo de información externa
                    </TableCell>
                    <TableCell>
                    Se han asignado responsabilidades formales y hay protocolos completos y/o canales documentados para el manejo de información externa
                    </TableCell>
                    <TableCell>
                    Hay control total de las responsabilidades e informacíón externa a través de protocolos y canales identificados y monitoreados
                    </TableCell>
                  </TableRow>
                  {/* tercera FILA LIDERAZGO Y COMUNICACION */}
                  <TableRow> 
                  <TableCell className="font-medium">
                  La Organización ha establecido mecanimos para asegurar el compromiso de la alta dirección en la planeación, ejecución y divulgación de la estrategia organizacional
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No hay mecanismos ni participación activa de la alta dirección en el proceso
                    </TableCell>
                    <TableCell>
                    Hay algunos mecanismos informales. Sin embargo la participación de la alta dirección en el proceso es baja
                    </TableCell>
                    <TableCell>
                    Hay mecanismos efectivos implementados pero  la alta dirección los cumple a través de delegación principalmente
                    </TableCell>
                    <TableCell>
                    Hay mecanismos efectivos implementados y la alta dirección los cumple directamente
                    </TableCell>
                    <TableCell>
                    Hay mecanismos efectivos implementados y la alta dirección los cumple directamente asegurando ser el principal orientador y motivador en la materialización de la estrategia en la Organización
                    </TableCell>
                  </TableRow>

                  {/* cuarta LIDERAZGO Y COMUNICACION */}
                  <TableRow> 
                  <TableCell className="font-medium">
                  La empresa interactua formalmente con sus grupos de interés y hay evidencia de acciones producto de esas interacciones
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No hay grupos de interés identificados
                    </TableCell>
                    <TableCell>
                    Hay algunos grupos de interés y se intercambia información informalmente
                    </TableCell>
                    <TableCell>
                    Hay grupos de interés y existen mecanismos formales de interacción con algunos de ellos. No hay evidencia objetiva de acciones producto de esas interacciones
                    </TableCell>
                    <TableCell>
                    Hay grupos de interés y existen mecanismos formales de interacción con algunos de ellos. Hay evidencia objetiva de acciones producto de esas interacciones
                    </TableCell>
                    <TableCell>
                    Hay amplia evidencia de las acciones de la Organización en la gestión de sus grupos de interés y el efecto de dichas interacciones en el logro de los objetivos propuestos
                    </TableCell>
                  </TableRow>
                  {/* quinta LIDERAZGO Y COMUNICACION */}
                  <TableRow> 
                  <TableCell className="font-medium">
                  La Organización promueve espacios de conversación e interacción a intervalos programados que desarrollen la capacidad de dialogo y estimulo entre el equipo de trabajo?
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No hay espacios de conversación formales
                    </TableCell>
                    <TableCell>
                    No hay espacios de conversación formales pero en ocasiones se propician y ejecutan
                    </TableCell>
                    <TableCell>
                    Hay espacios de conversación formales con temáticas, tiempos y espacios pero no todos se ejecutan
                    </TableCell>
                    <TableCell>
                    Hay espacios de conversación formales ejecutados con temáticas, tiempos y espacios definidos. Los resultados de estas conversaciones producen cambios positivos en la Organización
                    </TableCell>
                    <TableCell>
                    Hay espacios de conversación formales ejecutados con temáticas, tiempos y espacios definidos que aerticulan a toda la Organización. Los resultados de estas conversaciones producen reflexiones y/o cambios significativos en la Organización
                    </TableCell>
                  </TableRow>




                   {/* PLANEACION Y ESTRATEGIA */}
                   <TableRow>
                    <TableHead className="w-[300px]">
                    PLANEACION Y ESTRATEGIA
                    </TableHead>
                    
                  </TableRow>
                  <TableRow> 
                  <TableCell className="font-medium">
                  La Organización ha definido e implementado su plan estratégico organizacional?
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No hay propósitos de corto, mediano y largo plazo definidos formalmente
                    </TableCell>
                    <TableCell>
                    Hay propósitos de corto, mediano y largo plazo definidos formalmente sin planeación clara y efectiva para alcanzarlos
                    </TableCell>
                    <TableCell>
                    Hay propósitos de corto, mediano y largo plazo definidos formalmente y algunos tienen planes definidos para alcanzarlos
                    </TableCell>
                    <TableCell>
                    Hay un plan estratégico implementado con metas, alcances, objetivos e indicadores en el tiempo
                    </TableCell>
                    <TableCell>
                    Hay un plan estratégico con metas, alcances, objetivos e indicadores en el tiempo monitoreado durante el periodo, conocido por el personal e integrado a las plataformas organizacionales
                    </TableCell>
                  </TableRow>


                  <TableRow> 
                  <TableCell className="font-medium">
                      La Organización elabora informes de gestión?
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No se elaboran informes de gestión
                    </TableCell>
                    <TableCell>
                    Se presentan informes independientes sobre algunos aspectos organizacionales
                    </TableCell>
                    <TableCell>
                    Se elabora informe sobre las actividades realizadas y los resultados obtenidos
                    </TableCell>
                    <TableCell>
                    Se elabora y socializa informe de gestión dando cuenta de los planes trazados y los resultados obtenidos. Existen criterios defnidos para su elaboración
                    </TableCell>
                    <TableCell>
                  


                    </TableCell>
                  </TableRow>


                  <TableRow> 
                  <TableCell className="font-medium">
                      La Organización ha definido e implementado su modelo de negocio
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No se ha definido modelo de negocio
                    </TableCell>
                    <TableCell>
                    Se han identificado formalmente algunos elementos del modelo de negocio (propuesta de valor, segmento de clientes, canales, fuentes de ingreso, recursos clave, actividades clave o asociaciones clave)
                    </TableCell>
                    <TableCell>
                    Se han identificado formalmente los elementos del modelo de negocio (propuesta de valor, segmento de clientes, canales, fuentes de ingreso, recursos clave, actividades clave o asociaciones clave) pero no se han implementado formalmente
                    </TableCell>
                    <TableCell>
                    Hay un modelo de negocio identificado, socializado e implementado
                    </TableCell>
                    <TableCell>
                    Hay modelo de negocio implementado con articulación en modelos en otras áreas (finanzas, mercadeo, producción) con evaluaciones periodicas externas e internas
                    </TableCell>
                  </TableRow>
                  <TableRow> 
                  <TableCell className="font-medium">
                  La Organización ha definido e implementado políticas que orientan la gestión?
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No existen políticas formales
                    </TableCell>
                    <TableCell>
                    Se han identificado algunos principios pero no se han documentado
                    </TableCell>
                    <TableCell>
                    Existen políticas formalmente concebidas y algunas están implementadas
                    </TableCell>
                    <TableCell>
                    Se han definido e implementado polpiticas que orientan la gestión en la Organización
                    </TableCell>
                    <TableCell>
                    Se han definido e implementado políticas que orientan la gestión en la Organización. Existen actividades para asegurar su conocimiento, comprensión, aplicación y reflexión  en la Organización
                    </TableCell>
                  </TableRow>

                  <TableRow> 
                  <TableCell className="font-medium">
                      ¿Existen Indicadores asociados a los objetivos de la Organización en todos los niveles (operativo, táctivo y estratégico)?
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                    No existen indicadores
                    </TableCell>
                    <TableCell>
                    Existen algunos indicadores independientes
                    </TableCell>
                    <TableCell>
                    Existen indicadores asociados a la gestión. Algunos se evaluan formalmente
                    </TableCell>
                    <TableCell>
                    Existen indicadores asociados y se evaluan al finalizar el periodo. La evaluación produce cambios positivos en la Organización
                    </TableCell>
                    <TableCell>
                    Existen indicadores asociados y se evaluan durante el periodo. La evaluación produce cambios positivos en la Organización
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
  )
}
