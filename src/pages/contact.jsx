import React from "react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export function ContactUs() {
    return (
        <div>
            <MainHeader pageTitle={"Contact Us"}/>
            <ContactForm/>
            <Footer />
        </div>
    )
}