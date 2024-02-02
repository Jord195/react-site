import React from "react";

export default function Docs() {
    return (
        <div className="">
        <div className="w-4/5 mx-auto py-12 flex flex-col gap-y-12 ">
            <h3 className="text-5xl font-bold">Useful Information</h3>
            <div className="grid grid-cols-2">
                

<div class="max-w-sm bg-primary-600 border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary hover:text-white bg-white rounded-lg hover:bg-primary-500 ease-in-out duration-200">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

            </div>
        </div>
        </div>
    )
}