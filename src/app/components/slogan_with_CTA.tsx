'use client';
import React from 'react';

const Slogan_with_CTA = () => {
    return(
        <section className="pt-20 pb-10 md:pb-20 px-8 md:pt-28 font-sans">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-semibold text-black mb-4 md:mb-0">
            Revolutionize Your <br /> Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7182ff] to-[#3cff52] animate-textShine">Experience</span>
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-12">
          </h1>
          <h2 className="text-2xl text-gray-900 opacity-70">
            Discover the power of AI with Textutor.ai – your ultimate
          </h2>
          <h2 className="text-2xl text-gray-900 mb-20 opacity-70">
             partner in education and research.
          </h2>
          <div>
            <button className="bg-black text-white text-xl py-4 px-10 rounded-lg shadow-lg hover:bg-gray-200 hover:text-black transition duration-300">
              Try TextutorAI
            </button>
          </div>
        </div>
      </section>
    )
}

export default Slogan_with_CTA;