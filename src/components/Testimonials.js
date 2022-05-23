import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./Review";

const Testimonials = () => (
  <section className="skewed-top-right">
    <div className="skew skew-top ml-for-radius">
      <svg
        className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 10 10 0 10 10" />
      </svg>
    </div>
    <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
        <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
          <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
            <span className="text-green-600 font-bold">
              See what our customers say
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Testimonials
            </h2>
          </div>
          <div className="w-full lg:w-1/5"></div>
        </div>
      </div>
      <div className="relative flex">
        <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
          <div className="mb-4 w-full lg:w-1/3 px-3">
            <div className="p-8 bg-white rounded shadow text-center">
              <div
                style={{
                  background: 'url("atis-assets/elements/quote-grey.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top left",
                }}
              >
                <p className="mb-8 text-gray-500 leading-loose">
                  Very helpful and responsive from first call to full
                  installation and aftercare. Would highly recommend if anyone
                  needs any plumbing issues sorted.
                </p>

                <h4 className="mb-1 text-2xl font-bold font-heading">
                  Derek Moloney
                </h4>
                <p className="text-gray-500">Boiler Installation</p>
                <Review />
              </div>
            </div>
          </div>
          <div className="mb-4 w-full lg:w-1/3 px-3">
            <div className="p-8 bg-white rounded shadow text-center">
              <div
                style={{
                  background: 'url("atis-assets/elements/quote-grey.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top left",
                }}
              >
                <p className="mb-8 text-gray-500 leading-loose">
                  O’Mahony plumbers power flushed our heating system when the
                  radiators were not heating evenly or at all. The system is now
                  vastly improved. The crew were very punctual, helpful and kept
                  us informed of what was involved in the work. We found the
                  price to be very competitive and would gladly recommend them
                  to anyone looking for reliable plumbers.
                </p>
                <h4 className="mb-1 text-2xl font-bold font-heading">
                  Victoria Quigley
                </h4>
                <p className="text-gray-500">Powerflushing</p>
                <Review />
              </div>
            </div>
          </div>
          <div className="mb-4 w-full lg:w-1/3 px-3">
            <div className="p-8 bg-white rounded shadow text-center">
              <div
                style={{
                  background: 'url("atis-assets/elements/quote-grey.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top left",
                }}
              >
                <p className="mb-8 text-gray-500 leading-loose">
                  Delighted with the job these lads done .Absolutely brilliant.
                  Would highly recommend them .Nothing was a problem to them and
                  they were so neat and tidy .First class work.
                </p>
                <h4 className="mb-1 text-2xl font-bold font-heading">
                  Antoinette Mullane
                </h4>
                <p className="text-gray-500">Boiler Installation</p>
                <Review />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
