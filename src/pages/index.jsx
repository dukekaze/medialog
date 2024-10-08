import Content from "@/components/content-section";
import { Inter } from "next/font/google";
import Trending from "@/components/trending";
import BlogPost from "@/components/blog-post";
import LoadMore from "@/components/load-more";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticles, isLoading] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  console.log("articles", articles);
  return (
    <main>
      <Content />
      <Trending />
      <BlogPost />
      <div className="flex flex-wrap ">
        {isLoading ? (
          <Loader />
        ) : (
          articles.map((article) => <Card key={article.id} article={article} />)
        )}
      </div>
      <LoadMore />
    </main>
  );
}
