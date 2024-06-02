import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import ArticleCard from "./ArticleCard";

interface Video {
  id: number;
  title: string;
  type: string;
  description: string;
  path: string;
}
interface Article {
  id: number;
  title: string;
  content: string;
}

const Hero = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [activeTab, setActiveTab] = useState<"video" | "article">("video");
  const [articles, setArticle] = useState<Article[]>([]);

  const fetchData = async () => {
    try {
      const videoResponse = await fetch("http://localhost:8000/video");
      const articleResponse = await fetch("http://localhost:8000/article");

      if (!videoResponse.ok || !articleResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const videoData = await videoResponse.json();
      const articleData = await articleResponse.json();

      setVideos(videoData.getVideo);
      setArticle(articleData.getArticle);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleTabChange = (tab: "video" | "article") => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full  flex flex-col justify-center items-center">
      <div className="w-[340px] sticky top-3 sm:w-[600px]">
        <div className="grid grid-cols-2 bg-gray-300 p-2 rounded-lg">
          <button
            className={` px-14 py-1 border rounded-lg regular-16 hover:bg-black hover:text-white ${
              activeTab === "video" ? "bg-white text-black " : ""
            }`}
            onClick={() => handleTabChange("video")}
          >
            Video
          </button>
          <button
            className={`px-14 border rounded-lg regular-16 hover:bg-black hover:text-white ${
              activeTab === "article" ? "bg-white text-text" : ""
            }`}
            onClick={() => handleTabChange("article")}
          >
            Article
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 sm:grid-cols-1">
        {activeTab === "article" && (
          <>
            {articles.map((article) => (
              <ArticleCard
                id={article.id}
                key={article.id}
                title={article.title}
                content={article.content}
              />
            ))}
          </>
        )}
        {activeTab === "video" && (
          <>
            {videos.map((video) => (
              <VideoCard
                id={video.id}
                key={video.id}
                title={video.title}
                description={video.description}
                path={video.path}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
