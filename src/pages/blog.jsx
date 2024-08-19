import React from "react";
import Card from "@/components/Card";
import { useState, useEffect } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="w-[1216px]">
            <div className="text-2xl font-bold text-[#181A2A] mt-[100px]">
              All Blog Post
            </div>
            <div className="flex flex-wrap">
              {articles.map((article) => (
                <Card key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
