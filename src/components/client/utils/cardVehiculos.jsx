import Link from "next/link";
import React from "react";

const CardVehiculos = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden rounded-3xl shadow-lg">
        <Link href={`/vehiculos/${data.idart}`}>
          <div>
            <img src="/media/car.png" alt="foto" className="w-full" />
          </div>
          <div className="border-t-black border-t-4 relative  ">
            <div className="p-4">
              <h1 className="text-xl text-black font-bold uppercase">
                {data.marca} {data.modelo}
              </h1>
              <span className=" font-medium">1.5 5PTAS AUT</span>
              <div className="flex gap-5 font-medium">
                <span>
                  <i className="bx bx-calendar-alt"></i> {data.fecha}
                </span>
                <span>
                  <i className="bx bx-car"></i>{" "}
                  {data.km.toLocaleString("es-ES")} km
                </span>
              </div>
            </div>
            <div className="bg-black text-white text-end p-3  radius w-[60%] float-right">
              <h1 className=" text-[26px] font-bold ">$4.500.000</h1>
            </div>
          </div>
        </Link>
      </div>
      <style jsx>{`
        .radius {
          border-radius: 25% 0% 29% 0% / 100% 0% 0% 0%;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default CardVehiculos;
