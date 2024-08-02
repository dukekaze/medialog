import Badge from "./badge";

const TrendingRow = () => {
  return (
    <div>
      <div className="w-[289px] h-[320px] rounded-xl bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#141624] opacity-40 rounded-xl"></div>
        <div className="relative z-10">
          <div className="pt-[122px]">
            <Badge />
          </div>
          <div className="text-lg font-semibold text-white ml-[40px] mt-[16px] w-[236px]">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingRow;
