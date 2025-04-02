import React from "react";
import { createPortal } from "react-dom";
import xicon from "../assets/icons/x.svg";
import bgImg from "../assets/images/bg.png";

const AboutMe = ({ isOpen, setIsOpen }) => {
  return createPortal(
    <section
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 flex items-center justify-center z-50 
      ${isOpen ? "opacity-100" : "opacity-0 hidden"} cursor-pointer`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="relative w-[90%] max-w-screen-lg bg-[#191919]/90 rounded-xl p-8 shadow-2xl 
        border border-[#2996fb]/50 cursor-default"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[#27292d] 
          rounded-full transition-all duration-200 hover:scale-110 hover:shadow-[0_0_10px_#2996fb] 
          cursor-pointer"
        >
          <img src={xicon} alt="Close" className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2
            className="text-[#2996fb] text-3xl md:text-4xl font-bold font-['Luckiest+Guy',cursive] 
            tracking-wider uppercase mb-4"
          >
            About Me
          </h2>
          <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
            I'm a passionate{" "}
            <span className="text-[#5abfff] font-bold">
              MERN Stack Developer
            </span>{" "}
            with hands-on experience in building{" "}
            <span className="text-[#ff3cac] font-semibold">scalable</span> and{" "}
            <span className="text-[#d100d1] font-semibold">efficient</span> web
            applications. I specialize in{" "}
            <span className="text-[#2996fb] font-bold">
              React, Node.js, Express, and MongoDB
            </span>
            , delivering high-performance and intuitive user experiences.
          </p>

          {/* Tech Stack */}
          <ul className="flex flex-wrap justify-center mt-6">
            {[
              "#JavaScript",
              "#React.js",
              "#NodeJS",
              "#ExpressJS",
              "#MongoDB",
              "#TailwindCSS",
              "#MaterialUI",
              "#Bootstrap",
              "#GitHub",
              "#APIs",
            ].map((tech, index) => (
              <li
                key={index}
                className="border border-gray-600 px-3 py-1 rounded-full m-2 
                text-white text-sm font-semibold transition-transform duration-300 
                hover:scale-110 hover:shadow-[0px_0px_10px_#2996fb] cursor-pointer"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Animated CTA Button */}
          <a
            href="https://wa.me/8749018405?text=Hello! I'm from ur portfolio....."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-6 px-6 py-2 bg-gradient-to-r from-[#2996fb] to-[#005bbb] 
      text-white font-bold rounded-lg shadow-lg transition-all duration-300 
      hover:scale-105 hover:shadow-[0_0_20px_#5abfff] active:scale-95 cursor-pointer"
            >
              Let's Connect!
            </button>
          </a>
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
};

export default AboutMe;
