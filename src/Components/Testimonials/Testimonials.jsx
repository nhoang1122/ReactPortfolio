import React from "react";
import "./testimonials.css";
import Katie from "../../Assets/Katie.jpg";
import Erica from "../../Assets/Erica.jpg"
import Andrew from "../../Assets/AndrewSmith.jpg";
import Lukas from "../../Assets/Lukas.jpg";
import Freddy from '../../Assets/FreddyS.webp';
import Wyatt from '../../Assets/WyattHoff.jpg';
import Yafreisy from '../../Assets/Yafreisy.jpg';
import Hunter from  '../../Assets/Hunter.jpg';

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    avatar: Katie,
    name: "Katie Schooling",
    review: 
      "I can't say enough great things about John, his work ethic, and his dedication to the teams he joins. I know his dedication to learning and personal development because I've seen it first-hand, and I have been fortunate enough to experience his kindness and go-get-'em attitude in the workplace as well. John is a WONDERFUL contributor and partner, and I'm so grateful for the opportunity I've had to work with him!",
  },
  {
    avatar: Erica,
    name: "Erica Guarnieri",
    review: 
      "Working with John was a true pleasure. His positive attitude and optimistic outlook created a motivating atmosphere within the team and for our students. John has excellent interpersonal skills. He quickly built strong relationships with our students, earning their trust and fostering successful completion of the bootcamp experience. I would highly recommend John for a educational role in the software engineer field.",
  },
  {
    avatar: Andrew,
    name: "Andrew J. Smith",
    review:
      "Nhat is an excellent developer who is both easy to work with and able to get the job done! I had the pleasure of working with him for several months, and was able to take a good look into how he learns and thinks about code. He is excellent in every regard, and is not afraid to let his awesome personality shine through. His curiosity and drive to succeed in whatever project he is working on are sure to make him a coveted addition to any team. Watch out, tech industry - Nhat is here, and he is in it to win it!",
  },
  {
    avatar: Yafreisy,
    name: "Yafreisy Santana M.",
    review:
      "John, is an excellent developer who is easy to work with and very kind! I had the pleasure of getting to know him for a role I was working on and was able to take a good look into how he learns and thinks about code. He is excellent in every regard, and is not afraid to let his awesome personality shine through and of the challenges. His curiosity and drive I believe will spark to succeed in whatever project he decides to join and definitely will make him a coveted addition to any team. Watch out, Tech industry!!!! John is on the way!!!!",
  },
  {
    avatar: Wyatt,
    name: "Wyatt Hoffman",
    review:
      "John is a sharp guy, combine that with his persistence and it makes him the ultimate combination. I have nothing but respect for the amount of time he pours into his work, his accountability, and the effort he makes day in and day out to achieve his goals. I would 100% recommend him for any dev team as he would make an instant impact.",
  },
  {
    avatar: Hunter,
    name: "Hunter HerrNeckar",
    review:
      "I was able to watch John learn and grow into the Software Engineer that he is now, and I must say that John is an extremely hardworking and determined individual. He as put forth vast amounts of effort in learning new information and created some great looking projects utilizing his coding abilities. Not only is he capable of doing the work, he also would make a fantastic colleague as he is collaborative, communicative, team-oriented, and determined. I highly recommend John to be a part of anyone's team!!",
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
