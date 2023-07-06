import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { sendPilotMsg } from "../../../utils/pilot";
import { useRouter } from "next/router";
import LoadingButton from "../utils/loadingButton";

const Formulario = ({ padding }) => {
  // cotiza tu auto
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  useEffect(() => {
    const getData = () => {
      const n = new Date().getFullYear();
      const select = document.getElementById("anio");
      for (let i = n; i >= 2005; i--) {
        select.options.add(new Option(i, i));
      }
    };

    getData();
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (checked) {
      const form = Object.fromEntries(new FormData(e.target));
      form.url = "/vende";
      await sendPilotMsg(form);
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        showConfirmButton: false,
        timer: 1000,
      }).then((_) => {
        route.reload();
      });
    } else {
      Swal.fire("Debe aceptar las politicas de privacidad");
      setLoading(false);
    }
  };
  return (
    <div className="w-full md:px-16 px-4">
      <form
        onSubmit={handlerSubmit}
        className={`w-full md:flex md:flex-col ${padding} pb-8 `}
      >
        <div className="md:flex gap-0 md:gap-8  md:space-y-0 space-y-4 mb-8">
          <div className="flex flex-col w-full">
            <label htmlFor="marca" className="text-white  font-bold text-sm ">
              Marca
            </label>
            <input
              type="text"
              name="marca"
              id="marca"
              placeholder="Marca del vehiculo"
              className="rounded-xl py-2 px-1 border-black border md:text-sm"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="modelo" className="text-white  font-bold text-sm">
              Modelo
            </label>
            <input
              type="text"
              name="modelo"
              id="modelo"
              placeholder="Modelo del vehiculo"
              className="rounded-xl py-2 px-1 border-black border md:text-sm"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="anio" className="text-white  font-bold text-sm">
              Año
            </label>
            <select
              name="anio"
              id="anio"
              className="rounded-xl py-2 px-1 border-black border md:text-sm"
            >
              <option value={0}>Todos</option>
            </select>
          </div>
        </div>

        <span className="text-primary md:px-5 text-sm  md:text-base font-bold md:flex md:w-full md:justify-center text-center">
          Por útlimo necesitamos que ingreses tus datos
        </span>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-4 ">
          <div className="flex flex-col">
            <label htmlFor="nombre" className="text-white text-sm font-bold">
              Nombre y Apellido
            </label>
            <input
              type="text"
              placeholder="Todos"
              name="nombre"
              id="nombre"
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
              className=" rounded-lg py-1 md:py-2 px-2 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:items-center w-full">
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
            <LoadingButton
              onClick={() => null}
              title="Enviar"
              id="buttonFormContacto"
              type="submit"
              loading={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
