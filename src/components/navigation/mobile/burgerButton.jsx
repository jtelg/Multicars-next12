import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BurgerButton = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isActive) {
      document.querySelector(".menuppal").classList.toggle("is_active");
    } else {
      document.querySelector(".menuppal").classList.remove("is_active");
    }
  }, [isActive]);

  useEffect(() => {
    setIsActive(false);
  }, [router]);

  const handlerMenuOpen = (event) => {
    event.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <>
      <button
        onClick={handlerMenuOpen}
        className={`hamburger ${isActive ? "is-active" : ""}`}
      >
        <div className="_layer -top"></div>
        <div className="_layer -mid"></div>
        <div className="_layer -bottom"></div>
      </button>
      <style jsx>{`
        .hamburger {
          background-color: transparent;
          height: 35px;
          width: 35px;
          padding: 10px 0px;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-transition: -webkit-transform 0.25s
            cubic-bezier(0.05, 1.04, 0.72, 0.98);
          transition: transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
          z-index: 100;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .hamburger.is-active {
          background-color: none;
        }
        ._layer {
          background: white;
          margin-bottom: 4px;
          border-radius: 2px;
          width: 36px;
          height: 4px;
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-transition: all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
          transition: all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
        }

        .hamburger.is-active .-top {
          -webkit-transform: translateY(200%) rotate(45deg) !important;
          -ms-transform: translateY(200%) rotate(45deg) !important;
          transform: translateY(200%) rotate(45deg) !important;
        }
        .hamburger.is-active .-mid {
          opacity: 0;
        }
        .hamburger.is-active .-bottom {
          -webkit-transform: translateY(-200%) rotate(135deg) !important;
          -ms-transform: translateY(-200%) rotate(135deg) !important;
          transform: translateY(-200%) rotate(135deg) !important;
        }
      `}</style>
    </>
  );
};

export default BurgerButton;
