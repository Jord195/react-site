import React from 'react'

export default function Hero() {
    return(
        <div class="relative font-exo">
            <div class="absolute z-10 h-full w-full bg-gradient-to-b from-black to-[#000000aa] opacity-70"></div>
            <div class="relative bg-[url('https://images.unsplash.com/photo-1458245201577-fc8a130b8829?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center xs:h-[500px] md:h-[900px]">
                <div class="relative z-30 flex h-full flex-col items-center justify-center gap-y-12 text-white">
                <h1 class="text-center font-semibold xs:text-6xl md:text-9xl flex flex-col gap-6">
                    <span>Livingstone</span>
                    <span>Garden Services</span>
                </h1>
                <h3 class="text-center xs:text-3xl md:text-6xl">Cultivating Beauty, Nurturing Green Spaces</h3>
                </div>
            </div>
        </div>
    )
}