import React from 'react'
import { GetFormById } from '../../../../../actions/form';
import Formbuilder from '@/components/form/disingner/Formbuilder';
import VisitBtn from '@/components/form/forms/VisitBtn';
import FormLinkShare from '@/components/form/forms/FormLinkShare';
import { StatsCard } from '../../page';
import { BookText, CirclePlus, MousePointerClick } from 'lucide-react';

async function FormDetailPage({ params, }: { params: { id: string } }) {
  const { id } = params;
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error('Form no encontrado');
  }

  // Obtiene el total de visitas y envíos, asignando 0 si no hay datos
  const { visits, submissions } = form;

  // Calcula la tasa de envíos
  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  // Calcula la tasa de rebote
  const bounceRate = 100 - submissionRate;

  return (

    <>
      <div className="py-10  border-b border-muted">
        <div className='flex justify-between container'>
          <h1 className="text-4xl font-bold truncate">{form.name}</h1>
          <VisitBtn shareURL={form.shareURL} />
        </div>
        </div>
        <div className="py-4 border-b flex gap-2 items-center justify-between container">
          <div className=" w-full p-2 flex gap-2 items-center justify-between">
            <FormLinkShare shareURL={form.shareURL} />
          </div>
        </div>
        <div className='w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 p-2'>
          <StatsCard
            title="Total visitas"
            icon={<BookText className="text-blue-600" />}
            helperText="Todas las visitas"
            value={visits.toLocaleString() || ""}
            loading={false}
            className="shadow-md shadow-blue-600"
          />

          <StatsCard
            title="Total envíos"
            icon={<CirclePlus className="text-yellow-600" />}
            helperText="Todos los envíos"
            value={submissions.toLocaleString() || ""}
            loading={false}
            className="shadow-md shadow-yellow-600"
          />

          <StatsCard
            title="Tasa de envíos"
            icon={<MousePointerClick className="text-green-600" />}
            helperText="Vistas en envíos de formularios"
            value={submissionRate.toLocaleString() + "%" || ""}
            loading={false}
            className="shadow-md shadow-green-600"
          />

          <StatsCard
            title="Porcentaje de rebotes"
            icon={<CirclePlus className="text-red-600" />}
            helperText="Visitas que te dejan sin interactuar"
            value={submissionRate.toLocaleString() + "%" || ""}
            loading={false}
            className="shadow-md shadow-red-600"
          />
        </div>

        <div className="container p-10" >
          <SubmissionsTable id={form.id} />
        </div>
    
    </>

  )
}

export default FormDetailPage;

function SubmissionsTable({ id }: { id: number }) {


  return (
    <>
      <h1 className='text-2xl font-bold my-4'> Enviados</h1>
    </>
  )
}
