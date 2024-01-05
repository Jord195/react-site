import React from "react";
import Contact from "../components/Contact"
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

export function ContactUs() {
    return (
        <div>
            <MainHeader pageTitle={"Contact Us"}/>
            <Contact />
            <Footer />
        </div>
    )
}