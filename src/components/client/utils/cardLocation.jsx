import React from "react";

const CardLocation = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-start gap-10 relative w-full items-center">
        <div className="shadow-[0px_2px_20px_0px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col justify-start relative md:w-1/2 w-full items-center rounded-[26px]">
          <div className="bg-black relative w-full h-5 " />
          <div className="relative flex flex-col justify-start w-full items-center">
            <img
              src="https://file.rendit.io/n/MohiFmy4WzFBEuHMoqt8.png"
              className="w-[339px] h-[210px] min-h-0 min-w-0 absolute top-0 left-0"
            />
            <div className="bg-[url(https://file.rendit.io/n/PrWGjRSvnp0M02x09yEc.png)] bg-cover  relative flex flex-col justify-start w-full items-start pb-64 px-4">
              <div className="w-[17rem] h-16 bg-[url(https://file.rendit.io/n/F2VykygJuUVIrM0qY8sV.svg)] bg-cover  absolute top-0 left-0 flex flex-col justify-center pl-4 items-start">
                <div className="whitespace-nowrap text-sm  font-bold leading-[21px] text-white mr-16 relative">
                  Ruta Nacional 9 km 554
                </div>
              </div>
              <div className="whitespace-nowrap text-sm  font-bold leading-[21px] text-[#a7916a] relative">
                Sucursal Villa María
              </div>
            </div>
          </div>
          <div className="w-full md:h-[300px] h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.734577413627!2d-63.202448724698264!3d-32.42626714579537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc69ac9ed3f189%3A0x37caf8ec842dbb30!2sMulticars%200km%26Usados%20de%20selecci%C3%B3n!5e0!3m2!1sen!2sar!4v1688135081041!5m2!1sen!2sar"
              allowfullscreen=""
              className="w-full h-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="shadow-[0px_2px_20px_0px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col justify-start relative  md:w-1/2 w-full items-center rounded-[26px]">
          <div className="bg-black relative w-full h-5 " />
          <div className="bg-[url(https://file.rendit.io/n/qQsZF4vruqedVsyE6YmO.png)] bg-cover  flex flex-row justify-between pr-8 relative w-full items-center h-[280px]">
            <div className="self-start relative flex flex-col justify-start w-1/2 items-start pb-12 px-4">
              <div className="w-[22rem] h-20 bg-[url(https://file.rendit.io/n/hZguHoiYNtrtxo1vBZqz.svg)] bg-cover  absolute top-0 left-0 flex flex-col justify-center pl-4 items-start">
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
          </div>
          <div className="w-full md:h-[300px] h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.3403849584247!2d-64.38585302466302!3d-33.12642108099056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d20174da85af9d%3A0xf340c89a4aca2bd!2sMulticars!5e0!3m2!1sen!2sar!4v1688135655662!5m2!1sen!2sar"
              className="w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLocation;
