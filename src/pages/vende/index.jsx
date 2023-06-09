import React from "react";
import Formulario from "../../components/client/vende/formulario";
import Head from "next/head";

const VendeAuto = () => {
  return (
    <>
      <Head>
        <title>MultiCars | Vende tu auto</title>
        <meta name="description" content="Autos 0kms & Usados de selección" />
        <link rel="icon" href="/vector.png" />
      </Head>
      <div className="pt-[75px] bg-white">
        <div className="flex flex-col justify-start relative w-full items-center">
          <div className="bg-black relative w-full h-5" />
          <div className="md:bg-[url(/media/portadaNosotros.png)] bg-[url(/media/PortadaVende.png)] bg-cover flex flex-col justify-start relative w-full md:h-[600px] h-[450px]  items-start  ">
            <div className="md:bg-[url(https://file.rendit.io/n/pXRiIiuAUbsoLUueb6CT.svg)] bg-[url(https://file.rendit.io/n/IYF7rKcZSyH4tqRcJ8K7.svg)] bg-cover flex flex-col md:justify-start justify-center  relative md:h-32 h-24  pt-6 pb-8 md:pl-16  pl-4   items-start">
              <h1 className="whitespace-nowrap md:text-3xl text-xl  font-bold uppercase text-white mr-[145px] relative">
                Vendé tu usado <br />
                en Multicars.
              </h1>
            </div>
          </div>
        </div>
        <div className="p-5 md:p-12 space-y-8 md:space-y-0 flex flex-col justify-center md:flex-row md:gap-12">
          <iframe
            src="https://www.youtube.com/embed/wNV4C4heTNE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[200px] md:h-[400px] rounded-3xl md:w-1/2"
          ></iframe>
        </div>

        <div className="relative flex flex-col justify-start w-full items-center pt-10 md:pb-[414px] pb-[660px] md:px-[560px] my-20">
          <img
            src="https://file.rendit.io/n/VZJqvXFXEwmgHdsywDhX.svg"
            alt="fondo2"
            className="w-[1150px] h-[5.2rem] min-h-0 min-w-0 absolute top-0 left-0 md:block hidden"
          />
          <img
            src="https://file.rendit.io/n/5kBOjudBoAUcdKbDTLJr.svg"
            alt="fondo2"
            className="w-[405px] h-22 min-h-0 min-w-0 absolute top-0 left-0 md:hidden block"
          />
          <h1 className="whitespace-nowrap text-4xl  font-bold leading-[10px] text-white relative">
            COTIZÁ TU AUTO
          </h1>
          <div className="rounded-br-[26px] w-full md:h-[419px] h-[660px] bg-black absolute top-20 left-0 flex flex-col justify-start  items-center md:pt-12 pt-4 pb-10 ">
            <span className="text-primary font-bold text-sm md:text-base flex justify-center mb-4 ">
              Para comenzar contanos cuál es tu auto
            </span>

            <Formulario padding={"md:px-0 px-5"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VendeAuto;
