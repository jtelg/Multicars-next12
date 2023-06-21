import React, { useState } from "react";
import ModalView from "../../../utils/modalView";
import FormFiltro from "./formFiltrar";
const ButtonFiltros = ({ marcas }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-full bg-primary text-white py-3 rounded-lg text-sm font-bold"
      >
        FILTRAR
      </button>
      <ModalView open={open} close={() => setOpen(false)}>
        <FormFiltro marcas={marcas} setOpen={setOpen}></FormFiltro>
      </ModalView>
    </div>
  );
};

export default ButtonFiltros;
