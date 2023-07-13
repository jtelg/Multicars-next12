import Head from "next/head";
import HomeComponent from "../components/client/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MultiCars </title>
        <meta name="description" content="Autos 0kms & Usados de selección" />
        <link rel="icon" href="/vector.png" />
      </Head>
      <HomeComponent></HomeComponent>
    </div>
  );
}
