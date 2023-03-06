import React from "react";
import "./skills.css";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";

import {BiGitBranch} from 'react-icons/bi'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaAws} from 'react-icons/fa'
import {SiDocker} from 'react-icons/si'
import {SiPostman} from 'react-icons/si'
import {TbBrandVscode} from 'react-icons/tb'


const Skills = () => {
  return (
    <section id="skills">
      <h5>My Tech Stack</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__fullstack">
          <h3>FullStack Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaReact className="skills__details-icon"/>
              <h4>ReactJS</h4>
            </article>
            <article className="skills__details">
              <FaNodeJs className="skills__details-icon"/>
              <h4>NodeJS</h4>
            </article>
            <article className="skills__details">
              <SiJavascript className="skills__details-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              <FaHtml5 className="skills__details-icon"/>
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              <SiCss3 className="skills__details-icon"/>
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
              <BsDatabase className="skills__details-icon"/>
              <h4>SQL</h4>
            </article>
          </div>
        </div>
        <div className="skills__tools">
          <h3>Tools & Platforms</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BiGitBranch className="skills__details-icon"/>
              <h4>Git</h4>
            </article>
            <article className="skills__details">
              <AiOutlineGithub className="skills__details-icon"/>
              <h4>GitHub</h4>
            </article>
            <article className="skills__details">
              <FaAws className="skills__details-icon"/>
              <h4>AWS</h4>
            </article>
            <article className="skills__details">
              <SiDocker className="skills__details-icon"/>
              <h4>Docker</h4>
            </article>
            <article className="skills__details">
              <SiPostman className="skills__details-icon"/>
              <h4>PostMan</h4>
            </article>
            <article className="skills__details">
              <TbBrandVscode className="skills__details-icon"/>
              <h4>VS Code</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
