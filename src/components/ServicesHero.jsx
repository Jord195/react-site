import React from "react";

export default function ServicesHero() {
    return (
        <div class="bg-gray-200 py-12">
            <section class="mx-auto max-w-screen-2xl contain">
                <div class="mb-8 flex flex-wrap justify-between md:mb-16">
                    <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                        <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl lg:text-left xs:text-center">Psychologi<br />Therapies</h1>

                        <p class="lg:max-w-md xs:max-w-none leading-relaxed text-gray-500 xl:text-lg lg:text-left xs:text-center xs:px-0 sm:px-20 lg:px-0">Our range of roles available allows us to recruit all specialities from Assistant Psychologists to Consultant Clinical Psychologists.</p>
                    </div>

                    <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
                        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                            <img src="https://png-dev-website-pertemps-medical.azurewebsites.net/media/ko5ezv1r/shutterstock_1735801265.jpg" loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center max-h-[550px]" />
                        </div>

                        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                            <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670" loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center max-h-[550px]" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}