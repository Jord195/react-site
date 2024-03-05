import React from "react";

export default function BannerSplit() {
    return (
        <section class="relative">
            <div class="h-[700px] bg-[url('https://cdn.pixabay.com/photo/2014/07/05/08/30/lawn-mower-384589_1280.jpg')] bg-cover bg-center relative">
                <div class="absolute inset-0 bg-black opacity-60"></div>
                <div class="flex items-center w-4/5 mx-auto h-full relative">
                    <div class="text-white md:w-3/4 xs:w-full">
                        <h1 class="text-5xl font-bold my-6">About Us</h1>
                        <div class="text-xl">
                            <p>Livingstone Garden Services is Owned and Run by Matt. He has always been a lover of nature and the outdoors. After gaining experience as a greenkeeper at one of the most prestigious golf resorts in the UK - The Belfry, Matt decided to take on private gardening and lawn care.
                                Fully insured and hold a full green waste removal licence.
                                We are currently covering B46 and surrounding areas. Get in touch for a free, non-obligation consultation!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}