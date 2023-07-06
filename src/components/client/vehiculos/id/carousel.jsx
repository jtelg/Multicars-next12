import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  Typography,
  Card,
} from "@material-tailwind/react";

const Carousel = ({ arr_imgs }) => {
  const [open, setOpen] = useState(false);
  const [imgSelect, setImgSelect] = useState(arr_imgs[0]);
  const handleOpen = (img) => {
    setImgSelect(img);
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
      >
        {arr_imgs &&
          arr_imgs.map((img, i) => (
            <SwiperSlide key={i}>
              <Card onClick={() => handleOpen(img)}>
                <img src={img} alt="foto" className="w-full " />
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="square"
              alt="candice wu"
              src="/vector.png"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Multicars
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                @multicars.vm
              </Typography>
            </div>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0">
          <img
            alt=""
            className=" w-full object-cover object-center"
            src={imgSelect}
          />
        </DialogBody>
        <DialogFooter>
          <div></div>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Carousel;
