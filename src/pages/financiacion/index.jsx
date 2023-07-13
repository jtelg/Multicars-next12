import React from "react";
import FormContacto from "../../components/client/utils/formContacto";
import Head from "next/head";

const FinanciacionPage = () => {
  return (
    <>
      <Head>
        <title>MultiCars | Financiacion</title>
        <meta name="description" content="Autos 0kms & Usados de selección" />
        <link rel="icon" href="/vector.png" />
      </Head>
      <div className="pt-[75px] bg-white">
        <div className="md:bg-[url(/media/portadaFinanciacion.png)] bg-[url(/media/Portadas.png)] bg-cover  flex flex-col justify-between pb-5 relative w-full md:h-[600px] h-[500px] items-center">
          <div className="relative flex flex-col justify-start pb-24 w-full items-center">
            <div className="md:w-[700px] md:h-24 h-[5.7rem] md:bg-[url(https://file.rendit.io/n/nQm4sUltux3P4kANJfzo.svg)] bg-[url(https://file.rendit.io/n/kVlhyhld6rKH3YUq51UW.svg)] bg-cover absolute  top-5 left-0 flex flex-col justify-center md:pl-16 pl-4 items-start self-start">
              <h1 className="whitespace-nowrap md:text-3xl text-xl  font-bold uppercase text-white mr-32 relative">
                Opciones de <br className="md:hidden" /> financiación
              </h1>
            </div>
            <div className="bg-black relative w-full h-5 shrink-0" />
          </div>
        </div>

        <div className="flex flex-col items-center py-16 px-5">
          <h1 className=" md:text-4xl text-2xl  font-bold text-center mb-8">
            CONOCE NUESTRAS OPCIONES DE FINANCIACION
          </h1>
          <div className="space-y-8 md:space-y-0 flex flex-col md:flex-row md:justify-center md:gap-14 ">
            <div className="text-center md:w-1/4">
              <i className="bx bxs-key bx-flip-horizontal text-primary text-8xl"></i>
              <h2 className=" text-2xl font-bold">Creditos bancarios</h2>
              <span className=" text-sm font-medium leading-5">
                Financiá hasta el 50% con créditos de cuotas fijas, en pesos y
                hasta 4 años.
              </span>
            </div>
            <div className="text-center  md:w-1/4">
              <i className="bx bxs-bank text-primary text-8xl"></i>
              <h2 className=" text-2xl font-bold">Llave por llave</h2>
              <span className=" text-sm font-medium leading-5">
                Para que no te quedes a pie, entregas tu usado en parte de pago
                en el momento que retiras tu nuevo auto.
              </span>
            </div>
          </div>
        </div>
        <div className="py-8 pb-36 ">
          <FormContacto />
        </div>
      </div>
    </>
  );
};

export default FinanciacionPage;
