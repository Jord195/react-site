import React from "react";
import MainHeader from "../components/MainHeader";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export function TestimonialsPage() {
    return (
        <div>
            <MainHeader pageTitle={"Testimonials"} />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}