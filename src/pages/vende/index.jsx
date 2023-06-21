import React from "react";
import Formulario from "../../components/client/vende/formulario";

const VendeAuto = () => {
  return (
    <div className="pt-[75px] bg-white">
      <div className="relative h-[47vh]  md:h-[75vh]">
        <img
          src="/media/PortadaVende.png"
          alt="foto"
          className="md:hidden absolute top-0 left-0 h-full w-full object-cover"
        />
        <img
          src="/media/portadaNosotros.png"
          alt="foto"
          className="hidden md:block absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="bg-black relative flex w-fit">
          <h1 className="text-white text-xl md:text-3xl  md:w-[65%] font-bold pl-5 md:pl-14 pr-20 py-6 uppercase">
            Vendé tu usado en Multicars.
          </h1>
        </div>
      </div>
      <div className="p-5 md:p-12 space-y-8 md:space-y-0 flex flex-col justify-center md:flex-row md:gap-12">
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
      <div className="py-12">
        <div className="bg-black py-10 rounded-br-3xl ">
          <div className="text-center py-4">
            <h1 className="text-white font-bold text-4xl">COTIZÁ TU AUTO</h1>
          </div>
          <span className="text-primary font-bold text-sm md:text-base flex justify-center ">
            Para comenzar contanos cuál es tu auto
          </span>
          <Formulario padding={"md:px-36 px-5"} />
        </div>
      </div>
    </div>
  );
};

export default VendeAuto;
