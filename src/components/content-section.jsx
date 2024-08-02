import Badge from "./badge";

const Content = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1216px]">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-[1216px] h-[600px] bg-cover bg-center rounded-2xl  bg-[url('https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw__')]">
            <div className="rounded-2xl absolute inset-0 bg-[#141624] opacity-40"></div>
            <div className="z-10 relative h-[252px] w-[598px] rounded-xl bg-white flex flex-col gap-[16px] ml-3 mt-[335px]">
              <Badge />
              <div className="text-[#181A2A] text-4xl font-semibold w-[518px] h-[80px] ml-[40px]">
                Grid system for better Design User Interface
              </div>
              <div className="text-[#97989F] text-base font-normal ml-[40px]">
                August 20, 2022
              </div>
            </div>
          </div>
          <div className=" flex justify-end mt-[11px] ">
            <div className="border-2 rounded-md w-[40px] h-[40px] flex items-center justify-center">
              <img src="./images/content/back-icon.png" alt="" />
            </div>
            <div className="border-2 rounded-md w-[40px] h-[40px] flex items-center justify-center ml-[9px]">
              <img src="./images/content/forward-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
