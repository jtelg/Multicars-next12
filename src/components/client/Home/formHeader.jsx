import React, { useState, useEffect } from "react";
import APIConsultas from "../../../services/consultas";
import { useRouter } from "next/router";

const FormHeader = () => {
  const router = useRouter();
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    let marca = [];
    APIConsultas.marcas.TODO(true).then((repscateg) => {
      marca = repscateg;
      marca.unshift({ idmarca: 0, nombre: "Todos" });
      setMarcas(marca);
    });
  }, []);

  const selectForm = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "idmarca":
        const modelo = await APIConsultas.modelos.GET_SHOP_MARCA(
          e.target.value
        );
        setModelos(modelo);
        break;

      default:
        break;
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(form) !== "{}") {
      const cadenaConsulta = Object.entries(form)
        .map(([clave, valor]) => `${clave}=${valor}`)
        .join("&");
      router.push(`/vehiculos?${cadenaConsulta}`);
    }
  };

  return (
    <div className="p-5 md:w-full md:flex md:items-center justify-center">
      <form
        onSubmit={(e) => handlerSubmit(e)}
        className="bg-black p-4 grid grid-cols-2 md:grid-cols-3 rounded-3xl gap-3 md:gap-5 relative"
      >
        <div className="flex flex-col bg-black md:w-[160px]">
          <label
            htmlFor="marca"
            className="text-white font-bold text-sm bg-black"
          >
            Marca
          </label>
          <select
            name="idmarca"
            id="idmarca"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            {marcas?.map((e) => (
              <option key={e.idmarca} value={e.idmarca}>
                {e.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col bg-black md:w-[160px]">
          <label
            htmlFor="modelo"
            className="text-white font-bold text-sm bg-black"
          >
            Modelo
          </label>
          <select
            name="modelo"
            id="modelo"
            onChange={selectForm}
            className="rounded-xl py-2 px-1 border-black border md:text-sm"
          >
            <option value={0}>Todos</option>
            {modelos?.map((e) => (
              <option key={e.idart} value={e.modelo}>
                {e.modelo}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col bg-black col-span-2 md:col-span-1 md:pt-4">
          <input
            type="submit"
            className="text-white bg-primary h-full rounded-xl text-sm font-bold py-2 md:py-0 uppercase"
            value="Buscar mi auto"
          />
        </div>
      </form>
    </div>
  );
};

export default FormHeader;
