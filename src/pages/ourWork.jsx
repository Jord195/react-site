import React from "react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer"
import Contact from "../components/ContactForm";
import OurWorkGallery from "../components/OurWorkGallery";

export function OurWork() {
    return (
        <div>
            <MainHeader pageTitle={"Our Work"}/>
            <OurWorkGallery/>
            <Contact/>
            <Footer/>
        </div>
    )
}