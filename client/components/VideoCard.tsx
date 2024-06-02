import React from "react";

import { useRouter } from "next/navigation";

interface Video {
  id: number;
  title: string;
  description: string;
  path: string;
}

const VideoCard = ({ id, title, path }: Video) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/video/${id}`);
  };

  return (
    <div
      className="border border-black rounded-lg flex flex-col items-center p-2 m-4 md:w-[600px] 2xl:w-[480px] lg:w-[950px] xl:w-[480px]"
      onClick={handleClick}
    >
      <div>
        <h2 className="items-center justify-center text-center">{title}</h2>
        <video id={`video-${id}`} width="1080" height="320" preload="auto">
          <source src={path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoCard;
