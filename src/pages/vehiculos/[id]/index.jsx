import Link from "next/link";
import React, { useState, useEffect } from "react";
import Carousel from "../../../components/client/vehiculos/id/carousel";
import WppButton from "../../../components/client/vehiculos/id/wppButton";
import { useRouter } from "next/router";
import APIConsultas from "../../../services/consultas";
import Loading from "../../../components/client/utils/loading";
import Head from "next/head";
import FormularioID from "../../../components/client/vehiculos/id/formulario";

const VehiculoID = () => {
  const router = useRouter();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [arr_imgs, setArr_imgs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const idprod = router.query.id;
      const dataprod = await APIConsultas.modelos.GET_XSLUG(idprod, true);
      if (dataprod) {
        if (dataprod.typeCatalog === 0) {
          const imgs = await APIConsultas.Images.SET_IMAGE(dataprod);
          setArr_imgs(imgs);
          dataprod.images = imgs;
          setProducto(dataprod);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [router]);

  return (
    <>
      <Head>
        <title>
          MultiCars | {producto?.marca} {producto?.modelo}
        </title>
        <meta name="description" content="Autos 0kms & Usados de selección" />
        <link rel="icon" href="/vector.png" />
      </Head>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="pt-[75px]">
          <div className="bg-black text-white px-5 md:px-12 py-2">
            <Link
              href={"/vehiculos"}
              className="flex items-center font-medium text-xs"
            >
              <i className="bx bx-chevron-left text-2xl"></i> Atras
            </Link>
          </div>
          <div className="md:bg-[url(https://file.rendit.io/n/cd8AJgARACZLGzRsnBQ7.svg)] bg-cover  flex flex-col justify-center md:pl-16 pl-8 relative w-[90%] md:h-[4.9rem] items-start bg-[url(https://file.rendit.io/n/RUhu03ja6zBgctkeJ3R9.svg)]  bg-50%_50% bg-blend-normal mr-2 h-[3.2rem] shrink-0 px-4 py-2">
            <h1 className="whitespace-nowrap text-2xl font-bold text-white relative uppercase">
              {producto?.marca} {producto?.modelo} {producto?.motor}
            </h1>
          </div>

          <div>
            <div className="p-5 md:px-12 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8">
              <Carousel
                arr_imgs={arr_imgs}
                className=" md:row-span-1  h-fit "
              ></Carousel>
              <div className="space-y-4 md:row-span-3 md:pl-12 md:h-fit">
                <div className=" shadow-lg rounded-3xl overflow-hidden">
                  <div className="relative flex flex-col justify-end pt-2 w-full items-start">
                    <div className="w-full h-2 bg-black absolute top-0 left-0" />
                    <div className="bg-[url(https://file.rendit.io/n/N4ub6mZqhrO1zNMZOsgK.svg)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-start items-start pt-px pb-[0.4rem] px-5">
                      <h1 className="text-center whitespace-nowrap text-2xl  font-bold text-white mr-10 relative">
                        Información Técnica
                      </h1>
                    </div>
                  </div>
                  <ul className="px-5">
                    <li className="w-full flex items-center justify-between py-2 border-b ">
                      <span className="font-medium italic">Año</span>
                      <span className="font-bold text-primary italic">
                        {producto?.fecha}
                      </span>
                    </li>
                    <li className="w-full flex items-center justify-between py-2 border-b ">
                      <span className="font-medium italic">Tipo</span>
                      <span className="font-bold text-primary italic">
                        {producto?.categoria}
                      </span>
                    </li>
                    <li className="w-full flex items-center justify-between py-2 border-b ">
                      <span className="font-medium italic">Combustible</span>
                      <span className="font-bold text-primary italic">
                        {producto?.combustible}
                      </span>
                    </li>
                    <li className="w-full flex items-center justify-between py-2 border-b ">
                      <span className="font-medium italic">Caja</span>
                      <span className="font-bold text-primary italic">
                        {producto?.caja}
                      </span>
                    </li>
                    <li className="w-full flex items-center justify-between py-2 border-b ">
                      <span className="font-medium italic">Kilómetros</span>
                      <span className="font-bold text-primary italic">
                        {producto?.km?.toLocaleString("es-ES", {
                          useGrouping: true,
                          minimumFractionDigits: 0,
                        })}
                        km
                      </span>
                    </li>
                    <li className="w-full flex items-center justify-between py-2">
                      <span className="font-medium italic">Motor</span>
                      <span className="font-bold text-primary italic">
                        {producto?.motor}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="shadow-[0px_2px_20px_0px_rgba(0,_0,_0,_0.1)] bg-white relative flex flex-col justify-start pb-2 w-full items-end rounded-3xl overflow-hidden">
                  <div className="w-full h-2 bg-black absolute top-10 left-0" />
                  <div className="bg-[url(https://file.rendit.io/n/6t400tEZfWGaeOnT9iBv.svg)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-end items-end pt-2 px-12">
                    <h2 className="text-center text-2xl font-['Montserrat'] font-bold text-white ml-4 relative">
                      $4.500.000
                    </h2>
                  </div>
                </div>

                <div className="py-8">
                  <WppButton data={"FORD KA 1.5 5PTAS AUT"} />
                </div>
                <div className="shadow-[0px_2px_20px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col justify-start gap-5 relative w-full h-[400px] items-center py-2 rounded-3xl overflow-hidden">
                  <div className="w-full h-[0.6rem] bg-black absolute top-0 left-0" />
                  <div className="self-start relative flex flex-col justify-start w-[240px] items-start pb-2 px-5">
                    <img
                      src="https://file.rendit.io/n/kRrDi0fTgrFhBp5PitZO.svg"
                      alt="fondo3"
                      className="w-[240px] h-10 min-h-0 min-w-0 absolute top-px left-0"
                    />
                    <div className="text-center text-2xl font-['Montserrat'] font-bold text-white relative">
                      Descripción
                    </div>
                  </div>
                  <div className="text-sm font-['Montserrat'] font-medium leading-[21px] text-black relative w-5/6">
                    Lorem ipsum dolor sit amet consectetur. Eleifend mauris id
                    proin mattis. Tristique amet orci nisi sagittis eu duis et.
                    Facilisis platea non enim commodo. Vitae eu ac vitae ut
                    posuere donec. Tempus enim sed luctus massa non pharetra.
                    Tincidunt eget varius nec nulla euismod integer vestibulum
                    urna nibh. Ut lacus aenean sem nunc mauris bibendum nulla.
                    Viverra ornare volutpat massa in.
                  </div>
                </div>
              </div>
              <div className="py-8 md:py-0 md:row-span-2 h-fit ">
                <FormularioID producto={producto} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VehiculoID;
