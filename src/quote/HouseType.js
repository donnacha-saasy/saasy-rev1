import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "firebase/compat/app";
import { axios, db, firebaseConfig } from "../firebase/firebaseConfig";
import FormImpl from "react-bootstrap/esm/Form";
import Schedule from "./Schedule";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import "./svg.css";

const phoneSchema = Yup.string().phone("IRL").required();

(async () => {
  console.log(await phoneSchema.isValid("+919876543210")); // → true
})();

{
  /*signup*/
}

const HouseType = () => {
  const cors = require("cors")({
    origin: true,
  });
  const history = useHistory();

  const [formStep, setFormStep] = React.useState(0);
  const { watch, register } = useForm();
  const completedFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const backFormStep = () => {
    setFormStep((cur) => cur - 1);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      eircode: "",
      year: "",
      oilGas: "",
      radAmount: "",
      houseType: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      console.log("TEst");
      const db = firebase.firestore();
      axios
        .post(
          "https://europe-west1-test-api-4f3e2.cloudfunctions.net/api/createRequest",
          formik.values
        )
        .then((res) => {
          db.collection("quote-requests").add({
            firstName: formik.firstName,
            lastName: formik.lastName,
            email: formik.email,
            mobile: formik.mobile,
            address: formik.address,
            eircode: formik.eircode,
            year: formik.year,
            oilGas: formik.oilGas,
            radAmount: formik.radAmount,
            houseType: formik.houseType,
            time: new Date(),
          });
        })
        .catch((error) => {
          console.log(error);
        });
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
      // setFormStep(6);
      history.push("/thanks");
    },
  });
  // const sendEmail = () => {
  //     null
  // }

  return (
    <div>
      <Nav />
      <div className="relative py-20 bg-gray-50 overflow-hidden">
        {formStep === 0 && (
          <section className="skewed-bottom-right">
            <div className="py-20 bg-gray-50 radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto text-center">
                  <a
                    className="mb-6 inline-block text-3xl font-bold leading-none"
                    href="#"
                  >
                    <img
                      className="h-12"
                      src="atis-assets/logo/atis/atis-mono-sign.svg"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
                    Get an estimate in seconds
                  </h2>
                  <p className="max-w-md mx-auto mb-6 text-gray-500 leading-loose">
                    We will get you a boiler replacement estimate in seconds!
                    Click below to get started.
                  </p>
                  <button
                    onClick={completedFormStep}
                    type="button"
                    className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
                  >
                    Get Started
                  </button>
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
        )}
        {formStep === 1 && (
          <section className="skewed-top-left">
            <div className="skew skew-bottom mr-for-radius">
              <svg
                className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
              >
                <polygon fill="currentColor" points="0 0 10 0 0 10" />
              </svg>
            </div>

            <div className="py-0 bg-gray-50 radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="mb-16 max-w-lg mx-auto text-center">
                  <a
                    className="mb-6 inline-block text-3xl font-bold leading-none"
                    href="#"
                  >
                    <img
                      className="h-12"
                      src="atis-assets/logo/atis/atis-mono-sign.svg"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                    Describe your home.
                  </h2>
                  <p className="mb-6 text-gray-500">
                    Lets get started by first telling us which of these options
                    best describes your home.
                  </p>
                </div>
                <div className="flex flex-wrap max-w-4xl mx-auto">
                  <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <div className="py-8 px-8 max-w-md mx-auto bg-white shadow rounded text-center mb-2">
                      <div className="mb-2">
                        <div className="my-1" />
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </span>

                        <h3 className="text-xl font-medium font-heading">
                          Detached
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          type="submit"
                          ref={register()}
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("houseType", "detached");
                          }}
                          type="button"
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200 "
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <div className="py-8 px-8 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-2">
                        <div className="my-1" />
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 -ml-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </span>
                        <h3 className="text-lg font-medium font-heading">
                          Semi-Detached
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("houseType", "Semi Detached");
                          }}
                          type="button"
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-2">
                        <div className="my-1" />
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 -ml-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 -ml-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </span>
                        <h3 className="text-xl font-medium font-heading">
                          Terrace
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("houseType", "terraced");
                          }}
                          type="button"
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-2">
                        <div className="my-1" />
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            data-name="Layer 1"
                            viewBox="0 0 64 64"
                          >
                            <polygon
                              fill="none"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="4"
                              points="28 58 16 58 16 6 48 6 48 58 36 58 36 42 28 42 28 58"
                            />
                            <line
                              x1="24"
                              x2="24"
                              y1="12"
                              y2="20"
                              fill="none"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="4"
                            />
                            <line
                              x1="32"
                              x2="32"
                              y1="12"
                              y2="20"
                              fill="none"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="4"
                            />
                            <line
                              x1="40"
                              x2="40"
                              y1="12"
                              y2="20"
                              fill="none"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="4"
                            />
                            <line
                              x1="40"
                              x2="40"
                              y1="24"
                              y2="32"
                              fill="none"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="4"
                            />
                            <line
                              x1="32"
                              x2="32"
                              y1="24"
                              y2="32"
                              fill="none"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="4"
                            />
                            <line
                              x1="24"
                              x2="24"
                              y1="24"
                              y2="32"
                              fill="none"
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="4"
                            />
                          </svg>
                        </span>
                        <h3 className="text-xl font-medium font-heading">
                          Apartment
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("houseType", "Apartment");
                          }}
                          type="button"
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                        >
                          Select
                        </button>
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
            <div className="container mx-auto px-4">
              <div className=" max-w-lg mx-auto text-center"></div>
              <button
                onClick={backFormStep}
                className="mx-auto text-center bg-gray-100 hover:bg-gray-200 text-green-400 font-bold py-2 px-4 rounded inline-flex items-center ml-10 rounded-l-xl rounded-t-xl transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back</span>
              </button>
            </div>
            <div className="skew skew-bottom ml-for-radius">
              <svg
                className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
              >
                <polygon fill="currentColor" points="0 0 10 0 10 10" />
              </svg>
            </div>
          </section>
        )}
        {formStep === 2 && (
          <section>
            <div className="skew skew-top mr-for-radius"></div>
            <div className="py-20 bg-gray-50 radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="mb-16 max-w-lg mx-auto text-center">
                  <a
                    className="mb-6 inline-block text-3xl font-bold leading-none"
                    href="#"
                  >
                    <img
                      className="h-12"
                      src="atis-assets/logo/atis/atis-mono-sign.svg"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <span className="text-green-600 font-bold" />
                  <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                    What year was your house built?
                  </h2>
                  <p className="mb-6 text-gray-500">
                    This lets us know if you are elegible for certain grants.
                  </p>
                </div>
                <div className="flex flex-wrap max-w-4xl mx-auto">
                  <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-12">
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                        <h3 className="mb-4 text-2xl font-bold font-heading">
                          Pre 2006
                        </h3>
                        <img
                          src="placeholders/pictures/office.jpg"
                          alt=""
                          className="rounded shadow"
                        />
                        <p className="mb-6 text-gray-500" />
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("year", "Pre 2006");
                          }}
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-12">
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                        <h3 className="mb-4 text-2xl font-bold font-heading">
                          Post 2006
                        </h3>
                        <img
                          src="placeholders/pictures/office.jpg"
                          alt=""
                          className="rounded shadow"
                        />
                        <p className="mb-6 text-gray-500" />
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("year", "Post 2006");
                          }}
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 ">
              <div className=" max-w-lg mx-auto text-center"></div>
              <button
                onClick={backFormStep}
                className=" mx-auto text-center bg-gray-100 hover:bg-gray-200 text-green-400 font-bold py-2 px-4 rounded inline-flex items-center ml-10 rounded-l-xl rounded-t-xl transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back</span>
              </button>
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
            <div className="skew skew-bottom ml-for-radius">
              <svg
                className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
              >
                <polygon fill="currentColor" points="0 0 10 0 10 10" />
              </svg>
            </div>
          </section>
        )}
        {formStep === 3 && (
          <section>
            <div className="skew skew-top mr-for-radius"></div>

            <div className="py-20 bg-gray-50 radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="mb-16 max-w-lg mx-auto text-center">
                  <a
                    className="mb-6 inline-block text-3xl font-bold leading-none"
                    href="#"
                  >
                    <img
                      className="h-12"
                      src="atis-assets/logo/atis/atis-mono-sign.svg"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                    How many radiators do you have?
                  </h2>
                  <p className="mb-6 text-gray-500">
                    This helps us calculate the correct boiler size for your
                    home.
                  </p>
                </div>
                <div className="flex flex-wrap max-w-4xl mx-auto">
                  <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-2">
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 60 60"
                            stroke="currentColor"
                          >
                            <path
                              stroke-width="2"
                              d="M60,13.5v-9h-3v-3H47v3h-1v-3H36v3h-1v-3H25v3h-1v-3H14v3h-1v-3H3v3H0v9h3v33H0v9h3v3h10v-3h1v3h10v-3h1v3h10v-3h1v3h10v-3
	h1v3h10v-3h3v-9h-3v-33H60z M58,6.5v5h-1v-5H58z M47,6.5v5h-1v-5H47z M47,13.5v33h-1v-33H47z M36,6.5v5h-1v-5H36z M36,13.5v33h-1
	v-33H36z M25,6.5v5h-1v-5H25z M25,13.5v33h-1v-33H25z M14,6.5v5h-1v-5H14z M14,13.5v33h-1v-33H14z M2,11.5v-5h1v5H2z M2,53.5v-5h1v5
	H2z M11,56.5H5v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M13,53.5v-5h1v5H13z M22,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M24,53.5v-5h1
	v5H24z M33,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M35,53.5v-5h1v5H35z M44,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M46,53.5
	v-5h1v5H46z M58,48.5v5h-1v-5H58z M55,46.5v9v1h-6v-1v-9v-33v-9v-1h6v1v9V46.5z"
                            />
                          </svg>
                        </span>
                        <div className="my-1" />
                        <h3 className="mb-4 text-xl font-bold font-heading">
                          1-11
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("radAmount", "up to 11");
                          }}
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-2">
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 60 60"
                            stroke="currentColor"
                          >
                            <path
                              stroke-width="2"
                              d="M60,13.5v-9h-3v-3H47v3h-1v-3H36v3h-1v-3H25v3h-1v-3H14v3h-1v-3H3v3H0v9h3v33H0v9h3v3h10v-3h1v3h10v-3h1v3h10v-3h1v3h10v-3
	h1v3h10v-3h3v-9h-3v-33H60z M58,6.5v5h-1v-5H58z M47,6.5v5h-1v-5H47z M47,13.5v33h-1v-33H47z M36,6.5v5h-1v-5H36z M36,13.5v33h-1
	v-33H36z M25,6.5v5h-1v-5H25z M25,13.5v33h-1v-33H25z M14,6.5v5h-1v-5H14z M14,13.5v33h-1v-33H14z M2,11.5v-5h1v5H2z M2,53.5v-5h1v5
	H2z M11,56.5H5v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M13,53.5v-5h1v5H13z M22,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M24,53.5v-5h1
	v5H24z M33,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M35,53.5v-5h1v5H35z M44,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M46,53.5
	v-5h1v5H46z M58,48.5v5h-1v-5H58z M55,46.5v9v1h-6v-1v-9v-33v-9v-1h6v1v9V46.5z"
                            />
                          </svg>
                        </span>
                        <div className="my-1" />
                        <h3 className="mb-4 text-xl font-bold font-heading">
                          12-18
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("radAmount", "Between 11-18");
                          }}
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-2">
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 60 60"
                            stroke="currentColor"
                          >
                            <path
                              stroke-width="2"
                              d="M60,13.5v-9h-3v-3H47v3h-1v-3H36v3h-1v-3H25v3h-1v-3H14v3h-1v-3H3v3H0v9h3v33H0v9h3v3h10v-3h1v3h10v-3h1v3h10v-3h1v3h10v-3
	h1v3h10v-3h3v-9h-3v-33H60z M58,6.5v5h-1v-5H58z M47,6.5v5h-1v-5H47z M47,13.5v33h-1v-33H47z M36,6.5v5h-1v-5H36z M36,13.5v33h-1
	v-33H36z M25,6.5v5h-1v-5H25z M25,13.5v33h-1v-33H25z M14,6.5v5h-1v-5H14z M14,13.5v33h-1v-33H14z M2,11.5v-5h1v5H2z M2,53.5v-5h1v5
	H2z M11,56.5H5v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M13,53.5v-5h1v5H13z M22,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M24,53.5v-5h1
	v5H24z M33,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M35,53.5v-5h1v5H35z M44,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M46,53.5
	v-5h1v5H46z M58,48.5v5h-1v-5H58z M55,46.5v9v1h-6v-1v-9v-33v-9v-1h6v1v9V46.5z"
                            />
                          </svg>
                        </span>
                        <div className="my-1" />
                        <h3 className="mb-4 text-xl font-bold font-heading">
                          18-22
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("radAmount", "Between 18-22");
                          }}
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-4">
                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                      <div className="mb-2">
                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 60 60"
                            stroke="currentColor"
                          >
                            <path
                              stroke-width="2"
                              d="M60,13.5v-9h-3v-3H47v3h-1v-3H36v3h-1v-3H25v3h-1v-3H14v3h-1v-3H3v3H0v9h3v33H0v9h3v3h10v-3h1v3h10v-3h1v3h10v-3h1v3h10v-3
	h1v3h10v-3h3v-9h-3v-33H60z M58,6.5v5h-1v-5H58z M47,6.5v5h-1v-5H47z M47,13.5v33h-1v-33H47z M36,6.5v5h-1v-5H36z M36,13.5v33h-1
	v-33H36z M25,6.5v5h-1v-5H25z M25,13.5v33h-1v-33H25z M14,6.5v5h-1v-5H14z M14,13.5v33h-1v-33H14z M2,11.5v-5h1v5H2z M2,53.5v-5h1v5
	H2z M11,56.5H5v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M13,53.5v-5h1v5H13z M22,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M24,53.5v-5h1
	v5H24z M33,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M35,53.5v-5h1v5H35z M44,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M46,53.5
	v-5h1v5H46z M58,48.5v5h-1v-5H58z M55,46.5v9v1h-6v-1v-9v-33v-9v-1h6v1v9V46.5z"
                            />
                          </svg>
                        </span>
                        <div className="my-1" />
                        <h3 className="mb-4 text-xl font-bold font-heading">
                          22+
                        </h3>
                      </div>
                      <div>
                        <span className="text-5xl lg:text-6xl font-bold" />
                        <span className="text-gray-500" />
                        <button
                          onClick={() => {
                            completedFormStep();
                            formik.setFieldValue("radAmount", "More than 22");
                          }}
                          className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                          href="#"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 ">
              <div className=" max-w-lg mx-auto text-center"></div>
              <button
                onClick={backFormStep}
                className=" mx-auto text-center bg-gray-100 hover:bg-gray-200 text-green-400 font-bold py-2 px-4 rounded inline-flex items-center ml-10 rounded-l-xl rounded-t-xl transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back</span>
              </button>
            </div>

            <div className="skew skew-bottom ml-for-radius">
              <svg
                className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
              >
                <polygon fill="currentColor" points="0 0 10 0 10 10" />
              </svg>
            </div>
          </section>
        )}
        {formStep === 4 && (
          <section>
            <div className="skew skew-top mr-for-radius"></div>

            <div className="py-20 bg-gray-50 radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="mb-16 mx-auto max-w-lg text-center">
                  <a
                    className="mb-6 inline-block text-3xl font-bold leading-none"
                    href="#"
                  >
                    <img
                      className="h-12"
                      src="atis-assets/logo/atis/atis-mono-sign.svg"
                      alt=""
                      width="auto"
                    />
                  </a>

                  <span className="text-green-600 font-bold" />
                  <h2 className="font-bold font-heading text-5xl">
                    What fuel currently heats your home?
                  </h2>
                </div>
                <div className="flex flex-wrap mx-20">
                  <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-10">
                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                      <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          />
                        </svg>
                      </span>
                      <h3 className="mb-4 text-2xl font-bold font-heading">
                        Gas
                      </h3>
                      <button
                        onClick={() => {
                          completedFormStep();
                          formik.setFieldValue("oilGas", "gas");
                        }}
                        className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                        href="#"
                      >
                        Select
                      </button>
                      <p className="text-gray-500 leading-loose" />
                    </div>
                  </div>
                  <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-10">
                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                      <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            fill="none"
                            d="M10,16.513c-2.249,0-4.071-1.822-4.071-4.07c0-0.226-0.182-0.407-0.407-0.407c-0.225,0-0.407,0.182-0.407,0.407c0,2.697,2.187,4.885,4.885,4.885c0.225,0,0.407-0.183,0.407-0.407S10.225,16.513,10,16.513M10,1.044c-0.814,0-6.513,6.92-6.513,11.398c0,3.597,2.916,6.513,6.513,6.513c3.597,0,6.513-2.916,6.513-6.513C16.513,7.964,10.813,1.044,10,1.044 M10,18.141c-3.148,0-5.699-2.65-5.699-5.92C4.301,8.372,9.593,2.011,10,2.011c0.407,0,5.698,6.36,5.698,10.209C15.698,15.49,13.147,18.141,10,18.141"
                          ></path>
                        </svg>
                      </span>
                      <h3 className="mb-4 text-2xl font-bold font-heading">
                        Oil
                      </h3>
                      <button
                        onClick={() => {
                          completedFormStep();
                          formik.setFieldValue("oilGas", "oil");
                        }}
                        className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                        href="#"
                      >
                        Select
                      </button>
                      <p className="text-gray-500 leading-loose" />
                    </div>
                  </div>
                  <div className="w-full md:w-full lg:w-1/3 px-10">
                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                      <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="mb-4 text-2xl font-bold font-heading">
                        Other
                      </h3>
                      <button
                        onClick={() => {
                          completedFormStep();
                          formik.setFieldValue("oilGas", "other");
                        }}
                        className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                        href="#"
                      >
                        Select
                      </button>
                      <p className="text-gray-500 leading-loose" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 ">
              <div className=" max-w-lg mx-auto text-center"></div>
              <button
                onClick={backFormStep}
                className=" mx-auto text-center bg-gray-100 hover:bg-gray-200 text-green-400 font-bold py-2 px-4 rounded inline-flex items-center ml-10 rounded-l-xl rounded-t-xl transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back</span>
              </button>
            </div>
            <div className="skew skew-bottom ml-for-radius">
              <svg
                className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
              >
                <polygon fill="currentColor" points="0 0 10 0 10 10" />
              </svg>
            </div>
          </section>
        )}
        {formStep === 5 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center -mx-4">
                <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
                  <a
                    className="mb-6 inline-block text-3xl font-bold leading-none"
                    href="#"
                  >
                    <img
                      className="h-12"
                      src="atis-assets/logo/atis/atis-mono-sign.svg"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
                    Lets get you an estimate.
                  </h2>
                  <p className="mb-8 text-gray-500 leading-loose">
                    Enter your details and get your estimate instantly!
                  </p>
                  <div className="container -ml-4 px-4 ">
                    <div className=" max-w-lg mx-auto text-center"></div>
                    <button
                      onClick={backFormStep}
                      className=" mx-auto text-center bg-gray-100 hover:bg-gray-200 text-green-400 font-bold py-2 px-4 rounded inline-flex items-center  rounded-l-xl rounded-t-xl transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      <span>Back</span>
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                    <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-6">
                          <h4 className="text-2xl">Enter your details</h4>
                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                          <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.firstName}
                              className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                              type="text"
                              placeholder="First Name"
                            />
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                              <div>{formik.errors.firstName}</div>
                            ) : null}
                          </div>
                          <div className="w-full lg:w-1/2 px-2">
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.lastName}
                              className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                              type="text"
                              placeholder="Last Name"
                            />
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                              <div>{formik.errors.lastName}</div>
                            ) : null}
                          </div>
                        </div>
                        <input
                          className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                          type="email"
                          placeholder="hello@example.com"
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div>{formik.errors.email}</div>
                        ) : null}

                        <input
                          className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                          type="phone"
                          placeholder="Mobile No."
                          id="mobile"
                          name="mobile"
                          type="phone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={phoneSchema.isValid.phone}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                          <div>{phoneSchema.isValid.phone}</div>
                        ) : null}
                        <input
                          className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                          type="text"
                          placeholder="Address"
                          id="address"
                          name="address"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.address}
                        />
                        {formik.touched.address && formik.errors.address ? (
                          <div>{formik.errors.address}</div>
                        ) : null}
                        <input
                          className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                          type="tel"
                          placeholder="Eircode"
                          id="eircode"
                          name="eircode"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.eircode}
                        />
                        {formik.touched.eircode && formik.errors.eircode ? (
                          <div>{formik.errors.eircode}</div>
                        ) : null}

                        {/* <button type="" className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200" onClick={() => formik.setFieldValue('oilGas', 'gas')}>
                                                Reset This
                                            </button> */}
                        <button
                          onSubmit={formik.handleSubmit}
                          type="submit"
                          className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200"
                        >
                          Finish
                        </button>
                      </form>

                      <p className="text-xs text-gray-400"></p>
                    </div>
                    <p className="text-center text-gray-400">
                      <a
                        className="text-green-600 hover:text-green-700"
                        href="#"
                      >
                        Police privacy
                      </a>
                      <span> and </span>
                      <a
                        className="text-green-600 hover:text-green-700"
                        href="#"
                      >
                        Terms of Use
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {formStep === 6 && (
          <section className=" skewed-bottom-right">
            <div className="py-20 bg-gray-50 radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto text-center">
                  <a
                    className="mb-6 inline-block text-3xl font-bold leading-none"
                    href="#"
                  >
                    <img
                      className="h-12"
                      src="atis-assets/logo/atis/atis-mono-sign.svg"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
                    Thank you for submitting our form
                  </h2>
                  <p className="max-w-md mx-auto mb-6 text-gray-500 leading-loose">
                    Check you email for your estimate! Click below to go to the
                    homepage.
                  </p>
                  <button
                    onClick={completedFormStep}
                    type="button"
                    className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
                  >
                    Home
                  </button>
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
        )}
      </div>
      <Footer />
    </div>
  );
};
export default HouseType;
