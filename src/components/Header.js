import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


const Header = () => (

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
                            <div><a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get a quote</a><a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a></div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                    <div className="relative" style={{ zIndex: 0 }}>
                        <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://static.shuffle.dev/uploads/files/03/034af0b7e5271aba2a65ea977a6bf3ea667bab24/227146987-4127402653982201-1658335255864581277-n.jpg" alt="" /><img className="hidden md:block absolute" style={{ top: '-2rem', right: '3rem', zIndex: -1 }} src="atis-assets/elements/green-dark-up.svg" alt="" /><img className="hidden md:block absolute" style={{ bottom: '-2rem', right: '-2rem', zIndex: -1 }} src="atis-assets/elements/wing-green-down.svg" alt="" /><img className="hidden md:block absolute" style={{ top: '3rem', right: '-3rem', zIndex: -1 }} src="atis-assets/elements/bullets-gray-right.svg" alt="" /><img className="hidden md:block absolute" style={{ bottom: '2.5rem', left: '-4.5rem', zIndex: -1 }} src="atis-assets/elements/bullets-gray-left.svg" alt="" /></div>
                </div>
            </div>
        </div>
    </div>
        <div className="mr-for-radius">
            <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>
        <div className="hidden navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"><div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none" href="#"><img src="https://static.shuffle.dev/uploads/files/03/034af0b7e5271aba2a65ea977a6bf3ea667bab24/logo-inst.png" alt="" width={80} /></a>
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



);

export default Header;
