"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const chartData = [
  { name: 'Pregunta 1', value: 4 },
  { name: 'Pregunta 2', value: 3 },
  { name: 'Pregunta 3', value: 5 },
  { name: 'Pregunta 4', value: 2 },
  { name: 'Pregunta 5', value: 4 },
];

export function Araña() {
  return (
    <Card className="mt-8">
      <CardHeader className="items-center pb-4">
        <CardTitle>Gráfica de Araña</CardTitle>
        <CardDescription>Promedio de respuestas por pregunta</CardDescription>
      </CardHeader>
      <CardContent className="pb-0 flex justify-center">
        <RadarChart outerRadius={90} width={500} height={400} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <Radar name="Respuestas" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Respuestas promedio para cada pregunta del formulario
      </CardFooter>
    </Card>
  );
}
