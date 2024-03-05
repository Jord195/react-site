import React from "react";

export default function OurWorkGallery() {
    return (
        <div className=" contain mx-auto my-12 font-exo">
            <div class="xs:my-12 md:py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold">Transform Your Space with Livingstone Garden Services.</h2>
                    <p class="mb-8 font-light text-gray-500 text-xl">Revitalize your garden or business space with Livingstone Garden Services! Whether it's your backyard haven or a thriving commercial property, we've got the expertise. Connect with us, and let's elevate your outdoor space.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a href="/Contact" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-400 ease-in-out duration-200">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <img src="Gallery1.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery2.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery3.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery4.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery10.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery11.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery7.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery8.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
                <img src="Gallery9.jpg" loading="lazy" alt="Photo by Minh Pham" class="" />
            </div>
        </div>

    )
}