const Footer = () => {
  return (
    <div className="bg-[#E8E8EA] p-4">
      <div>
        <div className="flex justify-evenly mt-24">
          <div className="w-[1216px] flex justify-between">
            <div>
              <div className="w-[280px] h-[160px]">
                <div className="text-[#181A2A] text-lg font-semibold">
                  About
                </div>
                <div className="mt-3 text-[#696A75] text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
              <div className="text-base font-normal w-[218px] h-[52px] mt-6 text-[#696a75]">
                <div>Email : info@jstemplate.net</div>
                <div>Phone : 880 123 456 789</div>
              </div>
            </div>
            <div>
              <ul className="text-[#3B3C4A] text-base">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex ">
              <img className="w-4 h-4" src="./images/footer/fb.svg" alt="" />
              <img
                className="w-4 h-4 ml-7"
                src="./images/footer/twitter.svg"
                alt=""
              />
              <img
                className="w-4 h-4 ml-7"
                src="./images/footer/instagram.svg"
                alt=""
              />
              <img
                className="w-4 h-4 ml-7"
                src="./images/footer/linkedin.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t-[#DCDDDF] mt-6">
          <div className="w-[1216px] border-t-2">
            <div className="flex justify-between items-center">
              <div>
                <img
                  className="w-[231px] h-[54px] mt-[20.5px]"
                  src="./images/footer/meta-blog.png"
                  alt=""
                />
              </div>
              <div className="flex">
                <div className="text-[#3B3C4A] text-base">Terms of Use</div>
                <div className="text-[#E8E8EA] text-base ml-4">|</div>
                <div className="text-[#3B3C4A] text-base ml-4">
                  Privacy Policy
                </div>
                <div className="text-[#E8E8EA] text-base ml-4">|</div>
                <div className="text-[#3B3C4A] text-base ml-4">
                  Cookie Policy
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default Footer;
