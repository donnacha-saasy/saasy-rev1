import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import { NavLink } from 'react-router-dom';
import Review from "./Review.js"




export default function Landing() {
    return (
        <>
            <Nav />

            <section className="skewed-bottom-right pb-20 radius-for-skewed"><div className="bg-gray-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                            <div className="w-full text-center lg:text-left">
                                <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                                        <span>Get your boiler upgraded by the </span>
                                        <span className="text-green-600">experts.</span>
                                    </h2>
                                </div>
                                <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose">O'Mahony Heating &amp; Plumbing are experts in all things heating. We are based in cork with over 18 years experience. We cover all aspects of heating, including oil and gas boiler upgrades, smart heating controls and powerflushing.</p>
                                    <div><NavLink className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" to="/get-quote">Get a quote</NavLink><a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#how-it-works">How it works</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="relative" style={{ zIndex: 0 }}>
                                <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="img/idealboiler.webp" alt="" /><img className="hidden md:block absolute" style={{ top: '-2rem', right: '3rem', zIndex: -1 }} src="atis-assets/elements/green-dark-up.svg" alt="" /><img className="hidden md:block absolute" style={{ bottom: '-2rem', right: '-2rem', zIndex: -1 }} src="atis-assets/elements/wing-green-down.svg" alt="" /><img className="hidden md:block absolute" style={{ top: '3rem', right: '-3rem', zIndex: -1 }} src="atis-assets/elements/bullets-gray-right.svg" alt="" /><img className="hidden md:block absolute" style={{ bottom: '2.5rem', left: '-4.5rem', zIndex: -1 }} src="atis-assets/elements/bullets-gray-left.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
                <div className="hidden navbar-menu relative z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"><div className="flex items-center mb-8">

                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>
                        <div>
                            <ul><li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Home</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">About Us</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Services</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Grants</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">FAQs</a></li>
                            </ul></div>
                        <div className="mt-auto">
                            <div className="pt-6"><a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign In</a><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a></div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>© 2021 All rights reserved.</span>
                            </p>
                            <div className="text-center">
                                <a className="inline-block px-1" href="#">
                                    <img src="atis-assets/social/facebook.svg" alt="" /></a>
                                <a className="inline-block px-1" href="#">
                                    <img src="atis-assets/social/twitter.svg" alt="" /></a>
                                <a className="inline-block px-1" href="#">
                                    <img src="atis-assets/social/instagram.svg" alt="" /></a>
                            </div>
                        </div>
                    </nav></div>
            </section>
            <section>


                <div className="py-10 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 max-w-md mx-auto text-center">
                            <span className="text-green-600 font-bold">Trusted by hundreds of customers</span>
                            <h2 className="text-4xl md:text-5xl font-bold">What services do we provide?</h2>
                        </div>
                        <div className="flex flex-wrap -mx-4 ">
                            <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4 items-center justify-center text-center">
                                <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                                    {/* <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg> */}
                                    <img className="w-8 h-8" src="img/Boiler.png" alt="boiler img" />
                                </span>
                                <h4 className="mb-4 text-2xl font-bold font- ">Boiler replacements and upgrades</h4>
                                <p className="pb-2 text-gray-500 leading-loose">We supply and install regular, system and combi boilers to suit all homes and budgets. All boilers we install are high efficiency condensing boilers.</p>
                                <NavLink className="p-1 inline-block py-2 px-6 leading-loose  bg-green-400 hover:bg-green-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" to="/services">Learn more</NavLink>
                            </div>
                            <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4 items-center justify-center text-center">
                                <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                                    <svg className="svg-icon w-8 h-8" viewBox="0 0 20 20">
                                        <path fill="none" d="M10.867,12.751V7.4c0-0.478-0.388-0.866-0.866-0.866S9.134,6.923,9.134,7.4v5.351c-1.008,0.357-1.733,1.316-1.733,2.448c0,1.436,1.164,2.599,2.6,2.599c1.435,0,2.599-1.163,2.599-2.599C12.6,14.067,11.876,13.108,10.867,12.751 M12.6,11.739V3.068c0-1.436-1.164-2.6-2.599-2.6c-1.436,0-2.6,1.164-2.6,2.6v8.671c-1.05,0.79-1.733,2.044-1.733,3.46c0,2.393,1.939,4.332,4.333,4.332c2.392,0,4.333-1.939,4.333-4.332C14.333,13.783,13.65,12.529,12.6,11.739 M10,18.665c-1.914,0-3.466-1.552-3.466-3.466c0-1.282,0.698-2.399,1.733-2.999V3.068c0-0.957,0.776-1.733,1.733-1.733s1.733,0.776,1.733,1.733V12.2c1.035,0.6,1.732,1.717,1.732,2.999C13.466,17.113,11.914,18.665,10,18.665"></path>
                                    </svg>
                                </span>
                                <h4 className="mb-4 text-2xl font-bold font-heading">Smart heating controls</h4>
                                <p className="pb-2 text-gray-500 leading-loose">Save up to €120 per year on your heating bills with The award-winning Hive Thermostat. Control your heating from anywhere via your smartphone.</p>
                                <NavLink className="p-1 inline-block py-2 px-6 leading-loose  bg-green-400 hover:bg-green-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" to="/services">Learn more</NavLink>
                            </div>
                            <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4 items-center justify-center text-center">
                                <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 60 60" stroke="currentColor">
                                        <path stroke-width="2" d="M60,13.5v-9h-3v-3H47v3h-1v-3H36v3h-1v-3H25v3h-1v-3H14v3h-1v-3H3v3H0v9h3v33H0v9h3v3h10v-3h1v3h10v-3h1v3h10v-3h1v3h10v-3
	h1v3h10v-3h3v-9h-3v-33H60z M58,6.5v5h-1v-5H58z M47,6.5v5h-1v-5H47z M47,13.5v33h-1v-33H47z M36,6.5v5h-1v-5H36z M36,13.5v33h-1
	v-33H36z M25,6.5v5h-1v-5H25z M25,13.5v33h-1v-33H25z M14,6.5v5h-1v-5H14z M14,13.5v33h-1v-33H14z M2,11.5v-5h1v5H2z M2,53.5v-5h1v5
	H2z M11,56.5H5v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M13,53.5v-5h1v5H13z M22,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M24,53.5v-5h1
	v5H24z M33,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M35,53.5v-5h1v5H35z M44,56.5h-6v-1v-9v-33v-9v-1h6v1v9v33v9V56.5z M46,53.5
	v-5h1v5H46z M58,48.5v5h-1v-5H58z M55,46.5v9v1h-6v-1v-9v-33v-9v-1h6v1v9V46.5z"/>
                                    </svg>

                                </span>
                                <h4 className=" mb-4 text-2xl font-bold font-heading ">Heating system powerflushing</h4>
                                <p className="pb-2 text-gray-500 leading-loose t">Powerflushing is a popular method of cleaning and maintaining a central heating system. A thorough powerflush will improve heat distribution throughout the property </p>
                                <NavLink className="p-1 inline-block py-2 px-6 leading-loose  bg-green-400 hover:bg-green-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" to="/services">Learn more</NavLink>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section>

                <div className="py-20  radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 max-w-md text-center mx-auto">
                            <span className="text-green-600 font-bold" id="how-it-works">Get an estimate in seconds</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">How does it work?</h2>
                        </div>
                        <div className="relative flex flex-wrap -mx-4 z-0">
                            <div className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-green-600" style={{ top: '10%', zIndex: -1 }} />
                            <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                                <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">1</span>
                                <h3 className="mb-4 text-2xl font-bold font-heading">Get an instant estimate</h3>
                                <p className="text-gray-500 leading-loose">Fill out our quick online form, telling us a bit about your home. We will recommend the best boiler for you.</p>
                            </div>
                            <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">2</span>
                                <h3 className="mb-4 text-2xl font-bold font-heading">Home assessment</h3>
                                <p className="text-gray-500 leading-loose">We will contact you to discuss your estimate and arrange a free, no obligation home assessment on a day that suits you.</p>
                                <NavLink className="mt-10 px-10 hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" to="/get-quote">Get Your Estimate</NavLink>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 text-center">
                                <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">3</span>
                                <h3 className="mb-4 text-2xl font-bold font-heading">Enjoy your warmer home</h3>
                                <p className="text-gray-500 leading-loose mb-10">We will install your new boiler on a day that suits you and you will be right on the way to saving hundres on your energy bills.</p>
                                <NavLink className="mt-20 px-10 sm:inline-block lg:hidden py-2  bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" to="/get-quote">Get Your Estimate</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="skewed-top-right">
                <div className="skew skew-top ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" /></svg></div>
                <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
                        <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
                            <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                                <span className="text-green-600 font-bold">See what our customers say</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading">Testimonials</h2>
                            </div>
                            <div className="w-full lg:w-1/5">
                            </div>
                        </div>
                    </div>
                    <div className="relative flex">

                        <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
                            <div className="mb-4 w-full lg:w-1/3 px-3">
                                <div className="p-8 bg-white rounded shadow text-center">
                                    <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                        <p className="mb-8 text-gray-500 leading-loose">John and his colleagues replaced our gunbarrel pipes, radiators and installed a new boiler. They came to price the job when they said they would and likewise when they came to do the work. We would have no hesitation in recommending them and would use O'Mahony Heating and Plumbing again.</p>
                                        <h4 className="mb-1 text-2xl font-bold font-heading">Jim Malone</h4>
                                        <p className="text-gray-500">Pipe repair, Boiler installation</p>
                                        <Review />

                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 w-full lg:w-1/3 px-3">
                                <div className="p-8 bg-white rounded shadow text-center">
                                    <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                        <p className="mb-8 text-gray-500 leading-loose">I recently got a new boiler installed by o Mahony’s plumbing and heating  and I was really happy with them. They came out to me very fast and had the job done in no time. I would highly recommend them.</p>

                                        <h4 className="mb-1 text-2xl font-bold font-heading">Ann Rohan</h4>
                                        <p className="text-gray-500">Boiler Installation</p>
                                        <Review />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 w-full lg:w-1/3 px-3">
                                <div className="p-8 bg-white rounded shadow text-center">
                                    <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                        <p className="mb-8 text-gray-500 leading-loose">We are very happy with our new bathroom and boiler! John and his team were professional, responsive, timely and most importantly, trustworthy. They were quick to respond to and remedy any issues. Would definitely recommend them and would definitely use them again!</p>
                                        <h4 className="mb-1 text-2xl font-bold font-heading">Sheila O'Mahony</h4>
                                        <p className="text-gray-500">Bathroom renovation, Boiler Installation</p>
                                        <Review />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <Footer />
        </>

    );
}