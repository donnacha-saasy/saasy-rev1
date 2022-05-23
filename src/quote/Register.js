// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import "yup-phone";
// import { useForm } from "react-hook-form";
// import firebase from "firebase/compat/app";
// import { axios, db, firebaseConfig } from "../firebase/firebaseConfig";
// import Nav from "../components/Nav.js";
// import Footer from "../components/Footer.js";
// import "./svg.css";

// export default class Register extends React.Component {
//   render() {
//     const { history } = this.props;
//     const cors = require("cors")({
//       origin: true,
//     });

//     const [formStep, setFormStep] = React.useState(0);
//     const { watch, register } = useForm();
//     const completedFormStep = () => {
//       setFormStep((cur) => cur + 1);
//     };
//     const backFormStep = () => {
//       setFormStep((cur) => cur - 1);
//     };
//     return (
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           mobile: "",
//           address: "",
//           eircode: "",
//           year: "",
//           oilGas: "",
//           radAmount: "",
//           houseType: "",
//         }}
//         validationSchema={Yup.object().shape({
//           firstName: Yup.string().required("First Name is required"),
//           lastName: Yup.string().required("Last Name is required"),
//           email: Yup.string()
//             .email("Email is invalid")
//             .required("Email is required"),
//           eircode: Yup.string().required("Eircode is required"),
//         })}
//         onSubmit={(fields) => {
//           alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));

//           history.push("/home");
//         }}
//         render={({ errors, status, touched }) => (
//           <Form>
//             <div className="form-group">
//               <label htmlFor="firstName">First Name</label>
//               <Field
//                 name="firstName"
//                 type="text"
//                 className={
//                   "form-control" +
//                   (errors.firstName && touched.firstName ? " is-invalid" : "")
//                 }
//               />
//               <ErrorMessage
//                 name="firstName"
//                 component="div"
//                 className="invalid-feedback"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="lastName">Last Name</label>
//               <Field
//                 name="lastName"
//                 type="text"
//                 className={
//                   "form-control" +
//                   (errors.lastName && touched.lastName ? " is-invalid" : "")
//                 }
//               />
//               <ErrorMessage
//                 name="lastName"
//                 component="div"
//                 className="invalid-feedback"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <Field
//                 name="email"
//                 type="text"
//                 className={
//                   "form-control" +
//                   (errors.email && touched.email ? " is-invalid" : "")
//                 }
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="invalid-feedback"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <Field
//                 name="password"
//                 type="password"
//                 className={
//                   "form-control" +
//                   (errors.password && touched.password ? " is-invalid" : "")
//                 }
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="invalid-feedback"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <Field
//                 name="confirmPassword"
//                 type="password"
//                 className={
//                   "form-control" +
//                   (errors.confirmPassword && touched.confirmPassword
//                     ? " is-invalid"
//                     : "")
//                 }
//               />
//               <ErrorMessage
//                 name="confirmPassword"
//                 component="div"
//                 className="invalid-feedback"
//               />
//             </div>
//             <div className="form-group">
//               <button type="submit" className="btn btn-primary mr-2">
//                 Register
//               </button>
//               <button type="reset" className="btn btn-secondary">
//                 Reset
//               </button>
//             </div>
//           </Form>
//         )}
//       />
//     );
//   }
// }
