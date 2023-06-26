import Head from "next/head";
import Tablero from "../../components/admin/tablero/indexTablero";

const Admin = (props) => {
  return (
    <>
      <Head>
        <title>{props.appName} | Tablero administrador</title>
        <meta
          name="description"
          content="Tablero de administracion de la tienda"
        />
        <link rel="icon" href="/media/logoPatio.png" />
      </Head>
      <Tablero {...props} />
    </>
  );
};

Admin.auth = {
  role: "Admin",
};

export default Admin;

const urlControlSelector = {
  productos: true,
  clientes: true,
};

export const getServerSideProps = async (ctx) => {
  const use = ctx.query.use || false;
  let selector = ctx.query.s?.toLocaleLowerCase();
  const idcajaURL = ctx.query.idc?.toLocaleLowerCase();
  if ((!use && !selector) || !urlControlSelector[selector]) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin?s=productos",
      },
      props: {},
    };
  }

  return {
    props: {
      use,
      selector: selector,
      idcajaURL: idcajaURL || null,
    },
  };
};
