import React from "react";
import FormCotiza from "../../components/client/utils/formCotiza";

const FinanciacionPage = () => {
  return (
    <div className="pt-[75px] bg-white">
      <div className="relative h-[55vh] md:h-[70vh]">
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
        <div className="bg-black relative">
          <h1 className="text-white text-xl md:text-3xl font-bold pl-5 pr-20 py-4">
            OPCIONES DE FINANCIACIÓN
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center py-16 px-5">
        <h1 className=" text-4xl font-bold text-center mb-8">
          ¿PORQUÉ ELEGIR MULTI CARS?
        </h1>
        <div className="space-y-8 md:space-y-0 flex flex-col md:flex-row md:justify-center md:gap-12 ">
          <div className="text-center md:w-1/4">
            <i className="bx bxs-hand text-white bg-primary p-8 rounded-full"></i>
            <h2 className=" text-3xl font-bold">Creditos bancarios</h2>
            <span className=" text-sm font-medium leading-5">
              Lorem ipsum dolor sit amet consectetur. Eleifend mauris id proin
              mattis. Tristique amet orci nisi.
            </span>
          </div>
          <div className="text-center  md:w-1/4">
            <i className="bx bxs-hand text-white bg-primary p-8 rounded-full"></i>
            <h2 className=" text-3xl font-bold">Llave por llave</h2>
            <span className=" text-sm font-medium leading-5">
              Lorem ipsum dolor sit amet consectetur. Eleifend mauris id proin
              mattis. Tristique amet orci nisi.
            </span>
          </div>
        </div>
      </div>
      <div className="py-8 ">
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
