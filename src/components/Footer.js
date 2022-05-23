import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => (
  <section>
    <div className="py-20 bg-gray-50 radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
            <a
              className="inline-block mb-3 text-3xl font-bold leading-none"
              href="#"
            >
              <img
                className="h-12"
                src="atis-assets/logo/atis/omahony-mono-black.png"
                alt=""
                width="auto"
              />
            </a>
            <p className="mb-4 max-w-sm text-gray-400 leading-loose">
              We are the experts in heating system installation.
            </p>
            <div>
              <a
                className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                href="https://www.facebook.com/omahonyheatingandplumbing/"
              >
                <img
                  className="mx-auto"
                  src="atis-assets/social/facebook.svg"
                />
              </a>

              <a
                className="inline-block w-10 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                href="https://www.instagram.com/omahonyheating_plumbing/?hl=en"
              >
                <img
                  className="mx-auto"
                  src="atis-assets/social/instagram.svg"
                />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
              <h3 className="mb-6 text-2xl font-bold">Products</h3>
              <ul>
                <li className="mb-4">
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    News and Stories
                  </a>
                </li>
                <li>
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
              <h3 className="mb-6 text-2xl font-bold">Important Links</h3>
              <ul>
                <li className="mb-4">
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    Roadmap
                  </a>
                </li>

                <li className="mb-4">
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-auto">
              <h3 className="mb-6 text-2xl font-bold">Company</h3>
              <ul>
                <li className="mb-4">
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    Jobs
                  </a>
                </li>

                <li>
                  <a className="text-gray-800 hover:text-gray-600" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="lg:text-center text-sm text-gray-400 border-t border-gray-100 pt-12 mt-16">
          © 2022. All rights reserved.
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
