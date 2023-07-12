import { useState, useEffect } from "react";
import ModalList from "../../client/utils/modalList";
import { toast } from "react-toastify";
import APIConsultas from "../../../services/consultas";
import ImageForm from "./imageForm";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import slugify from "slugify";

const ProductoUpdate = (props) => {
  const [formulario, setFormulario] = useState({
    idart: "",
    idsubc: "",
    subc: "",
    idcateg: "",
    categ: "",
    idmodelo: "",
    modelo: "",
    idmarca: "",
    marca: "",
    fecha: "",
    caja: "",
    km: "",
    motor: "",
    combustible: "",
    codart: "",
    precioventa: "",
    preciocompra: "",
    moneda: "ARS",
    visible: "",
    feccarga: "",
    descripcion: "",
    descripBreve: "",
    typeCatalog: "",
    arrimagesIndiv: [],
    arrmedidasIndiv: [],
    arrcolor: [],
  });
  const [slug, setSlug] = useState("");
  const [arr_categs, setArr_categs] = useState([]);
  const [arr_marcas, setArr_marcas] = useState([]);
  const [arr_medidas, setArr_medidas] = useState([]);
  const [bndModal, setBandera] = useState({
    categ: false,
    marca: false,
  });
  const [timer, setTimer] = useState(null);
  const [titlePage, setTitlePage] = useState("");
  const router = useRouter();
  useEffect(() => {
    setTitlePage(`${formulario.modelo} | ${props.appName}`);
  }, [formulario.modelo, props.appName]);
  useEffect(() => {
    APIConsultas.modelos.GET_XSLUG(props.idPage, true).then((data_prod) => {
      if (!data_prod) return router.push("/admin");
      setFormulario({
        idart: data_prod.idart,
        idsubc: data_prod.idsubc,
        subc: data_prod.subcateg,
        idcateg: data_prod.idcateg,
        categ: data_prod.categoria,
        idmodelo: data_prod.idmodelo,
        modelo: data_prod.modelo,
        idmarca: data_prod.idmarca,
        marca: data_prod.marca,
        fecha: data_prod.fecha || "",
        caja: data_prod.caja,
        km: data_prod.km || "",
        motor: data_prod.motor,
        combustible: data_prod.combustible,
        codart: data_prod.codart,
        precioventa: data_prod.precioventa,
        preciocompra: data_prod.preciocompra,
        moneda: data_prod.moneda,
        visible: data_prod.visible,
        feccarga: data_prod.feccarga,
        descripcion: data_prod.descripcion,
        descripBreve: data_prod.descripBreve,
        typeCatalog: data_prod.typeCatalog,
        arrimagesIndiv: [],
        arrmedidasIndiv: data_prod.arrmedidasIndiv,
        arrcolor: data_prod.arrcolor,
      });
      setSlug(data_prod.slug);
      APIConsultas.categoria.TODO(true).then((categs) => {
        setArr_categs(categs);
      });
      APIConsultas.marcas.TODO(true).then((marcas) => {
        setArr_marcas(marcas);
      });
      APIConsultas.medida.TODO(true).then((medida) => {
        setArr_medidas(medida);
      });
      switch (data_prod.typeCatalog) {
        case 0:
          APIConsultas.Images.SET_IMAGE(data_prod).then((imgs) => {
            setFormulario((form) => ({ ...form, arrimagesIndiv: imgs }));
          });
          break;
        case 1:
          APIConsultas.Images.SET_ARRCOLOR(data_prod).then((prod) => {
            setFormulario((form) => ({ ...form, arrcolor: prod.arrcolor }));
          });

          break;
      }
    });
  }, [props.idPage, router]);

  // useEffect(() => {
  //   changeSlug();
  // }, [formulario]);

  const setData = (item, name) => {
    setFormulario({
      ...formulario,
      [name]: item.nombre,
      [`id${name}`]: item[`id${name}`],
      visible: ctrlVisible([`id${name}`], item[`id${name}`]),
    });

    // if (name !== 'categ') {
    updateData(`id${name}`, item[`id${name}`]);
    // }
  };

  const setValue = async (ev, name, value) => {
    ev?.preventDefault();
    let prods = [];
    updateData(name, value);
    if (name === "typeCatalog") {
      switch (value) {
        case 0:
          setFormulario({
            ...formulario,
            arrimagesIndiv: await APIConsultas.Images.SET_IMAGE(formulario),
            [name]: value,
            visible: ctrlVisible(name, value),
          });
          break;
        case 1:
          prods = await APIConsultas.Images.SET_ARRCOLOR(formulario);
          setFormulario({
            ...prods,
            [name]: value,
            visible: ctrlVisible(name, value),
          });
          break;
      }
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    if (e.target.name !== "visible") {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,
        visible: ctrlVisible(e.target.name, e.target.value),
      });
      changeSlug();
    } else {
      let val = e.target.value;
      if (val === 0) val = ctrlVisible(e.target.name, e.target.value);
      setFormulario({
        ...formulario,
        visible: val,
      });
    }

    if (
      e.target.name !== "arrcolor" &&
      e.target.name !== "arrmedidasIndiv" &&
      e.target.name !== "arrimagesIndiv"
    ) {
      updateData(e.target.name, e.target.value);
    }
  };
  const updateData = (campo, valor) => {
    clearTimeout(timer);
    setTimer(
      setTimeout(async () => {
        const res = await APIConsultas.modelos.UPDATE(
          formulario.idart,
          campo,
          valor,
          slug
        );
        if (res) {
          if (campo !== "visible") {
            updateData("visible", ctrlVisible(campo, valor));
            return toast.success(`Dato actualizado!`, {
              autoClose: 1000,
            });
          }
          return;
        }
        return toast.error(`Error al modificar el campo.`);
      }, 2000)
    );
  };

  const changeSlug = async () => {
    setSlug(
      slugify(
        `${formulario.idart} ${formulario.marca} ${formulario.modelo} ${formulario.categ} ${formulario.motor} ${formulario.fecha}`,
        {
          lower: true, // Convertir a minúsculas
          strict: true, // Remover caracteres especiales
        }
      )
    );
    clearTimeout(timer);
    setTimer(
      setTimeout(async () => {
        const res = await APIConsultas.modelos.UPDATE(
          formulario.idart,
          "slug",
          slug
        );
        if (res) {
          return toast.success(`Dato actualizado!`, {
            autoClose: 1000,
          });
        }
      }, 1000)
    );
  };

  const clickBandera = (ev, name, value) => {
    ev.preventDefault();
    setBandera({
      ...bndModal,
      [name]: value,
    });
  };

  const infoUser = (ev, key, value) => {
    ev.preventDefault();
    let msg = "";
    let visible = 0;
    switch (key) {
      case "typeCatalog":
        if (value === 0) {
          msg = `Podrá cargar infintas imagenes,
          como asi tambien, seleccionar entre las medidas cargadas
          para mostrar en el catalogo al cliente.`;
        } else if (value === 1) {
          msg = `Podrá cargar infintos colores. Dentro de los mismos,
          cargar imagenes y seleccionar medidas para luego mostrar en el catalogo`;
        }
        break;
      case "prodVisible":
        visible = formulario.visible === 0 ? 1 : 0;
        if (ctrlVisible("visible", visible) === 0) {
          setFormulario({
            ...formulario,
            visible,
          });
          setValue(ev, "visible", visible);
          return;
        }
        msg = `Para poner el producto visible debe completar todos los datos obligatorios.`;
        break;
    }
    return toast.info(msg);
  };

  const ctrlVisible = (campo, valor) => {
    let ocultar = 0;

    if (
      campo === "categ" ||
      campo === "subc" ||
      campo === "marca" ||
      campo === "modelo" ||
      campo === "moneda" ||
      campo === "precioventa"
    ) {
      if (+valor <= 0 || valor.length === 0) {
        ocultar = 1;
      }
    } else if (campo === "typeCatalog") {
      if (valor === 1) {
        formulario.arrcolor?.forEach((c) => {
          if (
            c.nomcolor.length === 0 ||
            !c.arrmedidas ||
            c.arrmedidas.length === 0
          ) {
            ocultar = 1;
          }
        });
        if (formulario.arrcolor?.length === 0) {
          ocultar = 1;
        }
      } else {
        if (formulario.arrimagesIndiv?.length === 0) {
          ocultar = 1;
        }
      }
    }

    ocultar = ctrlForm(ocultar, campo, valor);

    return ocultar;
  };

  const ctrlForm = (ocultar, campo, valor) => {
    if (
      formulario.categ.length === 0 ||
      formulario.subc.length === 0 ||
      formulario.marca.length === 0 ||
      formulario.modelo.length === 0 ||
      formulario.moneda.length === 0 ||
      formulario.km.length === 0 ||
      formulario.fecha.length === 0 ||
      formulario.precioventa.length === 0 ||
      formulario.precioventa === 0
    ) {
      ocultar = 1;
    }
    if (campo !== "typeCatalog") {
      const arr = campo === "arrcolor" ? valor : formulario.arrcolor;
      if (formulario.typeCatalog === 1) {
        arr.forEach((c) => {
          if (
            c.nomcolor.length === 0 ||
            !c.arrmedidas ||
            c.arrmedidas.length === 0
          ) {
            ocultar = 1;
          }
        });
        if (formulario.arrcolor.length === 0) {
          ocultar = 1;
        }
      } else if (formulario.typeCatalog === 0) {
        if (campo !== "arrmedidasIndiv" && campo !== "arrimagesIndiv") {
          if (
            (!formulario.arrmedidasIndiv ||
              formulario.arrmedidasIndiv.length === 0) &&
            (!formulario.arrimagesIndiv ||
              formulario.arrimagesIndiv.length === 0)
          ) {
            ocultar = 1;
          }
        } else {
          if (valor.length === 0) {
            ocultar = 1;
          }
        }
      }
    }
    if (
      campo === "arrcolor" ||
      campo === "arrmedidasIndiv" ||
      campo === "arrimagesIndiv"
    ) {
      updateData("visible", ocultar);
    }

    return ocultar;
  };

  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content={formulario.descripcion} />
        <link rel="icon" href="/media/logoPatio.png" />
      </Head>
      <form className=" h-[120vh]  p-4 fullScroll Outfit pt-[100px]">
        <div className="bg-white rounded-3xl shadow-xl w-full  p-4  border-2 border-secondary">
          <div className="flex justify-start mb-4 ">
            <div className="flex">
              <h1 className="text-secondary font-bold md:text-xl  uppercase ">
                Ficha de articulo -{" "}
                <input
                  className="px-3 h-8 text-sm  border-2 border-black rounded-[20px] mt-1 font-medium "
                  type="text"
                  placeholder=""
                  id="slug"
                  name="slug"
                  readOnly
                  value={slug}
                />
              </h1>
            </div>
          </div>

          <div className="block md:flex gap-4">
            <div className="cont-inps w-full">
              <div className="flex w-full">
                <div className="grid grid-cols-1 mr-3 w-1/2">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="marca"
                  >
                    Marca
                    <abbr
                      className="text-red-400 pl-1"
                      title="Dato obligatorio"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    type="text"
                    placeholder=""
                    id="marca"
                    name="marca"
                    readOnly
                    onClick={(ev) => clickBandera(ev, "marca", true)}
                    value={formulario.marca}
                    onChange={onChange}
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
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="idcateg"
                  >
                    Categoria
                    <abbr
                      className="text-red-400 pl-1"
                      title="Dato obligatorio"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10 border-2 border-black rounded-[20px] mt-1 "
                    id="categ"
                    name="categ"
                    readOnly
                    onClick={(ev) => clickBandera(ev, "categ", true)}
                    value={formulario.categ}
                    onChange={onChange}
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
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="modelo"
                  >
                    Modelo
                    <abbr
                      className="text-red-400 pl-1"
                      title="Dato obligatorio"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    type="text"
                    placeholder=""
                    id="modelo"
                    name="modelo"
                    value={formulario.modelo}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="flex mt-5">
                <div className="grid grid-cols-1 mr-3  w-1/4">
                  <label
                    className="md:text-sm text-light uppercase text-sm text-black font-bold"
                    htmlFor="fecha"
                  >
                    Fecha
                    <abbr
                      className="text-red-400 pl-1"
                      title="Dato obligatorio"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    type="text"
                    id="fecha"
                    name="fecha"
                    value={formulario.fecha}
                    onChange={onChange}
                  />
                </div>
                <div className="grid grid-cols-1 mr-3 w-1/4">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="caja"
                  >
                    Caja
                    <abbr
                      className="text-red-400 pl-1"
                      title="Dato obligatorio"
                    >
                      *
                    </abbr>
                  </label>
                  <select
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    id="caja"
                    name="caja"
                    value={formulario.caja}
                    onChange={onChange}
                  >
                    <option value="Automatico">Automatico</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 mr-3  w-1/4">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="km"
                  >
                    Kilometraje
                  </label>
                  <input
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    type="number"
                    id="km"
                    name="km"
                    value={formulario.km}
                    onChange={onChange}
                  />
                </div>
                <div className="grid grid-cols-1 mr-3  w-1/4">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="motor"
                  >
                    Motor
                  </label>
                  <input
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    type="text"
                    id="motor"
                    name="motor"
                    value={formulario.motor}
                    onChange={onChange}
                  />
                </div>
                <div className="grid grid-cols-1 w-1/4">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="combustible"
                  >
                    Combustible
                  </label>
                  <select
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    id="combustible"
                    name="combustible"
                    value={formulario.combustible}
                    onChange={onChange}
                  >
                    <option value="nafta">Nafta</option>
                    <option value="gasoil">Gasoil</option>
                  </select>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="grid grid-cols-1 mr-3 max-w-[110px] w-full">
                  <label
                    className="md:text-sm text-light uppercase text-sm text-black font-bold"
                    htmlFor="moneda"
                  >
                    Moneda
                    <abbr
                      className="text-red-400 pl-1"
                      title="Dato obligatorio"
                    >
                      *
                    </abbr>
                  </label>
                  <select
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    id="moneda"
                    name="moneda"
                    onChange={onChange}
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
                    <abbr
                      className="text-red-400 pl-1"
                      title="Dato obligatorio"
                    >
                      *
                    </abbr>
                  </label>
                  <input
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    type="text"
                    min="1"
                    placeholder="0,00"
                    id="precioventa"
                    name="precioventa"
                    value={formulario.precioventa}
                    onChange={onChange}
                  />
                </div>
                <div className="grid grid-cols-1 w-full">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="preciocompra"
                  >
                    Precio Compra
                  </label>
                  <input
                    className="px-3 h-10  border-2 border-black rounded-[20px] mt-1 "
                    type="number"
                    placeholder="0,00"
                    id="preciocompra"
                    name="preciocompra"
                    value={formulario.preciocompra}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5">
                <div className="grid grid-cols-1">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="descripBreve"
                  >
                    Breve Descripcion
                  </label>
                  <textarea
                    className="px-3 py-2 h-10 border-2 border-black rounded-[20px] mt-1 "
                    id="descripBreve"
                    name="descripBreve"
                    onChange={onChange}
                    value={formulario.descripBreve}
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5">
                <div className="grid grid-cols-1">
                  <label
                    className="uppercase text-sm text-black font-bold md:text-sm text-light"
                    htmlFor="descripcion"
                  >
                    Descripcion
                  </label>
                  <textarea
                    className="px-3 py-2 h-10  border-2 border-black rounded-[20px] mt-1  min-h-[150px]"
                    id="descripcion"
                    name="descripcion"
                    value={formulario.descripcion}
                    onChange={onChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="cont-imgs w-full md:mt-0 my-4 flex flex-col gap-[6.4px]">
              <div className="flex gap-4 drop-shadow-lg mt-6">
                <div className="flex items-center justify-between w-full ">
                  <div
                    className={`uppercase h-10  px-4 text-sm
                               font-bold text-light rounded-[20px]
                                md:text-sm flex items-center justify-between gap-4
                              w-full shadow transition-all border-2 border-primary ${
                                formulario.typeCatalog === 0
                                  ? "bg-primary text-white"
                                  : " text-black"
                              }`}
                  >
                    <span
                      onClick={(ev) => setValue(ev, "typeCatalog", 0)}
                      aria-hidden
                      className="h-full w-full flex items-center justify-center cursor-pointer"
                    >
                      Imagenes
                    </span>
                  </div>
                </div>
              </div>
              <ImageForm
                {...props}
                formulario={formulario}
                arr_medidas={arr_medidas}
                setUpdate={(data) => onChange(data)}
              />
            </div>
          </div>
          <div className="flex items-center justify-start md:gap-8 gap-4 pt-4">
            <div className="flex items-center justify-between w-full max-w-xs ">
              <div
                className={`uppercase h-10  px-4 text-sm
                    font-bold text-light rounded-[20px]
                   md:text-sm flex items-center justify-between gap-4
                   w-full shadow ${
                     formulario.visible === 0
                       ? "bg-green-500 text-white"
                       : "bg-red-400 text-white"
                   }`}
                onClick={(ev) => infoUser(ev, "prodVisible", 1)}
                aria-hidden
              >
                <div
                  aria-hidden
                  className="h-full w-full flex items-center cursor-pointer justify-center"
                >
                  {formulario.visible === 0 ? (
                    <span>Producto Visible</span>
                  ) : (
                    <span>Producto Oculto</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <Link
                className="bg-primary text-white shadow py-1 uppercase h-10  px-14 text-sm
                    font-bold text-light rounded-[20px]
                   md:text-sm flex items-center justify-between"
                href={"/admin?s=productos"}
              >
                Volver
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default ProductoUpdate;
