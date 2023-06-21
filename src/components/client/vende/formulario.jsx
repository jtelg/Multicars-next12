import React, { useState, useEffect } from "react";
import FormCotiza from "../utils/formCotiza";
import { useRouter } from "next/router";
import APIConsultas from "../../../services/consultas";

const Formulario = ({ padding }) => {
  const router = useRouter();
  const [modelos, setModelos] = useState([]);
  const [formulario, setFormulario] = useState({});
  const [marcas, setMarcas] = useState();

  useEffect(() => {
    const getData = () => {
      let marca = [];
      APIConsultas.marcas.TODO(true).then((repscateg) => {
        marca = repscateg;
        marca.unshift({ idmarca: 0, nombre: "Todos" });
        setMarcas(marca);
      });
      const n = new Date().getFullYear();
      const select = document.getElementById("anio");
      for (let i = n; i >= 1995; i--) {
        select.options.add(new Option(i, i));
      }
    };

    getData();
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
            <label htmlFor="modelo" className="text-white  font-bold text-sm">
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
            <label htmlFor="anio" className="text-white  font-bold text-sm">
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
