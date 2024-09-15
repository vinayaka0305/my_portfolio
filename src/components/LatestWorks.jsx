import React from "react";
import gaana from "../mockups/Ganna_Desktop.webp";
import linkedin from "../mockups/linkedin.png";

const LatestWorks = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 relative sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        latest works
      </h2>
      {/* projects*/}
      {/*project gaana*/}
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-['80px'] items-center mt-12 sm:mt-8 relative">
        {/* connecting line */}
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        {/* connecting-dot */}
        <div className="w-4 h-4 rounded-full border-[3px] border-[#df3409] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-125 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://gaana-music-site.netlify.app/"
          target="_blank"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={gaana}
              alt=""
            />

            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#df3409] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block sm:after:items-center after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Gaana clone
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
        <div class="w-full">
          <h3 class="text-[#df3409] font-bold text-2xl md:text-4xl">
            {" "}
            Gaana clone
          </h3>
          <span class="text-[#df3409] text-base md:text-lg">(music)</span>
          <p class="text-justify text-sm md:text-base mt-2">
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #figma
            </li>
          </ul>
        </div>
      </div>
      {/*project linkedin*/}
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-['80px'] items-center mt-12 sm:mt-16 relative">
        <div class="w-full">
          <h3 class="text-[#0f69c3] font-bold text-2xl md:text-4xl">Linkedin clone</h3>
          <span class="text-[#0f69c3] text-base md:text-lg">(social media)</span>
          <p class="text-justify text-sm md:text-base mt-2">
            Being a lead developer, revamped the site to a highly responsive,
            and interactive website. Created new features and pages. Worked as a
            team with product manager and ux designer.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #figma
            </li>
          </ul>
        </div>
        {/* connecting line */}
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        {/* connecting-dot */}
        <div className="w-4 h-4 rounded-full border-[3px] border-[#0f69c3] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-125 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://linkedin-react-clone.onrender.com/"
          target="_blank"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img className="max-w-[400px] relative w-full z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.8)]" src={linkedin} alt="" />

            <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#0f69c3] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Linkedin clone
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>
      {/* another project div */}

      {/* center-line section*/}
      <div className="absolute w-[2px] bg-[#1788ae] top-0 bottom-0 left-1/2 -translate-x-1/2 hidden sm:block"></div>
    </section>
  );
};

export default LatestWorks;
