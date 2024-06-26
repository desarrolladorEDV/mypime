import Image from "next/image";
import { GetFormStats } from "../../../actions/form";
import { CirclePlus } from "lucide-react";
import { ReactNode, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();

  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="total visitas"
        icon={<CirclePlus className="text-blue-600" />}
        helperText="todas las visitas"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />

      <StatsCard
        title="total envios"
        icon={<CirclePlus className="text-yellow-600" />}
        helperText="todas las visitas"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />

      <StatsCard
        title="Tasa de envios"
        icon={<CirclePlus className="text-green-600" />}
        helperText="Vistas en envios de formularios"
        value={data?.submissionRate.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-green-600"
      />

     

      <StatsCard
        title="Porcentaje de rebotes"
        icon={<CirclePlus className="text-red-600" />}
        helperText="Vistas en envios de formularios"
        value={data?.bounceRate.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}: {
  title: string;
  value: string;
  helperText: string;
  className: string;
  loading: boolean;
  icon: ReactNode;
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}
