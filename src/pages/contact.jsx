import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <div className="w-[895px] h-[895px]">
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
            <div>
              <div>
                <h1 className="text-black font-semibold text-lg">
                  Leave a Message
                </h1>
                <div>
                  <div>
                    <div className="mt-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-[#DCDDDF] rounded-md w-[225px] h-[38px]"
                      />
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="border border-[#DCDDDF] rounded-md w-[225px] h-[38px] ml-7"
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-[478px] h-[35px] border border-[#DCDDDF] rounded-md"
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Write a message"
                        className="w-[478px] h-[134px] border border-[#DCDDDF] rounded-md"
                      />
                    </div>
                    <div>
                      <button className="w-[130px] h-[40px] bg-[#4B6BFB] text-white rounded-md mt-7">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
