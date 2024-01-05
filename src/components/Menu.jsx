import React from "react";

export default function Menu() {
    return (
        <div class="my-auto flex flex-row gap-x-4 font-exo text-lg text-white xs:hidden md:flex">
            <a href="">Home</a>
            <a href="/#/About">About</a>
            <a href="/#/Services">Our Services</a>
            <a href="/#/Testimonials">Testimonials</a>
            <a href="/#/Contact">Contact Us</a>
        </div>
    )
}