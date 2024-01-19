import React from "react";

export default function Gallery() {
    return (
        <div class=" bg-gray-200">
        <div class="contain py-6 sm:py-8 lg:py-12 font-exo">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div class="flex items-center gap-12">
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our Work</h2>
                <p class="hidden max-w-screen-sm text-gray-500 md:block"></p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://cdn.pixabay.com/photo/2017/06/09/07/00/lawn-mower-2385925_1280.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>

              <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.pexels.com/photos/1890420/pexels-photo-1890420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>

              <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>

              <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://picsum.photos/1200/902" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">See More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}