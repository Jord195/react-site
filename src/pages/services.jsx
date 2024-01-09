import React from "react"
import MainHeader from "../components/MainHeader"
import ServicesHero from "../components/ServicesHero"
import Footer from "../components/Footer"
import Methods from "../components/Methods"
import ContactForm from "../components/ContactForm"

export function ServicesPage() {
    return (
        <div>
            <MainHeader pageTitle={"Services"}/>
            <ServicesHero/>
            <Methods/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}