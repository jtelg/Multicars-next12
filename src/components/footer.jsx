import React from "react";

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-end pt-20 w-full items-center">
      <div className="w-[1000px] h-20 bg-[url(https://file.rendit.io/n/Xhu2gcpuEqtFcOLRmuKH.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-[calc(100%-1000px)] flex flex-col justify-end items-start pl-48 py-4">
        <img
          src="https://file.rendit.io/n/ZkJIYGcTdUFdbBcXWa2i.svg"
          className="min-h-0 min-w-0 mr-[627px] relative"
        />
      </div>
      <div className="bg-black relative flex flex-col justify-start gap-16 w-full h-[328px] shrink-0 items-center pt-10 pb-16">
        <div className="self-end flex flex-row justify-center gap-24 relative items-center w-full">
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
    // <div className="bg-black  text-white px-12 pt-8 pb-20 flex flex-col gap-8 relative">
    //   <div className="w-[1000px] h-20 bg-[url(https://file.rendit.io/n/wqPkyqZQi5GuB76bpGcn.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-[440px] flex flex-col justify-end items-start pl-48 py-4">
    //     <img
    //       src="/media/logomulti.png"
    //       alt="foto"
    //       className="min-h-0 min-w-0 mr-[627px] relative"
    //     />
    //   </div>
    //   <div className=" md:flex-row  md:items-start bg-black relative flex flex-col justify-start gap-16 w-full h-[328px] shrink-0 items-center pt-10 pb-16 pr-[446px]">
    //     <div className="flex flex-col justify-center items-center text-center">
    //       <h2 className=" text-sm text-primary font-semibold">
    //         Sucursal Rio Cuarto
    //       </h2>
    //       <p className="italic font-semibold ">
    //         Juan de Garay 1550,
    //         <br /> complejo Mercomax, local 910
    //       </p>
    //       <p className="italic font-semibold flex items-center gap-1">
    //         <i className="bx bxs-phone text-2xl"></i> +54 3584088000
    //       </p>
    //       <p className="italic font-semibold flex items-center gap-1">
    //         <i className="bx bxl-whatsapp text-2xl"></i> +54 3585095578
    //       </p>
    //     </div>
    //     <div className="flex flex-col justify-center items-center text-center">
    //       <h2 className=" text-sm text-primary font-semibold">
    //         Sucursal Villa María
    //       </h2>
    //       <p className="italic font-semibold">Ruta Nacional 9 km 554</p>
    //       <p className="italic font-semibold flex items-center gap-1">
    //         <i className="bx bxs-phone text-2xl"></i> +54 3534116037
    //       </p>
    //       <p className="italic font-semibold flex items-center gap-1">
    //         <i className="bx bxl-whatsapp text-2xl"></i> +54 3534116037
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center gap-8 text-primary">
    //     <a
    //       target="_blank"
    //       href={"https://www.instagram.com/multicars.vm/"}
    //       rel="noopener noreferrer"
    //     >
    //       <i className="bx bxl-instagram text-5xl"></i>
    //     </a>
    //     <a
    //       target="_blank"
    //       href={"https://www.facebook.com/multicarsvm"}
    //       rel="noopener noreferrer"
    //     >
    //       <i className="bx bxl-facebook text-5xl"></i>
    //     </a>
    //   </div>
    // </div>
  );
};

export default Footer;
