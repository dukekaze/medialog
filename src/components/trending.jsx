import TrendingRow from "./trendingRow";

const Trending = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[1216px]">
          <div className="text-2xl font-bold text-[#181A2A] ml-10 mt-[100px]">
            Trending
          </div>
          <div className="flex justify-center ml-5 gap-4 w-[1216px] mt-[30px]">
            <TrendingRow />
            <TrendingRow />
            <TrendingRow />
            <TrendingRow />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trending;
