import React from "react";

const CardLocation = () => {
  return (
    <div className="space-y-8 md:space-y-0 md:flex md:justify-center md:gap-8 ">
      <div className="overflow-hidden rounded-3xl shadow-lg  md:w-1/4 md:h-fit">
        <div className="relative">
          <div className="bg-black absolute top-0 py-2 px-4 rounded-br-lg italic leading-[0]">
            <p className="text-primary text-xs font-semibold">
              Sucursal Villa María
            </p>
            <span className="text-white text-sm font-semibold">
              Ruta Nacional 9 km 554
            </span>
          </div>
          <img src="/media/location.png" alt="foto" className="w-full" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 m-auto flex items-center justify-center ">
            <i className="bx bxs-map text-[60px] mb-10"></i>
          </div>
          <img src="/media/Map.png" alt="foto" className="w-full" />
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl shadow-lg md:w-1/4 md:h-fit">
        <div className="relative">
          <div className="bg-black absolute top-0 py-2 px-4 rounded-br-lg italic leading-[0]">
            <p className="text-primary text-xs font-semibold">
              Sucursal Rio Cuarto
            </p>
            <span className="text-white text-sm font-semibold">
              Juan de Garay 1550,
              <br /> complejo Mercomax, local 910
            </span>
          </div>
          <img src="/media/location.png" alt="foto" className="w-full" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 m-auto flex items-center justify-center ">
            <i className="bx bxs-map text-[60px] mb-10"></i>
          </div>
          <img src="/media/Map2.png" alt="foto" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default CardLocation;
