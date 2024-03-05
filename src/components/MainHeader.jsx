import React from "react";
import Menu from "./Menu";

export default function MainHeader({ pageTitle }) {
    return (
        <div className="bg-gradient-to-r to-primary-500 from-primary-400">
            <Menu />
        <div className="h-[150px]  flex flex-col relative">
            <div className=" mx-auto relative z-0 w-4/5">
                <div className="font-exo h-full w-full  ">
                    <h1 className="text-white text-left text-5xl font-extrabold mt-12 w-full">{pageTitle}</h1>
                </div>
            </div>
        </div>
        </div>
    );
}
