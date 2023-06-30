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
        <div className="relative flex flex-col justify-between  h-[60vh] md:h-[80vh]">
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
          <div className="md:bg-[url(https://file.rendit.io/n/4PFx5DH9xjlyc87fbhb0.svg)] bg-[url(https://file.rendit.io/n/JNwPK5WsrZ91ckoLl84n.svg)] bg-cover md:self-start flex flex-col justify-center md:pl-16 pl-4 relative md:h-32 h-[5.2rem]  ">
            <div className="whitespace-nowrap md:text-3xl text-xl font-bold uppercase text-white mr-[148px] relative">
              Encontrá tu auto ideal
              <br />
              en menos de un minuto
            </div>
          </div>
          <FormHeader></FormHeader>
        </div>
        {/* componente vehiculos seleccionados */}
        <div className="p-5 md:px-14 py-16 md:py-20 ">
          <h1 className="text-4xl text-center font-bold mb-4">
            VEHÍCULOS SELECCIONADOS
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-4 items-center gap-5">
            {arrProductos.slice(0, 4).map((e) => (
              <CardVehiculos key={e.idart} data={e} />
            ))}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 md:col-span-4 md:mt-8 w-full">
              <button
                onClick={() => router.push("/vende")}
                className="bg-primary text-white py-3 text-sm font-bold  uppercase rounded-lg md:w-1/5 w-full cursor-pointer hover:bg-[#847354] duration-200"
              >
                Quiero vender un auto
              </button>
              <button
                onClick={() => router.push("/vehiculos")}
                className="border-primary border-2 text-primary py-3 text-sm  font-bold  uppercase rounded-lg md:w-1/5 cursor-pointer bg-white hover:bg-[#efefef] duration-200"
              >
                Quiero comprar un auto
              </button>
            </div>
          </div>
        </div>
        {/* FINANCIÁ LA COMPRA DE TU VEHÍCULO */}
        <div className="relative flex flex-col justify-start w-full items-center pt-16 pb-[639px]  text-white">
          <img
            src="https://file.rendit.io/n/tfmjlnpCEwCb2jLVN4Bh.svg"
            alt="fondo2"
            className="w-[1250px]  h-24 min-h-0 min-w-0 absolute top-0 left-0 md:block hidden"
          />
          <img
            src="https://file.rendit.io/n/Lt6DPeANtRO0I941NZ6j.svg"
            alt="fondo2"
            className="w-[335px] h-[5.2rem] min-h-0 min-w-0 absolute top-0 left-0 md:hidden block"
          />
          <h1 className="text-center whitespace-nowrap text-4xl  font-bold leading-[48px]   z-10 md:block hidden">
            FINANCIÁ LA COMPRA DE TU VEHÍCULO
          </h1>
          <h1 className="whitespace-nowrap text-4xl  font-bold leading-[43.2px] text-white  md:hidden block z-10">
            FINANCIÁ LA
            <br />
            COMPRA DE TU
            <br />
            VEHÍCULO
          </h1>

          <div className="rounded-br-[26px] w-full md:h-[669px] h-[790px] bg-black absolute top-20 left-0 flex flex-col justify-start gap-8 items-center md:py-16 py-32 p-4">
            <div className="flex flex-col items-center space-y-4 md:space-y-10 ">
              <p className="font-medium md:w-[40%] m-auto text-center ">
                En Multicars contamos con amplias opciones de financiación para
                que puedas adquirir tu vehículo con un plan de pago a tu medida.
              </p>
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
              <p className="font-medium text-base text-center">
                En nuestra agencia, podés financiar la compra de tu vehículo con
                tu vehículo actual.
              </p>
            </div>
            <div className=" w-full  md:flex md:justify-center">
              <button
                onClick={() => router.push("/financiacion")}
                className="bg-primary text-white w-full md:w-auto  py-4 md:px-6 font-bold  uppercase rounded-lg text-xs  text-center cursor-pointer hover:bg-[#847354] duration-200"
              >
                Conoce nuestras opciones de financiación
              </button>
            </div>
          </div>
        </div>
        {/* encontranos */}
        <div className="md:px-16 px-4 py-24 space-y-4">
          <h1 className="text-black text-4xl font-bold text-center">
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
