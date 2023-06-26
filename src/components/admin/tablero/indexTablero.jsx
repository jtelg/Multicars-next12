import { useEffect, useState } from "react";

import SelectorCategory from "./selector/selector";

// import WppBot from "./wppBot";
import APIConsultas from "../../../services/consultas";

import { useRouter } from "next/router";
import ButtonInsert from "./buttonInsert";
import selectorColumns from "./selector/columnsSelector";
import ProductoColumnConfig from "./columns/productos";
import GridConfig from "./gridConfig";

const Tablero = (props) => {
  const router = useRouter();

  const [col_use, setCol_use] = useState([]);
  const [arr_use, setArr_use] = useState([]);

  const [loadingTablero, setLoadingTablero] = useState(true);
  const [obj_use, setobj_use] = useState({
    text_use: "",
    indrow: "",
    ind_use: 0,
    buttonTitle: "",
  });
  const { columns_prods } = ProductoColumnConfig(router);

  useEffect(() => {
    if (!props.idcajaURL) {
      setLoadingTablero(true);
      setCol_use(columns_prods);
      setobj_use(selectorColumns.prodCol);
      APIConsultas.modelos.GET_SHOP(0, 0, 0, 0, 100, -1).then((data) => {
        setLoadingTablero(false);
        setArr_use(data);
      });
    }
  }, [props.selector, props.idcajaURL]);

  return (
    <>
      <SelectorCategory {...props} obj_use={obj_use} loading={loadingTablero} />
      <div className=" pb-12 min-h-[85vh] fullScroll">
        <article className="w-full px-4">
          <div className="flex flex-col gap-4 justify-center px-5 py-6 shadow-sm rounded-lg bg-black border-2 border-secondary">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <h3 className="text-white text-lg uppercase text-left font-bold">
                  {obj_use.text_use}
                </h3>
              </div>
              <ButtonInsert obj_use={obj_use} use={props.use} router={router} />
            </div>

            <GridConfig
              {...props}
              col_use={col_use}
              arr_use={arr_use}
              obj_use={obj_use}
              loading={loadingTablero}
            />
          </div>
          {/* <WppBot /> */}
        </article>
      </div>
    </>
  );
};

export default Tablero;
