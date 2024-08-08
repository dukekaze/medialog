import React from "react";
import LoadMore from "@/components/load-more";
import Card from "@/components/Card";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="w-[1216px]">
            <div className="text-2xl font-bold text-[#181A2A] mt-[100px]">
              All Blog Post
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Card />
      </div>
      <LoadMore />
    </div>
  );
};

export default Blog;
