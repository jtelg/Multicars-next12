import ServUsos from "../usos";
const functions = {
  EnviaPedido_msg: (nombre) => {
    const pedido = `
    *CONSULTA MULTICARS*
    %0A¡Hola! Quisiera consultar por el siguiente producto : %0A
    %0A*Nombre:* ${nombre}
    %0AEspero tu respuesta...
           `;
    return pedido;
  },
};

const senderFRONT = {
  enviaPedido: (number, nombre) => {
    const pedido = functions.EnviaPedido_msg(nombre);
    ServUsos.SendWhatsapp(number, pedido);
  },
  msgOrderPendingConfirm: (hora) => {
    const msg = `¡¡Tu pedido está confirmado!! 🤩 Va a estar listo a las ${hora}hs. A partir de ese momento depende de la demora del cadete 🛵😊`;
    return msg;
  },
  msgPedidoConfirm: (comentario) => {
    let msg = "¡¡Tu pedido está en camino!! 🛵 ";
    if (comentario) msg += `Observaciones: ${comentario}`;
    return msg;
  },
};

export default senderFRONT;
