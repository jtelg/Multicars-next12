import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Carousel = ({ arr_imgs }) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper rounded-3xl overflow-hidden md:h-fit w-fill"
      >
        {arr_imgs &&
          arr_imgs.map((img) => (
            <SwiperSlide>
              <img src={img} alt="foto" className="w-full " />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Carousel;
