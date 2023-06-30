import React, { useState, useEffect } from "react";
import APIConsultas from "../../../../../services/consultas";
import { useRouter } from "next/router";
import MultiRangeSlider from "./rangeFilter";

const FormFiltro = ({ marcas, setOpen = false }) => {
  const router = useRouter();
  const [modelos, setModelos] = useState([]);
  const [formulario, setFormulario] = useState();
  const [obj_valores, setObj_valores] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFechas = () => {
      APIConsultas.modelos.VALOR_MAX_MIN().then((resp) => {
        setObj_valores(resp);
        setFormulario({ ...formulario, min: resp.minimo, max: resp.maximo });
        setLoading(false);
      });
      const n = new Date().getFullYear();
      const select = document.getElementById("anio");
      for (let i = n; i >= 2005; i--) {
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
      setOpen && setOpen(false);
    }
  };

  const clearForm = (e) => {
    e.preventDefault();
    setFormulario({});
    setOpen && setOpen(false);
    router.push(`/vehiculos`);
  };

  return (
    <form
      onSubmit={handlerSubmit}
      className={`w-full md:flex md:flex-col mt-4 `}
    >
      <div className="md:flex gap-0 md:gap-8  md:space-y-0 space-y-4">
        <div className="flex flex-col w-full">
          <label htmlFor="tipoUsado" className="text-black font-bold text-sm ">
            Okm/Usado
          </label>
          <select
            name="tipoUsado"
            id="tipoUsado"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            <option value="">- seleccione -</option>
            <option value="0">Todos</option>
            <option value="0km">0 KM</option>
            <option value="Usado">Usado</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="idmarca" className="text-black font-bold text-sm ">
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
          <label htmlFor="modelo" className="text-black font-bold text-sm">
            Modelo
          </label>
          <select
            name="modelo"
            id="modelo"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            <option value="">- seleccione -</option>
            <option value="0">Todos</option>
            {modelos?.map((e, i) => (
              <option key={i} value={e.modelo}>
                {e.modelo}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="anio" className="text-black font-bold text-sm">
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
          <label htmlFor="valor1" className="text-black font-bold text-sm">
            Valor
          </label>
          {loading ? (
            <div className="flex items-center justify-center h-10">
              <i className="bx bx-loader-circle bx-spin"></i>
            </div>
          ) : (
            <MultiRangeSlider
              min={obj_valores?.minimo}
              max={obj_valores?.maximo}
              setFormulario={setFormulario}
              formulario={formulario}
              onChange={({ min, max }) => console.log(min, max)}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-4 md:mt-8 mt-12">
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
