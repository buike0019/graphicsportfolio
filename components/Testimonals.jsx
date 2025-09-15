"use client"; // ✅ keep this at the top

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ⬅️ Add Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "I rarely like to write reviews, but the itemstore team truly deserve a standing ovation for their customer support, lorem kkodko omowmowdkwkwodko okwod customisation and most importantly, friendliness and professionalism.",
    name: "Mike Anderson",
    company: "Vivaco Studio",
  },
  {
    quote:
      "Amazing service and quick turnaround. The team was professional, responsive, and delivered beyond expectations.",
    name: "Sophie Turner",
    company: "BrandCraft",
  },
  {
    quote:
      "The attention to detail and commitment to quality is impressive. Highly recommend working with them!",
    name: "Liam Carter",
    company: "Nova Designs",
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="bg-[#f8fafd] py-20 px-4 sm:px-8 lg:px-16 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase">
          Testimonial
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // ⬅️ Add Autoplay here
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }} // ⬅️ Autoplay config
          className="pb-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="text-gray-600 text-lg italic px-6 md:px-12">
                <i className="fas fa-quote-left text-2xl text-blue-600 mr-2"></i>
                {t.quote}
                <i className="fas fa-quote-right text-2xl text-blue-600 ml-2"></i>
              </div>
              <div className="text-blue-800 font-semibold mt-6">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.company}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
