// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Style from "./Aboutbot.module.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Aboutbot = () => {
  return (
    <>
      <div className={Style.Slider_Wrapper}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={Style.mySwiper}>
          <SwiperSlide className={Style.Slider}>Slide 1</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 2</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 3</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Aboutbot;
