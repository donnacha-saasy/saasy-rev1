import React, { useState } from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

import QuestionCTA from "./QuestionCTA.js";



export default function Landing() {
    const [question, setquestion] = useState(0);
    return (
        <>
            <Nav />


            <section>

                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 max-w-xl mx-auto text-center">

                            <h2 className="mb-6 text-5xl font-bold font-heading">Frequently Asked </h2> <span className="text-green-600 mb-6 text-5xl font-bold font-heading">Questions</span>

                        </div>
                        <div className="mb-16 flex justify-center space-x-4">
                            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
                            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
                            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
                            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
                            <button className="inline-block h-2 w-2 bg-green-600 rounded-full" />
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <ul className="space-y-4 lg:space-y-6">
                                <li className="p-6 bg-gray-50 rounded shadow">
                                    <div className="flex justify-between items-center">
                                        <h3 className=" text-xl w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">What do I need to consider when getting a new boiler?</h3>
                                        <div className="cursor-pointer" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                            {question === 0 ? (
                                                <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                            ) : (
                                                <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                            )}
                                        </div>
                                    </div>
                                    {question === 0 && <p className="mt-4 text-gray-400 font-normal leading-loose">When replacing your boiler there are a few essential things you have to take into consideration such as the size of your household, how much water you use, your budget, whether you need to move your boiler and whether or not to change the type of boiler you use to make it more efficient for your home. We've created a list of considerations to make replacing your boiler nice and easy: </p>}
                                </li>
                                <li className="p-6 bg-gray-50 rounded shadow">                                    <div className="flex justify-between items-center">
                                    <h3 className=" text-xl w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">What are the signs my boiler is inefficient?</h3>
                                    <div className="cursor-pointer" onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}>
                                        {question === 1 ? (

                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                        )}
                                    </div>
                                </div>
                                    {question === 1 && <p className="mt-4 text-gray-400 font-normal leading-loose"><ul className="px-5"><li>Your heating is generally sluggish.</li><li>Your bills are increasing.</li><li>Your hot water is unreliable.</li></ul>

                                    </p>}
                                </li>
                                <li className="p-6 bg-gray-50 rounded shadow">                                    <div className="flex justify-between items-center">
                                    <h3 className=" text-xl w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">Is there a grant for boilers?</h3>
                                    <div className="cursor-pointer" onClick={() => (question === 2 ? setquestion(null) : setquestion(2))}>
                                        {question === 2 ? (

                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                        )}
                                    </div>
                                </div>
                                    {question === 2 && <p className="mt-4 text-gray-400 font-normal leading-loose">There is no direct grant for a boiler only installation. However, there are various grants available for upgrading your heating to zoned heating controls. Check out our Grants page for more information about how you can qualify and claim these grants. </p>}
                                </li>
                                <li className="p-6 bg-gray-50 rounded shadow">                                    <div className="flex justify-between items-center">
                                    <h3 className=" text-xl w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">What is a Condensing Boiler?</h3>
                                    <div className="cursor-pointer" onClick={() => (question === 3 ? setquestion(null) : setquestion(3))}>
                                        {question === 3 ? (

                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                        )}
                                    </div>
                                </div>
                                    {question === 3 && <p className="mt-4 text-gray-400 font-normal leading-loose">Every gas boiler installed in Ireland's must be a condensing boiler by law regardless of whether it is a combi, regular or system boiler.

                                        Condensing boilers work by condensing water vapour in exhaust gases which recover latent heat that would otherwise have been wasted or vaporized through the flue.

                                        Condensing boilers are also known as high efficiency boilers and achieve in excess of 90% efficiency. This means that for every €100 you spend on your heating bill, less than 10% will be lost and €90 will go toward heating your home!

                                        If your boiler is older than 10 years old it could be operating at as low as 60% efficiency, meaning that for every €100 you spend on €40 could be wasted! </p>}
                                </li>
                                <li className="p-6 bg-gray-50 rounded shadow">                                    <div className="flex justify-between items-center">
                                    <h3 className=" text-xl w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">What is the difference between a Combi boiler and a regular boiler?</h3>
                                    <div className="cursor-pointer" onClick={() => (question === 4 ? setquestion(null) : setquestion(4))}>
                                        {question === 4 ? (

                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                        )}
                                    </div>
                                </div>
                                    {question === 4 && <p className="  mt-4 text-gray-400 font-normal leading-loose">The conventional boilers used in most older homes can be also be referred to as 'regular boilers' since they have been around for so long, and are very common. These non-system, non-combi boilers produce hot water that heats the radiators directly and they also provide hot water which is stored in a cylinder (often seen in the airing cupboard). The boiler gets the cold water feed from a storage tank (called a feed and expansion tank) which is usually located above the boiler, in the attic. Because the tank is higher than the boiler, the water is fed to the boiler by gravity. This tank not only feeds the boiler, it also acts as an 'expansion' tank. Water expands as it is heated and any excess hot water flows from the central heating system back into the 'feed and expansion' tank.</p>}
                                </li>
                                <li className="p-6 bg-gray-50 rounded shadow">                                    <div className="flex justify-between items-center">
                                    <h3 className=" text-xl w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">Should I have my heating system treated or cleansed?</h3>
                                    <div className="cursor-pointer" onClick={() => (question === 5 ? setquestion(null) : setquestion(5))}>
                                        {question === 5 ? (

                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                        )}
                                    </div>
                                </div>
                                    {question === 5 && <p className="  mt-4 text-gray-400 font-normal leading-loose">O'Mahony Heating and plumbing thoroughly recommends the good practice of cleansing a heating system as an important part of the boiler installation process. It is best practice to cleanse an existing heating system prior to installation of the new boiler. After the boiler has been installed, the heating system should be cleansed of debris and refilled with inhibitor.</p>}
                                </li>
                            </ul></div>
                    </div>
                </div>

            </section>
            <QuestionCTA />
            <Footer />
        </>

    );
}