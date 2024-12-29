'use client';

import React from 'react';
import VideoOnHover from './video_on_hover';

interface textWithImagesProps{
    icon: React.ReactNode;
    src: string;
    title: string;
    description: string;
}

const Text_with_image: React.FC<textWithImagesProps> = ({
    icon,
    src,
    title,
    description
}) => {
  return (
    <>
    <section className="container mx-auto grid grid-cols-12 pt-10 px-8 md:pt-20 gap-4 md:gap-8 md:px-16">
      {/* Left Section */}
      <div className="md:col-span-5 col-span-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {icon}
        </h2>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {title}
        </h2>
        <p className="text-gray-600 text-lg text-justify">
            {description}
        </p>
      </div>
      {/* Right Section */}
      <div className="md:col-span-7 col-span-12 ">
          <VideoOnHover src={src} />
      </div>
    </section>
  </>
  );
};

export default Text_with_image;
