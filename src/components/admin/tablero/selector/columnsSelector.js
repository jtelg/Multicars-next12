const prodCol = {
  descrip:
    "Lista de todos los productos cargados listos para mostrar en el catalogo.",
  buttonTitle: "Nuevo Producto",
  icon: "inventory_2",
  count: 0,
  color: "primary",
  text_use: "productos",
  indrow: "idart",
  ind_use: 1,
  path: `/api/producto?path=PRODUCTO_GET_LIST&offset=0&limit=100&idcateg=0&idsubc=0&muestratodo=true`,
};

const configCol = {
  titulo: "",
  descrip: "",
  icon: "settings",
  count: "",
  color: "indigo",
  text_use: "",
  indrow: "",
  ind_use: 3,
  path: `/admin/configuracion`,
};

const selectorColumns = { configCol, prodCol };

export default selectorColumns;
