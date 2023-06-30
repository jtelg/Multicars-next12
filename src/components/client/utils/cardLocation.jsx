import React from "react";

const CardLocation = () => {
  return (
    <>
      <div className="flex flex-row justify-start gap-10 relative w-full items-center">
        <div className="shadow-[0px_2px_20px_0px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col justify-start relative w-1/2 items-center rounded-[26px]">
          <div className="bg-black relative w-full h-5 shrink-0" />
          <div className="relative flex flex-col justify-start w-full items-center">
            <img
              src="https://file.rendit.io/n/MohiFmy4WzFBEuHMoqt8.png"
              className="w-[339px] h-[210px] min-h-0 min-w-0 absolute top-0 left-0"
            />
            <div className="bg-[url(https://file.rendit.io/n/PrWGjRSvnp0M02x09yEc.png)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-start w-full items-start pb-64 px-4">
              <div className="w-[17rem] h-16 bg-[url(https://file.rendit.io/n/F2VykygJuUVIrM0qY8sV.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-0 flex flex-col justify-center pl-4 items-start">
                <div className="whitespace-nowrap text-sm  font-bold leading-[21px] text-white mr-16 relative">
                  Ruta Nacional 9 km 554
                </div>
              </div>
              <div className="whitespace-nowrap text-sm  font-bold leading-[21px] text-[#a7916a] relative">
                Sucursal Villa María
              </div>
            </div>
          </div>
          <div className="bg-[url(https://file.rendit.io/n/9sv0eGCrjUKMp1S3dawe.png)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-full h-[280px] shrink-0 items-center">
            <img
              src="https://file.rendit.io/n/6zolhA8xJlyXpkeKbGzm.svg"
              className="min-h-0 min-w-0 relative w-12"
            />
          </div>
        </div>
        <div className="shadow-[0px_2px_20px_0px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col justify-start relative  w-1/2 items-center rounded-[26px]">
          <div className="bg-black relative w-full h-5 shrink-0" />
          <div className="bg-[url(https://file.rendit.io/n/qQsZF4vruqedVsyE6YmO.png)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-between pr-8 relative w-full items-center">
            <div className="self-start relative flex flex-col justify-start w-1/2 items-start pb-12 px-4">
              <div className="w-[22rem] h-20 bg-[url(https://file.rendit.io/n/hZguHoiYNtrtxo1vBZqz.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-0 flex flex-col justify-center pl-4 items-start">
                <div className="whitespace-nowrap text-sm  font-bold leading-[16.8px] text-white relative">
                  Juan de Garay 1550,
                  <br />
                  complejo Mercomax, local 910
                </div>
              </div>
              <div className="whitespace-nowrap text-sm  font-bold leading-[21px] text-[#a7916a] relative">
                Sucursal Rio Cuarto
              </div>
            </div>
            <div className="bg-[#d9d9d9] relative w-5 shrink-0 h-[280px]" />
          </div>
          <div className="bg-[url(https://file.rendit.io/n/E0QLQ5lMU93CHtMfRNwP.png)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-between relative w-full items-center pl-[295px] pr-8">
            <img
              src="https://file.rendit.io/n/dtGPkNgkTELe2hTESSXb.svg"
              className="min-h-0 min-w-0 relative w-12 shrink-0"
            />
            <div className="bg-[#d9d9d9] relative w-5 shrink-0 h-[280px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLocation;
