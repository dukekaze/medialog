import Link from "next/link";

const LoadMore = () => {
  return (
    <div>
      <div className="flex justify-center mt-[100px]">
        <Link href="@/pages/blog`">
          <button className="text-[#696A75] border w-[123px] h-[48px] rounded-md">
            Load More
          </button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default LoadMore;
