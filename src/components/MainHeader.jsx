import React from "react";
import Menu from "./Menu";

export default function MainHeader({ pageTitle }) {
    return (
        <div className="bg-gradient-to-r to-primary-500 from-primary-400">
            <Menu />
        <div className="h-[150px]  flex flex-col relative">
            <div className="container mx-auto relative z-0">
                <div className="font-exo h-full">
                    <h1 className="text-white text-5xl font-extrabold mt-12">{pageTitle}</h1>
                </div>
            </div>
        </div>
        </div>
    );
}
