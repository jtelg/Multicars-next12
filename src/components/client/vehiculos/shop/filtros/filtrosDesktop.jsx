import React, { useState } from "react";
import FormFiltro from "./formFiltrar";

const FiltrosDesktop = ({ marcas }) => {
  return (
    <div className="md:block hidden border-b-4 border-black pb-4">
      <h1 className=" text-3xl font-bold">FILTROS</h1>
      <div>
        <FormFiltro marcas={marcas}></FormFiltro>
      </div>
    </div>
  );
};

export default FiltrosDesktop;
