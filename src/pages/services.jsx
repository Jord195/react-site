import React from "react"
import MainHeader from "../components/MainHeader"
import ServicesHero from "../components/ServicesHero"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Methods from "../components/Methods"

export function ServicesPage() {
    return (
        <div>
            <MainHeader pageTitle={"Services"}/>
            <ServicesHero/>
            <Methods/>
            <Contact/>
            <Footer/>
        </div>
    )
}