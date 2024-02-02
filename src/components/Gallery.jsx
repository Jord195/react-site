import React from "react";

export default function Gallery() {
    return (
        <div class=" bg-gray-200">
        <div class="contain py-6 sm:py-8 lg:py-12 font-exo">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div class="flex items-center gap-12">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold">Our Work</h2>
                <p class="hidden max-w-screen-sm text-gray-500 md:block"></p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a href="/Our-Work" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../src/gallery/5.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>

              <a href="/Our-Work" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../src/gallery/8.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>

              <a href="/Our-Work" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../src/gallery/3.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>

              <a href="/Our-Work" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../src/gallery/14.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}