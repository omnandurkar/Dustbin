import React from 'react';

export default function ReviewCard({ _id, name, message, userPhoto, loadReview }) {
    return (
        <>
            


            <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg shadow-md hover:animate-wiggle ">
                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <img src={userPhoto} alt="user" className="w-10 h-10 rounded-full mr-2" />
                    </div>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{name}</h2>
                    <p class="leading-relaxed text-base">{message}</p>
                </div>
            </div>

            {/* =========================================================================================================== */}

           

        </>

    );
}
