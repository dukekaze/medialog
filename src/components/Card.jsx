import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  return (
    <div className="flex justify-center">
      <Link href={"/post"}>
        <div className="mt-16">
          <div className="flex">
            <div className=" w-[392px] h-[476px] p-4 flex flex-col gap-4 border border-gray-200 rounded-lg">
              <div className=" w-[360px] h-[240px] ">
                <img
                  src={article?.social_image}
                  alt=""
                  className="size-full object-cover  rounded-lg"
                />
              </div>
              <div className="">
                <span className="bg-gray-100 text-blue-600 px-4 py-1 rounded-lg  ">
                  {article?.type_of}
                </span>
                <p className=" flex flex-wrap my-4 text-2xl font-semibold">
                  {article?.title}
                </p>

                <div className="flex items-center gap-20 text-gray-500 text-sm">
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src={article?.user.profile_image}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <h1>{article?.user.username}</h1>
                  </div>
                  <p>{article?.readable_publish_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
