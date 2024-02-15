import React from "react";
import { motion } from "framer-motion";
import { MsAzure, cSharp, css, gitLogo, mongodbicon, restftulapi } from "../assets/Images";
import { tailwind } from "../assets/Images";
import { html } from "../assets/Images";
import { javascript } from "../assets/Images";
import { react } from "../assets/Images";
import { node } from "../assets/Images";
import { nextjs } from "../assets/Images";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: react,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
    {
      id: 9,
      title: "Git",
      src: gitLogo,
    },
    {
      id: 10,
      title: "MongoDb",
      src: mongodbicon,
    },
    {
      id: 11,
      title: "REST Api",
      src: restftulapi,
    },
    {
      id: 12,
      title: "C#",
      src: cSharp,
    },
    {
      id: 13,
      title: "Ms Azure",
      src: MsAzure,
    },
  ];

  return (
    <div id="experience">
      <div className="row mt-3">
        <div className="col-12 text-center">
          <h2 className="py-3 text-capitalize fw-bold border-bottom border-gray-400">
            experience
          </h2>
          <p className="py-3 max-w-lg fw-normal h6">These are the web technologies I have worked with;</p>
        </div>
      </div>

      <div className="row gap-4 align-items-center justify-content-center">
        {experiences.map(({ id, title, src }) => (
          <motion.div
            key={id}
            className="col-12 col-md-3 pb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <div
              className="d-flex align-items-center justify-content-between gap-10 lg-gap-0 items-center justify-between p-2 shadow-lg rounded-3 hover-scale-105 ease-in duration-300
              odd-shadow-green-400 even-shadow-yellow-400"
            >
              <img src={src} width="64px" height="64px" alt={title} />
              <h3 className="fw-light px-3">{title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
