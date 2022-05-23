import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HowItWorks = () => (
  <section>
    <div className="py-20  radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-md text-center mx-auto">
          <span className="text-green-600 font-bold" id="how-it-works">
            Get an estimate in seconds
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            How does it work?
          </h2>
        </div>
        <div className="relative flex flex-wrap -mx-4 z-0">
          <div
            className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-green-600"
            style={{ top: "10%", zIndex: -1 }}
          />
          <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
            <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">
              1
            </span>
            <h3 className="mb-4 text-2xl font-bold font-heading">
              Get an instant estimate
            </h3>
            <p className="text-gray-500 leading-loose">
              Fill out our quick online form, telling us a bit about your home.
              We will recommend the best boiler for you.
            </p>
          </div>
          <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
            <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">
              2
            </span>
            <h3 className="mb-4 text-2xl font-bold font-heading">
              Home assessment
            </h3>
            <p className="text-gray-500 leading-loose">
              We will contact you to discuss your estimate and arrange a free,
              no obligation home assessment on a day that suits you.
            </p>
            <NavLink
              className="mt-10 px-10 hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 hover:text-white"
              to="/get-quote"
            >
              Get Your Estimate
            </NavLink>
          </div>
          <div className="w-full lg:w-1/3 px-4 text-center">
            <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">
              3
            </span>
            <h3 className="mb-4 text-2xl font-bold font-heading">
              Enjoy your warmer home
            </h3>
            <p className="text-gray-500 leading-loose mb-10">
              We will install your new boiler on a day that suits you and you
              will be right on the way to saving hundres on your energy bills.
            </p>
            <NavLink
              className="mt-20 px-10 sm:inline-block lg:hidden py-2  bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 hover:text-white"
              to="/get-quote"
            >
              Get Your Estimate
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
