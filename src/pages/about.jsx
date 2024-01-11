import React from "react"
import Us from "../components/Us"
import MainHeader from "../components/MainHeader"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import Gallery from "../components/Gallery"

export function About() {
    return (
        <div>
            <MainHeader pageTitle={"About Us"}/>
            <Us />
            <Gallery />
            <ContactForm />
            <Footer />
        </div>
    )
}