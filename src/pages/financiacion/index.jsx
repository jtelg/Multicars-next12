import React from "react";
import FormCotiza from "../../components/client/utils/formCotiza";

const FinanciacionPage = () => {
  return (
    <div className="pt-[75px] bg-white">
      <div className="relative h-[65vh] md:h-[70vh]">
        <img
          src="/media/Portadas.png"
          alt="foto"
          className="absolute top-0 left-0 h-full w-full object-cover md:hidden"
        />
        <img
          src="/media/portadaFinanciacion.png"
          alt="foto"
          className="absolute top-0 left-0 h-full w-full object-cover hidden md:block"
        />
        <div className="bg-black relative w-fit flex">
          <h1 className="text-white text-xl md:text-3xl font-bold md:pl-14 pl-5 pr-20 py-6 w-[70%] md:w-full">
            OPCIONES DE FINANCIACIÓN
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center py-16 px-5">
        <h1 className=" text-4xl font-bold text-center mb-8">
          VEHÍCULOS SELECCIONADOS
        </h1>
        <div className="space-y-8 md:space-y-0 flex flex-col md:flex-row md:justify-center md:gap-14 ">
          <div className="text-center md:w-1/4">
            <i className="bx bxs-key bx-flip-horizontal text-primary text-8xl"></i>
            <h2 className=" text-3xl font-bold">Creditos bancarios</h2>
            <span className=" text-sm font-medium leading-5">
              Financiá hasta el 50% con créditos de cuotas fijas, en pesos y
              hasta 4 años.
            </span>
          </div>
          <div className="text-center  md:w-1/4">
            <i className="bx bxs-bank text-primary text-8xl"></i>
            <h2 className=" text-3xl font-bold">Llave por llave</h2>
            <span className=" text-sm font-medium leading-5">
              Para que no te quedes a pie, entregas tu usado en parte de pago en
              el momento que retiras tu nuevo auto.
            </span>
          </div>
        </div>
      </div>
      <div className="py-8 pb-14 ">
        <FormCotiza
          titulo="DEJANOS TU CONSULTA"
          mensaje={true}
          paddingX={"36"}
          radius={"none"}
        />
      </div>
    </div>
  );
};

export default FinanciacionPage;
