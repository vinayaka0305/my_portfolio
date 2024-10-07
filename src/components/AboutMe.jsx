import React from "react";
import { createPortal } from "react-dom";
import xicon from "../assets/icons/x.svg";

const AboutMe = ({ isOpen, setIsOpen }) => {
  return createPortal(
    <section
      onClick={() => setIsOpen(false)}
      className={`pointer-events-all flex-col md:flex-row z-10 w-[90%] mx-auto my-16 max-w-screen-xl fixed inset-0 flex bg-[#191919]/95 rounded-[10px] cursor-pointer ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="w-[30px] absolute rounded-[50%] bg-[#27292d] h-[30px] top-[15px] right-[15px] flex items-center justify-center cursor-pointer">
        <img src={xicon} alt="x-icon" onClick={() => setIsOpen(false)} />
      </div>
      <div className="max-w-full flex mt-10 md:mt-0 items-center justify-center">
        <div className="w-full sm:w-[65%] md:w-[75%] mx-auto md:px-0 px-6">
          <h2 className="text-[#1788ae] font-extrabold">ABOUT ME</h2>
          <p className="my-2 text-sm sm:text-base lg:text-base font font-semibold">
            Proficient in web development using HTML, CSS, JavaScript, and
            React. I have hands-on experience from practical projects and
            exercises, allowing me to create user-friendly web applications. I’m
            passionate about building effective solutions that improve the user
            experience.
          </p>
          <ul className="flex flex-wrap mt-4 font-semibold">
            <li className="border border-gray-600 px-3 py-1 rounded-full mb-2 mr-2">
              #javascript
            </li>
            <li className="border border-gray-600 px-3 py-1 rounded-full mb-2 mr-2">
              #react.js
            </li>
            <li className="border border-gray-600 px-3 py-1 rounded-full mb-2 mr-2">
              #html
            </li>
            <li className="border border-gray-600 px-3 py-1 rounded-full mb-2 mr-2">
              #css
            </li>
            <li className="border border-gray-600 px-3 py-1 rounded-full mb-2 mr-2">
              #bootstrap
            </li>
            <li className="border border-gray-600 px-3 py-1 rounded-full mb-2 mr-2">
              #tailwind
            </li>
            <li className="border border-gray-600 px-3 py-1 rounded-full mb-2 mr-2">
              #material ui
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="flex relative min-w-80 sd:max-w-full items-center justify-center">
          <svg
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-[600px] md:h-[400px] w-[600px] h-[200px]  top-1"
          >
            <path fill="transparent" d="M0 0h900v600H0z" />
            <rect
              x="497.551"
              y="135.737"
              width="287.503"
              height="108.825"
              rx="22.048"
              fill="#fff"
              stroke="#E1E4E5"
              stroke-width="2.321"
            />
            <rect
              x="579.715"
              y="168.709"
              width="176.687"
              height="13.051"
              rx="6.525"
              fill="url(#a)"
            />
            <rect
              x="579.715"
              y="197.822"
              width="114.445"
              height="13.051"
              rx="6.525"
              fill="url(#b)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M542.323 218.167c-15.363 0-27.818-12.631-27.818-28.21s12.455-28.21 27.818-28.21c15.362 0 27.817 12.631 27.817 28.21s-12.455 28.21-27.817 28.21z"
              fill="#1A729F"
            />
            <path
              d="m552.118 185.255-11.752 12.538-7.055-7.521"
              stroke="#fff"
              stroke-width="4.381"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M459.482 324.443v131.29c0 9.591-7.775 17.348-17.364 17.348H132.524c-9.589 0-17.364-7.757-17.364-17.348v-131.29c0-9.594 7.777-17.374 17.364-17.374h309.594c9.587 0 17.364 7.78 17.364 17.374z"
              fill="#fff"
              stroke="#E1E4E5"
              stroke-width="2.321"
            />
            <path
              d="M234.053 460.812h-91.201c-6.905 0-12.521-5.62-12.521-12.528v-91.256c0-6.908 5.616-12.528 12.521-12.528h91.201c6.904 0 12.521 5.62 12.521 12.528v91.256c0 6.934-5.617 12.528-12.521 12.528z"
              fill="#1A729F"
            />
            <path
              d="M459.482 324.443a4.357 4.357 0 0 1-4.357 4.356H119.517a4.357 4.357 0 0 1-4.357-4.356c0-9.594 7.777-17.374 17.364-17.374h309.594c9.587 0 17.364 7.78 17.364 17.374z"
              fill="#fff"
              stroke="#E1E4E5"
              stroke-width="2.321"
            />
            <path
              d="M137.529 318.361a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.511-3.513 3.52 3.52 0 0 1 3.507-3.514c1.945.024 3.515 1.588 3.515 3.514zm13.568-.001a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.51-3.514 3.519 3.519 0 0 1 3.506-3.513c1.945.023 3.515 1.588 3.515 3.513zm13.568 0a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.511-3.514 3.52 3.52 0 0 1 3.507-3.513c1.968.023 3.515 1.585 3.515 3.513z"
              fill="#E1E4E5"
              stroke="#E1E4E5"
              stroke-width="1.583"
            />
            <rect
              x="256.152"
              y="346.524"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#c)"
            />
            <rect
              x="256.152"
              y="425.432"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#d)"
            />
            <rect
              x="256.152"
              y="385.978"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#e)"
            />
            <rect
              x="322.876"
              y="385.978"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#f)"
            />
            <rect
              x="389.601"
              y="385.978"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#g)"
            />
            <rect
              x="357.109"
              y="346.524"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#h)"
            />
            <rect
              x="357.109"
              y="425.432"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#i)"
            />
            <path
              d="m168.682 415.543-13.175-13.176 13.175-13.175m39.527 0 13.176 13.175-13.176 13.176m-14.65-32.938-10.982 39.527"
              stroke="#fff"
              stroke-width="9.389"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M784.569 277.058v131.289c0 9.592-7.775 17.349-17.363 17.349H457.611c-9.589 0-17.363-7.757-17.363-17.349V277.058c0-9.594 7.776-17.375 17.363-17.375h309.595c9.586 0 17.363 7.781 17.363 17.375z"
              fill="#fff"
              stroke="#E1E4E5"
              stroke-width="2.321"
            />
            <path
              d="M559.14 413.427h-91.201c-6.905 0-12.521-5.62-12.521-12.529v-91.255c0-6.909 5.616-12.529 12.521-12.529h91.201c6.904 0 12.521 5.62 12.521 12.529v91.255c0 6.935-5.617 12.529-12.521 12.529z"
              fill="url(#j)"
            />
            <path
              d="M784.569 277.058a4.357 4.357 0 0 1-4.356 4.356H444.604a4.356 4.356 0 0 1-4.356-4.356c0-9.594 7.776-17.375 17.363-17.375h309.595c9.586 0 17.363 7.781 17.363 17.375z"
              fill="#fff"
              stroke="#E1E4E5"
              stroke-width="2.321"
            />
            <path
              d="M462.616 270.975a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.511-3.513 3.52 3.52 0 0 1 3.506-3.514c1.946.024 3.516 1.588 3.516 3.514zm13.568-.001a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.511-3.514 3.52 3.52 0 0 1 3.507-3.513c1.945.023 3.515 1.588 3.515 3.513zm13.568 0a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.51-3.514 3.52 3.52 0 0 1 3.506-3.513c1.968.023 3.515 1.585 3.515 3.513z"
              fill="#E1E4E5"
              stroke="#E1E4E5"
              stroke-width="1.583"
            />
            <rect
              x="581.239"
              y="299.138"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#k)"
            />
            <rect
              x="581.239"
              y="378.047"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#l)"
            />
            <rect
              x="581.239"
              y="338.592"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#m)"
            />
            <rect
              x="647.963"
              y="338.592"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#n)"
            />
            <rect
              x="714.687"
              y="338.592"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#o)"
            />
            <rect
              x="682.196"
              y="299.138"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#p)"
            />
            <rect
              x="682.196"
              y="378.047"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#q)"
            />
            <path
              d="m493.769 368.157-13.176-13.175 13.176-13.176m39.527 0 13.176 13.176-13.176 13.175m-14.651-32.937-10.982 39.526"
              stroke="#fff"
              stroke-width="9.389"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M482.623 132.697v131.289c0 9.592-7.774 17.349-17.363 17.349H155.665c-9.588 0-17.363-7.757-17.363-17.349V132.697c0-9.594 7.777-17.375 17.363-17.375H465.26c9.587 0 17.363 7.781 17.363 17.375z"
              fill="#fff"
              stroke="#E1E4E5"
              stroke-width="2.321"
            />
            <path
              d="M257.195 269.065h-91.201c-6.905 0-12.521-5.619-12.521-12.528v-91.256c0-6.908 5.616-12.528 12.521-12.528h91.201c6.904 0 12.521 5.62 12.521 12.528v91.256c0 6.935-5.617 12.528-12.521 12.528z"
              fill="#1A729F"
            />
            <path
              d="M482.623 132.697a4.356 4.356 0 0 1-4.356 4.356H142.658a4.357 4.357 0 0 1-4.356-4.356c0-9.594 7.777-17.375 17.363-17.375H465.26c9.587 0 17.363 7.781 17.363 17.375z"
              fill="#fff"
              stroke="#E1E4E5"
              stroke-width="2.321"
            />
            <path
              d="M160.671 126.613a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.511-3.514 3.52 3.52 0 0 1 3.507-3.513c1.945.024 3.515 1.588 3.515 3.513zm13.569.001a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.511-3.513 3.52 3.52 0 0 1 3.506-3.514c1.946.024 3.516 1.588 3.516 3.514zm13.567 0a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.51-3.513 3.52 3.52 0 0 1 3.506-3.514c1.968.024 3.515 1.585 3.515 3.514z"
              fill="#E1E4E5"
              stroke="#E1E4E5"
              stroke-width="1.583"
            />
            <rect
              x="279.294"
              y="154.777"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#r)"
            />
            <rect
              x="279.294"
              y="233.686"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#s)"
            />
            <rect
              x="279.294"
              y="194.231"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#t)"
            />
            <rect
              x="346.019"
              y="194.231"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#u)"
            />
            <rect
              x="412.743"
              y="194.231"
              width="49.898"
              height="31.912"
              rx="15.956"
              fill="url(#v)"
            />
            <rect
              x="380.251"
              y="154.777"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#w)"
            />
            <rect
              x="380.251"
              y="233.686"
              width="82.39"
              height="31.912"
              rx="15.956"
              fill="url(#x)"
            />
            <path
              d="m191.824 223.796-13.175-13.175 13.175-13.176m39.527 0 13.176 13.176-13.176 13.175m-14.65-32.938-10.982 39.527"
              stroke="#fff"
              stroke-width="9.389"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="m418.888 313.175 13.538-4.118 58.854-1.732 13.273 3.623-1.732 32.343-30.028 19.159-29.126-.583-18.31-16.684-4.065-16.543-2.404-15.465z"
              fill="#F8AE9D"
            />
            <path
              d="M588.805 365.188c-4.26-8.783-8.342-15.835-11.983-21.403a53.345 53.345 0 0 0-30.717-22.357l-48.002-13.008s-2.492 47.967-35.507 47.967-39.448-44.98-39.448-44.98l-55.549 22.163c-1.909.742-14.793 5.196-29.78 37.345-14.281 30.611-20.52 46.287-20.52 46.287l57.228 16.526 3.57 51.466-1.219 29.391 173.698-.389-.972-33.598.725-51.519 2.174 3.517 57.811-23.188s-7.441-15.27-21.509-44.22z"
              fill="#1A729F"
            />
            <path
              d="M456.987 330.287c14.088-.259 30.092-27.739 30.092-27.739l.919-70.587c.736-20.33-11.911-37.652-34.705-37.748l-2.116.096c-21.216 1.011-38.017 16.378-38.584 35.314-.536 17.622-.858 37.091-.168 46.497 1.441 19.469 23.653 16.183 23.653 16.183.046 0-.061 9.807 0 15.536.168 12.865 15.253 22.886 20.909 22.448z"
              fill="#F8AE9D"
            />
            <path
              d="M480.959 235.833c.388-.184 15.562-5.252 15.901 9.736.339 14.989-15.546 12.225-15.578 11.795-.032-.43-.323-21.531-.323-21.531zM322.231 418.635l-23.277 46.712a34.065 34.065 0 0 0-3.535 16.843c.884 18.133 15.854 32.396 34.005 32.396l67.297-1.058 2.373-33.265-50.794-12.248 19.246-36.39-45.315-12.99zm285.132-8.041s14.439 42.894 30.187 81.882c.318.778.671 2.227.954 3.023 3.552 9.667-7.14 19.087-17.939 19.087l-91.003-.159v-29.586l56.61-12.018-20.502-45.528 41.693-16.701z"
              fill="#F8AE9D"
            />
            <path
              d="M424.968 483.48c.017.106 2.085-.548 5.532-.76 3.428-.23 8.289.159 13.131 2.227 4.843 2.068 8.501 5.302 10.693 7.935 2.227 2.634 3.181 4.595 3.27 4.525.035-.018-.177-.513-.654-1.361a26.731 26.731 0 0 0-2.316-3.411c-2.156-2.74-5.832-6.098-10.781-8.201-4.948-2.103-9.915-2.456-13.379-2.103a25.339 25.339 0 0 0-4.065.689c-.936.23-1.449.424-1.431.46zm3.11-7.158c.036.141 2.139-.901 5.762-1.007 3.606-.16 8.678.936 13.415 3.799 4.736 2.881 8.289 6.522 10.798 9.138 1.202 1.272 2.192 2.333 2.969 3.146.707.742 1.096 1.149 1.132 1.113.035-.018-.319-.477-.973-1.255a105.506 105.506 0 0 0-2.827-3.269c-2.457-2.687-5.992-6.416-10.817-9.35-4.825-2.916-10.038-3.976-13.715-3.711-1.838.106-3.305.442-4.277.777-.495.142-.848.318-1.095.425-.248.106-.372.176-.372.194z"
              fill="#EB996E"
            />
            <path
              d="M548.702 479.414h-13.061s-29.48-10.657-35.542-9.632c-5.461.919-25.45 14.192-29.374 16.825-.442.301-.76.707-.954 1.202a4.281 4.281 0 0 0 2.386 5.444l.406.177-.176.6a7.146 7.146 0 0 0-.301 2.386c.141 2.811 3.924 3.659 5.355 1.238l-.76 1.343a3.342 3.342 0 0 0-.424 1.785l.071 1.219a3.28 3.28 0 0 0 2.262 2.934 3.243 3.243 0 0 0 3.429-.901c2.527-2.793 8.006-8.378 11.718-8.996 3.287-.548 8.783-.619 12.106-.601a4.078 4.078 0 0 1 3.8 2.616c-2.192.159-17.515 8.147-22.941 11.01-1.679.884-2.934 2.475-3.146 4.366-.194 1.697.654 3.482 4.012 2.686 7.211-1.679 20.166-7.635 20.166-7.635s6.681-1.909 11.011 1.149c6.097 4.295 8.89 5.868 14.121 4.136 5.232-1.732 9.085-4.224 9.085-4.224l10.304-1.025c.035 0 9.773-24.355-3.553-28.102z"
              fill="#F8AE9D"
            />
            <path
              d="M509.766 484.398c-.018.106-2.085-.547-5.532-.76-3.429-.229-8.289.16-13.131 2.227-4.843 2.068-8.502 5.302-10.693 7.936-2.227 2.633-3.181 4.595-3.27 4.524-.035-.017.177-.512.654-1.361a26.598 26.598 0 0 1 2.315-3.411c2.157-2.739 5.833-6.097 10.781-8.2 4.949-2.103 9.915-2.457 13.38-2.103 1.732.159 3.128.441 4.064.689.937.247 1.45.424 1.432.459zm-3.111-7.157c-.035.141-2.138-.902-5.761-1.008-3.606-.159-8.678.937-13.415 3.8-4.736 2.881-8.289 6.522-10.798 9.137-1.202 1.273-2.192 2.333-2.97 3.146-.707.743-1.095 1.149-1.131 1.114-.035-.018.318-.477.972-1.255.654-.795 1.609-1.909 2.828-3.27 2.457-2.686 5.991-6.415 10.816-9.349 4.825-2.916 10.039-3.977 13.715-3.712 1.838.106 3.305.442 4.277.778.495.141.849.318 1.096.424.248.106.371.177.371.195z"
              fill="#EB996E"
            />
            <path
              d="M531.029 515.416H393.898a7.263 7.263 0 0 1-7.264-6.964l-4.118-94.378c-.177-4.135 3.128-7.6 7.264-7.6h145.102c4.135 0 7.44 3.447 7.281 7.583l-3.853 94.395c-.159 3.889-3.375 6.964-7.281 6.964z"
              fill="#31446C"
            />
            <path
              d="M476.188 462.692c0 7.754-6.27 14.023-14.024 14.023s-14.023-6.269-14.023-14.023 6.269-14.024 14.023-14.024 14.024 6.303 14.024 14.024z"
              fill="#fff"
            />
            <path fill="#F8AE9D" d="M475.657 263.141h12.372v53.021h-12.372z" />
            <path
              d="M480.513 215.764c-2.229 2.877-6.161 3.511-9.399 4.08-4.354.764-6.508 2.356-8.768 6.63-1.431 2.731-2.862 5.721-5.423 7.2-2.082 1.207-2.006-1.871-2.336-4.255a5.494 5.494 0 0 0-.128-.627c-.504-1.903-2.529-1.578-3.124.299-.542 1.69-1.702 3.12-3.179 3.917-.241.13-.497.243-.753.195-.346-.049-.617-.374-.843-.667-.474-.612-.944-1.39-1.43-2.214-1.597-2.708-4.62-1.74-6.404.849-1.114 1.609-2.44 3.267-4.263 3.641-.587.13-1.325.032-1.596-.537-.347-.698.195-1.397.105-2.112-.075-.667-.362-.959-.678-1.528-1.241-2.207-4.082-2.287-5.828-.454a64.452 64.452 0 0 1-3.798 3.672c-.557.487-1.371.975-1.928.487-.301-.26-.376-.698-.437-1.121-.316-2.064-.617-4.128-.934-6.192-.18-1.154-.798-2.665-1.853-2.373-.512.147-.813.683-1.099 1.17-.347.618-6.538 7.655-6.658 7.119-.965-3.998-2.938-7.639-3.902-11.637-6.236-25.726 21.436-46.415 42.57-46.529 4.7-.032 8.994.044 13.558 1.133 4.866 1.17 10.002 3.028 14.416 5.644 6.191 3.657 10.876 10.304 9.671 18.235"
              fill="#31446C"
            />
            <path
              d="M469.398 207.068c-3.109 3.414-3.933 8.218-4.222 12.756-.427 6.844.152 13.954 3.414 20.029.93 1.73 1.616 10.288 3.049 9.815.458-.147.381-6.784 1.586-10.362 1.859-5.543 10.427-7.656 14.283-4.153 6.159 5.572 2.546 12.342.503 16.555-1.219 2.543-3.155 5.396-3.491 8.086-.411 3.444-.533 15.994 1.784 18.92 1.936 2.454 3.994-9.401 5.747-11.736 12.973-17.398 25.412-61.699 3.262-71.307-3.369-1.464-13.765-2.217-16.921-.355"
              fill="#31446C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M568.947 99.883h-3.516c-.85 0-1.534-.692-1.534-1.535v-3.515c0-.85.691-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.53 1.53 0 0 1-1.534 1.535zm-12.189 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.692-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.54 1.54 0 0 1-1.534 1.535zm-12.197 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.691-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.53 1.53 0 0 1-1.534 1.535zm-12.19 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.692-1.535 1.534-1.535h3.516c.85 0 1.542.692 1.542 1.535v3.515a1.552 1.552 0 0 1-1.542 1.535zm-12.189 0h-3.516c-.85 0-1.541-.692-1.541-1.535v-3.515c0-.85.691-1.535 1.541-1.535h3.516a1.54 1.54 0 0 1 1.535 1.535v3.515a1.54 1.54 0 0 1-1.535 1.535zm36.129-13.291h-3.515a1.54 1.54 0 0 1-1.535-1.535v-3.523A1.54 1.54 0 0 1 552.796 80h3.515c.85 0 1.535.692 1.535 1.534v3.516a1.533 1.533 0 0 1-1.535 1.542zm-12.189 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.523A1.54 1.54 0 0 1 540.606 80h3.516a1.54 1.54 0 0 1 1.534 1.534v3.516a1.532 1.532 0 0 1-1.534 1.542zm-12.189 0h-3.516c-.85 0-1.542-.692-1.542-1.535v-3.523c0-.842.692-1.534 1.542-1.534h3.516a1.54 1.54 0 0 1 1.534 1.534v3.516c0 .85-.691 1.542-1.534 1.542zm12.628 27.57h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.691-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.531 1.531 0 0 1-1.534 1.535zm-12.19 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.692-1.535 1.534-1.535h3.516c.85 0 1.542.692 1.542 1.535v3.515a1.552 1.552 0 0 1-1.542 1.535z"
              fill="#E1E4E5"
            />
            <rect
              x="199"
              y="511"
              width="527"
              height="10"
              rx="5"
              fill="#E1E4E5"
            />
            <rect
              x="667.014"
              y="493.877"
              width="42.252"
              height="4.923"
              rx="2.461"
              transform="rotate(-45 667.014 493.877)"
              fill="#E1E4E5"
            />
            <rect
              x="683.214"
              y="493.992"
              width="15.688"
              height="4.923"
              rx="2.461"
              transform="rotate(-45 683.214 493.992)"
              fill="#E1E4E5"
            />
            <defs>
              <linearGradient
                id="m"
                x1="607.252"
                y1="388.396"
                x2="606.622"
                y2="303.871"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="a"
                x1="671.826"
                y1="189.077"
                x2="671.796"
                y2="154.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="c"
                x1="299.104"
                y1="396.327"
                x2="298.723"
                y2="311.8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="d"
                x1="299.104"
                y1="475.236"
                x2="298.723"
                y2="390.708"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="e"
                x1="282.165"
                y1="435.781"
                x2="281.536"
                y2="351.257"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="f"
                x1="348.889"
                y1="435.781"
                x2="348.26"
                y2="351.257"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="g"
                x1="415.614"
                y1="435.781"
                x2="414.985"
                y2="351.257"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="h"
                x1="400.061"
                y1="396.327"
                x2="399.68"
                y2="311.8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="i"
                x1="400.061"
                y1="475.236"
                x2="399.68"
                y2="390.708"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="j"
                x1="516.018"
                y1="478.638"
                x2="512.429"
                y2="170.586"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="k"
                x1="624.19"
                y1="348.941"
                x2="623.809"
                y2="264.414"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="l"
                x1="624.19"
                y1="427.85"
                x2="623.809"
                y2="343.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="639.377"
                y1="218.19"
                x2="639.332"
                y2="183.621"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="n"
                x1="673.976"
                y1="388.396"
                x2="673.347"
                y2="303.871"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="o"
                x1="740.7"
                y1="388.396"
                x2="740.071"
                y2="303.871"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="p"
                x1="725.148"
                y1="348.941"
                x2="724.766"
                y2="264.414"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="q"
                x1="725.148"
                y1="427.85"
                x2="724.766"
                y2="343.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="r"
                x1="322.246"
                y1="204.58"
                x2="321.865"
                y2="120.053"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="s"
                x1="322.246"
                y1="283.489"
                x2="321.865"
                y2="198.961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="t"
                x1="305.307"
                y1="244.034"
                x2="304.678"
                y2="159.51"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="u"
                x1="372.032"
                y1="244.034"
                x2="371.402"
                y2="159.51"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="v"
                x1="438.756"
                y1="244.034"
                x2="438.127"
                y2="159.51"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="w"
                x1="423.203"
                y1="204.58"
                x2="422.822"
                y2="120.053"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
              <linearGradient
                id="x"
                x1="423.203"
                y1="283.489"
                x2="422.822"
                y2="198.961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#EEE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
};

export default AboutMe;
