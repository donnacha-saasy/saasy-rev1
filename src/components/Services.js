import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


const Services = () => (
    <section>


        <div className="py-10 radius-for-skewed">
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

                </div>
            </div>
        </div>

    </section>
);

export default Services;