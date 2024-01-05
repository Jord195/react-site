import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import BannerSplit from "../components/BannerSplit"

export function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Services/>
            <BannerSplit/>
            <Contact/>
            <Footer/>
        </div>
    )
}