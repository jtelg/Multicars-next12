import React, { useState, useEffect } from "react";
import APIConsultas from "../../../../../services/consultas";
import { useRouter } from "next/router";

const FormFiltro = ({ marcas }) => {
  const router = useRouter();
  const [modelos, setModelos] = useState([]);
  const [formulario, setFormulario] = useState({});

  useEffect(() => {
    const getFechas = () => {
      const n = new Date().getFullYear();
      const select = document.getElementById("anio");
      for (let i = n; i >= 1995; i--) {
        select.options.add(new Option(i, i));
      }
    };

    getFechas();
  }, []);

  const selectForm = async (e) => {
    let modelo = [];
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "idmarca":
        APIConsultas.modelos.GET_SHOP_MARCA(e.target.value).then((resp) => {
          modelo = resp;
          modelo.unshift({ idmarca: 0, nombre: "Todos" });
          setModelos(modelo);
        });
        break;

      default:
        break;
    }
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

  const clearForm = (e) => {
    e.preventDefault();
    setFormulario({});
    router.push(`/vehiculos`);
  };

  return (
    <form
      onSubmit={handlerSubmit}
      className={`w-full md:flex md:flex-col mt-4 `}
    >
      <div className="md:flex gap-0 md:gap-8  md:space-y-0 space-y-4">
        <div className="flex flex-col w-full">
          <label
            htmlFor="tipoUsado"
            className="text-white md:text-black font-bold text-sm "
          >
            Okm/Usado (no funciona)
          </label>
          <select
            name="tipoUsado"
            id="tipoUsado"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            <option value="">- seleccione -</option>
            <option value="0km">0 KM</option>
            <option value="usado">Usado</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="idmarca"
            className="text-white md:text-black font-bold text-sm "
          >
            Marca
          </label>
          <select
            name="idmarca"
            id="idmarca"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            <option value="">- seleccione -</option>
            {marcas?.map((e) => (
              <option key={e.idmarca} value={e.idmarca}>
                {e.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="modelo"
            className="text-white md:text-black font-bold text-sm"
          >
            Modelo
          </label>
          <select
            name="modelo"
            id="modelo"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            <option value="">- seleccione -</option>
            {modelos?.map((e, i) => (
              <option key={i} value={e.modelo}>
                {e.modelo}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="anio"
            className="text-white md:text-black font-bold text-sm"
          >
            Año
          </label>
          <select
            name="anio"
            id="anio"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            <option value={0}>Todos</option>
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="valor1"
            className="text-white md:text-black font-bold text-sm"
          >
            Valor (no funciona)
          </label>
          <div className="flex items-center justify-between">
            <select
              name="valor1"
              id="valor1"
              onChange={selectForm}
              className="rounded-xl py-2 px-1 border-black border w-[45%] md:text-sm"
            >
              <option value="minimo">Minimo</option>
            </select>
            <b className="text-white md:text-black">-</b>
            <select
              name="valor2"
              id="valor2"
              onChange={selectForm}
              className="rounded-xl py-2 px-1 border-black border w-[45%] md:text-sm"
            >
              <option value="maximo">Maximo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-4 mt-8">
        <input
          type="submit"
          className="bg-primary text-white uppercase py-2 font-bold rounded-lg md:px-8 md:text-xs"
          value="Aplicar filtro"
        />
        <button
          onClick={(e) => clearForm(e)}
          className="text-primary font-semibold italic md:text-xs"
        >
          Limpiar filtro
        </button>
      </div>
    </form>
  );
};

export default FormFiltro;
