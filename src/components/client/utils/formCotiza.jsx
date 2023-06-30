import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FormCotiza = () => {
  const [checked, setChecked] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (checked) {
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        showConfirmButton: false,
        timer: 1000,
      });
      setFormulario({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
      });
    } else {
      Swal.fire("Debe aceptar las politicas de privacidad");
    }
  };

  return (
    <div className="relative flex flex-col justify-start w-full items-center pt-10 pb-[411px] md:px-[491px]">
      <img
        src="https://file.rendit.io/n/TqOJDBBYL7fcOSXccUKW.svg"
        className="w-[1160px] h-[5.2rem]  min-h-0 min-w-0 absolute top-0 left-0 md:block hidden"
      />
      <img
        src="https://file.rendit.io/n/oiDIfc4bD1beYyuefVjR.svg"
        className=" h-24  min-h-0 min-w-0 absolute top-0 left-0 block md:hidden "
      />
      <h1 className="whitespace-nowrap md:text-4xl text-2xl  font-bold leading-[10px] text-white relative">
        DEJANOS TU CONSULTA
      </h1>
      <form
        className="rounded-br-[26px] w-full md:h-[419px] h-[500px] bg-black absolute top-20 left-0 flex flex-col justify-start gap-px items-center md:pt-12 pt-4 pb-10 "
        onSubmit={handlerSubmit}
      >
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 w-full md:px-16 px-4">
          <div className="flex flex-col">
            <label htmlFor="nombre" className="text-white text-sm font-bold">
              Nombre y Apellido
            </label>
            <input
              type="text"
              placeholder="Todos"
              name="nombre"
              id="nombre"
              value={formulario.nombre}
              onChange={onChange}
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
              value={formulario.telefono}
              onChange={onChange}
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
              value={formulario.email}
              onChange={onChange}
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
              name="mensaje"
              id="nombre"
              onChange={onChange}
              value={formulario.mensaje}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:items-center w-full px-4">
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
            <input
              type="submit"
              value="Enviar"
              className="bg-primary w-full md:w-auto md:px-16 py-2 md:py-3 text-white text-sm uppercase font-bold rounded-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCotiza;
