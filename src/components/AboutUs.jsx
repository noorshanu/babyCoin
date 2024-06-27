import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section
      className="bg-[#0243b9] -mt-0 sm:pt-0 pt-3 sm:-mt-2 relative overflow-hidden"
      id="about"
    >
      <img src="images/beach.png" alt="" className=" absolute  top-0 left-0" />
      <img
        src="images/beach.png"
        alt=""
        className=" absolute  top-0 -right-10"
      />
      <div className=" container-wrapper pt-[5%]">
        <div className=" flex items-center justify-center gap-2  relative z-20 py-1 bg-white border-t-2 border-l-2 border-r-2 border-black rounded-2xl w-full max-w-full sm:max-w-xl px-4 mx-auto">
          <CopyAddress />{" "}
          <button className="copy">
            <span
              data-text-end="Copied!"
              data-text-initial="Copy to clipboard"
              className="tooltip"
            ></span>
            <span>
              <svg
                xmlSpace="preserve"
                id="tgt"
                viewBox="0 0 6.35 6.35"
                y="0"
                x="0"
                height="20"
                width="20"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="clipboard"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                  ></path>
                </g>
              </svg>
              <svg
                xmlSpace="preserve"
                id="tgt"
                viewBox="0 0 24 24"
                y="0"
                x="0"
                height="18"
                width="18"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="checkmark"
              >
                <g>
                  <path
                    data-original="#000000"
                    fill="currentColor"
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <div className="relative bg-white border-4 box-s2 p-4 border-black rounded-3xl">
          <div className=" ">
            <img
              src="images/about.png"
              alt=""
              className="mx-auto text-center h-[30px] sm:h-[60px]"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-center my-4">
              The Heartbeat of Solana's Meme Community
            </h1>
            <p className=" max-w-4xl mx-auto text-center mt-[2%] mb-[3%] text-xs sm:text-xl font-bold">
              It is more than just a digital currency; it's a revolution in the
              Solana ecosystem. Aimed at becoming the premier community coin of
              Web3, BABYCOIN is setting new standards for integration and
              utility across
            </p>
            <div className=" grid sm:hidden grid-cols-2 gap-3 items-center justify-center">
            <div className="">
                <img
                  src="images/fri1.png"
                  alt=""
                  className=" h-auto sm:h-[250px]  floating"
                />
              </div>
              <div className="">
                <img
                  src="images/fri2.png"
                  alt=""
                  className="  h-auto sm:h-[250px] floating"
                />
              </div>
              <div className=" ">
                <img
                  src="images/fri3.png"
                  alt=""
                  className="  h-auto sm:h-[250px] floating"
                />
              </div>

              <div>
                <img
                  src="images/fri4.png"
                  alt=""
                  className=" h-auto sm:h-[250px] floating"
                />
              </div>
              <div className=" ">
                <img
                  src="images/fri5.png"
                  alt=""
                  className="  h-auto sm:h-[250px] floating"
                />
              </div>
              <img
                src="images/logo2.png"
                alt=""
                className="  h-auto sm:h-[250px] floating "
              />
            </div>

            <div
              className=" hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4\2 px-12"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="">
                <img
                  src="images/fri1.png"
                  alt=""
                  className=" h-auto sm:h-[250px]  floating"
                />
              </div>
              <div className="">
                <img
                  src="images/fri2.png"
                  alt=""
                  className="  h-auto sm:h-[250px] floating"
                />
              </div>
              <div className=" ">
                <img
                  src="images/fri3.png"
                  alt=""
                  className="  h-auto sm:h-[250px] floating"
                />
              </div>
            </div>
            <div
              className=" hidden sm:flex flex-col sm:flex-row items-center justify-center gap-2 px-12 mt-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                <img
                  src="images/fri4.png"
                  alt=""
                  className=" h-auto sm:h-[250px] floating"
                />
              </div>
              <div className=" ">
                <img
                  src="images/fri5.png"
                  alt=""
                  className="  h-auto sm:h-[250px] floating"
                />
              </div>
              <img
                src="images/logo2.png"
                alt=""
                className="  h-auto sm:h-[250px] floating "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
