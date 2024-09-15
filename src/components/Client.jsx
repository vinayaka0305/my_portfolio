import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sativk from "../assets/images/saatvik.webp"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const  Client = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto pb-12">
        <h2 className="text-3xl sm:w-max sm:text-[40px] bg-[#111] relative font-bold px-4 py-2 text-center mx-auto sm:border-2 border-[#1788ae] rounded-md">
          what my clients are saying
        </h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper !py-14">
          <SwiperSlide className="px-4">
            <div class="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src={sativk}
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Saatvik Nagpal
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  Founder, EazyGrad
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4">
          <div class="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src={sativk}
                alt="testimonial 3"
              />
              <div class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p class="text-sm md:text-base mb-2">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2 class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  Saatvik Nagpal
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  Founder, EazyGrad
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        {/* have to stick to same color for the whole website */}
      </section>
    </>
  );
};

export default Client;
