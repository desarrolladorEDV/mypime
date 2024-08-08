import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TableAdministracion from "../(home)/components/instrumentos/TableAdministracion";
import TableTalentoHumano from "../(home)/components/instrumentos/TableTalentoHumano";
import TableGestionFinanciera from "../(home)/components/instrumentos/TableGestionFinanciera";
import TableProduccionOperaciones from "../(home)/components/instrumentos/TableProduccionOperaciones";
import TableInnovacion from "../(home)/components/instrumentos/TableInnovacion";
import TableMarketing from "../(home)/components/instrumentos/TableMarketing";

import { Overview } from "./components/overview";
import { RecentSales } from "./components/recent-sales";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Suspense } from "react";
import { GetFormStats } from "../../../actions/form";
import { StatsCard } from "./formularios/page";
import { BookText, CirclePlus, MousePointerClick } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function Home() {
  return (
    <>
      <div className=" flex-col md:flex justify-center items center border rounded">
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* TITULO DE LA PAGINA */}
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button>Download</Button>
            </div>
          </div>
          {/* TABS */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-auto lg:inline-flex md:grid-cols-3 grid-cols-2 gap-4 justify-start h-auto">
              <TabsTrigger value="overview">Home</TabsTrigger>
              <TabsTrigger value="analytics">
                Descript. Administracion
              </TabsTrigger>
              <TabsTrigger value="TalentoHumano">Descript. TH</TabsTrigger>
              <TabsTrigger value="GestionFinanciera">
                Descript. Contabilidad y F.
              </TabsTrigger>

              <TabsTrigger value="ProduccionOperaciones">
                Descript. Operaciones
              </TabsTrigger>
              <TabsTrigger value="Innovacion">
                Descript.Innovacion
              </TabsTrigger>
              <TabsTrigger value="Marketing">
                Descript.Marketing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              {/* CARDS */}
              {/* CARDS */}
                {/* Suspense para manejar la carga asincrónica de las estadísticas */}
                <Suspense fallback={<StatsCards loading={true} />}>
                  <CardStatsWrapper />
                </Suspense>
          

              {/* CHARTS Y RECENT SALES */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* CHART O GRAFICA */}
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>

                {/* RECIENT SALES */}
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Descript. Administracion */}
            <TabsContent value="analytics" className="space-y-4">
              {/* CARDS */}

              <TableAdministracion />
            </TabsContent>
            {/* Descript. TalentoHumano */}
            <TabsContent value="TalentoHumano" className="space-y-4">
              {/* CARDS */}

              <TableTalentoHumano />
            </TabsContent>
            {/* Descript. TableGestionFinanciera */}
            <TabsContent value="GestionFinanciera" className="space-y-4">
              {/* CARDS */}

              <TableGestionFinanciera />
            </TabsContent>
            {/* Descript. TableProduccionOperaciones */}
            <TabsContent value="ProduccionOperaciones" className="space-y-4">
              {/* CARDS */}

              <TableProduccionOperaciones />
            </TabsContent>
            {/* Descript. TableInnovacion */}
            <TabsContent value="Innovacion" className="space-y-4">
              {/* CARDS */}

              <TableInnovacion />
            </TabsContent>
            {/* Descript. TableMarketing */}
            <TabsContent value="Marketing" className="space-y-4">
              {/* CARDS */}

              <TableMarketing />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();

  return <StatsCards loading={false} data={stats} />;
}

// Propiedades del componente StatsCard
interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visitas"
        icon={<BookText className="h-4 w-4" />}
        helperText="Todas las visitas"
        value={data?.visits?.toLocaleString() || ""}
        loading={loading}
        className=""
      />

      <StatsCard
        title="Total envíos"
        icon={<CirclePlus className="h-4 w-4" />}
        helperText="Todos los envíos"
        value={data?.submissions?.toLocaleString() || ""}
        loading={loading}
        className=""
      />

      <StatsCard
        title="Tasa de envíos"
        icon={<MousePointerClick className="h-4 w-4" />}
        helperText="Vistas en envíos de formularios"
        value={data?.submissionRate?.toLocaleString() + "%" || ""}
        loading={loading}
        className=""
      />

      <StatsCard
        title="Porcentaje de rebotes"
        icon={<CirclePlus className="h-4 w-4" />}
        helperText="Visitas que te dejan sin interactuar"
        value={data?.submissionRate?.toLocaleString() + "%" || ""}
        loading={loading}
        className=""
      />
    </div>
  );
}