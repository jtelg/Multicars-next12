import React, { useState } from "react";
import Swal from "sweetalert2";
import LoadingButton from "../../utils/loadingButton";
import { sendPilotMsg } from "../../../../utils/pilot";
import { useRouter } from "next/router";

const FormularioID = ({ producto }) => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  // const [formulario, setFormulario] = useState({
  //   nombre: "",
  //   telefono: "",
  //   email: "",
  //   mensaje: "",
  // });

  // const onChange = (e) => {
  //   e.preventDefault();
  //   setFormulario({ ...formulario, [e.target.name]: e.target.value });
  // };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (checked) {
      const form = Object.fromEntries(new FormData(e.target));
      form.modelo = `${producto.modelo} ${producto.motor}`;
      form.marca = producto.marca;
      form.anio = producto.fecha;
      form.url = `/vehiculos/${producto.idart}`;
      await sendPilotMsg(form);
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        showConfirmButton: false,
        timer: 1000,
      }).then((_) => {
        route.reload();
        // setLoading(false);
        // console.log(form);
      });
    } else {
      Swal.fire("Debe aceptar las politicas de privacidad");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-start w-full items-center pt-10 bg-black rounded-[26px]  ">
      <h1 className="text-center whitespace-nowrap text-xl font-bold text-[#a7916a] relative">
        COTIZÁ AHORA
      </h1>
      <form
        className=" w-full rounded-[26px]  flex flex-col justify-start items-center pt-4 pb-10 bg-black "
        onSubmit={handlerSubmit}
      >
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 w-full md:px-10 px-8">
          <div className="flex flex-col">
            <label htmlFor="nombre" className="text-white text-sm font-bold">
              Nombre y Apellido
            </label>
            <input
              type="text"
              placeholder="Todos"
              name="nombre"
              id="nombre"
              // value={formulario.nombre}
              // onChange={onChange}
              className=" rounded-lg py-1 md:py-2 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="telefono" className="text-white text-sm font-bold">
              Teléfono
            </label>
            <input
              type="text"
              placeholder="Todos"
              name="telefono"
              id="telefono"
              // value={formulario.telefono}
              // onChange={onChange}
              className=" rounded-lg py-1 md:py-2  px-2 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-sm font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="Todos"
              name="email"
              id="email"
              // value={formulario.email}
              // onChange={onChange}
              className=" rounded-lg py-1 md:py-2 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col md:col-span-3">
            <label htmlFor="nombre" className="text-white text-sm font-bold">
              Mensaje
            </label>
            <textarea
              className="py-1 md:py-2 px-2 text-sm h-32 md:h-40 rounded-lg"
              placeholder="Todas"
              name="descripcion"
              id="descripcion"
              // onChange={onChange}
              // value={formulario.mensaje}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:items-center w-full md:px-10 px-8">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="politicas"
              id="politicas"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="bg-black"
            />
            <label
              htmlFor="politicas"
              className="text-white text-sm font-extralight"
            >
              Acepto las politicas de privacidad
            </label>
          </div>
          <div>
            {/* <input
              type="submit"
              value="Enviar"
              className="bg-primary w-full md:w-auto md:px-16 py-2 md:py-3 text-white text-sm uppercase font-bold rounded-lg"
            /> */}
            <LoadingButton
              onClick={() => null}
              title="Enviar"
              id="buttonFormCotizaAuto"
              type="submit"
              loading={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioID;
