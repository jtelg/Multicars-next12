import React from "react";

const WppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[120]">
      <a
        className="bg-green-500 text-white rounded-full  flex items-center justify-center"
        href="https://wa.me/5493534221463"
        title="Comunicate con nosotros por whatsapp!"
        id="wppbtn"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-whatsapp text-[2.5rem] p-[.5rem] "></i>
      </a>
    </div>
  );
};

export default WppButton;
