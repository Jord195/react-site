import React from "react";
import MainHeader from "../components/MainHeader";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export function TestimonialsPage() {
    return (
        <div>
            <MainHeader pageTitle={"Testimonials"} />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    )
}