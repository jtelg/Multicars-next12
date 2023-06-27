import React, { useState, useEffect } from "react";
import CardVehiculos from "../utils/cardVehiculos";
import FormHeader from "./formHeader";
import CardLocation from "../utils/cardLocation";
import APIConsultas from "../../../services/consultas";
import { useRouter } from "next/router";

const arrImg = [
  { img: "/media/Bancor.png", id: 1 },
  { img: "/media/Frances.png", id: 2 },
  { img: "/media/PSA.png", id: 3 },
  { img: "/media/Santander.png", id: 4 },
  { img: "/media/Stellantis.png", id: 5 },
];

const HomeComponent = () => {
  const router = useRouter();
  const [arrProductos, setArrProductos] = useState([]);
  useEffect(() => {
    APIConsultas.modelos.GET_SHOP(0, 0, 0, 0, 0, 0).then((resprod) => {
      setArrProductos(resprod);
    });
  }, []);

  return (
    <>
      <div className="pt-[75px]">
        {/* componente head */}
        <div className="relative flex flex-col justify-between  h-[70vh] md:h-[80vh]">
          <img
            src="/media/fotoHome.png"
            alt="foto"
            className="md:hidden w-full h-full object-cover absolute top-0 left-0 "
          />
          <img
            src="/media/fotoHomeDesk.png"
            alt="foto"
            className="md:block hidden w-full h-full object-cover absolute top-0 left-0 "
          />
          <div className="bg-black text-white pl-5 md:pl-14 pr-20 py-4 md:py-8 relative ">
            <h1 className="text-xl md:text-3xl  font-bold  uppercase bg-black md:w-[35%]">
              Encontrá tu auto ideal en menos de un minuto
            </h1>
          </div>
          <FormHeader></FormHeader>
        </div>
        {/* componente vehiculos seleccionados */}
        <div className="p-5 md:px-14 py-16 md:py-20 ">
          <h1 className="text-4xl md:text-center font-bold mb-4">
            VEHÍCULOS SELECCIONADOS
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-5">
            {arrProductos.slice(0, 4).map((e) => (
              <CardVehiculos key={e.idart} data={e} />
            ))}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 md:col-span-4 md:mt-8">
              <button
                onClick={() => router.push("/vende")}
                className="bg-primary text-white py-3 text-sm font-bold  uppercase rounded-lg md:w-1/5"
              >
                Quiero vender un auto
              </button>
              <button
                onClick={() => router.push("/vehiculos")}
                className="border-primary border-2 text-primary py-3 text-sm  font-bold  uppercase rounded-lg md:w-1/5"
              >
                Quiero comprar un auto
              </button>
            </div>
          </div>
        </div>
        {/* FINANCIÁ LA COMPRA DE TU VEHÍCULO */}
        <div className="bg-black text-white  p-5 py-10  space-y-8 rounded-br-3xl">
          <div className=" space-y-4 md:text-center">
            <h1 className=" text-4xl font-bold">
              FINANCIÁ LA COMPRA DE TU VEHÍCULO
            </h1>
            <p className="font-medium md:w-[30%] m-auto ">
              En Multicars contamos con amplias opciones de financiación para
              que puedas adquirir tu vehículo con un plan de pago a tu medida.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-10 ">
            <h1 className="text-primary text-xl md:text-3xl flex items-center justify-center gap-1 font-bold">
              <i className="bx bxs-landmark text-3xl md:text-5xl font-light"></i>{" "}
              Créditos Bancarios
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-x-10 md:gap-x-0">
              {arrImg.map((e) => (
                <div key={e.id} className="flex  items-center justify-center">
                  <img src={e.img} alt="foto" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center  md:space-y-10">
            <h1 className="text-primary text-xl md:text-3xl flex items-center justify-center gap-1 font-bold">
              <i className="bx bxs-key bx-flip-horizontal text-3xl md:text-5xl"></i>{" "}
              Sistema llave por llave
            </h1>
            <p className="font-medium text-base">
              En nuestra agencia, podés financiar la compra de tu vehículo con
              tu vehículo actual.
            </p>
          </div>
          <div className=" w-full  md:flex md:justify-center">
            <button
              onClick={() => router.push("/financiacion")}
              className="bg-primary text-white w-full md:w-auto  py-4 md:px-6 font-bold  uppercase rounded-lg text-xs  text-center"
            >
              Conoce nuestras opciones de financiación
            </button>
          </div>
        </div>
        {/* encontranos */}
        <div className="px-5 py-16 space-y-4">
          <h1 className="text-black text-4xl font-bold md:text-center">
            ENCONTRANOS
          </h1>
          <div>
            <CardLocation />
          </div>
        </div>
      </div>
      <style jsx>{`
        .radius {
          border-radius: 10% 0% 29% 0% / 0% 0% 100% 31%;
        }
      `}</style>
    </>
  );
};

export default HomeComponent;
