// import axios from "axios";
// import localStorage from "../utils/localstorage.utils";

const APIConsultas = {
  usuario: {
    session: async (usuario, password, local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, password }),
      };
      const url = `${baseUrl}/api/user/login?path=USUARIO_LOGIN`;
      const re = await fetch(url, options);
      if (re.ok) {
        const user = await re.json();
        if (user.length === 0) return false;
        return user[0];
      }
      return false;
    },
  },
  modelos: {
    GET_SHOP: async (
      marca,
      modelo,
      anio,
      offset = 0,
      limit = 100,
      visible = 0
    ) => {
      const url = `/api/producto?path=PRODUCTO_GET_LIST&offset=${offset}&limit=${limit}&idmarca=${marca}&anio=${anio}&modelo=${modelo}&visible=${visible}`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        return dataprod;
      }
    },
    GET_SHOP_MARCA: async (idmarca) => {
      const url = `/api/producto?path=PRODUCTO_X_MARCA&idmarca=${idmarca}`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        return dataprod;
      }
    },
  },
  marcas: {
    ADD: async (nombre) => {
      const data = {
        nombre,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = `/api/producto/categoria?path=ADD_MARCA`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
    UPDATE: async (id, valor) => {
      const data = {
        id,
        valor,
      };
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `/api/producto/categoria?path=UPD_MARCA`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    DELETE: async (id) => {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      };
      const url = `/api/producto/categoria?path=DELETE_MARCA`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
    TODO: async (local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const respmarca = await fetch(
        `${baseUrl}/api/producto/categoria?path=MARCA_GET_TODOLIST`
      );
      let datamarca = null;
      if (respmarca.ok) {
        datamarca = await respmarca.json();
      }
      return datamarca;
    },
  },
};

export default APIConsultas;
