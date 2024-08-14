import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <div className='flex gap-2 justify-center items-center mr-1'>
      <Image src="/logo-tecnologico.png" width={100} height={100} alt="logo" />
      <h1 className='font-bold text-sm sm:text-xl 
    bg-clip-text hover:cursor-pointer w-full truncate '>Diagnóstico Integral Empresarial</h1>
    </div>

  )
}

export default Logo