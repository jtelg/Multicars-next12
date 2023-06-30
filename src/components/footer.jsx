import React from "react";

const Footer = () => {
  return (
    <div className="relative flex flex-col md:justify-end justify-start pt-20 w-full items-center ">
      <div className="md:w-[1000px] h-20 md:bg-[url(https://file.rendit.io/n/Xhu2gcpuEqtFcOLRmuKH.svg)] bg-[url(https://file.rendit.io/n/gb4aEj6vCRigUBo9o6aZ.svg)] bg-cover md:absolute relative top-0 md:left-[calc(100%-1000px)] flex flex-col md:justify-end justify-center md:items-start items-end md:pl-48 pl-28 py-4 self-end  pr-12  w-5/6  shrink-0 ">
        <img
          src="/media/logoMulti.png"
          className=" md:mr-[627px] relative"
          alt="fondo2"
        />
      </div>
      <div className="bg-black relative flex flex-col justify-start gap-16 w-full shrink-0 items-center pt-10 pb-16">
        <div className="self-end flex md:flex-row flex-col justify-center md:gap-24 gap-12 relative items-center w-full">
          <div className="flex flex-col justify-center items-center text-center text-white">
            <h2 className=" text-sm text-primary font-semibold">
              Sucursal Rio Cuarto
            </h2>

            <p className=" font-semibold ">
              Juan de Garay 1550, <br /> complejo Mercomax, local 910
            </p>
            <p className=" font-semibold flex items-center gap-1">
              <i className="bx bxs-phone text-2xl"></i> +54 3584088000
            </p>

            <p className=" font-semibold flex items-center gap-1">
              <i className="bx bxl-whatsapp text-2xl"></i> +54 3585095578
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center text-white">
            <h2 className=" text-sm text-primary font-semibold">
              Sucursal Villa María
            </h2>
            <p className=" font-semibold">Ruta Nacional 9 km 554</p>
            <br />

            <p className=" font-semibold flex items-center gap-1">
              <i className="bx bxs-phone text-2xl"></i> +54 3534116037
            </p>

            <p className=" font-semibold flex items-center gap-1">
              <i className="bx bxl-whatsapp text-2xl"></i> +54 3534116037
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 text-primary w-full">
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
    </div>
  );
};

export default Footer;
