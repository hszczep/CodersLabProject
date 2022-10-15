import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ScssSwiperSlides/SwiperSlides.css";
import { Pagination } from "swiper";

export default function SwiperSlides({ events }) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {events.map((e) => (
          <SwiperSlide>
            <div>
              <h3>{e.description}</h3>
              <br></br>
              <div>
                odbędzie się: <></>{e.startDate}
              </div>
              <div>
                zakończy się: <></>{e.endDate}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
