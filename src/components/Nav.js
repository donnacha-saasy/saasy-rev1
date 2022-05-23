import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = (
      <div className="navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-3xl font-bold leading-none"
              href="/landing"
            >
              <img
                className="h-10"
                src="atis-assets/logo/atis/omahony-mono-black.webp"
                alt=""
                width="auto"
              />
            </a>
            <button
              className="navbar-close"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  to="/landing"
                  activeClassName="text-green-600 font-bold "
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  to="/about"
                  activeClassName="text-green-600 font-bold "
                >
                  About Us
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  to="/services"
                  activeClassName="text-green-600 font-bold "
                >
                  Services
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  to="/grants"
                  activeClassName="text-green-600 font-bold "
                >
                  Grants
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <NavLink
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                to="/get-quote"
              >
                Get Your Estimate
              </NavLink>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2021 All rights reserved.</span>
            </p>
            <div className="text-center">
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/facebook.svg" alt="" />
              </a>

              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <section>
      <nav className="relative py-6 bg-gray-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a className="text-3xl font-bold leading-none" href="/landing">
            <img
              className="h-12"
              src="atis-assets/logo/atis/omahony-mono-black.webp"
              alt=""
              width="auto"
            />
          </a>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-green-600 p-3 transition duration-200 ease-in-out"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <NavLink
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/landing"
                activeClassName="text-green-600 font-bold "
              >
                Home
              </NavLink>
            </li>
            <li className="text-gray-300">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/about"
                activeClassName="text-green-600 font-bold "
              >
                About Us
              </NavLink>
            </li>
            <li className="text-gray-300">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/services"
                activeClassName="text-green-600 font-bold "
              >
                Services
              </NavLink>
            </li>
            <li className="text-gray-300">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/grants"
                activeClassName="text-green-600 font-bold "
              >
                Grants
              </NavLink>
            </li>
            <li className="text-gray-300">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/faqs"
                activeClassName="text-green-600 font-bold "
              >
                FAQs
              </NavLink>
            </li>
          </ul>
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 hover:text-green-500 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="tel:087 255 6270"
          >
            Call Us
          </a>
          <NavLink
            className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 hover:text-white text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            to="/get-quote"
          >
            Free Estimate{" "}
          </NavLink>
        </div>
      </nav>

      {/* //mobile */}
      {menu}
    </section>
  );
}

// <div className="navbar-menu relative z-50">
//     <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
//     <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
//         <div className="flex items-center mb-8">
//             <a className="mr-auto text-3xl font-bold leading-none" href="#">
//                 <img className="h-10" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" />
//             </a>
//             <button className="navbar-close">
//                 <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//             </button>
//         </div>
//         <div>
//             <ul>
//                 <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Start</a></li>
//                 <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">About Us</a></li>
//                 <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Services</a></li>
//                 <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Platform</a></li>
//                 <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Testimonials</a></li>
//             </ul>
//         </div>
//         <div className="mt-auto">
//             <div className="pt-6"><a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign in</a><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a></div>
//             <p className="my-4 text-xs text-center text-gray-400">
//                 <span>© 2020 All rights reserved.</span>
//             </p>
//             <div className="text-center">
//                 <a className="inline-block px-1" href="#">
//                     <img src="atis-assets/social/facebook.svg" alt="" />
//                 </a>
//                 <a className="inline-block px-1" href="#">
//                     <img src="atis-assets/social/twitter.svg" alt="" />
//                 </a>
//                 <a className="inline-block px-1" href="#">
//                     <img src="atis-assets/social/instagram.svg" alt="" />
//                 </a>
//             </div>
//         </div>
//     </nav>
// </div>

export default Navigation;
