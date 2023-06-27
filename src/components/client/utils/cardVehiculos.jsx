import Link from "next/link";
import React, { useState, useEffect } from "react";
import APIConsultas from "../../../services/consultas";

const CardVehiculos = ({ data }) => {
  const [producto, setProducto] = useState(data);
  const [arr_imgs, setArr_imgs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data.typeCatalog === 0) {
        const imgs = await APIConsultas.Images.SET_IMAGE(data);
        setArr_imgs(imgs);
        data.images = imgs;
      }
      setProducto({
        ...data,
      });
    };
    fetchData();
  }, [data]);
  return (
    <>
      <div className="overflow-hidden rounded-3xl shadow-lg md:max-w-[310px]">
        <Link href={`/vehiculos/${producto?.idart}`}>
          <div className="h-1/2 overflow-hidden">
            <img
              src={arr_imgs[0]}
              alt="foto"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-t-black border-t-4 relative h-1/2 flex flex-col justify-between">
            <div className="p-4">
              <h1 className="text-xl text-black font-bold uppercase">
                {producto?.marca} {producto?.modelo}
              </h1>
              <span className=" font-medium">1.5 5PTAS AUT</span>
              <div className="flex gap-5 font-medium">
                <span>
                  <i className="bx bx-calendar-alt"></i> {producto?.fecha}
                </span>
                <span>
                  <i className="bx bx-car"></i>{" "}
                  {producto?.km.toLocaleString("es-ES")} km
                </span>
              </div>
            </div>
            <div className="bg-black text-white text-end p-3  radius  ">
              <h1 className=" text-[26px] font-bold ">
                ${producto?.precioventa.toLocaleString("es-ES")}
              </h1>
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
