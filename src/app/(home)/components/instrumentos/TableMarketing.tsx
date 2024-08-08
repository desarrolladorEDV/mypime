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

export default function TableMarketing() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">MARKETING</TableHead>
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
          <TableHead className="w-[300px]">SERVICIO</TableHead>
        </TableRow>
        <TableRow>
          {/* PRIMERA FILA ESTRUCTURA ORGANIZACIONAL */}
          <TableCell className="font-medium">
            ¿Se realizan mediciones del nivel de satisfacción y expectativas de
            los clientes?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            No se realizan mediciones del nivel de satisfacción y expectativas
            de los clientes. No hay sistemas ni procesos en lugar para evaluar
            la experiencia del cliente.
          </TableCell>
          <TableCell>
            Se realizan mediciones muy limitadas o esporádicas del nivel de
            satisfacción y expectativas de los clientes, y los resultados no se
            utilizan de manera efectiva para tomar decisiones o mejorar los
            servicios.
          </TableCell>
          <TableCell>
            Se llevan a cabo mediciones regulares del nivel de satisfacción y
            expectativas de los clientes, pero los métodos o herramientas pueden
            ser básicos y los resultados no siempre se utilizan de manera
            consistente para la mejora.
          </TableCell>
          <TableCell>
            La empresa realiza mediciones sistemáticas y bien definidas del
            nivel de satisfacción y expectativas de los clientes. Los resultados
            se utilizan de manera efectiva para hacer ajustes y mejoras en los
            productos o servicios.
          </TableCell>
          <TableCell>
            Se implementan mediciones avanzadas y continuas del nivel de
            satisfacción y expectativas de los clientes. La empresa utiliza
            estos datos de manera proactiva para tomar decisiones estratégicas,
            mejorar continuamente los productos o servicios y superar las
            expectativas del cliente.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="w-[300px]">PRODUCTO</TableHead>
        </TableRow>
        {/* SEGUNDA FILA reclutamiento */}
        <TableRow>
          <TableCell className="font-medium">
            ¿Cuales son los bienes y/o servicios que oferta la empresa y a que
            tipo de mercado se direcciona?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa no tiene una definición clara de los bienes y/o servicios
            que oferta, ni del tipo de mercado al que se dirige. No hay
            información disponible sobre la oferta y la segmentación del
            mercado.
          </TableCell>
          <TableCell>
            La empresa tiene una definición limitada o vaga de los bienes y/o
            servicios que oferta y del tipo de mercado al que se dirige. La
            información disponible es incompleta o poco clara, lo que dificulta
            entender la propuesta de valor y el mercado objetivo.
          </TableCell>
          <TableCell>
            La empresa define claramente los bienes y/o servicios que oferta y
            el tipo de mercado al que se dirige, pero la información podría
            beneficiarse de mayor detalle y precisión. La oferta es entendible,
            pero la segmentación del mercado podría ser más específica.
          </TableCell>
          <TableCell>
            La empresa tiene una definición detallada y clara de los bienes y/o
            servicios que oferta y del tipo de mercado al que se dirige. La
            información está bien documentada y es fácil de entender, lo que
            permite una comprensión adecuada de la propuesta de valor y el
            mercado objetivo.
          </TableCell>
          <TableCell>
            La empresa proporciona una definición exhaustiva y precisa de los
            bienes y/o servicios que oferta y del tipo de mercado al que se
            dirige. La información está bien estructurada y claramente
            comunicada, permitiendo una comprensión completa de la oferta y de
            cómo se alinea con las necesidades y características específicas del
            mercado objetivo.
          </TableCell>
        </TableRow>

        {/* SEGUNDA FILA reclutamiento */}
        <TableRow>
          <TableCell className="font-medium">
            ¿Existe algun seguimiento para medir la calidad, del producto?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            No se realiza ningún seguimiento para medir la calidad del producto.
            No hay sistemas, procesos ni controles implementados para evaluar o
            asegurar la calidad del producto
          </TableCell>
          <TableCell>
            Se realiza un seguimiento muy limitado o esporádico de la calidad
            del producto. Los métodos utilizados son básicos y no se aplican de
            manera consistente, lo que resulta en una evaluación poco fiable de
            la calidad.
          </TableCell>
          <TableCell>
            Existe un sistema básico para medir la calidad del producto. El
            seguimiento se realiza de manera regular, pero los procesos pueden
            no ser completamente rigurosos o detallados, y la información puede
            no ser utilizada de manera óptima para la mejora continua.
          </TableCell>
          <TableCell>
            La empresa tiene un sistema bien definido y efectivo para medir la
            calidad del producto. El seguimiento es regular y detallado, y la
            información obtenida se utiliza de manera consistente para hacer
            mejoras y ajustes en el producto.
          </TableCell>
          <TableCell>
            la empresa implementa un sistema integral y avanzado para medir la
            calidad del producto. El seguimiento es continuo, riguroso y
            detallado. Los resultados se analizan minuciosamente y se utilizan
            proactivamente para la mejora continua, garantizando altos
            estándares de calidad en todos los aspectos del producto.
          </TableCell>
        </TableRow>

        {/* SEGUNDA FILA reclutamiento */}
        <TableRow>
          <TableCell className="font-medium">
            ¿Existe algun seguimiento para medir la innovación del producto?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            No se realiza ningún seguimiento para medir la innovación del
            producto. No hay sistemas, procesos ni indicadores para evaluar o
            gestionar la innovación.
          </TableCell>
          <TableCell>
            Se realiza un seguimiento muy limitado o esporádico de la innovación
            del producto. Los métodos utilizados son rudimentarios y no se
            aplican de manera consistente, lo que resulta en una evaluación poco
            sistemática de la innovación.
          </TableCell>
          <TableCell>
            Existe un sistema básico para medir la innovación del producto. El
            seguimiento se realiza de manera regular, pero puede carecer de
            detalles o ser insuficiente en términos de alcance y aplicación, y
            la información puede no ser completamente utilizada para impulsar la
            innovación.
          </TableCell>
          <TableCell>
            La empresa tiene un sistema bien definido y efectivo para medir la
            innovación del producto. El seguimiento es regular y abarca diversos
            aspectos de la innovación, y la información obtenida se utiliza para
            hacer mejoras y fomentar nuevas ideas y desarrollos.
          </TableCell>
          <TableCell>
            La empresa implementa un sistema integral y avanzado para medir la
            innovación del producto. El seguimiento es continuo, detallado y
            riguroso. Los resultados se utilizan de manera estratégica para
            impulsar y gestionar la innovación de manera efectiva, asegurando un
            flujo constante de mejoras e innovaciones en el producto.
          </TableCell>
        </TableRow>

        {/* SEGUNDA FILA reclutamiento */}
        <TableRow>
          <TableCell className="font-medium">
            ¿Existe algun seguimiento para medir la satisfacción del producto?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            No se realiza ningún seguimiento para medir la satisfacción del
            producto. No hay sistemas, procesos ni herramientas en lugar para
            recolectar o analizar la satisfacción del cliente.
          </TableCell>
          <TableCell>
            Se realiza un seguimiento muy limitado o esporádico de la
            satisfacción del producto. Los métodos de recolección y análisis de
            datos son básicos y no se aplican de manera consistente, lo que
            limita la capacidad para entender y responder a la satisfacción del
            cliente.
          </TableCell>
          <TableCell>
            Existe un sistema básico para medir la satisfacción del producto. El
            seguimiento se realiza regularmente, pero los métodos pueden ser
            sencillos y la información recolectada no siempre se utiliza de
            manera óptima para realizar mejoras en el producto.
          </TableCell>
          <TableCell>
            La empresa tiene un sistema bien definido y efectivo para medir la
            satisfacción del producto. El seguimiento es regular y detallado, y
            la información obtenida se utiliza de manera efectiva para realizar
            mejoras y ajustes en el producto, satisfaciendo las expectativas de
            los clientes.
          </TableCell>
          <TableCell>
            La empresa implementa un sistema integral y avanzado para medir la
            satisfacción del producto. El seguimiento es continuo, minucioso y
            riguroso. Los resultados se analizan exhaustivamente y se utilizan
            de manera proactiva para impulsar mejoras significativas en el
            producto y exceder las expectativas de los clientes.
          </TableCell>
        </TableRow>

        {/* SEGUNDA FILA reclutamiento */}
        <TableRow>
          <TableCell className="font-medium">
            ¿Existe algun seguimiento para medir la lealtad del producto?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            No se realiza ningún seguimiento para medir la lealtad del producto.
            No hay sistemas ni procesos en lugar para recolectar o analizar
            datos sobre la lealtad del cliente hacia el producto.
          </TableCell>
          <TableCell>
            Se realiza un seguimiento muy limitado o esporádico de la lealtad
            del producto. Los métodos utilizados son rudimentarios y no se
            aplican de manera consistente, lo que dificulta obtener una visión
            clara de la lealtad del cliente.
          </TableCell>
          <TableCell>
            Existe un sistema básico para medir la lealtad del producto. El
            seguimiento se realiza regularmente, pero los métodos pueden ser
            sencillos y la información obtenida no siempre se utiliza de manera
            óptima para mejorar la lealtad del cliente.
          </TableCell>
          <TableCell>
            a empresa tiene un sistema bien definido y efectivo para medir la
            lealtad del producto. El seguimiento es detallado y sistemático, y
            la información recolectada se utiliza de manera efectiva para hacer
            ajustes y fortalecer la lealtad del cliente hacia el producto.
          </TableCell>
          <TableCell>
            La empresa implementa un sistema integral y avanzado para medir la
            lealtad del producto. El seguimiento es continuo, riguroso y basado
            en análisis profundos. Los resultados se utilizan de manera
            estratégica para fomentar la lealtad del cliente y adaptar el
            producto a sus necesidades y preferencias cambiantes.
          </TableCell>
        </TableRow>

        {/* LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableHead className="w-[300px]">PRECIO</TableHead>
        </TableRow>
        {/* PRIMERA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
            ¿Los precios ofertados por la empresa se derterminan por que
            variables?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            Los precios ofertados por la empresa no se determinan basándose en
            variables específicas. No hay un proceso o criterio claro para fijar
            los precios, y parecen ser arbitrarios o inconsistentes.
          </TableCell>
          <TableCell>
            Los precios ofertados por la empresa se determinan de manera muy
            limitada por algunas variables, pero los criterios utilizados son
            básicos y no están claramente definidos. La metodología para fijar
            precios es poco transparente y puede variar significativamente.
          </TableCell>
          <TableCell>
            Los precios ofertados por la empresa se determinan por algunas
            variables clave, pero la metodología puede no ser completamente
            detallada o estructurada. Existen criterios básicos para la fijación
            de precios, aunque podrían beneficiarse de una mayor claridad y
            consistencia.
          </TableCell>
          <TableCell>
            Los precios ofertados por la empresa se determinan por variables
            bien definidas y claras, como costos de producción, competencia, y
            demanda del mercado. La metodología para fijar precios es
            estructurada y aplicada de manera consistente, con una comprensión
            clara de los factores que influyen en los precios.
          </TableCell>
          <TableCell>
            Los precios ofertados por la empresa se determinan por una serie
            completa y detallada de variables, incluyendo costos, competencia,
            demanda, segmentación del mercado, y valor percibido por el cliente.
            La metodología para fijar precios es rigurosa, transparente, y se
            ajusta regularmente en función de análisis profundos y cambios en el
            mercado.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="w-[300px]">PLAZA</TableHead>
        </TableRow>
        {/* SEGUNDA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
            ¿La empresa tiene una estrategia para determinar sus canales de
            distribución eficiente y efectivos para llegar a su mercado?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa no tiene una estrategia definida para determinar sus
            canales de distribución. Los canales utilizados son ad hoc y no
            están alineados con las necesidades del mercado ni con la eficiencia
            operativa.
          </TableCell>
          <TableCell>
            La empresa tiene una estrategia limitada para determinar sus canales
            de distribución, pero los métodos utilizados son básicos y no se
            aplican de manera sistemática. Los canales pueden no ser los más
            efectivos o eficientes para llegar al mercado objetivo.
          </TableCell>

          <TableCell>
            La empresa cuenta con una estrategia básica para determinar sus
            canales de distribución. La estrategia es aplicable de manera
            regular, pero podría beneficiarse de una mayor precisión y
            optimización para mejorar la eficiencia y efectividad en el alcance
            del mercado.
          </TableCell>
          <TableCell>
            La empresa tiene una estrategia bien definida para determinar sus
            canales de distribución. Los canales seleccionados son eficientes y
            efectivos, y la estrategia considera factores clave como el perfil
            del mercado, costos, y accesibilidad. La implementación de la
            estrategia es coherente y se ajusta según sea necesario.
          </TableCell>
          <TableCell>
            La empresa implementa una estrategia integral y avanzada para
            determinar sus canales de distribución. La estrategia está basada en
            un análisis detallado de factores como las necesidades del mercado,
            la competencia, y la eficiencia operativa. Los canales son altamente
            eficientes y efectivos, y la estrategia se revisa y ajusta
            continuamente para optimizar el alcance y la cobertura del mercado.
          </TableCell>
        </TableRow>

        {/* SEGUNDA FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
            ¿La empresa tiene una estrategia de Merchandising que garanticen la
            disponibilidad y eficiencia en la entrega de los productos?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa no tiene una estrategia de merchandising definida para
            garantizar la disponibilidad y eficiencia en la entrega de los
            productos. No hay procesos ni políticas en lugar para manejar estos
            aspectos de manera efectiva.
          </TableCell>
          <TableCell>
            La empresa tiene una estrategia de merchandising muy limitada o
            básica. La estrategia puede no estar claramente definida ni ser
            aplicada de manera consistente, lo que resulta en problemas
            frecuentes con la disponibilidad de productos y la eficiencia en la
            entrega.
          </TableCell>

          <TableCell>
            La empresa tiene una estrategia de merchandising básica para
            garantizar la disponibilidad y eficiencia en la entrega de los
            productos. La estrategia está en funcionamiento, pero puede carecer
            de algunos detalles o ajustes que podrían mejorar la eficiencia y
            asegurar una mayor disponibilidad.
          </TableCell>
          <TableCell>
            La empresa cuenta con una estrategia de merchandising bien definida
            y efectiva. La estrategia garantiza una buena disponibilidad de
            productos y una entrega eficiente. Se aplican procesos estructurados
            y se realizan ajustes según sea necesario para mantener altos
            niveles de eficiencia y disponibilidad.
          </TableCell>
          <TableCell>
            La empresa implementa una estrategia de merchandising integral y
            avanzada que asegura de manera óptima la disponibilidad y eficiencia
            en la entrega de productos. La estrategia está basada en análisis
            detallados y ajustes proactivos, y se revisa continuamente para
            maximizar la efectividad y la satisfacción del cliente.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableHead className="w-[300px]">PROMOCION</TableHead>
        </TableRow>
        {/* tercera FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
            ¿ La empresa utiliza estretagias de comunicacion integradas ATL y
            BTL?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa no utiliza estrategias de comunicación integradas ATL y
            BTL. Las campañas de comunicación se manejan de manera aislada y no
            hay coordinación ni conocimiento de las las actividades ATL y BTL.
          </TableCell>
          <TableCell>
            La empresa utiliza estrategias de comunicación ATL y BTL de manera
            muy limitada. Hay alguna integración entre las dos, pero las
            campañas no están bien coordinadas y la comunicación es
            inconsistente.
          </TableCell>
          <TableCell>
            La empresa utiliza estrategias de comunicación ATL y BTL, pero la
            integración entre ellas es básica. Existen esfuerzos para coordinar
            las campañas, pero la implementación y el alineamiento entre las
            estrategias podrían mejorar.
          </TableCell>
          <TableCell>
            La empresa emplea estrategias de comunicación ATL y BTL que están
            bien integradas. Las campañas están coordinadas y alineadas, lo que
            permite una comunicación efectiva a través de diferentes canales y
            un mensaje coherente.
          </TableCell>
          <TableCell>
            La empresa utiliza estrategias de comunicación ATL y BTL de manera
            completamente integrada y avanzada. Las campañas están perfectamente
            alineadas y coordinadas, con una comunicación fluida y coherente que
            maximiza el impacto y la efectividad en todos los canales
            utilizados.
          </TableCell>
        </TableRow>

        {/* tercera FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
            ¿La empresa mide y evalúa regularmente la efectividad de sus
            actividades de promoción?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa no mide ni evalúa la efectividad de sus actividades de
            promoción. No se utilizan métodos o herramientas para analizar el
            impacto de las promociones, y no hay retroalimentación sobre su
            éxito.
          </TableCell>
          <TableCell>
            La empresa mide y evalúa la efectividad de sus actividades de
            promoción de manera muy limitada. Los métodos de evaluación son
            básicos y esporádicos, y la información obtenida no se utiliza de
            manera efectiva para mejorar las futuras actividades de promoción.
          </TableCell>
          <TableCell>
            La empresa mide y evalúa la efectividad de sus actividades de
            promoción de manera regular, pero los métodos utilizados pueden ser
            simples y la evaluación no siempre es completa. La información
            recolectada es utilizada de manera ocasional para hacer ajustes en
            las promociones.
          </TableCell>
          <TableCell>
            La empresa tiene un sistema establecido para medir y evaluar la
            efectividad de sus actividades de promoción. La evaluación se
            realiza regularmente y de manera detallada, y la información
            obtenida se utiliza de manera efectiva para optimizar futuras
            promociones y maximizar su impacto.
          </TableCell>
          <TableCell>
            La empresa implementa un sistema integral y avanzado para medir y
            evaluar la efectividad de sus actividades de promoción. La
            evaluación es continua, rigurosa y basada en análisis profundos. Los
            resultados se utilizan de manera proactiva para perfeccionar las
            estrategias de promoción y garantizar la máxima efectividad en el
            alcance de los objetivos.
          </TableCell>
        </TableRow>

        {/* tercera FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
            ¿La empresa mide y evalúa regularmente la efectividad de sus
            actividades de promoción?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa no tiene un plan de ventas establecido. No hay un
            documento formal ni una estrategia definida para guiar las
            actividades de ventas.
          </TableCell>
          <TableCell>
            La empresa tiene un plan de ventas muy básico o incompleto. El plan
            es poco detallado y carece de directrices claras o metas específicas
            para las actividades de ventas.
          </TableCell>
          <TableCell>
            La empresa tiene un plan de ventas que cubre los aspectos
            esenciales, pero puede carecer de detalle en algunos elementos clave
            como objetivos específicos, tácticas detalladas, o análisis de
            mercado. El plan es funcional pero puede ser mejorado.
          </TableCell>
          <TableCell>
            La empresa tiene un plan de ventas bien definido y detallado. El
            plan incluye objetivos claros, estrategias y tácticas específicas,
            así como un análisis de mercado adecuado. Se utiliza regularmente
            para guiar las actividades de ventas y ajustar las estrategias según
            sea necesario.
          </TableCell>
          <TableCell>
            La empresa cuenta con un plan de ventas integral y avanzado. El plan
            está exhaustivamente detallado, con objetivos ambiciosos,
            estrategias bien elaboradas, tácticas precisas y un análisis
            exhaustivo del mercado. El plan es proactivamente revisado y
            ajustado con base en el desempeño y las condiciones cambiantes del
            mercado, y se implementa de manera efectiva para lograr resultados
            óptimos.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableHead className="w-[300px]">GESTIÓN DEL MARKETING</TableHead>
        </TableRow>

        {/* tercera FILA LIDERAZGO Y COMUNICACION */}
        <TableRow>
          <TableCell className="font-medium">
            ¿Se dispone un plan estratégico de marketing para la empresa?
          </TableCell>
          <TableCell></TableCell>
          <TableCell>
            La empresa no dispone de un plan estratégico de marketing. No hay
            una estrategia formalizada ni un documento que guíe las actividades
            de marketing.
          </TableCell>
          <TableCell>
            La empresa tiene un plan estratégico de marketing muy básico o
            incompleto. El plan es poco detallado y carece de elementos clave
            como objetivos específicos, estrategias claras o análisis del
            mercado.
          </TableCell>
          <TableCell>
          La empresa tiene un plan estratégico de marketing que cubre los aspectos principales. El plan incluye algunos objetivos, estrategias y tácticas, pero podría beneficiarse de mayor profundidad y detalle para abordar todas las áreas relevantes del marketing.
          </TableCell>
          <TableCell>
          La empresa cuenta con un plan estratégico de marketing bien definido y estructurado. El plan incluye objetivos claros, estrategias detalladas y tácticas específicas, junto con un análisis adecuado del mercado. Se utiliza regularmente para guiar las decisiones de marketing y ajustar las acciones según los resultados.
          </TableCell>
          <TableCell>
          La empresa dispone de un plan estratégico de marketing integral y avanzado. El plan está exhaustivamente detallado, con objetivos ambiciosos, estrategias bien fundamentadas, tácticas precisas y un análisis profundo del mercado. El plan se revisa y actualiza proactivamente en función de los cambios del mercado y del desempeño de las actividades de marketing, y guía eficazmente todas las iniciativas de marketing para alcanzar resultados óptimos.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
