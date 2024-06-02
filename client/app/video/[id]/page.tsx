"use client";
import ErrorNotification from "@/components/ErrorNotification";
import Loading from "@/components/Loading";
import { useAuth } from "@clerk/nextjs";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Video {
  id: number;
  title: string;
  path: string;
}

const VideoPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [videoData, setVideoData] = useState<Video | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const paramsId = useParams<{ id: string }>();
  const { userId } = useAuth();
  const router = useRouter();
  const videoIdparams = Number(paramsId.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/watchVideo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId, videoId: videoIdparams }),
        });
        if (res.ok) {
          const responseData = await res.json();
          setVideoData(responseData.findVideoById);
          console.log(responseData);
        } else {
          const errorData = await res.json();
          setErrorMessage(errorData.message);
          setShowAlert(true);
          console.log(errorData);
        }
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, [userId, videoIdparams]);

  const handleClick = () => {
    setShowAlert(false);
    router.push("/");
  };

  console.log(videoData);
  return (
    <div className="  rounded-lg flex flex-col items-center justify-center p-2 m-4 2xl:w-[1450px] xl:w-[1200px] lg:w-[1000px]">
      {videoData ? (
        <div>
          <h2 className="items-center justify-center text-start bold-20 my-2">
            {videoData.title}
          </h2>
          <video
            id={`video-${videoData.id}`}
            width="1920"
            height="1080"
            controls
            preload="auto"
          >
            <source src={videoData.path} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : showAlert ? (
        <ErrorNotification
          errorMessage={errorMessage}
          onClose={() => handleClick()}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default VideoPage;
