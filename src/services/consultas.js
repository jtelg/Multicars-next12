import axios from "axios";
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
    LoadWppBot: async (local) => {
      const url = `${process.env.NEXT_PUBLIC_URL_BOT_API}/api/sender/load`;
      try {
        const re = await fetch(url);
        if (re.ok) {
          const data = await re.json();
          if (data.client) return data;
        }
        return false;
      } catch (error) {
        console.error(error);
      }
    },
    GET_LIST: async () => {
      const url = `/api/user?path=USUARIO_GET_LIST`;
      const re = await fetch(url);
      let redata = [];
      if (re.ok) {
        redata = await re.json();
      }
      return redata;
    },
  },
  modelos: {
    GET_SHOP: async (
      marca,
      modelo,
      anio,
      tipoUsado,
      min,
      max,
      offset = 0,
      limit = 100,
      visible = 0
    ) => {
      const url = `/api/producto?path=PRODUCTO_GET_LIST&offset=${offset}&limit=${limit}&idmarca=${marca}&anio=${anio}&tipoUsado=${tipoUsado}&min=${min}&max=${max}&modelo=${modelo}&visible=${visible}`;
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
    VALOR_MAX_MIN: async () => {
      const url = `/api/producto?path=VALOR_MAX_MIN`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        return dataprod[0][0];
      }
    },
    ADD: async (producto) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      };
      const url = `/api/producto/?path=PRODUCTO_ADD`;
      const re = await fetch(url, options);
      if (re.ok) return await re.json();
      return false;
    },
    UPDATE: async (idart, campo, valor) => {
      const data = {
        campo,
        valor,
      };
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `/api/producto/${idart}?path=PRODUCTO_UPDATE`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    MEDIDAXPROD_ADD: async (medidas) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medidas),
      };
      const url = `/api/producto/${medidas[0].idart}?path=MEDIDAXPROD_ADD`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
    GET_XID: async (idprod, local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const url = `${baseUrl}/api/producto/${idprod}/?path=PRODUCTO_GET_XID`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        return dataprod;
      }
    },
    SEARCH: async (value, local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const url = `${baseUrl}/api/producto?path=PRODUCTO_SEARCH&value=${value}`;
      const resprod = await fetch(url);
      if (resprod.ok) {
        return (await resprod.json())[0];
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
  ventas: {
    VENTAS_ADD: async (venta, arrProd, entrega) => {
      const data = {
        venta: venta,
        arrProd: arrProd,
        entrega,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = `/api/venta/?path=VENTA_ADD`;
      const re = await fetch(url, options);
      if (re.ok) {
        const resp = await re.json();
        return resp;
      }
      return false;
    },
    GET_XID: async (idventa, local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const url = `${baseUrl}/api/venta?path=VENTA_GET_XID&id=${idventa}`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        return dataprod;
      }
    },
    GET_ALL: async (idcaja, visible) => {
      const url = `/api/venta?path=VENTA_GET_LIST&idcaja=${idcaja}&visible=${visible}`;
      const res = await fetch(url);
      let data = null;
      if (res.ok) {
        data = await res.json();
        return data;
      }
    },
    UPDATE_ESTADO: async (data, local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `${baseUrl}/api/venta?path=UPDATE_ESTADO`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    UPDATE_SEGUIMIENTO: async (data, local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `${baseUrl}/api/venta?path=UPDATE_SEGUIMIENTO`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    UPDATE_XCAMPO: async (data, local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `${baseUrl}/api/venta?path=UPDATE_XCAMPO`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    GET_PRODS_XID: async (idventa) => {
      const url = `/api/venta?path=VENTA_GET_PROD_XID&id=${idventa}`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        for (const prod of dataprod) {
          if (prod.typeCatalog === 0) {
            const imgs = await APIConsultas.Images.SET_IMAGE(prod);
            prod.images = imgs;
          } else {
            const resimg = await APIConsultas.Images.SET_ARRCOLOR(prod);
            const images = resimg.arrcolor?.reduce(
              (a, b) => a + b.arrimages,
              ""
            );
            prod.images = images;
          }
        }

        return dataprod;
      }
    },
    VENTA_RELOAD: async (local) => {
      // const url = `${baseUrl}/api/pusher?path=VENTA_RELOAD`;
      const url = `${process.env.NEXT_PUBLIC_URL_BOT_API}/api/ventas/reloadDashboard`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        return dataprod;
      }
    },
  },
  categoria: {
    ADD: async (nombre) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nombre),
      };
      const url = `/api/producto/categoria?path=ADD_CATEG`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
    TODO: async (local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const repscateg = await fetch(
        `${baseUrl}/api/producto/categoria?path=CATEGORIA_GET_LIST`
      );

      let datacateg = null;
      if (repscateg.ok) {
        datacateg = await repscateg.json();
      }
      return datacateg;
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
      const url = `/api/producto/categoria?path=UPD_CATEG`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    UPDATE_VISIBLE: async (id, valor) => {
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
      const url = `/api/producto/categoria?path=UPDATE_VISIBLE`;
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
      const url = `/api/producto/categoria?path=DELETE_CATEG`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
  },
  medida: {
    XCOLOR_ADD: async (medidas) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medidas),
      };
      const url = `/api/producto/${medidas[0].idart}?path=MEDIDAXCOLOR_ADD`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
    XCOLOR_UPDATE: async (medida) => {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medida),
      };
      const url = `/api/producto/${medida.idart}?path=MEDIDAXCOLOR_UPDATE`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
    TODO: async (local) => {
      let baseUrl = process.env.NEXTAUTH_URL;
      if (local) baseUrl = "";
      const respmedida = await fetch(
        `${baseUrl}/api/producto?path=MEDIDA_GET_TODOLIST`
      );
      let datamedida = null;
      if (respmedida.ok) {
        datamedida = (await respmedida.json())[0];
      }
      return datamedida;
    },
  },
  Images: {
    SET_IMAGE: async (prod) => {
      const path = `${process.env.NEXT_PUBLIC_URL_IMG_GET}${prod.idart}/images/`;

      const data = await APIConsultas.color.GET_IMAGE_PHP(path);
      if (data.data.result.length > 0) {
        const imgs = [];
        data.data.result.forEach((url) => {
          const corte = url.split("/");
          const path = `${process.env.NEXT_PUBLIC_URL_IMG_API}${process.env.NEXT_PUBLIC_URL_IMG_GET}`;
          imgs.push(`${path}/${corte[9]}/${corte[10]}/${corte[11]}`);
        });
        return imgs;
      }
    },
    SET_ARRCOLOR: async (prod) => {
      if (prod.arrcolor) {
        for (const color of prod.arrcolor) {
          const path = `${process.env.NEXT_PUBLIC_URL_IMG_GET}${color.idart}/idcolor-${color.idcolor}/`;
          const data = await APIConsultas.color.GET_IMAGE_PHP(path);

          if (data.data.result.length > 0) {
            const imgs = [];
            data.data.result.forEach((url) => {
              const corte = url.split("/");
              const path = `${process.env.NEXT_PUBLIC_URL_IMG_API}${process.env.NEXT_PUBLIC_URL_IMG_GET}`;
              imgs.push(`${path}/${corte[9]}/${corte[10]}/${corte[11]}`);
            });
            color.arrimages = imgs;
          }
        }
      }
      return prod;
    },
  },
  color: {
    ADD: async (color) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(color),
      };
      const url = `/api/producto/${color.idart}?path=COLORXPROD_ADD`;
      const re = await fetch(url, options);
      if (re.ok) return await re.json();
      return false;
    },
    DELETE: async (color) => {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(color),
      };
      const url = `/api/producto/${color.idart}?path=COLORXPROD_DELETE`;
      const re = await fetch(url, options);
      if (re.ok) return true;
      return false;
    },
    UPDATE: async (idart, idcolor, campo, valor) => {
      const data = {
        campo,
        valor,
      };
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `/api/producto/${idart}?path=COLOR_UPDATE&idcolor=${idcolor}`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    ADD_IMAGE_PHP: async (path, file, filename) => {
      const objImg = {
        index: "add_file",
        file,
        filename,
        path,
      };
      const pathimg = `${process.env.NEXT_PUBLIC_URL_IMG_API}${process.env.NEXT_PUBLIC_URL_IMG_ACTION}`;
      return axios.post(pathimg, objImg);
    },
    DEL_IMAGE_PHP: async (fullpath) => {
      const objImg = {
        index: "file_del",
        path: fullpath.split(".com.ar")[1],
      };
      const pathimg = `${process.env.NEXT_PUBLIC_URL_IMG_API}${process.env.NEXT_PUBLIC_URL_IMG_ACTION}`;
      return axios.post(pathimg, objImg);
    },
    DEL_IMAGE_PHP_TODO: async (path) => {
      const objImg = {
        index: "folder_del",
        path,
      };
      const pathimg = `${process.env.NEXT_PUBLIC_URL_IMG_API}${process.env.NEXT_PUBLIC_URL_IMG_ACTION}`;
      return axios.post(pathimg, objImg);
    },
    GET_IMAGE_PHP: async (path) => {
      const objImg = {
        index: "file_get",
        path,
      };
      const pathimg = `${process.env.NEXT_PUBLIC_URL_IMG_API}${process.env.NEXT_PUBLIC_URL_IMG_ACTION}`;
      return axios.post(pathimg, objImg);
    },
  },
  variables: {
    UPDATE: async (campo, nombre, valor) => {
      const data = {
        nombre,
        valor,
        campo,
      };
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `/api/user?path=SP_variables_put`;
      const updres = await fetch(url, options);
      if (updres.ok) {
        return true;
      }
      return false;
    },
    GET: async () => {
      const url = `/api/user?path=VARIABLES_GET`;
      const resprod = await fetch(url);
      let dataprod = null;
      if (resprod.ok) {
        dataprod = await resprod.json();
        return dataprod;
      }
    },
  },
};

export default APIConsultas;
