import React from "react";
import senderFRONT from "../../../../utils/whatsapp/senderFront";

const WppButton = ({ data }) => {
  const enviarPedido = async (ev, nombre) => {
    ev.preventDefault();
    try {
      senderFRONT.enviaPedido("3534196213", nombre);
    } catch (error) {
      console.error("alta de venta ", error);
    }
  };

  return (
    <button
      onClick={(e) => enviarPedido(e, data)}
      className="bg-green text-white w-full py-2 rounded-lg font-bold text-sm uppercase flex justify-center items-center gap-1"
    >
      Realizanos tu consulta <i className="bx bxl-whatsapp text-2xl"></i>
    </button>
  );
};

export default WppButton;
