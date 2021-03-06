import React, { Component, useState, useEffect } from "react";
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import firebase from "firebase/compat/app";
import { axios, db, firebaseConfig } from '../firebase/firebaseConfig';
import { DatePicker, AutoComplete, Select } from 'formik-antd'
import "antd/dist/antd.css"
import JobCard from "./JobCard";







const phoneSchema = Yup.string()
    .phone("IRL")
    .required();

(async () => {
    console.log(await phoneSchema.isValid('+919876543210')); // → true
})();







{/*signup*/ }

const Schedule = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        db.collection('schedule').onSnapshot(snapshot => (
            setJobs(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])


    const cors = require('cors')({
        origin: true
    })

    const [formStep, setFormStep] = React.useState(0)
    const { watch, register } = useForm()
    const completedFormStep = () => {
        setFormStep(cur => cur + 1)
    }
    const scheduleForm = useFormik({
        initialValues: {
            customerName: '',
            mobile: '',
            eircode: '',
            installDate: new Date().toISOString(),
            referenceID: '',
            jobStatus: '',

        },
        validationSchema: Yup.object({
            customerName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required')

        }),

        onSubmit: values => {
            console.log("test");
            const db = firebase.firestore();
            axios.post(
                'https://europe-west1-test-api-4f3e2.cloudfunctions.net/api/scheduleJob',
                scheduleForm.values
            )
                .then(res => {

                    db.collection('schedule').add({

                        customerName: scheduleForm.customerName,
                        mobile: scheduleForm.mobile,
                        eircode: scheduleForm.eircode,
                        installDate: scheduleForm.installDate,
                        referenceID: scheduleForm.referenceID,
                        jobStatus: scheduleForm.jobStatus,

                    })
                })
                .catch(error => {
                    console.log(error)
                })

        },
    });
    // const sendEmail = () => {
    //     null
    // }


    return (
        <FormikProvider value={scheduleForm}>
            < div >
                <section>
                    <div className>
                        <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 bg-gray-50">
                            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">

                                {formStep === 0 && (
                                    <section className="py-20 bg-gray-50">
                                        <div className="container mx-auto px-4">
                                            <div className="flex flex-wrap items-center justify-center -mx-4">

                                                <div className="w-full lg:w-1/2 px-4">
                                                    <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                                                        <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">

                                                            <form onSubmit={scheduleForm.handleSubmit}>
                                                                <div className="mb-6">
                                                                    <h4 className="text-2xl">Enter job details</h4>
                                                                </div>
                                                                <div className="mb-4  w-full bg-gray-50 rounded leading-loose">
                                                                    <div>
                                                                        <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                                                                            id="customerName"
                                                                            name="customerName"
                                                                            type="text"
                                                                            onChange={scheduleForm.handleChange}
                                                                            onBlur={scheduleForm.handleBlur}
                                                                            value={scheduleForm.values.customerName} className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="Customer Name" />
                                                                        {scheduleForm.touched.customerName && scheduleForm.errors.customerName ? (
                                                                            <div>{scheduleForm.errors.customerName}</div>
                                                                        ) : null}
                                                                    </div>

                                                                </div>


                                                                <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="phone" placeholder="Mobile No."
                                                                    id="mobile"
                                                                    name="mobile"
                                                                    type="phone"
                                                                    onChange={scheduleForm.handleChange}
                                                                    onBlur={scheduleForm.handleBlur}
                                                                    value={phoneSchema.isValid.phone}
                                                                />
                                                                {scheduleForm.touched.phone && scheduleForm.errors.phone ? (
                                                                    <div>{phoneSchema.isValid.phone}</div>
                                                                ) : null}

                                                                <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="string" placeholder="Eircode"
                                                                    id="eircode"
                                                                    name="eircode"
                                                                    type="text"
                                                                    onChange={scheduleForm.handleChange}
                                                                    onBlur={scheduleForm.handleBlur}
                                                                    value={scheduleForm.values.eircode}
                                                                />
                                                                <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="string" placeholder="Reference Number"
                                                                    id="referenceID"
                                                                    name="referenceID"
                                                                    type="text"
                                                                    onChange={scheduleForm.handleChange}
                                                                    onBlur={scheduleForm.handleBlur}
                                                                    value={scheduleForm.values.referenceID}
                                                                />
                                                                {scheduleForm.touched.eircode && scheduleForm.errors.eircode ? (
                                                                    <div>{scheduleForm.errors.eircode}</div>
                                                                ) : null}

                                                                <DatePicker className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                                                                    name="installDate"
                                                                    showTime={false}
                                                                    placeholder="DatePicker"
                                                                />

                                                                {scheduleForm.touched.eircode && scheduleForm.errors.eircode ? (
                                                                    <div>{scheduleForm.errors.eircode}</div>
                                                                ) : null}

                                                                <Select className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                                                                    name="jobStatus"
                                                                    style={{ width: "100%" }}
                                                                    placeholder="Select multiple"
                                                                    mode="single"
                                                                >
                                                                    <Select.Option value={"Job Scheduled"}>Scheduled</Select.Option>
                                                                    <Select.Option value={"Deposit Paid"}>Deposit Paid</Select.Option>
                                                                    <Select.Option value={"Provisionally Booked"}>Provisional</Select.Option>
                                                                </Select>


                                                                <button onSubmit={scheduleForm.handleSubmit} type="submit" className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">Add Job</button>

                                                            </form>

                                                            <p className="text-xs text-gray-400">
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>)}
                            </div>




                            <div className="py-20 w-full md:w-1/2 px-4 mb-4 md:mb-0">
                                <section className="py-8"><div className="container px-4 mx-auto">
                                    <div className="pt-4 bg-white shadow rounded">
                                        <div className="flex px-6 pb-4 border-b">
                                            <h3 className="text-xl font-bold">Job Schedule</h3>
                                        </div>
                                        <div className="p-4">
                                            <table className="table-auto w-full"><thead><tr className="text-xs text-gray-500 text-left">
                                                <th className="pb-3 font-medium">Reference NO</th><th className="pb-3 font-medium">Name</th><th className="pb-3 font-medium">Phone</th><th className="pb-3 font-medium">Install Date</th><th className="pb-3 font-medium">Eircode</th><th className="pb-3 font-medium">Status</th></tr></thead>
                                                <tbody>

                                                    {jobs.map(({ customerName, eircode, installDate, jobStatus, mobile, referenceID }) => (
                                                        <>
                                                            <JobCard
                                                                customerName={customerName}
                                                                eircode={eircode}
                                                                installDate={installDate}
                                                                jobStatus={jobStatus}
                                                                mobile={mobile}
                                                                referenceID={referenceID}
                                                            />

                                                        </>

                                                    ))}

                                                </tbody>
                                            </table>
                                            <div className="text-center mt-5">
                                                <a className="inline-flex items-center text-xs text-indigo-500 hover:text-blue-600 font-medium" href="#">
                                                    <span className="inline-block mr-2">
                                                        <svg className="text-indigo-400 h-3 w-3" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66667 12.3333H3.33333C2.8029 12.3333 2.29419 12.1226 1.91912 11.7476C1.54405 11.3725 1.33333 10.8638 1.33333 10.3333V3.66668C1.33333 3.48987 1.2631 3.3203 1.13807 3.19527C1.01305 3.07025 0.843478 3.00001 0.666667 3.00001C0.489856 3.00001 0.320286 3.07025 0.195262 3.19527C0.0702379 3.3203 0 3.48987 0 3.66668V10.3333C0 11.2174 0.351189 12.0652 0.976311 12.6904C1.60143 13.3155 2.44928 13.6667 3.33333 13.6667H8.66667C8.84348 13.6667 9.01305 13.5964 9.13807 13.4714C9.2631 13.3464 9.33333 13.1768 9.33333 13C9.33333 12.8232 9.2631 12.6536 9.13807 12.5286C9.01305 12.4036 8.84348 12.3333 8.66667 12.3333ZM4.66667 7.66668C4.66667 7.84349 4.7369 8.01306 4.86193 8.13808C4.98695 8.26311 5.15652 8.33334 5.33333 8.33334H8.66667C8.84348 8.33334 9.01305 8.26311 9.13807 8.13808C9.2631 8.01306 9.33333 7.84349 9.33333 7.66668C9.33333 7.48987 9.2631 7.3203 9.13807 7.19527C9.01305 7.07025 8.84348 7.00001 8.66667 7.00001H5.33333C5.15652 7.00001 4.98695 7.07025 4.86193 7.19527C4.7369 7.3203 4.66667 7.48987 4.66667 7.66668ZM12 4.96001C11.9931 4.89877 11.9796 4.83843 11.96 4.78001V4.72001C11.9279 4.65146 11.8852 4.58845 11.8333 4.53334V4.53334L7.83333 0.533343C7.77822 0.481488 7.71521 0.438731 7.64667 0.406677C7.62677 0.40385 7.60657 0.40385 7.58667 0.406677C7.51894 0.367838 7.44415 0.342906 7.36667 0.333344H4.66667C4.13623 0.333344 3.62753 0.544057 3.25245 0.91913C2.87738 1.2942 2.66667 1.80291 2.66667 2.33334V9.00001C2.66667 9.53044 2.87738 10.0392 3.25245 10.4142C3.62753 10.7893 4.13623 11 4.66667 11H10C10.5304 11 11.0391 10.7893 11.4142 10.4142C11.7893 10.0392 12 9.53044 12 9.00001V5.00001C12 5.00001 12 5.00001 12 4.96001ZM8 2.60668L9.72667 4.33334H8.66667C8.48986 4.33334 8.32029 4.26311 8.19526 4.13808C8.07024 4.01306 8 3.84349 8 3.66668V2.60668ZM10.6667 9.00001C10.6667 9.17682 10.5964 9.34639 10.4714 9.47141C10.3464 9.59644 10.1768 9.66668 10 9.66668H4.66667C4.48986 9.66668 4.32029 9.59644 4.19526 9.47141C4.07024 9.34639 4 9.17682 4 9.00001V2.33334C4 2.15653 4.07024 1.98696 4.19526 1.86194C4.32029 1.73691 4.48986 1.66668 4.66667 1.66668H6.66667V3.66668C6.66847 3.89411 6.70905 4.11956 6.78667 4.33334H5.33333C5.15652 4.33334 4.98695 4.40358 4.86193 4.52861C4.7369 4.65363 4.66667 4.8232 4.66667 5.00001C4.66667 5.17682 4.7369 5.34639 4.86193 5.47141C4.98695 5.59644 5.15652 5.66668 5.33333 5.66668H10.6667V9.00001Z" fill="currentColor" /></svg></span>
                                                    <span>Load more transactions</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </FormikProvider>
    );
};
export default Schedule;