import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return  <div className={` bg-background`}>
  <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full flex">
      {/* Columna del formulario de inicio de sesión */}
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">MY PYME</h1>      
          <SignIn/>
      </div>
      
      {/* Columna de la imagen y texto promocional */}
      <div className="hidden md:block w-1/2 bg-sky-500 p-8 text-white relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/img/tecno.jpeg')"}}></div>
        <div className="relative z-10">
        </div>
      </div>
    </div>
  </div>
</div>
}