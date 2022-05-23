import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import HowItWorks from "./How.js";
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from "firebase/compat/app";
import { axios, db, firebaseConfig } from '../firebase/firebaseConfig'




const phoneSchema = Yup.string()
    .phone("IRL")
    .required();

(async () => {
    console.log(await phoneSchema.isValid('+919876543210')); // → true
})();
//const { history } = this.props;

const Powerflushing = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: ''

        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),

        }),

        onSubmit: values => {

            console.log("TEst");
            const db = firebase.firestore();
            axios.post(
                'https://europe-west1-test-api-4f3e2.cloudfunctions.net/api/callbackRequest',
                formik.values
            )
                .then(res => {

                    db.collection('callbackRequest').add({

                        firstName: formik.firstName,
                        lastName: formik.lastName,
                        email: formik.email,
                        mobile: formik.mobile

                    })
                        (async () => {
                            console.log("submitted"); // → true
                        })();
                    //window.location.replace('/powerflush-thanks');
                })

                .catch(error => {
                    console.log(error)
                })
            alert('Thank you for your submission. Someone will be in touch soon.');

            //history.push('/powerflush-thanks');
        },
    });
    // const sendEmail = () => {
    //     null
    // }
    return (
        <>
            <Nav />

            <div>
                <div className="relative pt-12 md:pt-16 pb-32 md:pb-64 bg-gray-50 border-b-4 border-green-600">
                    <div className="relative container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
                            <h2 className="mb-10 text-4xl lg:text-5xl font-bold">Learn how a Powerflush can benefit you.</h2>
                            <div><a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold leading-loose rounded-l-xl rounded-t-xl transition duration-200" href="#callback">Contact Us</a><a className="inline-block w-full lg:w-auto py-2 px-6 font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#why-powerflush">How it works</a></div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 max-w-3xl mx-auto px-4">
                        <div className="rounded-3xl md:rounded-6xl md:rounded-br-none aspect-w-16 aspect-h-9"  ><iframe className="rounded-3xl md:rounded-6xl md:rounded-br-none" width="560" height="315" src="https://www.youtube.com/embed/5F4afwx62QI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                    </div>
                </div>

                <section>

                    <div className="skew skew-top ml-for-radius">
                        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                            <polygon fill="currentColor" points="0 10 10 0 10 10" />
                        </svg>
                    </div>
                    <div className="py-20 bg-gray-50 radius-for-skewed">
                        <div className="container mx-auto px-4" id="why-powerflush">
                            <div className="mb-16 flex flex-wrap items-center">
                            </div>
                            <div className="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
                                <div className="w-full lg:w-1/2 rounded-l">
                                    <img className="object-cover" src="img/powerflush.webp" alt="" />
                                </div>
                                <div className="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white" >
                                    <h2 className="my-4 text-3xl font-bold">Why power flush a heating system?</h2>
                                    <p className="mb-4 text-gray-400 leading-relaxed text-lg">A power flush for a heating system is like a service for your heating system.When you service your boiler, you are only looking at the internal components of the gas or oil boiler.A power flush will clean the entire heating system, including the boilers heat exchangers.
                                    </p>
                                    <p className="mb-4 text-gray-400 leading-relaxed text-lg">Cleaning them, will remove any grime, sludge or lime build-up which reduces the efficiency of the entire heating system.Grime on radiators will cause cold spots and will reduce the amount of heat that a radiator are let out.Grime in a pump will cause additional wear and strain on the pump and will eventually stop it working.This will stop your entire heating system from operating.Grime build-up on your boilers heat exchangers will cause them to output less heat than when they were new.</p>
                                    <p className="mb-4 text-gray-400 leading-relaxed text-lg">The power flush chemicals will be forced around the entire heating system pipework and radiators and cylinder and this will get them shining internally.When we have finished with the cleaning chemical, we will input a system inhibitor to your heating system.This will prevent future build-up of grime, sludge or lime.</p>
                                    <p className="mb-4 text-gray-400 leading-relaxed text-lg">A Power flush is not required on all heating systems, though it can be beneficial for solving lots of heating system problems.</p>

                                </div>
                            </div>
                            <div className="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
                                <div className="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">

                                    <h2 className="my-4 text-3xl font-bold">What happens during a power flush?</h2>
                                    <ul className="mb-2 text-gray-500">
                                        <li className="mb-2 flex">
                                            <span className="mb-2 text-gray-400 leading-relaxed text-lg">The power flushing machine is connected into the heating system, either across the pump couplings, at radiator connections, or wherever makes most sense on your heating system.</span>
                                        </li>
                                        <li className="mb-2 flex">
                                            <span className="mb-2 text-gray-400 leading-relaxed text-lg">Power flushing works by pumping water and chemicals at a high velocity through the heating system, to loosen and mobilise harmful corrosion deposits and to suspend them in the the moving water.The process is improved by the use of cleansing chemicals.</span></li>

                                        <li className="mb-2 flex">
                                            <span className="mb-2 text-gray-400 leading-relaxed text-lg">A flow reverse device, which creates turbulence in the pipes and rads will help “mobilise” and loosen the blockage.</span>
                                        </li>
                                        <li className="mb-2 flex">
                                            <span className="mb-2 text-gray-400 leading-relaxed text-lg">The dirt filled water from your heating system is replaced with clean water and it is sent to a local drain. During the power flushing process, radiators are individually flushed by directing the full output of the machine through each radiator, one at a time.</span>
                                        </li>
                                        <li className=" flex">
                                            <span className=" text-gray-400 leading-relaxed text-lg">When the power flush is completed your heating system is filled up with clean water and inhibitor to prevent further build up.</span></li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 rounded-l order-0 lg:order-1 bg-gray-100">
                                    <img className="object-cover" src="img/powerflush 2.webp" alt="" />
                                </div>
                            </div>




                        </div>
                    </div>

                </section>
            </div >
            <div className="relative py-20 bg-gray-50 overflow-hidden" id="callback">
                <img className="hidden lg:block absolute inset-0 w-full" src="atis-assets/background/lines.svg" alt="" />
                <div className="relative container mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                            <div className="w-full text-center lg:text-left">
                                <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                                        <span>Want to book a </span>
                                        <span className="text-green-600"> Powerflush?</span>
                                    </h2>
                                </div>
                                <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose">If you want to book a Powerflush or just have a question why not request a callback?</p>

                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="max-w-sm text-center mx-auto">
                                <div className="mb-4 px-6 py-8 bg-white rounded-xl">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold">Request a callback</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="mb-4 flex flex-wrap -mx-2">
                                            <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                                                <input id="firstName"
                                                    name="firstName"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.firstName} className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="First Name" />
                                                {formik.touched.firstName && formik.errors.firstName ? (
                                                    <div>{formik.errors.firstName}</div>
                                                ) : null}
                                            </div>
                                            <div className="w-full lg:w-1/2 px-2">
                                                <input id="lastName"
                                                    name="lastName"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.lastName} className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="Last Name" />
                                                {formik.touched.lastName && formik.errors.lastName ? (
                                                    <div>{formik.errors.lastName}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email" placeholder="hello@example.com" id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email} />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div>{formik.errors.email}</div>
                                        ) : null}

                                        <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="phone" placeholder="Mobile No."
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
                                        <div className="text-center">
                                            <button onSubmit={formik.handleSubmit} type="submit" className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <p className="text-xs text-gray-500"><a className="underline text-green-600 hover:text-green-700" href="#">Policy privacy</a> and <a className="underline text-green-600 hover:text-green-700" href="#">Terms of Use</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
export default Powerflushing;