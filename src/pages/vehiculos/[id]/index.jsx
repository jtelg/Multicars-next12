import Link from "next/link";
import React, { useState, useEffect } from "react";
import Carousel from "../../../components/client/vehiculos/id/carousel";
import WppButton from "../../../components/client/vehiculos/id/wppButton";
import FormCotiza from "../../../components/client/utils/formCotiza";
import { useRouter } from "next/router";
import APIConsultas from "../../../services/consultas";
import Loading from "../../../components/client/utils/loading";

const VehiculoID = () => {
  const router = useRouter();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [arr_imgs, setArr_imgs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const idprod = router.query.id;
      const dataprod = await APIConsultas.modelos.GET_XID(idprod, true);
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
  }, []);

  return loading ? (
    <Loading></Loading>
  ) : (
    <div className="pt-[75px]">
      <div className="bg-black text-white px-5 md:px-12 py-2 border-b border-b-white">
        <Link
          href={"/vehiculos"}
          className="flex items-center font-medium text-xs"
        >
          <i className="bx bx-chevron-left text-2xl"></i> Atras
        </Link>
      </div>
      <div>
        <div className="px-5 md:px-12 bg-black text-primary md:text-white text-2xl font-bold py-4">
          <h1 className=" uppercase">
            {producto?.marca} {producto?.modelo} {producto?.motor}
          </h1>
        </div>
        <div className="p-5 md:px-12 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-y-8">
          <Carousel
            arr_imgs={arr_imgs}
            className=" md:row-span-1  h-fit "
          ></Carousel>
          <div className="space-y-4 md:row-span-3 md:pl-12 md:h-auto">
            <div className=" shadow-lg rounded-3xl overflow-hidden">
              <h1 className="bg-black text-white py-2 px-5 text-2xl font-bold">
                Información Técnica
              </h1>
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
                    })}{" "}
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
            <div className="shadow-lg rounded-3xl overflow-hidden">
              <h2 className="bg-black px-5 py-2 pl-16 text-white text-2xl font-bold float-right rounded-tl-[50px]">
                $
                {producto?.precioventa?.toLocaleString("es-ES", {
                  useGrouping: true,
                  minimumFractionDigits: 0,
                })}
              </h2>
            </div>
            <div className="py-8">
              <WppButton data={"FORD KA 1.5 5PTAS AUT"} />
            </div>
            <div className="shadow-lg rounded-3xl overflow-hidden h- ">
              <h1 className="bg-black text-white py-2 px-5 text-2xl font-bold">
                Descripción
              </h1>
              <p className="p-4 text-sm font-medium md:h-full md:min-h-[200px]">
                {producto?.descripcion}
              </p>
            </div>
          </div>
          <div className="py-8 md:py-0 md:row-span-2 ">
            <FormCotiza
              titulo="COTIZÁ AHORA"
              mensaje={true}
              paddingX={"12"}
              radius={"3xl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiculoID;
