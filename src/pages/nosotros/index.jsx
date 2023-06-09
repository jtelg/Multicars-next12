import React from "react";
import CardLocation from "../../components/client/utils/cardLocation";
import Head from "next/head";

const NosotrosPage = () => {
  return (
    <>
      <Head>
        <title>MultiCars | Nosotros</title>
        <meta name="description" content="Autos 0kms & Usados de selección" />
        <link rel="icon" href="/vector.png" />
      </Head>
      <div className="pt-[75px] bg-white">
        <div className="md:bg-[url(/media/portadaFinanciacion.png)] bg-[url(/media/Portadas.png)] bg-cover flex flex-col justify-start relative w-full md:h-[700px] h-[450px] items-center">
          <div className="bg-black relative w-full h-5 " />
          <div className="md:w-[750px] md:bg-[url(https://file.rendit.io/n/vBFWpPXzofi1EoiZrCGd.svg)] bg-[url(https://file.rendit.io/n/8hTFeYMR5KK1JNULLZdm.svg)] bg-cover  self-start flex flex-col justify-center mb-[350px] md:pl-16 relative md:h-36 h-[5.2rem]  pl-4  items-start    w-full ">
            <h1 className="md:text-3xl text-xl  font-bold text-white  relative w-4/5">
              EMPRESA PERTENECIENTE <br />
              AL GRUPO LE PARC
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center py-16 px-5 md:px-12">
          <h1 className=" text-4xl font-bold text-center mb-8">
            ¿PORQUÉ ELEGIR MULTICARS?
          </h1>
          <div className="space-y-8 md:space-y-0 flex flex-col md:grid md:grid-cols-3 md:gap-14 md:py-6 md:px-14">
            <div className="text-center">
              <i className="bx bx-check-shield text-primary text-8xl"></i>
              <h2 className=" text-3xl font-bold">Credibilidad</h2>
              <span className=" text-sm  font-medium leading-5">
                Desde 1999 acompañando a nuestros clientes de la provincia de
                Córdoba para la compra de su vehículo.
              </span>
            </div>
            <div className="text-center">
              <i className="bx bx-check-shield text-primary text-8xl"></i>
              <h2 className=" text-3xl font-bold">Responsabilidad</h2>
              <span className=" text-sm font-medium leading-5">
                Enfocados en una excelencia constante con nuestros clientes,
                contamos con personal altamente capacitado en todas nuestras
                áreas para cumplir en tiempo y forma.
              </span>
            </div>
            <div className="text-center">
              <i className="bx bx-lock-alt text-primary text-8xl"></i>
              <h2 className=" text-3xl font-bold">Seguridad</h2>
              <span className=" text-sm font-medium leading-5">
                Nuestros vehículos usados están peritados bajo estrictos
                estándares de calidad y nuestra gestoría se encarga de realizar
                la papelería necesaria para asegurarnos la calidad.
              </span>
            </div>
          </div>
          <div className="p-5 md:p-12  py-14 space-y-8 md:space-y-0 flex flex-col justify-center md:flex-row md:gap-12 w-full">
            <iframe
              src="https://www.youtube.com/embed/wNV4C4heTNE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[200px] md:h-[400px] rounded-3xl md:w-1/2"
            ></iframe>
          </div>
          <div className="space-y-4 w-full mt-12">
            <h1 className="text-black text-4xl font-bold md:text-center">
              ENCONTRANOS
            </h1>
            <div>
              <CardLocation></CardLocation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NosotrosPage;
