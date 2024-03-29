import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Services from "../components/Services"
import Footer from "../components/Footer"
import BannerSplit from "../components/BannerSplit"
import ContactForm from "../components/ContactForm";
import Docs from "../components/UsefulDocs"



export function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Services/>
            <BannerSplit/>
            {/* <Docs/> */}
            <ContactForm />
            <Footer/>
        </div>
    )
}