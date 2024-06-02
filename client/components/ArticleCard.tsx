import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import articleSVG from "../public/icons/article.svg";

interface Article {
  id: number;
  title: string;
  content: string;
}

const ArticleCard = ({ id, title, content }: Article) => {
  const router = useRouter();

  const clickReadMore = async () => {
    router.push(`/article/${id}`);
  };

  return (
    <div className="border border-black rounded-lg flex flex-col items-center p-2 m-4 w-[320px] sm:w-[500px] md:w-[600px] xl:w-[550px] lg:w-[600px] 2xl:w-[480px]">
      <h2 className="regular-24 underline">{title}</h2>
      <div className="flex flex-row">
        <p>{content.substring(0, 70)}...</p>

        <button onClick={clickReadMore} className="m-1 hover:scale-125">
          <Image src={articleSVG} alt="article" width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
