import React, { useRef } from 'react';

interface videoOnHoverProps{
    src: string;
}

const VideoOnHover: React.FC<videoOnHoverProps> = ({
    src
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video when hovered
      videoRef.current.loop = true; // Set the video to loop while hovered
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when hover is removed
      {/*videoRef.current.currentTime = 0;*/} // Stop the video (rewind to the beginning)
    }
  };

  return (
    <video className="h-full w-full md:h-{415px} md:w-{735px} rounded-2xl"
      ref={videoRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      src={src}
    />
  );
};

export default VideoOnHover;
