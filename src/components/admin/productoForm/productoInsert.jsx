import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import APIConsultas from "../../../services/consultas";
import ModalList from "../../client/utils/modalList";
import ModalView from "../../client/utils/modalView";

import slugify from "slugify";

const ProductoUpdate = (props) => {
  const [arr_categs, setArr_categs] = useState([]);
  const [arr_marcas, setArr_marcas] = useState([]);
  const [slug, setSlug] = useState("");
  const [bndModal, setBandera] = useState({
    categ: false,
    subc: false,
    marca: false,
  });

  const [formulario, setFormulario] = useState({
    idart: "",
    idsubc: "",
    subc: "",
    idcateg: "",
    categ: "",
    slug: "",
    modelo: "",
    idmarca: "",
    marca: "",
    codart: "",
    precioventa: "",
    preciocompra: "",
    moneda: "ARS",
    descripcion: "",
    descripBreve: "",
  });
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const categs = await APIConsultas.categoria.TODO(true);
      setArr_categs(categs);
      setArr_marcas(await APIConsultas.marcas.TODO(true));
    };
    fetchData().catch(console.error);
  }, []);
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "categ" || name === "subc" || name === "marca") {
      return clickBandera(null, name, true);
    }
    if (name === "modelo") {
      changeSlug();
    }

    setFormulario({
      ...formulario,
      [name]: value,
      slug: slug,
    });
    // changeSlug();
  };
  const clickBandera = (ev, name, value) => {
    ev?.preventDefault();
    setBandera({
      ...bndModal,
      [name]: value,
    });
  };

  const changeSlug = () => {
    const newSlug = slugify(
      `${formulario.marca} ${formulario.modelo} ${formulario.categ}`,
      {
        lower: true, // Convertir a minúsculas
        strict: true, // Remover caracteres especiales
      }
    );
    setSlug(newSlug);
  };

  const setData = (item, name) => {
    changeSlug();

    setFormulario({
      ...formulario,
      [name]: item.nombre,
      slug: slug,
      [`id${name}`]: item[`id${name}`],
    });
  };

  const insertProducto = async (e) => {
    e.preventDefault();
    const re = await APIConsultas.modelos.ADD(formulario);
    if (re) {
      router.push(`admin/producto/${slug}`);
      closeModal(null);
    }
  };
  const closeModal = (ev) => {
    ev?.preventDefault();
    props.close(false);
    router.push("/admin");
  };
  return (
    <>
      <ModalView
        open={props.open}
        titulo="Alta de producto"
        close={() => closeModal()}
      >
        <article className="h-full">
          <form
            className="fullScroll rounded max-w-[460px] w-full Outfit"
            id="formProd"
            onSubmit={(e) => insertProducto(e)}
          >
            <div className="cont-inps w-full">
              <div className="grid grid-cols-1 mr-3 w-full">
                <label
                  className=" text-sm text-black font-bold md:text-sm text-light"
                  htmlFor="slug"
                >
                  Slug
                </label>
                <input
                  className="px-3 h-8 text-sm border-b border-black mb-2"
                  readOnly
                  type="text"
                  placeholder=""
                  id="slug"
                  name="slug"
                  value={slug}
                />
              </div>
              <div className="flex w-full">
                <div className="grid grid-cols-1 mr-3 w-1/2">
                  <label
                    className=" text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="marca"
                  >
                    Marca
                  </label>
                  <input
                    className="px-3 h-10 rounded-[20px] border-2 border-black mt-1"
                    type="text"
                    placeholder=""
                    id="marca"
                    name="marca"
                    onClick={(ev) => clickBandera(ev, "marca", true)}
                    value={formulario.marca}
                    onChange={onChange}
                    autoComplete="off"
                  />
                  <ModalList
                    nomlist="Marcas"
                    data={arr_marcas}
                    open={bndModal.marca}
                    keyuse="nombre"
                    setdata={(item) => setData(item, "marca")}
                    close={(ev) => clickBandera(ev, "marca", false)}
                  />
                </div>
                <div className="grid grid-cols-1 mr-3 w-1/2">
                  <label
                    className=" text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="idcateg"
                  >
                    Categoria
                    <abbr className="text-red-400 pl-1" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10 rounded-[20px] border-2 border-black mt-1 "
                    id="categ"
                    name="categ"
                    onClick={(ev) => clickBandera(ev, "categ", true)}
                    value={formulario.categ}
                    onChange={onChange}
                    required={true}
                    autoComplete="off"
                  />
                  <ModalList
                    nomlist="Categorias"
                    data={arr_categs}
                    open={bndModal.categ}
                    keyuse="nombre"
                    setdata={(item) => setData(item, "categ")}
                    close={(ev) => clickBandera(ev, "categ", false)}
                  />
                </div>
              </div>
              <div className="flex mt-5 w-full">
                <div className="grid grid-cols-1 w-full">
                  <label
                    className=" text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="modelo"
                  >
                    Modelo
                    <abbr className="text-red-400 pl-1" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10 rounded-[20px] border-2 border-black mt-1"
                    type="text"
                    placeholder=""
                    id="modelo"
                    name="modelo"
                    value={formulario.modelo}
                    onChange={onChange}
                    required={true}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex mt-5">
                <div className="grid grid-cols-1 mr-3 max-w-[110px] w-full">
                  <label
                    className="md:text-sm text-light  text-sm text-black font-bold"
                    htmlFor="moneda"
                  >
                    Moneda
                    <abbr className="text-red-400 pl-1" title="required">
                      *
                    </abbr>
                  </label>
                  <select
                    className="px-3 h-10 rounded-[20px] border-2 border-black mt-1"
                    id="moneda"
                    name="moneda"
                    value={formulario.moneda}
                    onChange={onChange}
                    required={true}
                  >
                    <option value="ARS">Pesos</option>
                    <option value="USD">Dolar</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 mr-3 w-full">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="precioventa"
                  >
                    Precio Venta
                    <abbr className="text-red-400 pl-1" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10 rounded-[20px] border-2 border-black mt-1"
                    type="text"
                    min="1"
                    placeholder="0,00"
                    id="precioventa"
                    name="precioventa"
                    value={formulario.precioventa}
                    onChange={onChange}
                    required={true}
                    autoComplete="off"
                  />
                </div>
                <div className="grid grid-cols-1 w-full">
                  <label
                    className=" text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="preciocompra"
                  >
                    Precio Compra
                  </label>
                  <input
                    className="px-3 h-10 rounded-[20px] border-2 border-black mt-1 focus:border-primary text-right"
                    type="number"
                    placeholder="0,00"
                    id="preciocompra"
                    name="preciocompra"
                    value={formulario.preciocompra}
                    onChange={onChange}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5">
                <div className="grid grid-cols-1">
                  <label
                    className=" text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="descripBreve"
                  >
                    Breve Descripcion
                  </label>
                  <textarea
                    className="px-3 py-2 h-10 rounded-[20px] border-2 border-black mt-1"
                    id="descripBreve"
                    name="descripBreve"
                    onChange={onChange}
                    value={formulario.descripBreve}
                    autoComplete="off"
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5">
                <div className="grid grid-cols-1">
                  <label
                    className=" text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="descripcion"
                  >
                    Descripcion
                  </label>
                  <textarea
                    className="px-3 py-2 h-10 rounded-[20px] border-2 border-black mt-1  min-h-[150px]"
                    id="descripcion"
                    name="descripcion"
                    value={formulario.descripcion}
                    onChange={onChange}
                    autoComplete="off"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end gap-4 my-4">
              <button
                type="button"
                onClick={(ev) => closeModal(ev)}
                className="w-[50%] bg-black rounded-[20px] shadow-xl font-medium text-white px-4 py-2 hover:bg-gray-700"
              >
                Cancelar
              </button>
              <input
                type="submit"
                className="w-[50%] bg-primary rounded-[20px] shadow-xl font-bold text-white px-4 py-2 hover:bg-primary-500 cursor-pointer"
                value="Confirmar"
              />
            </div>
          </form>
        </article>
      </ModalView>
    </>
  );
};
export default ProductoUpdate;
