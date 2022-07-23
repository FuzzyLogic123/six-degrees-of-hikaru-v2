import React from 'react';

function Testimonial({ quote }) {
    return (
    <div>
        <div className={`relative bg-[#31415985] leading-8 p-4 pt-24 text-center text-white text-xl rounded-lg sm:max-w-[10rem] lg:max-w-md 2xl:max-w-2xl mb-32 sm:mb-0`}>
            <img src={quote[2]} alt="The Pope" className="absolute w-40 h-40 left-0 right-0 m-auto -top-24 rounded-full object-cover" />
            <p className="font-Outfit 2xl:text-2xl sm:text-sm">
                {quote[0]}
            </p>
            <br />
            <p className="sm:text-4xl md:text-2xl font-semibold font-Ephesis tracking-[5px]">
                {"-" + quote[1]}
            </p>
        </div>
    </div> );
}

export default Testimonial;