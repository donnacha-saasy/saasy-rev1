import React from "react";
import { NavLink } from "react-router-dom";




export default function PowerflushThanks() {

    return (
        <section className=" skewed-bottom-right">

            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto text-center">
                        <a className="mb-6 inline-block text-3xl font-bold leading-none" href="#">
                            <img className="h-12" src="atis-assets/logo/atis/atis-mono-sign.svg" alt="" width="auto" /></a>
                        <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">Thank you for submitting our form</h2>
                        <p className="max-w-md mx-auto mb-6 text-gray-500 leading-loose">We will be in touch soon! Click below to go to the homepage.</p>
                        <NavLink className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" to="/Landing">Home</NavLink>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>

        </section>);
}