import SinglePost from "./single-post";

const BlogPost = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="w-[1216px]">
            <div className="text-2xl font-bold text-[#181A2A] mt-[100px]">
              All Blog Post
            </div>
            <div className="flex justify-between mt-[32px]">
              <div className="">
                <ul className="flex gap-[20px] text-xs text-[#495057] ">
                  <li className="hover:text-[#D4A373]">All</li>
                  <li className="hover:text-[#D4A373]">Design</li>
                  <li className="hover:text-[#D4A373]">Travel</li>
                  <li className="hover:text-[#D4A373]">Fashion</li>
                  <li className="hover:text-[#D4A373]">Technology</li>
                  <li className="hover:text-[#D4A373]">Branding</li>
                </ul>
              </div>
              <div className="text-xs text-[#495057] hover:text-[#D4A373]">
                View All
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex">
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </div>
        <div className="flex">
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </div>
        <div className="flex">
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
