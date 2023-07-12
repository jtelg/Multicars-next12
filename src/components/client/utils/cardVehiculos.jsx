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
      <div className="shadow-[0px_2px_20px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col justify-start relative w-full max-w-full md:max-w-[300px]  items-center rounded-3xl overflow-hidden ">
        <Link href={`/vehiculos/${producto?.slug}`} className="w-full">
          <div className="overflow-hidden">
            <img
              src={arr_imgs ? arr_imgs[0] : "/media/Car.png"}
              alt="foto"
              className=" w-full relative aspect-video object-cover"
            />
          </div>
          <div className="border-t-black border-t-4 relative   flex flex-col justify-between gap-1">
            <div className="p-4 ">
              <h1 className="text-xl text-black font-bold uppercase">
                {producto?.marca} {producto?.modelo}
              </h1>
              <span className=" font-medium">{producto?.motor} 5PTAS AUT</span>
              <div className="self-start flex flex-row justify-start gap-1 relative items-center mb-2">
                <span>
                  <i className="bx bx-calendar-alt"></i> {producto?.fecha}
                </span>
                <span>
                  <i className="bx bx-car"></i>{" "}
                  {producto?.km.toLocaleString("es-ES")} km
                </span>
              </div>
            </div>
            <div className="relative flex flex-col justify-start pb-2 w-full items-end">
              <div className="w-full h-2 bg-black absolute top-10 left-0" />
              <div className="bg-[url(https://file.rendit.io/n/SadWgo0ifFRm0FzLiVpr.svg)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-start w-4/5 items-end pt-2 px-8">
                <div className="text-center text-2xl font-['Montserrat'] font-bold text-white relative">
                  ${producto?.precioventa.toLocaleString("es-ES")}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardVehiculos;
