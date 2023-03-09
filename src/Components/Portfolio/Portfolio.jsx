import React from "react";
import "./portfolio.css";

import Marketable from "../../Assets/Marketable.png";
import CertifiedCinema from "../../Assets/CertifiedCinemaSS.png";
import Tetris from "../../Assets/Tetris.png";
import SocialSociety from '../../Assets/MyFeed.png';


const data = [
  {
    id: 1,
    image: SocialSociety,
    title: "Social Society",
    github: "https://github.com/nhoang1122/SocialSociety",
    hosted: "https://github.com/nhoang1122/SocialSociety",
    feature: "Features: MongoDB, Express, ReactJS, NodeJS",
    info: "Developed and Deployed a Fully-Responsive MERN Stack Social Media Application!",
  },
  {
    id: 2,
    image: Marketable,
    title: "Marketable Dashboard",
    github: "https://github.com/nhoang1122/DashBoardMarketable",
    hosted: "https://dash-board-marketable.vercel.app/",
    feature: "Features: ReactJS | JavaScript | TailWind",
    info: "Maintained and Developed a Fully-Responsive E-Commerce Dashboard, showing data in a compelling and user-friendly way for users!",
  },
  {
    id: 3,
    image: CertifiedCinema,
    title: "Certified Cinema",
    github: "https://github.com/nhoang1122/CertifiedCinema",
    hosted: "https://certified-cinema.vercel.app/",
    feature: "Features: ReactJS | JavaScript | FireBase",
    info: "Built and Deployed a Full-Stack Movie Application allowing users to browse over 1000+ movies!",
  },
  {
    id: 4,
    image: Tetris,
    title: "Tetris",
    github: "https://github.com/nhoang1122/TETRIS",
    hosted: "https://tetris-weld-pi.vercel.app/",
    feature: "Features: ReactJS | JavaScript | FireBase",
    info: "Kicking it Old School! Have fun living my nostalgia!",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, hosted, feature, info }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <h5>{info}</h5>
                <h5>{feature}</h5>

                <div className="portfolio__item-cta">
                  <a
                    href={hosted}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hosted Site
                  </a>
                  <a
                    href={github}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
