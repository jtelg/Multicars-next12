import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Dialog, DialogBody, Card } from "@material-tailwind/react";

const Carousel = ({ arr_imgs }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(() => !open);
  };

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
        onClick={() => handleOpen()}
      >
        {arr_imgs &&
          arr_imgs.map((img, i) => (
            <SwiperSlide key={i}>
              <Card>
                <img src={img} alt="foto" className="w-full " />
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogBody divider={true} className="p-0">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper overflow-hidden md:h-fit w-fill"
            onClick={() => handleOpen(arr_imgs[0])}
          >
            {arr_imgs &&
              arr_imgs.map((img, i) => (
                <SwiperSlide key={i}>
                  <Card>
                    <img src={img} alt="foto" className="w-full " />
                  </Card>
                </SwiperSlide>
              ))}
          </Swiper>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default Carousel;
