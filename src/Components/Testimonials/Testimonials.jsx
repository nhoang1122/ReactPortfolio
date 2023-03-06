import React from "react";
import "./testimonials.css";
import Andrew from "../../Assets/AndrewSmith.jpg";
import Lukas from "../../Assets/Lukas.jpg";
import Freddy from '../../Assets/FreddyS.webp'

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    avatar: Andrew,
    name: "Andrew J.Smith",
    review:
      "Nhat is an excellent developer who is both easy to work with and able to get the job done! I had the pleasure of working with him for several months, and was able to take a good look into how he learns and thinks about code. He is excellent in every regard, and is not afraid to let his awesome personality shine through. His curiosity and drive to succeed in whatever project he is working on are sure to make him a coveted addition to any team. Watch out, tech industry - Nhat is here, and he is in it to win it!",
  },
  {
    avatar: Lukas,
    name: "Lukas Nesittka",
    review:
      "Nhat is a brilliant, up-and-coming software engineer. He’s got an incredible work ethic, curious mind, and beams with a go-getter attitude. Don’t sleep on this developer. Friendly, and personable, he’s the star of your dream team.",
  },
  {
    avatar: Freddy,
    name: "Freddy Sandoval",
    review:
      "Working with John was truly a pleasure. He is a very intelligent and driven individual who loves to learn. John not only brings fresh ideas but also positivity to the team. If given the chance I would love to work with him again!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container" 
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 client__name>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
