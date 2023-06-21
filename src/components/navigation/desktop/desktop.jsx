import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Desktop = ({ items }) => {
  const router = useRouter();

  return (
    <div className="md:flex hidden  fixed top-0 left-0 w-full z-[100] ">
      <div className=" flex justify-between items-center w-full z-[100] relative bg-black h-full px-14 py-2   ">
        <Link href="/" className="md:w-[30%] ">
          <img
            src="/media/logo.png"
            alt="logo"
            className="md:w-[200px] w-[170px] bg-black"
          />
        </Link>
        <nav className=" ">
          <ul className="flex gap-8">
            {items.map((e, i) => (
              <li key={i} className="font-medium bg-black">
                <Link
                  href={e.route}
                  className={`text-white hover:text-primary font-bold text-sm uppercase  bg-black ${
                    router.pathname === e.route ? "text-primary" : "text-white"
                  }`}
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Desktop;
