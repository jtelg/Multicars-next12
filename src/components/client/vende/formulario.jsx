import React, { useState } from "react";
import FormCotiza from "../utils/formCotiza";

const Formulario = () => {
  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    anio: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="p-5 space-y-4 md:space-y-0 gap-4 grid grid-cols-1 md:grid-cols-3 md:px-36 ">
        <div className="flex flex-col">
          <label className="text-white text-sm font-bold">Marca</label>
          <select
            name="marca"
            id="marca"
            onChange={onChange}
            className="rounded-xl py-1 md:py-2 px-1 border"
          >
            <option value="volvo">Todos</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-white text-sm font-bold">Modelo</label>
          <input
            type="text"
            name="modelo"
            value={form.modelo}
            onChange={onChange}
            placeholder="Todos"
            className=" rounded-lg py-1 md:py-2 px-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-sm font-bold">Año</label>
          <select
            name="anio"
            id="anio"
            onChange={onChange}
            className="rounded-xl py-1 md:py-2 px-1 border"
          >
            <option value="volvo">Todos</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </form>
      <span className="text-primary px-5 text-sm md:text-base font-bold md:flex md:w-full md:justify-center">
        Por útlimo necesitamos que ingreses tus datos
      </span>
      <FormCotiza
        data={form}
        mensaje={false}
        paddingX={"36"}
        radius={"none"}
      ></FormCotiza>
    </div>
  );
};

export default Formulario;
