import { GridActionsCellItem } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import APIConsultas from "../../../../services/consultas";
// import servusos from "../../../../utils/usos";
const ProductoColumnConfig = (router) => {
  const columns_prods = [
    {
      width: 100,
      field: "visible",
      headerName: "Visible",
      cellClassName: "padding-margin-0",
      renderCell: (params) => (
        <button
          className={`h-full w-full group relative text-white
          ${params.row.visible === 0 ? "bg-green-500" : "bg-red-400"}`}
          id="btnAction"
        >
          <div
            className={`group-hover:flex hidden fixed -mt-[12px] ml-[113px] rounded 
            ${
              params.row.visible === 0 ? "bg-green-500" : "bg-red-400"
            } py-1 px-4 capitalize text-xs font-bold`}
          >
            <div
              className={`${
                params.row.visible === 0 ? "bg-green-500" : "bg-red-400"
              } w-3 h-3 absolute top-[6px] -left-[6px] rotate-[45deg]`}
            ></div>
            {params.row.visible === 0 ? "Producto visible" : "Producto oculto"}
          </div>
        </button>
      ),
    },
    { field: "idart", headerName: "ID", width: 100 },
    { field: "marca", headerName: "Marca", width: 100 },
    { field: "modelo", headerName: "Modelo", flex: 1 },
    { field: "categ", headerName: "Categoria", flex: 1 },
    { field: "fecha", headerName: "Anio", flex: 1 },
    { field: "moneda", headerName: "Tipo moneda", flex: 1 },

    {
      field: "precioventa",
      headerName: "Precio Venta",
      type: "number",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          key={1}
          onClick={(e) => onClickAction(e, "editar", params)}
          icon={
            <i className="bx bxs-pencil text-secondary-500 text-[22px]"></i>
          }
          label="Editar"
        />,
        <GridActionsCellItem
          key={2}
          label="Eliminar articulo"
          onClick={(e) => onClickAction(e, "eliminar", params)}
          icon={<i className="bx bxs-trash text-red-500 text-[22px]"></i>}
        />,
      ],
    },
  ];
  const [dataChange, setDataChange] = useState(false);
  // useEffect(() => {
  //   setDataChange(Date.now());
  // }, []);

  const onClickAction = (e, ind, params) => {
    e.stopPropagation(); // don't select this row after clicking
    if (ind === "editar") row_data(params.row);
    if (ind === "eliminar") deleteProducto(params.row);
  };

  const deleteProducto = (prod) => {
    Swal.fire({
      icon: "question",
      title: "¿Desea eliminar el articulo?",
      showDenyButton: true,
      confirmButtonText: "Aceptar",
      denyButtonText: "Cancelar",
      customClass: {
        actions: "my-actions",
        denyButton: "order-2",
        confirmButton: "order-3 !bg-primary-500",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await APIConsultas.modelos.UPDATE(
          prod.idart,
          "eliminado",
          1,
          prod.slug
        );
        setDataChange(true);
        toast.success(`Articulo eliminado`);
        router.push("/admin");
      }
    });
  };

  const row_data = (data) => {
    router.push(`admin/producto/${data.idart}`);
  };

  return { columns_prods, dataChange };
};

export default ProductoColumnConfig;
