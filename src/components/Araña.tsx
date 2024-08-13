"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { TrendingUp } from 'lucide-react';

type ChartData = {
  identifier: string;
  total: number;
}[];

interface ArañaProps {
  chartData: ChartData;
}

export function Araña({ chartData }: ArañaProps) {
  const chartConfig = {
    desktop: {
      label: "Total",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <>
      <Card>
        <CardHeader className="items-center pb-4">
          <CardTitle>Gráfica de Araña</CardTitle>
          <CardDescription>
            Mostrando el promedio de cada arista de la gráfica
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] w-full"
          >
            <RadarChart data={chartData}>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent indicator="line" labelKey="identifier" />
                }
              />
              <PolarGrid />
              <PolarAngleAxis dataKey="identifier" />
              <PolarRadiusAxis
                angle={30}
                domain={[1, 5]} // Escala de 1 a 5
                tickCount={5} // Número de ticks entre 1 y 5
                stroke="#8884d8"
              />
              <Radar
                dataKey="total"
                fill="var(--color-desktop)"
                fillOpacity={0.6}
              />
              <PolarRadiusAxis angle={60} stroke="8884d8" />
            </RadarChart>
          </ChartContainer>
        </CardContent>
      {/*  <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            January - June 2024
          </div>
        </CardFooter>*/}
      </Card>
    </>
  );
}
