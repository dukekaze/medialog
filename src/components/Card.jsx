import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/provider/search-provider";
import "react-toastify/dist/ReactToastify.css";

const Card = ({}) => {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getArticles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://dev.to/api/articles?page=5&per_page=12"
      );
      const data = await response.json();
      setArticles(data);
      console.log("data", data);
    } catch {
      console.log("er", error);
      setIsLoading(false);
      toast.success("Алдаа гарлаа. Та дахин оролдоно уу");
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const findPost = articles.filter((article) =>
    article.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <div className="flex justify-center">
      <h2>Хайлт: {searchValue}</h2>
      <div className="grid md:grid-cols-3 gap-5  grid-cols-1 w-[1216px] mt-16">
        {findPost.map((blogOb) => {
          return (
            <div className="">
              <div className="w-[392px] h-[476px] p-4 flex flex-col gap-4 border border-gray-200 rounded-lg">
                <div className="w-[360px] h-[240px] ">
                  <img
                    src={blogOb.social_image}
                    alt=""
                    className="size-full object-cover  rounded-lg"
                  />
                </div>
                <div className="">
                  <span className="bg-gray-100 text-blue-600 px-4 py-1 rounded-lg  ">
                    {blogOb.type_of}
                  </span>
                  <p className=" flex flex-wrap my-4 text-2xl font-semibold">
                    {blogOb.title}
                  </p>

                  <div className="flex items-center gap-20 text-gray-500 text-sm">
                    <div className="flex justify-center gap-2 items-center">
                      <img
                        src={blogOb.user.profile_image}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <h1>{blogOb.user.username}</h1>
                    </div>
                    <p>{blogOb.readable_publish_date}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
