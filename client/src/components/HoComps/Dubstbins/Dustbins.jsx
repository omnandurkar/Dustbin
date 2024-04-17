import React from 'react';

export default function Dustbins() {
    const sections = [
        {
            name: "Dry Waste",
            logo: "https://cdn-icons-gif.flaticon.com/12829/12829535.gif",
            content: "Get it Decomposited.",
            bg: "https://wastix.vercel.app/assets/images/shape/shape-6.png"
        },
        {
            name: "Wet Waste",
            logo: "https://cdn-icons-gif.flaticon.com/11785/11785343.gif",
            content: "Ready to go in Soil.",
            bg: "https://wastix.vercel.app/assets/images/shape/shape-6.png"
        },
        {
            name: "Scaned Item",
            logo: "https://cdn-icons-gif.flaticon.com/11926/11926869.gif",
            content: "Checklist your Item or Reorder the item",
            bg: "https://wastix.vercel.app/assets/images/shape/shape-6.png"
        }
    ];

    return (
        <div className="flex flex-wrap justify-center  p-10">
            {sections.map((section, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center mb-8 animate-fade-up">
                    <div className="relative hover:-translate-y-4 duration-300">
                        <img src={section.bg} alt="Dustbin" className="w-full h-auto " />
                        <div className="-mt-16 absolute inset-0 flex flex-col justify-center items-center">
                            <img src={section.logo} alt={section.name} className="h-20 mx-auto mb-4 hover:animate-rotate-y" />
                            <h1 className="capitalize text-lg font-bold">{section.name}</h1>
                            <p className="text-sm w-28">{section.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
