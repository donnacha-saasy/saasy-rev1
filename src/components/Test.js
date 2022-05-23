
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


const Test = () => (


    <div>
        <section className="skewed-bottom-right"><nav className="relative px-6 py-6 flex justify-between items-center bg-gray-50"><a className="text-3xl font-bold leading-none" href="#"><img src="images/logo-inst.png" alt="" width={80} /></a>
            <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-gray-400 p-3">
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Mobile menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg></button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"><li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></li>
                <li><a className="text-sm text-green-600 font-bold" href="#">About Us</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Grants</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">FAQs</a></li>
            </ul><a className="hidden lg:inline-block py-2 px-6 hover:bg-gray-50 text-sm font-bold rounded-l-xl rounded-t-xl transition duration-200 bg-green-400 text-white" href="#">Free Estimate</a>
        </nav><div className="bg-gray-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                            <div className="w-full text-center lg:text-left">
                                <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                                        <span>Get your boiler upgraded by the</span>
                                        <span className="text-green-600">experts.</span>
                                    </h2>
                                </div>
                                <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose">O'Mahony Heating &amp; Plumbing are experts in all things heating. We are based in cork with over 18 years experience. We cover all aspects of heating, including oil and gas boiler upgrades, smart heating controls and powerflushing.</p>
                                    <div><a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get a quote</a><a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="relative" style={{ zIndex: 0 }}>
                                <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="images/227146987-4127402653982201-1658335255864581277-n.jpg" alt="" /><img className="hidden md:block absolute" style={{ top: '-2rem', right: '3rem', zIndex: -1 }} src="atis-assets/elements/green-dark-up.svg" alt="" /><img className="hidden md:block absolute" style={{ bottom: '-2rem', right: '-2rem', zIndex: -1 }} src="atis-assets/elements/wing-green-down.svg" alt="" /><img className="hidden md:block absolute" style={{ top: '3rem', right: '-3rem', zIndex: -1 }} src="atis-assets/elements/bullets-gray-right.svg" alt="" /><img className="hidden md:block absolute" style={{ bottom: '2.5rem', left: '-4.5rem', zIndex: -1 }} src="atis-assets/elements/bullets-gray-left.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
            <div className="hidden navbar-menu relative z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"><div className="flex items-center mb-8">
                    <a className="mr-auto text-3xl font-bold leading-none" href="#"><img src="images/logo-inst.png" alt="" width={80} /></a>
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
            <div className="skew skew-top mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10" />
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10" />
                </svg>
            </div>
            <div className="py-20 radius-for-skewed
                ">
                <div className="container mx-auto px-4">
                    <div className="mb-16 max-w-md mx-auto text-center">
                        <span className="text-green-600 font-bold">Trusted by hundreds of customers</span>
                        <h2 className="text-4xl md:text-5xl font-bold">What services do you provide?</h2>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-4">
                            <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                            <h4 className="mb-4 text-2xl font-bold font-heading">Boiler replacements and upgrades</h4>
                            <p className="pb-2 text-gray-500 leading-loose">We supply and install regular, system and combi boilers to suit all homes and budgets. All boilers we install are high efficiency condensing boilers.</p>
                            <a className="p-1 inline-block py-2 px-6 leading-loose bg-green-400 hover:bg-green-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Learn more</a>
                        </div>
                        <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-4">
                            <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <h4 className="mb-4 text-2xl font-bold font-heading">Smart heating controls</h4>
                            <p className="pb-2 text-gray-500 leading-loose">Save up to €120 per year on your heating bills with The award-winning Hive Thermostat. Control your heating from anywhere via your smartphone.</p>
                            <a className="p-1 inline-block py-2 px-6 leading-loose bg-green-400 hover:bg-green-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Learn more</a>
                        </div>
                        <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-4">
                            <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <h4 className=" mb-4 text-2xl font-bold font-heading">Heating system powerflushing</h4>
                            <p className="pb-2 text-gray-500 leading-loose">Powerflushing is a popular method of cleaning and maintaining a central heating system. Great for older heating systems. </p>
                            <a className="p-1 inline-block py-2 px-6 leading-loose bg-green-400 hover:bg-green-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Learn more</a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                            <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </span>
                            <h4 className=" mb-4 text-2xl font-bold font-heading">Heatpump system installation</h4>
                            <p className="pb-2 text-gray-500 leading-loose">Duis ut facilisis orci. Morbi lacinia nunc a augue eleifend, sed placerat ex faucibus. Duis ante arcu, pretium ac luctus vulputate. Highest effeciency.</p>
                            <a className="p-1 inline-block py-2 px-6 leading-loose bg-green-400 hover:bg-green-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10" />
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10" />
                </svg>
            </div>
        </section>
        <section className="skewed-top-left skewed-bottom-left"><div className="skew skew-top mr-for-radius">
            <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 10 0 10" /></svg></div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" /></svg></div>
            <div className="py-20 bg-gray-50 radius-for-skewed skewed-top-right">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                            <div className="max-w-md lg:mx-auto">
                                <span className="text-green-600 font-bold">Dolor sit amet consectutar</span>
                                <h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading">Why choose O'Mahony?</h2>
                                <p className="mb-6 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                                <ul className="text-gray-500 font-bold"><li className="flex mb-4">
                                    <svg className="mr-2 w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Vestibulum viverra ante non libero</span>
                                </li>
                                    <li className="flex mb-4">
                                        <svg className="mr-2 w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Morbi mollis metus pretium ultrices tincidunt</span>
                                    </li>
                                    <li className="flex mb-4">
                                        <svg className="mr-2 w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Etiam lectus nunc, commodo et risus in</span>
                                    </li>
                                </ul></div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-wrap -mx-4">
                            <div className="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                                <div className="mb-8 py-6 pl-6 pr-4 shadow rounded bg-white">
                                    <span className="mb-4 inline-block p-3 rounded-lg bg-green-100">
                                        <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></span>
                                    <h4 className="mb-2 text-2xl font-bold font-heading">RGII</h4>
                                    <p className="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="py-6 pl-6 pr-4 shadow rounded bg-white">
                                    <span className="mb-4 inline-block p-3 rounded-lg bg-green-100">
                                        <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg></span>
                                    <h4 className="mb-2 text-2xl font-bold font-heading">OFTEC</h4>
                                    <p className="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:mt-20 px-4">
                                <div className="mb-8 py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                                    <span className="mb-4 inline-block p-3 rounded bg-green-100">
                                        <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></span>
                                    <h4 className="mb-2 text-2xl font-bold font-heading">SEAI</h4>
                                    <p className="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                                    <span className="mb-4 inline-block p-3 rounded bg-green-100">
                                        <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg></span>
                                    <h4 className="mb-2 text-2xl font-bold font-heading">10 Year warranty</h4>
                                    <p className="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 10 10" /></svg></div>
        </section>
        <section><div className="skew skew-top mr-for-radius">
            <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 10 0 10" /></svg></div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" /></svg></div>
            <div className="py-20  radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="mb-16 max-w-md text-center mx-auto">
                        <span className="text-green-600 font-bold">Get an estimate in seconds</span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-heading">How does it work?</h2>
                    </div>
                    <div className="relative flex flex-wrap -mx-4 z-0">
                        <div className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-green-600" style={{ top: '10%', zIndex: -1 }} />
                        <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                            <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">1</span>
                            <h3 className="mb-4 text-2xl font-bold font-heading">Get an instant estimate</h3>
                            <p className="text-gray-500 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
                        </div>
                        <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
                            <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">2</span>
                            <h3 className="mb-4 text-2xl font-bold font-heading">Home assessment</h3>
                            <p className="text-gray-500 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 text-center">
                            <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">3</span>
                            <h3 className="mb-4 text-2xl font-bold font-heading">Enjoy your warmer home</h3>
                            <p className="text-gray-500 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 10 10" /></svg></div>
        </section>
        <section className="skewed-top-right"><div className="skew skew-top mr-for-radius">
            <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 10 0 10" /></svg></div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" /></svg></div>
            <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
                    <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
                        <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                            <span className="text-green-600 font-bold">Dolor sit amet consectutar</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Testimonials</h2>
                        </div>
                        <div className="w-full lg:w-1/5">
                            <button className="mr-4 bg-white p-5 rounded-full shadow-md text-green-600 hover:text-green-700 transition duration-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></button>
                            <button className="bg-white p-5 rounded-full shadow-md text-green-600 hover:text-green-700 transition duration-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></button>
                        </div>
                    </div>
                </div>
                <div className="relative flex">
                    <div className="hidden lg:block absolute top-0 left-0 lg:w-1/3 px-3 -ml-80 opacity-25">
                        <div className="p-8 bg-white rounded shadow text-center">
                            <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" /><h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                                <p className="text-gray-500">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
                        <div className="mb-4 w-full lg:w-1/3 px-3">
                            <div className="p-8 bg-white rounded shadow text-center">
                                <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" /><h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                                    <p className="text-gray-500">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 w-full lg:w-1/3 px-3">
                            <div className="p-8 bg-white rounded shadow text-center">
                                <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" /><h4 className="mb-1 text-2xl font-bold font-heading">Dennis Robertson</h4>
                                    <p className="text-gray-500">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 w-full lg:w-1/3 px-3">
                            <div className="p-8 bg-white rounded shadow text-center">
                                <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" /><h4 className="mb-1 text-2xl font-bold font-heading">Daisy Carter</h4>
                                    <p className="text-gray-500">Product Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block absolute top-0 right-0 lg:w-1/3 px-3 -mr-80 opacity-25">
                        <div className="p-8 bg-white rounded shadow text-center">
                            <div style={{ background: 'url("atis-assets/elements/quote-grey.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}>
                                <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" /><h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                                <p className="text-gray-500">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 10 10" /></svg></div>
        </section>
        <section className><div className="skew skew-top mr-for-radius ">
            <svg className="h-8 md:h-12 lg:h-20 w-full text-green-50 bg-green-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 10 0 10" /></svg></div>
            <div className="skew skew-top ml-for-radius ">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50 " viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" className /></svg></div>
            <div className="py-20 bg-green-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
                            <a className="inline-block mb-3 text-3xl font-bold leading-none" href="#">
                                <img className="h-12" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" /></a>
                            <p className="mb-4 max-w-sm text-gray-600 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt felis eu est.</p>
                            <div>
                                <a className="inline-block w-10 mr-2 p-2 bg-green-200  hover:bg-green-100 rounded" href="#">
                                    <img className="mx-auto" src="atis-assets/social/facebook.svg" /></a>
                                <a className="inline-block w-10 mr-2 p-2 bg-green-200  hover:bg-green-100 rounded" href="#">
                                    <img className="mx-auto" src="atis-assets/social/twitter.svg" /></a>
                                <a className="inline-block w-10 mr-2 p-2 bg-green-200  hover:bg-green-100 rounded" href="#">
                                    <img className="mx-auto" src="atis-assets/social/instagram.svg" /></a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
                            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                                <h3 className="mb-6 text-2xl font-bold">Products</h3>
                                <ul><li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Services</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">About Us</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">News and Stories</a></li>
                                    <li><a className="text-gray-800 hover:text-gray-600" href="#">Roadmap</a></li>
                                </ul></div>
                            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                                <h3 className="mb-6 text-2xl font-bold">Important Links</h3>
                                <ul><li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Organization Team</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Our Journeys</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Pricing Plans</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Roadmap</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Terms &amp; Conditions</a></li>
                                    <li><a className="text-gray-800 hover:text-gray-600" href="#">Privacy Policy</a></li>
                                </ul></div>
                            <div className="w-full md:w-1/3 lg:w-auto">
                                <h3 className="mb-6 text-2xl font-bold">Company</h3>
                                <ul><li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">About Us</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Jobs</a></li>
                                    <li className="mb-4"><a className="text-gray-800 hover:text-gray-600" href="#">Press</a></li>
                                    <li><a className="text-gray-800 hover:text-gray-600" href="#">Contact Us</a></li>
                                </ul></div>
                        </div>
                    </div>
                    <p className="lg:text-center text-sm text-gray-600 border-t border-gray-300 pt-12 mt-16">© 2021. All rights reserved.</p>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 10 10" /></svg></div>
        </section>
    </div>

);

export default Test;