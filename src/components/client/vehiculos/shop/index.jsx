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

    APIConsultas.modelos.GET_SHOP(marca, modelo, anio).then((resprod) => {
      setArrProductos(resprod);
      setLoading(false);
    });
  }, [router]);
  return loading ? (
    <Loading></Loading>
  ) : (
    <div className=" gap-0 md:gap-8 space-y-5 md:space-y-0 md:flex md:flex-wrap md:justify-between ">
      {arrProductos?.map((e) => (
        <CardVehiculos key={e.idart} data={e}></CardVehiculos>
      ))}
    </div>
  );
};

export default ShopPage;
