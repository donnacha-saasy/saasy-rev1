import React, { Component, } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import { useHistory, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import firebase from "firebase/compat/app";
import { axios, db, firebaseConfig } from '../firebase/firebaseConfig'
import FormImpl from "react-bootstrap/esm/Form";





const phoneSchema = Yup.string()
    .phone("IRL")
    .required();

(async () => {
    console.log(await phoneSchema.isValid('+919876543210')); // → true
})();







{/*signup*/ }

const HouseType = () => {


    const cors = require('cors')({
        origin: true
    })

    const [formStep, setFormStep] = React.useState(0)
    const { watch, register } = useForm()
    const completedFormStep = () => {
        setFormStep(cur => cur + 1)
    }
    const { history } = this.props;
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            address: '',
            eircode: '',
            year: '',
            oilGas: '',
            radAmount: '',
            houseType: ''
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
            const db = firebase.firestore();
            axios.post(
                'https://europe-west1-test-api-4f3e2.cloudfunctions.net/api/createRequest',
                formik.values
            )
                .then(res => {
                    db.collection('quote-requests').add({

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
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            history.push('/landing');
        },
    });
    // const sendEmail = () => {
    //     null
    // }

    return (

        < div >

            {formStep === 0 && (
                <section className=" skewed-bottom-right">

                    <div className="py-20 bg-gray-50 radius-for-skewed">
                        <div className="container mx-auto px-4">
                            <div className="max-w-xl mx-auto text-center">
                                <a className="mb-6 inline-block text-3xl font-bold leading-none" href="#">
                                    <img className="h-12" src="atis-assets/logo/atis/atis-mono-sign.svg" alt="" width="auto" /></a>
                                <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">Get an estimate in seconds</h2>
                                <p className="max-w-md mx-auto mb-6 text-gray-500 leading-loose">We will get you a boiler replacement estimate in seconds! Click below to get started.</p>
                                <button onClick={completedFormStep} type="button" className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
                                >Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="skew skew-bottom mr-for-radius">
                        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10" /></svg></div>

                </section>)}
            {formStep === 1 && (
                <section className="skewed-top-left"><div className="skew skew-top mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 10 0 10" /></svg></div>
                    <div className="skew skew-top ml-for-radius">
                        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" /></svg></div>
                    <div className="py-20 bg-gray-50 radius-for-skewed">
                        <div className="container mx-auto px-4">
                            <div className="mb-16 max-w-lg mx-auto text-center">
                                <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">Describe your home.</h2>
                                <p className="mb-6 text-gray-500">Lets get started by first telling us which of these options best describes your home.</p>
                            </div>
                            <div className="flex flex-wrap max-w-4xl mx-auto">
                                <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                        <div className="mb-2">
                                            <img src="placeholders/pictures/office.jpg" alt="" className="rounded shadow" /><div className="my-1" />
                                            <h3 className="text-xl font-medium font-heading">Detached</h3>
                                        </div>
                                        <div>
                                            <span className="text-5xl lg:text-6xl font-bold" />
                                            <span className="text-gray-500" />
                                            <button type="submit" ref={register()} onClick={() => { completedFormStep(); formik.setFieldValue('houseType', 'detached') }} type="button" className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200 " href='#' >Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                        <div className="mb-2">
                                            <img src="placeholders/pictures/office.jpg" alt="" className="rounded shadow" /><div className="my-1" />
                                            <h3 className="text-xl font-medium font-heading" >Semi Detached</h3>
                                        </div>
                                        <div>
                                            <span className="text-5xl lg:text-6xl font-bold" />
                                            <span className="text-gray-500" />
                                            <button onClick={() => { completedFormStep(); formik.setFieldValue('houseType', 'Semi Detached') }} type="button" className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                        <div className="mb-2">
                                            <img src="placeholders/pictures/office.jpg" alt="" className="rounded shadow" /><div className="my-1" />
                                            <h3 className="text-xl font-medium font-heading">Terrace</h3>
                                        </div>
                                        <div>
                                            <span className="text-5xl lg:text-6xl font-bold" />
                                            <span className="text-gray-500" />
                                            <button onClick={() => { completedFormStep(); formik.setFieldValue('houseType', 'terraced') }} type="button" className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 px-4">
                                    <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                        <div className="mb-2">
                                            <img src="placeholders/pictures/office.jpg" alt="" className="rounded shadow" /><div className="my-1" />
                                            <h3 className="text-xl font-medium font-heading">Apartment</h3>
                                        </div>
                                        <div>
                                            <span className="text-5xl lg:text-6xl font-bold" />
                                            <span className="text-gray-500" />
                                            <button onClick={() => { completedFormStep(); formik.setFieldValue('houseType', 'Apartment') }} type="button" className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" >Select</button>
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
            )
            }
            {formStep === 2 && (<section>
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
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 max-w-lg mx-auto text-center">
                            <span className="text-green-600 font-bold" />
                            <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">What year was your house built?</h2>
                            <p className="mb-6 text-gray-500" />
                        </div>
                        <div className="flex flex-wrap max-w-4xl mx-auto">
                            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                    <div className="mb-12">
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Pre 2006</h3>
                                        <img src="placeholders/pictures/office.jpg" alt="" className="rounded shadow" />
                                        <p className="mb-6 text-gray-500" />
                                    </div>
                                    <div>
                                        <span className="text-5xl lg:text-6xl font-bold" />
                                        <span className="text-gray-500" />
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('year', 'Pre 2006') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                    <div className="mb-12">
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Post 2006</h3>
                                        <img src="placeholders/pictures/office.jpg" alt="" className="rounded shadow" />
                                        <p className="mb-6 text-gray-500" />
                                    </div>
                                    <div>
                                        <span className="text-5xl lg:text-6xl font-bold" />
                                        <span className="text-gray-500" />
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('year', 'Post 2006') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                    </div>
                                </div>
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
            </section>)}
            {formStep === 3 && (<section>
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
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 max-w-lg mx-auto text-center">
                            <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">How many radiators do you have?</h2>
                            <p className="mb-6 text-gray-500">This helps us calculate the correct boiler size for your home.</p>
                        </div>
                        <div className="flex flex-wrap max-w-4xl mx-auto">
                            <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                    <div className="mb-2">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">1-11</span>
                                        <div className="my-1" />
                                    </div>
                                    <div>
                                        <span className="text-5xl lg:text-6xl font-bold" />
                                        <span className="text-gray-500" />
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('radAmount', 'up to 11') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                    <div className="mb-2">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">11-18</span>
                                        <div className="my-1" />
                                    </div>
                                    <div>
                                        <span className="text-5xl lg:text-6xl font-bold" />
                                        <span className="text-gray-500" />
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('radAmount', 'Between 11-18') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                    <div className="mb-2">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">18-22</span>
                                        <div className="my-1" />
                                    </div>
                                    <div>
                                        <span className="text-5xl lg:text-6xl font-bold" />
                                        <span className="text-gray-500" />
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('radAmount', 'Between 18-22') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 px-4">
                                <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                                    <div className="mb-2">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">22+</span>
                                        <div className="my-1" />
                                    </div>
                                    <div>
                                        <span className="text-5xl lg:text-6xl font-bold" />
                                        <span className="text-gray-500" />
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('radAmount', 'More than 22') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                    </div>
                                </div>
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
            )}
            {formStep === 4 && (
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
                    <div className="py-20 bg-gray-50 radius-for-skewed">
                        <div className="container mx-auto px-4">
                            <div className="mb-16 mx-auto max-w-lg text-center">
                                <span className="text-green-600 font-bold" />
                                <h2 className="font-bold font-heading text-5xl">What fuel currently heats your home?</h2>
                            </div>
                            <div className="flex flex-wrap -mx-4">
                                <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">1</span>
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Gas</h3>
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('oilGas', 'gas') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                        <p className="text-gray-500 leading-loose" />
                                    </div>
                                </div>
                                <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">2</span>
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Oil</h3>
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('oilGas', 'oil') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                        <p className="text-gray-500 leading-loose" />
                                    </div>
                                </div>
                                <div className="w-full md:w-full lg:w-1/3 px-4">
                                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">3</span>
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Other</h3>
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('oilGas', 'other') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                        <p className="text-gray-500 leading-loose" />
                                    </div>
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
            )}
            {formStep === 5 && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center justify-center -mx-4">
                            <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
                                <a className="mb-6 inline-block text-3xl font-bold leading-none" href="#">
                                    <img className="h-12" src="atis-assets/logo/atis/atis-mono-sign.svg" alt="" width="auto" />
                                </a>
                                <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">Lets get you an estimate.</h2>
                                <p className="mb-8 text-gray-500 leading-loose">Enter your details and get your estimate instantly!</p>
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
                                            <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="Address" id="address"
                                                name="address"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.address} />
                                            {formik.touched.address && formik.errors.address ? (
                                                <div>{formik.errors.address}</div>
                                            ) : null}
                                            <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="tel" placeholder="Eircode"
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
                                            <button onSubmit={formik.handleSubmit} onClick={() => { completedFormStep() }} type="submit" className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">Finish</button>
                                        </form>

                                        <p className="text-xs text-gray-400">
                                        </p>
                                    </div>
                                    <p className="text-center text-gray-400">
                                        <a className="text-green-600 hover:text-green-700" href="#">Police privacy</a>
                                        <span> and </span>
                                        <a className="text-green-600 hover:text-green-700" href="#">Terms of Use</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)}

            {formStep === 6 && (
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
                    <div className="py-20 bg-gray-50 radius-for-skewed">
                        <div className="container mx-auto px-4">
                            <div className="mb-16 mx-auto max-w-lg text-center">
                                <span className="text-green-600 font-bold" />
                                <h2 className="font-bold font-heading text-5xl">What fuel currently heats your home?</h2>
                            </div>
                            <div className="flex flex-wrap -mx-4">
                                <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">1</span>
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Gas</h3>
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('oilGas', 'gas') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                        <p className="text-gray-500 leading-loose" />
                                    </div>
                                </div>
                                <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">2</span>
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Oil</h3>
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('oilGas', 'oil') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                        <p className="text-gray-500 leading-loose" />
                                    </div>
                                </div>
                                <div className="w-full md:w-full lg:w-1/3 px-4">
                                    <div className="py-10 px-6 bg-white shadow rounded text-center">
                                        <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-green-100 rounded text-2xl text-green-600 font-bold">3</span>
                                        <h3 className="mb-4 text-2xl font-bold font-heading">Other</h3>
                                        <button onClick={() => { completedFormStep(); formik.setFieldValue('oilGas', 'other') }} className="block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Select</button>
                                        <p className="text-gray-500 leading-loose" />
                                    </div>
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
            )}


        </div>
    );
};
export default HouseType;