import React from "react";

const Footer = () => {
  return (
    <div className="bg-black  text-white px-12 pt-8 pb-20 flex flex-col gap-8">
      <div className="w-full pb-10 md:flex md:justify-center">
        <img
          src="/media/logomulti.png"
          alt="foto"
          className="w-4/6 md:w-auto float-right"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center md:items-start">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className=" text-sm text-primary font-semibold">
            Sucursal Rio Cuarto
          </h2>
          <p className="italic font-semibold ">
            Juan de Garay 1550,
            <br /> complejo Mercomax, local 910
          </p>
          <p className="italic font-semibold flex items-center gap-1">
            <i className="bx bxs-phone text-2xl"></i> +54 3584088000
          </p>
          <p className="italic font-semibold flex items-center gap-1">
            <i className="bx bxl-whatsapp text-2xl"></i> +54 3585095578
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className=" text-sm text-primary font-semibold">
            Sucursal Villa María
          </h2>
          <p className="italic font-semibold">Ruta Nacional 9 km 554</p>
          <p className="italic font-semibold flex items-center gap-1">
            <i className="bx bxs-phone text-2xl"></i> +54 3534116037
          </p>
          <p className="italic font-semibold flex items-center gap-1">
            <i className="bx bxl-whatsapp text-2xl"></i> +54 3534116037
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-8 text-primary">
        <a
          target="_blank"
          href={"https://www.instagram.com/multicars.vm/"}
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram text-5xl"></i>
        </a>
        <a
          target="_blank"
          href={"https://www.facebook.com/multicarsvm"}
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook text-5xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
