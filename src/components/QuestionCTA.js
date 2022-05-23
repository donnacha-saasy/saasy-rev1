import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';



const QuestionCTA = () => (

    <section className="py-20  bg-white">
        <div className="container mx-auto px-20">
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-auto bg-white mb-10 lg:mb-0 lg:mr-8 py-8 px-10 rounded">
                    <img className="h-16" src="atis-assets/logo/atis/atis-mono-sign.svg" alt="" />
                </div>
                <div className="w-full lg:w-auto mb-10 lg:mb-0 text-center lg:text-left">
                    <h2 className="max-w-xl mx-auto lg:mx-0 mb-2 text-4xl lg:text-5xl font-bold font-heading">Still have a question?</h2>
                    <p className="max-w-xl mx-auto lg:mx-0 text-gray-500 leading-loose">We are on hand from 8am to 6pm to answer any of your question. Feel free to give us a call!</p>
                </div>
                <div className="w-full lg:w-auto lg:ml-auto text-center"><a className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200" tel="087 255 6270">Call Us</a></div>
            </div>
        </div>
    </section>
);

export default QuestionCTA;