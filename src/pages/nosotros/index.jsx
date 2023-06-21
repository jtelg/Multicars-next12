import React from "react";
import CardLocation from "../../components/client/utils/cardLocation";

const NosotrosPage = () => {
  return (
    <div className="pt-[75px] bg-white">
      <div className="relative h-[65vh]  md:h-[75vh]">
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
        <div className="bg-black relative flex w-fit">
          <h1 className="text-white text-xl md:text-3xl  md:w-[70%] w-full font-bold md:pl-14 pl-5 py-6">
            MULTICARS EMPRESA PERTENECIENTE AL GRUPO LE PARC
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
              contamos con personal altamente capacitado en todas nuestras áreas
              para cumplir en tiempo y forma.
            </span>
          </div>
          <div className="text-center">
            <i className="bx bx-lock-alt text-primary text-8xl"></i>
            <h2 className=" text-3xl font-bold">Seguridad</h2>
            <span className=" text-sm font-medium leading-5">
              Nuestros vehículos usados están peritados bajo estrictos
              estándares de calidad y nuestra gestoría se encarga de realizar la
              papelería necesaria para asegurarnos la calidad.
            </span>
          </div>
        </div>
        <div className="p-5 md:p-12  py-14 space-y-8 md:space-y-0 flex flex-col justify-center md:flex-row md:gap-12 w-full">
          {/* <p className=" text-sm md:text-base font-medium leading-5 md:w-1/2">
          Lorem ipsum dolor sit amet consectetur. Eleifend mauris id proin
          mattis. Tristique amet orci nisi sagittis eu duis et. Facilisis platea
          non enim commodo. Vitae eu ac vitae ut posuere donec. Tempus enim sed
          luctus massa non pharetra. Tincidunt eget varius nec nulla euismod
          integer vestibulum urna nibh. Ut lacus aenean sem nunc mauris bibendum
          nulla. Viverra ornare volutpat massa in. Dolor pretium sociis lobortis
          ac.
        </p> */}
          <iframe
            src="https://www.youtube.com/embed/wNV4C4heTNE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[200px] md:h-[400px] rounded-3xl md:w-1/2"
          ></iframe>
        </div>
        <div className="space-y-4">
          <h1 className="text-black text-4xl font-bold md:text-center">
            ENCONTRANOS
          </h1>
          <div>
            <CardLocation></CardLocation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosotrosPage;
