import React from "react";
import ShopPage from "../../components/client/vehiculos/shop";
import Filtros from "../../components/client/vehiculos/shop/filtros";
import Head from "next/head";

const VehiculosPage = () => {
  return (
    <>
      <Head>
        <title>MultiCars | Vehiculos</title>
        <meta name="description" content="Autos 0kms & Usados de selección" />
        <link rel="icon" href="/vector.png" />
      </Head>
      <div className="pt-[75px] ">
        <div className="p-5 md:px-12 space-y-5 pb-16">
          <Filtros />
          <ShopPage />
        </div>
      </div>
    </>
  );
};

export default VehiculosPage;
