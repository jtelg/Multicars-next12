import React, { useState, useEffect } from "react";
import FormCotiza from "../utils/formCotiza";
import { useRouter } from "next/router";

const Formulario = ({ padding }) => {
  const router = useRouter();
  const [formulario, setFormulario] = useState({});

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

  const onChange = (e) => {
    e.preventDefault();
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(formulario) !== "{}") {
      const cadenaConsulta = Object.entries(formulario)
        .map(([clave, valor]) => `${clave}=${valor}`)
        .join("&");
      router.push(`/vehiculos?${cadenaConsulta}`);
    }
  };
  return (
    <div>
      <form
        onSubmit={handlerSubmit}
        className={`w-full md:flex md:flex-col ${padding} pb-8 `}
      >
        <div className="md:flex gap-0 md:gap-8  md:space-y-0 space-y-4">
          <div className="flex flex-col w-full">
            <label htmlFor="idmarca" className="text-white  font-bold text-sm ">
              Marca
            </label>
            <input
              type="text"
              name="idmarca"
              id="idmarca"
              placeholder="Marca del vehiculo"
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              className="rounded-xl py-2 px-1 border-black border md:text-sm"
            >
              <option value={0}>Todos</option>
            </select>
          </div>
        </div>
      </form>

      <span className="text-primary px-5 text-sm md:text-base font-bold md:flex md:w-full md:justify-center">
        Por útlimo necesitamos que ingreses tus datos
      </span>
      <FormCotiza
        data={formulario}
        mensaje={false}
        paddingX={"36"}
        radius={"none"}
      ></FormCotiza>
    </div>
  );
};

export default Formulario;
