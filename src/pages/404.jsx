const Error = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center mt-[100px]">
          <div className="w-[642px] h-[208px] flex">
            <div className="text-7xl text-black w-[133px] h-[156px] border-r-2 flex justify-center items-center pr-[58.5px]">
              404
            </div>
            <div className=" h-[156px] ml-[58.5px]">
              <div className="font-semibold text-black text-2xl">
                Page Not Found
              </div>
              <div className="text-[#696A75] text-lg mt-2">
                We're sorry, This page is unknown or does not exist the page you
                are looking for.
              </div>
              <button className="bg-[#4B6BFB] w-[130px] h-[40px] text-white rounded-md mt-2">
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Error;
