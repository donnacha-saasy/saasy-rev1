import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import HowItWorks from "./How.js";
import { FiMessageCircle } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import Review from "./ReviewLarge.js";
import { NavLink } from 'react-router-dom';



export default function Landing() {
    return (
        <>
            <Nav />
            <section>
                <div className="relative py-20 bg-gray-50 overflow-hidden">
                    <img className="hidden lg:block absolute inset-0 w-full" src="atis-assets/background/lines.svg" alt="" />
                    <div className="relative container mx-auto px-4">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                        <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                                            <span>Slash your heating bills</span>
                                            <span className="text-green-600"> guaranteed.</span>
                                        </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                        <p className="mb-6 text-gray-400 leading-loose">We really let our experience show when choosing the right boiler for your home.</p>
                                        <div className="content-center"><a className="content-center inline-block mb-6 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-12 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Find out how</a><a className href="#" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="max-w-sm text-center mx-auto">
                                    <div className="mb-4 px-6 py-8 bg-white rounded-xl">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold">Request a callback</h3>
                                        </div>
                                        <form action>
                                            <div className="flex flex-wrap -mx-2">
                                                <div className="mb-4 w-full lg:w-1/2 px-2">
                                                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="First Name" />
                                                </div>
                                                <div className="mb-4 w-full lg:w-1/2 px-2">
                                                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="mb-4 flex p-4 bg-gray-50 rounded">
                                                <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" />
                                                <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>
                                            <div className="mb-6 flex p-4 bg-gray-50 rounded">
                                                <input className="w-full text-xs bg-gray-50 outline-none" type="tel" placeholder="083 123 4567" />
                                                <button>
                                                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="text-center">
                                                <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    <p className="text-xs text-gray-500"><a className="underline text-green-600 hover:text-green-700" href="#">Policy privacy</a> and <a className="underline text-green-600 hover:text-green-700" href="#">Terms of Use</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden navbar-menu relative z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold leading-none" href="#">
                                <img className="h-10" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" />
                            </a>
                            <button className="navbar-close">
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Start</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">About Us</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Services</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Platform</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Testimonials</a></li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6"><a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign In</a><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a></div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>© 2020 All rights reserved.</span>
                            </p>
                            <div className="text-center">
                                <a className="inline-block px-1" href="#">
                                    <img src="atis-assets/social/facebook.svg" alt="" />
                                </a>
                                <a className="inline-block px-1" href="#">
                                    <img src="atis-assets/social/twitter.svg" alt="" />
                                </a>
                                <a className="inline-block px-1" href="#">
                                    <img src="atis-assets/social/instagram.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <section><div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="mb-16 w-full flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">

                            <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">We offer a wide range of heating services.</h2>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="max-w-xs lg:mx-auto text-gray-500 leading-loose">Changing your heating system can be difficult. Our heating essentials can provide you with peace of mind and add life to your new heating system. A power flush will remove all the build up in the rads, a magnetic filter will protect your boiler and we offer much more. </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-8 w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                            <div className="w-full lg:w-1/5 px-3 self-start">
                                <h3 className="mb-4 text-2xl font-bold font-heading">Boilers</h3>
                            </div>
                            <div className="w-full lg:w-2/5 px-3">
                                <ul className="mb-4 text-gray-500"><li className="mb-4 flex">
                                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>We supply and install Gas & Oil boilers.</span>
                                </li>
                                    <li className="mb-4 flex">
                                        <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>All our boilers come with a 10 year parts and labour warranty.</span>
                                    </li>
                                    <li className="flex">
                                        <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>All boilers have 'A' rated effeciency.</span>
                                    </li>
                                </ul></div>
                            <div className="w-full lg:w-1/5 px-3 lg:text-center">
                                <span className="text-4xl font-bold"></span>
                            </div>
                            <div className="w-full lg:w-1/5 px-3"><a className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Learn More</a></div>
                        </div>
                        <div className="mb-8 w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                            <div className="w-full lg:w-1/5 px-3 self-start">
                                <h3 className="mb-4 text-2xl font-bold font-heading">Powerflushing</h3>
                            </div>
                            <div className="w-full lg:w-2/5 px-3">
                                <ul className="mb-4 text-gray-500"><li className="mb-4 flex">
                                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Improves heating systems energy efficiency</span>
                                </li>
                                    <li className="mb-4 flex">
                                        <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Improves reliability of heating system.</span>
                                    </li>
                                    <li className="flex">
                                        <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Increases the lifespan of your heating system.</span>
                                    </li>
                                </ul></div>
                            <div className="w-full lg:w-1/5 px-3 lg:text-center">
                                <span className="text-4xl font-bold"></span>
                            </div>
                            <div className="w-full lg:w-1/5 px-3"><NavLink className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" to="/Powerflushing">Learn More</NavLink></div>
                        </div>
                        <div className="w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                            <div className="w-full lg:w-1/5 px-3 self-start">
                                <h3 className="mb-4 text-2xl font-bold font-heading">Smart Controls</h3>
                            </div>
                            <div className="w-full lg:w-2/5 px-3">
                                <ul className="mb-4 text-gray-500"><li className="mb-4 flex">
                                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Control your heating and how water from anywhere.</span>
                                </li>
                                    <li className="mb-4 flex">
                                        <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Save up to €120 per year on your heating bills.</span>
                                    </li>
                                    <li className="flex">
                                        <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Control up to 3 heating zones and a hot water zone.</span>
                                    </li>
                                </ul></div>
                            <div className="w-full lg:w-1/5 px-3 lg:text-center">
                                <span className="text-4xl font-bold"></span>
                            </div>
                            <div className="w-full lg:w-1/5 px-3"><a className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Learn More</a></div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="skew skew-bottom mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
            </section>
            <section className="py-20 bg-gray-700">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-auto bg-gray-800 mb-10 lg:mb-0 lg:mr-8 py-8 px-10 rounded">
                            <img className="h-16" src="atis-assets/logo/atis/atis-mono-sign.svg" alt="" />
                        </div>
                        <div className="w-full lg:w-auto mb-10 lg:mb-0 text-center lg:text-left">
                            <h2 className="max-w-xl mx-auto lg:mx-0 mb-2 text-4xl lg:text-5xl text-white font-bold font-heading">Still got a question?</h2>
                            <p className="max-w-xl mx-auto lg:mx-0 text-gray-500 leading-loose">We are on hand to answer any questions you may have, get in touch with us today!</p>
                        </div>
                        <div className="w-full lg:w-auto lg:ml-auto text-center p-2"><button className="bg-gray-200 inline-block py-2 px-6  hover:bg-green-700 text-green-600 hover:text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 border border-green-500 shadow" href="https://wa.me/+353872556270"><FiMessageCircle className=" inline-flex mx-2" />Chat via WhatsApp </button></div>
                        <div className="w-full lg:w-auto lg:ml-auto text-center m-2"><button className="bg-gray-200 inline-block py-2 px-10  hover:bg-green-700 text-green-600 hover:text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 border border-green-500 shadow mx-6" href="/home"><FiPhone className=" inline-flex mx-2" />Call Us Today!</button></div>

                    </div>
                </div>
            </section>
            <Review />
            <Footer />
        </>

    );
}