import React from "react"
import Header from "../components/Header"
import Us from "../components/Us"
import MainHeader from "../components/MainHeader"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export function About() {
    return (
        <div>
            <MainHeader pageTitle={"About Us"}/>
            <Us />
            <Contact />
            <Footer />
        </div>
    )
}