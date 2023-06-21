import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../pages/session";
import { ARR_NAV, SESSION_SET } from "../../redux/actions";
// import APIConsultas from "../../services/consultas";
import localStorage from "../../utils/localstorage.utils";

const arr_nav = [
  { label: "Home", route: "/" },
  { label: "Vehículos", route: "/vehiculos" },
  { label: "Vendé tu auto", route: "/vende" },
  { label: "Financiación", route: "/financiacion" },
  { label: "Nosotros", route: "/nosotros" },
];

const Session = (props) => {
  const dispatch = useDispatch();
  const sessionState = useSelector((s) => s.session);
  const sessionLocal = localStorage.getFromStorage("session");
  useEffect(() => {
    const APIdata = async () => {
      if (sessionLocal && !sessionState) dispatch(SESSION_SET(sessionLocal));
      if (sessionState?.role === "Admin") {
        if (!arr_nav.find((e) => e.nombre === "Tablero")) {
          arr_nav.push({ id: 3, nombre: "Tablero", href: "/admin" });
        }
      }
      const arr = { data: arr_nav, index: "" };
      dispatch(ARR_NAV(arr));
    };
    APIdata();
  }, [dispatch, sessionLocal, sessionState]);
  return (
    <>
      {props.comp.auth?.role === "Admin" && sessionState?.role !== "Admin" ? (
        <Login></Login>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
};

export default Session;
