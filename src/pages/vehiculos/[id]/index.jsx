import Link from "next/link";
import React from "react";
import Carousel from "../../../components/client/vehiculos/id/carousel";
import WppButton from "../../../components/client/vehiculos/id/wppButton";
import FormCotiza from "../../../components/client/utils/formCotiza";

const VehiculoID = () => {
  return (
    <div className="pt-[75px]">
      <div className="bg-black text-white px-5 md:px-12 py-2 border-b border-b-white">
        <Link
          href={"/vehiculos"}
          className="flex items-center font-medium text-xs"
        >
          <i className="bx bx-chevron-left text-2xl"></i> Atras
        </Link>
      </div>
      <div>
        <div className="px-5 md:px-12 bg-black text-primary md:text-white text-2xl font-bold py-4">
          <h1>FORD KA 1.5 5PTAS AUT</h1>
        </div>
        <div className="p-5 md:px-12 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-y-8">
          <Carousel className=" md:row-span-1  h-fit "></Carousel>
          <div className="space-y-4 md:row-span-3 md:pl-12 md:h-auto">
            <div className=" shadow-lg rounded-3xl overflow-hidden">
              <h1 className="bg-black text-white py-2 px-5 text-2xl font-bold">
                Información Técnica
              </h1>
              <ul className="px-5">
                <li className="w-full flex items-center justify-between py-2 border-b ">
                  <span className="font-medium italic">Año</span>
                  <span className="font-bold text-primary italic">2019</span>
                </li>
                <li className="w-full flex items-center justify-between py-2 border-b ">
                  <span className="font-medium italic">Tipo</span>
                  <span className="font-bold text-primary italic">Tipo</span>
                </li>
                <li className="w-full flex items-center justify-between py-2 border-b ">
                  <span className="font-medium italic">Combustible</span>
                  <span className="font-bold text-primary italic">Nafta</span>
                </li>
                <li className="w-full flex items-center justify-between py-2 border-b ">
                  <span className="font-medium italic">Caja</span>
                  <span className="font-bold text-primary italic">Caja</span>
                </li>
                <li className="w-full flex items-center justify-between py-2 border-b ">
                  <span className="font-medium italic">Kilómetros</span>
                  <span className="font-bold text-primary italic">
                    93.000 km
                  </span>
                </li>
                <li className="w-full flex items-center justify-between py-2">
                  <span className="font-medium italic">Motor</span>
                  <span className="font-bold text-primary italic">Motor</span>
                </li>
              </ul>
            </div>
            <div className="shadow-lg rounded-3xl overflow-hidden">
              <h2 className="bg-black px-5 py-2 pl-16 text-white text-2xl font-bold float-right rounded-tl-[50px]">
                $4.500.000
              </h2>
            </div>
            <div className="py-8">
              <WppButton data={"FORD KA 1.5 5PTAS AUT"} />
            </div>
            <div className="shadow-lg rounded-3xl overflow-hidden h- ">
              <h1 className="bg-black text-white py-2 px-5 text-2xl font-bold">
                Descripción
              </h1>
              <p className="p-4 text-sm font-medium md:h-full md:min-h-[200px]">
                Lorem ipsum dolor sit amet consectetur. Eleifend mauris id proin
                mattis. Tristique amet orci nisi sagittis eu duis et. Facilisis
                platea non enim commodo. Vitae eu ac vitae ut posuere donec.
                Tempus enim sed luctus massa non pharetra. Tincidunt eget varius
                nec nulla euismod integer vestibulum urna nibh. Ut lacus aenean
                sem nunc mauris bibendum nulla. Viverra ornare volutpat massa
                in.
              </p>
            </div>
          </div>
          <div className="py-8 md:py-0 md:row-span-2 ">
            <FormCotiza
              titulo="COTIZÁ AHORA"
              mensaje={true}
              paddingX={"12"}
              radius={"3xl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiculoID;
