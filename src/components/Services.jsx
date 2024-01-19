import React from "react";

// ServiceCard component for individual service items
const ServiceCard = ({ icon, title, description }) => (
    <div className="p-4 md:w-full lg:w-1/2">
        <div className="flex flex-col rounded-lg border-2 bg-gradient-to-r from-primary-400 to-primary-500 border-gray-200 border-opacity-50 p-8 sm:flex-row h-full shadow-xl">
            <div className="mb-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full  sm:mb-0 sm:mr-8">
                {icon}
            </div>
            <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-white">{title}</h2>
                <p className="text-white leading-relaxed">{description}</p>
                <a className="mt-6 inline-flex items-center text-white">
                    Learn More
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="ml-2 my-auto h-4 w-4"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
);

// Services component using ServiceCard
export default function Services() {
    const servicesData = [
        {
            icon: <i className="fa-solid fa-seedling text-3xl text-white"></i>,
            title: "Lawn care",
            description: "We offer one off lawn mows right through to regular premium lawn care packages. All lawn mows include edging to keep your lawn looking sharp. Get those professional stripes your lawn deserves and make your neighbours jealous.",
        },
        {
            icon: <i className="fa-solid fa-trowel text-3xl text-white"></i>,
            title: "General Garden Maintenance",
            description: "Keep your garden tidy and weed-free with our services. Our team makes sure your outdoor space looks great all year round. Enjoy a hassle-free, weed-free garden with our care plans.",
        },
        {
            icon: <i className="fa-solid fa-tree text-3xl text-white"></i>,
            title: "Hedge Trimming",
            description: "Whether it's a light hedge shaping or a substantial reduction, we have you covered. Our specialized hedge services, from meticulous shaping to complete transformations, ensure your hedges stand out in every season.",
        },
        {
            icon: <i className="fa-solid fa-recycle text-3xl text-white"></i>,
            title: "Green Waste Removal",
            description: "Let Livingstone Garden Services handle your green waste responsibly. We're fully licensed to carry and dispose of it, keeping your green spaces clean and eco-friendly.",
        }
        // Add more service items as needed
    ];

    return (
        <section className="body-font text-gray-600">
            <div className="mx-auto flex max-w-[80%] flex-wrap px-5 py-24">
                <div className="-m-4 flex flex-wrap">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
