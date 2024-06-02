"use client";

import ErrorNotification from "@/components/ErrorNotification";
import { useAuth } from "@clerk/nextjs";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
}

const ArticlePage = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const paramsId = useParams<{ id: string }>();
  const { userId } = useAuth();
  const router = useRouter();
  const articleIdparams = Number(paramsId.id);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8000/readArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, articleId: articleIdparams }),
      });
      if (res.ok) {
        const responseData = await res.json();
        setArticle(responseData.findArticleById);
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.message);
        setShowAlert(true);
      }
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, [articleIdparams, userId]);

  const handleClick = () => {
    setShowAlert(false);
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center">
      {article ? (
        <div className="rounded-lg flex flex-col items-center p-2 m-4">
          <h2 className="regular-24 underline">{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ) : showAlert ? (
        <ErrorNotification
          errorMessage={errorMessage}
          onClose={() => handleClick()}
        />
      ) : (
        <p className="flex justify-center items-center">Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;
