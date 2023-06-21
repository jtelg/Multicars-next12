import React from "react";
import ShopPage from "../../components/client/vehiculos/shop";
import Filtros from "../../components/client/vehiculos/shop/filtros";

const VehiculosPage = () => {
  return (
    <>
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
