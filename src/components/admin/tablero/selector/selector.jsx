import { useEffect, useState } from "react";
import ProductoColumnConfig from "../columns/productos";
import { useRouter } from "next/router";
import selectorColumns from "./columnsSelector";

const objCategs = [selectorColumns.prodCol, selectorColumns.configCol];
const SelectorCategory = (props) => {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [categs_muestra, setCategs_muestra] = useState(objCategs);
  const { dataChange } = ProductoColumnConfig(router);

  useEffect(() => {
    fetch("/api/user?path=CATEGSVIEW_GET_COUNT")
      .then((res) => res.json())
      .then((res) => {
        const obj = objCategs;
        // obj[0].count = 0;
        obj[0].count = res[0].prod_count;
        // obj[1].count = res[0].user_count;
        return setCategs_muestra([...obj]);
      });
  }, [props.arrVentas]);
  useEffect(() => {
    if (!dataChange) return;
    selector(selectorColumns.prodCol);
  }, [dataChange]);

  useEffect(() => {
    setloading(props.loading);
  }, [props.loading]);

  const selector = async (categ) => {
    setloading(true);
    if (categ.ind_use === 3) {
      return router.push(`/admin/configuracion`);
    }
    return router.push(`/admin?s=${categ.text_use}`);
  };
  return (
    <>
      <article className="px-4 md:mt-12 pt-[65px] mb-4 w-full">
        <div className="flex md:flex-row flex-col justify-between w-full gap-4 ">
          {categs_muestra.map((categ, index) => (
            <div
              className={`${
                index !== categs_muestra.length - 1
                  ? "md:w-[90%] w-full h-full"
                  : "md:w-[10%] w-full"
              }`}
              key={index}
              title={categ.descrip}
              disabled={true}
            >
              <button
                className={`bg-white border-black  ${
                  props.obj_use.ind_use === index + 1 &&
                  "border-2 bg-primary border-primary"
                }  w-full border-2 transition-all border-black h-full flex items-center justify-center px-[1rem] shadow-sm rounded-[1rem] cursor-pointer`}
                onClick={() => selector(categ)}
                disabled={loading}
              >
                <div
                  className={`h-12 w-12 flex items-center justify-center rounded-full ${
                    props.obj_use.ind_use === index + 1
                      ? "text-white"
                      : " text-black "
                  }`}
                >
                  <span className="material-icons text-3xl">{categ.icon}</span>
                </div>
                {categ.text_use && (
                  <div className="mx-2 flex items-center justify-between w-full gap-[1rem]  ">
                    <div
                      className={`uppercase  tracking-tighter text-[15px] font-semibold ${
                        props.obj_use.ind_use === index + 1 ||
                        categ.ind_use === 4 ||
                        index === categs_muestra.length - 1
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {categ.text_use}
                    </div>
                    {categ.ind_use !== 0 &&
                      (loading ? (
                        <i className="bx bx-refresh bx-spin text-xl"></i>
                      ) : (
                        <h4
                          className={`text-[15px] font-bold ${
                            props.obj_use.ind_use === index + 1
                              ? "text-white "
                              : "text-black"
                          } `}
                        >
                          {categ.count}
                        </h4>
                      ))}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};
export default SelectorCategory;
