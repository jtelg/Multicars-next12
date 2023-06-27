import React, { useState, useEffect } from "react";
import CardVehiculos from "../../utils/cardVehiculos";
import APIConsultas from "../../../../services/consultas";
import { useRouter } from "next/router";
import Loading from "../../utils/loading";

const ShopPage = () => {
  const router = useRouter();
  const [arrProductos, setArrProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const marca = router.query.idmarca || 0;
    const modelo = router.query.modelo || 0;
    const anio = router.query.anio || 0;
    const tipoUsado = router.query.tipoUsado || 0;
    const min = router.query.min || 0;
    const max = router.query.max || 0;
    APIConsultas.modelos
      .GET_SHOP(marca, modelo, anio, tipoUsado, min, max)
      .then((resprod) => {
        setArrProductos(resprod);
        setLoading(false);
      });
  }, [router]);

  return loading ? (
    <Loading></Loading>
  ) : (
    <div className=" gap-0 md:gap-y-8 space-y-5 md:space-y-0 md:flex md:flex-wrap md:justify-between ">
      {arrProductos?.map((e) => (
        <CardVehiculos key={e.idart} data={e}></CardVehiculos>
      ))}
    </div>
  );
};

export default ShopPage;
