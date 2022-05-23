import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import HowItWorks from "./How.js";

export default function Landing() {
  return (
    <>
      <Nav />

      <section className="skewed-bottom-right skewed-top-left">
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold">
                    Even more ways to save
                  </span>
                  <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                    Grants
                  </h2>
                  <div className="mb-6 max-w-sm">
                    <p className="text-gray-500 leading-loose">
                      Receive up to €750 in grants from the Sustainable Energy
                      Authority of Ireland (SEAI) for upgrading your property
                      with heating controls. There are also carbon credit
                      discounts available with the amount depending on the
                      measures being installed. Check out the process below.
                      We’re with you every step of the way!
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:-ml-5">
                    <a
                      className="lg:w-auto py-2 px-6 leading-loose lg:ml-5 text-gray-50 font-bold bg-green-600 hover:bg-green-700 hover:text-white transition duration-200 rounded-l-xl rounded-t-xl"
                      href="#process"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:mb-10">
                <div className="mb-4 flex flex-wrap items-end">
                  <div className="mb-6 lg:mb-0 w-full lg:w-2/3 px-3">
                    <img
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="img/Family.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="w-full lg:w-1/3 px-3">
                    <img
                      className="w-full h-32 object-cover rounded"
                      src="img/Phone.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-start">
                  <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                    <img
                      className="w-full h-32 object-cover rounded"
                      src="img/Cat.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="w-full lg:w-2/3 px-3">
                    <img
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="img/Radiator.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
      </section>
      <section className="skewed-top-left mb-10">
        <div className="skew  skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="white" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div id="process" className="py-20 bg-white radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold" />
                  <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                    What is the application process?
                  </h2>
                  <div className="max-w-xs">
                    <p className="text-gray-500 leading-loose">
                      The Better Energy Homes Scheme provides homeowners with
                      access to grants to improve the energy efficiency of their
                      homes. You can receive up to €750 in grants for installing
                      zoned heating controls in your property.
                    </p>
                    <a
                      className="lg:w-auto py-2 px-6 leading-loose lg:mt-5 text-gray-50 font-bold bg-green-600 hover:bg-green-700 hover:text-white transition duration-200 rounded-l-xl rounded-t-xl"
                      href="#how"
                    >
                      Get Your Grant Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-12 lg:mb-8 flex flex-wrap items-start">
                  <span className="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded text-green-600 text-2xl font-bold">
                    1
                  </span>
                  <div className="w-full lg:w-3/4">
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      You want to improve your heating and grants are available
                      for you to do so.{" "}
                    </h3>
                    <p className="text-gray-500 leading-loose">
                      Even better news is we apply for the grant for you. All
                      you have to do is go online or give us a call to start the
                      process.
                    </p>
                  </div>
                </div>
                <div className="mb-12 lg:mb-8 flex flex-wrap items-start">
                  <span className="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded text-green-600 text-2xl font-bold">
                    2
                  </span>
                  <div className="w-full lg:w-3/4">
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      How do I know if I qualify?
                    </h3>
                    <p className="text-gray-500 leading-loose">
                      Our team will let you know if your house falls under the
                      Better Energy home scheme within minutes of talking. Then
                      all you have to do is pick the package you would like for
                      your home.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-start">
                  <span className="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded text-green-600 text-2xl font-bold">
                    3
                  </span>
                  <div className="w-full lg:w-3/4">
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      We apply for your grant on your behalf.
                    </h3>
                    <p className="text-gray-500 leading-loose">
                      We take care of every step of the application process so
                      you don't have to deal with tedious form filling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold" />
                  <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                    How do you qualify for SEAI heating controls grant
                  </h2>
                  <p className="mb-6 text-gray-500 leading-loose">
                    You must upgrade to a zoned heating controls system. You
                    must also:
                  </p>
                  <ul className="mb-8 text-gray-500 font-bold">
                    <li className="mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>The home must have been built pre-2006</span>
                    </li>
                    <li className="mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        The work carried out must comply with the required
                        standards
                      </span>
                    </li>
                    <li className="mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Use newly fitted materials and products</span>
                    </li>
                    <li className="mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span id="how">
                        Have a BER carried out after the works are completed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                <div className="relative" style={{ zIndex: 0 }}>
                  <img
                    className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                    src="img/grants.webp"
                    alt=""
                  />
                  <img
                    className="hidden md:block absolute"
                    style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                    src="atis-assets/elements/green-dark-up.svg"
                    alt=""
                  />
                  <img
                    className="hidden md:block absolute"
                    style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                    src="atis-assets/elements/wing-green-down.svg"
                    alt=""
                  />
                  <img
                    className="hidden md:block absolute"
                    style={{ top: "3rem", right: "-3rem", zIndex: -1 }}
                    src="atis-assets/elements/bullets-gray-right.svg"
                    alt=""
                  />
                  <img
                    className="hidden md:block absolute"
                    style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: -1 }}
                    src="atis-assets/elements/bullets-gray-left.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />

      <Footer />
    </>
  );
}
