import React from "react";

export default function BannerSplit() {
    return (
        <section class="relative">
            <div class="h-[700px] bg-[url('https://png-dev-website-pertemps-medical.azurewebsites.net/media/r4tivcvz/shutterstock_1775308208.jpg')] bg-cover bg-center relative">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="flex items-center w-4/5 mx-auto h-full relative">
                    <div class="text-white md:w-2/4 xs:w-full">
                        <h1 class="text-5xl font-bold my-6">About Pertemps Medical</h1>
                        <div class="text-xl">
                            <p>Pertemps Medical puts relationships at the heart of everything we do. Whether you are a doctor, nurse, healthcare professional, or employer, we are the recruiter of choice.</p>
                            <p>We specialise in the supply of medical personnel services to the NHS on National Framework Agreements and to private hospitals across the United Kingdom.</p>
                            <p>Permanent, temporary, or contract positions, private or public sector, our passion is finding the best position for all healthcare professionals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}