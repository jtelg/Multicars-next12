import React, { useEffect, useState } from "react";
import ButtonFiltros from "./buttonFiltros";
import FiltrosDesktop from "./filtrosDesktop";
import APIConsultas from "../../../../../services/consultas";

const Filtros = () => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    let marca = [];
    APIConsultas.marcas.TODO(true).then((repscateg) => {
      marca = repscateg;
      marca.unshift({ idmarca: 0, nombre: "Todos" });
      setMarcas(marca);
    });
  }, []);

  return (
    <div>
      <ButtonFiltros marcas={marcas} />
      <FiltrosDesktop marcas={marcas} />
    </div>
  );
};

export default Filtros;
