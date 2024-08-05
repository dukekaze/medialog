import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="w-[769px] h-[389px] flex flex-col justify-center ">
              <div className="w-[624px] h-[163px]">
                <h1 className="text-[#000000] font-semibold text-4xl">
                  Contact Us
                </h1>
                <p className="text-[#696A75] font-normal text-base mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
              <div className="flex mt-5">
                <div className="w-[294px] h-[133px] border border-[#E8E8EA] rounded-xl">
                  <h1 className="text-black text-2xl font-semibold mt-4 ml-2">
                    Address
                  </h1>
                  <p className="text-[#696A75] text-lg mt-[10px] ml-2">
                    1328 Oak Ridge Drive, Saint Louis, Missouri
                  </p>
                </div>
                <div className="w-[294px] h-[133px] border border-[#E8E8EA] rounded-xl ml-12">
                  <h1 className="text-black text-2xl font-semibold mt-4 ml-2">
                    Contact
                  </h1>
                  <p className="text-[#696A75] text-lg mt-[10px] ml-2">
                    313-332-8662 info@email.com
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
