import React from "react";
import MobileNav from "./mobile/mobile";
import Desktop from "./desktop/desktop";

const navigateItems = [
  { label: "Home", route: "/" },
  { label: "Vehículos", route: "/vehiculos" },
  { label: "Vendé tu auto", route: "/vende" },
  { label: "Financiación", route: "/financiacion" },
  { label: "Nosotros", route: "/nosotros" },
];

const Navigation = (props) => {
  return (
    <>
      <div>
        <MobileNav items={navigateItems} />
        <Desktop items={navigateItems} />
      </div>
      <div className="bg-gray-50 w-full">{props.children}</div>
    </>
  );
};

export default Navigation;
