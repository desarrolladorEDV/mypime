import React from 'react'
import { GetFormContentByUrl } from '../../../../actions/form';
import FormSubmitComponent from '@/components/form/forms/FormSubmitComponent';
import { FormElementInstance } from '@/components/form/disingner/FormElemets';

async function SubmitPage({params}: {params: {formUrl: string}}) {
  
    const form = await GetFormContentByUrl(params.formUrl);
    
    if(!form) {
      throw new Error('Formulario no encontrado');
    }
    const formContent = JSON.parse(form.content) as FormElementInstance[];
  
    return (
    <div>
     <FormSubmitComponent formUrl={params.formUrl} content={formContent} />
    </div>
  )
}

export default SubmitPage
