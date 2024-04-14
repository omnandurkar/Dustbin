import React from 'react';
import Dustbins from '../Dubstbins/Dustbins';

export default function BannerSection() {

    return (
        <div className="banner-section w-full h-full bg-contain bg-no-repeat  py-16" style={{ backgroundImage: "url(https://wastix.vercel.app/assets/images/shape/shape-1.png)" }}>


            <div className='container mx-auto'>
                <div className="flex flex-col items-center md:mx-72 justify-center md:flex-row md:space-x-12 lg:space-x-24">
                    <div className="w-full md:w-3/4 content-column flex justify-between align-middle animate-fade-right">
                            <img src='https://wastix.vercel.app/assets/images/shape/shape-5.png' className='h-20 w-20 align-middle animate-spin animate-infinite' alt="" />
                        <div className="flex flex-col   p-10">
                            <span className="text-xl md:text-lg text-green-600  font-semibold ">Waste Pickup</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-2">Your waste pickup solutions</h2>
                            <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                            <div className="mt-6">
                                <a className="px-4 py-2 border border-green-600 bg-green-600 text-white hover:bg-transparent hover:text-green-600 rounded text-xs " href="/">
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 image-column animate-fade-left ">
                        <div className="image-box relative">
                            <figure className="image">
                                <img src='https://wastix.vercel.app/assets/images/shape/shape-2.png' className='h-32 z-0 animate-jump-slow ' alt="" />
                                <img src="https://wastix.vercel.app/assets/images/banner/banner-img-2.png" className='h-72 -mt-16 z-10 md:mx-0 mx-auto' alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>


            <Dustbins />


        </div>
    );
}
