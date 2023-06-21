import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BurgerButton from "./burgerButton";

const MobileNav = ({ items }) => {
  const router = useRouter();

  return (
    <div className="md:hidden h-[75px] fixed top-0 left-0 w-full z-[100] ">
      <div className=" flex justify-between items-center w-full z-[100] relative bg-black h-full px-5 py-3   ">
        <Link href="/" className="md:w-[30%] ">
          <img
            src="/media/logo.png"
            alt="logo"
            className="md:w-[200px] w-[170px] bg-black"
          />
        </Link>
        <BurgerButton></BurgerButton>
      </div>
      <nav className="menuppal ">
        <ul>
          {items.map((e, i) => (
            <li key={i} className="font-medium bg-black">
              <Link
                href={e.route}
                className={`${
                  router.pathname === e.route ? "text-primary" : "text-white"
                } font-bold text-xl bg-black`}
              >
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        .menuppal.is_active {
          transform: translate3d(0px, 0px, 0px);
          top: 70px;
          z-index: 50;
        }
        .menuppal {
          border-radius: 10% 0% 29% 0% / 0% 49% 38% 31%;
          background-color: #000000;
          bottom: 0;
          width: 100%;
          height: fit-content;
          left: 0;
          overflow-y: scroll;
          position: fixed;
          top: 70px;
          transform: translate3d(0px, -100%, 0px);
          transition: transform 0.35s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;
          z-index: 0;
          padding-bottom: 2rem;
        }
        .menuppal ul {
          margin: 0;
          padding: 0;
        }
        .menuppal ul li {
          list-style: none;
          text-align: center;
          font-size: 1.5rem;
          line-height: 2em;
          color: white;
          text-transform: none;
        }
        .menuppal ul li a {
          text-decoration: none;
          color: white;
        }
        .menuppal ul li a:hover {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default MobileNav;
