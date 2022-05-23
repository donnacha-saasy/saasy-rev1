import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import HowItWorks from "./How.js";
import ThankYou from "./ThankYou";
import Review from "./ReviewLarge.js";
import Testimonials from "./Testimonials.js";

export default function Thanks() {
  return (
    <>
      <Nav />

      <ThankYou />
      <Testimonials />
      <Footer />
    </>
  );
}
