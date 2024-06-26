import React from "react";
import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section className="bg-[#0243b9] -mt-0 sm:pt-0 pt-3 sm:-mt-2" id="about">
      <div className=" container-wrapper pt-[5%]">
        <div className=" px-2 py-1 bg-white border-t-2 border-l-2 border-r-2 border-black rounded-2xl w-full max-w-full sm:max-w-lg ml-6">
          <CopyAddress/>
        </div>
        <div className="relative">
          <img src="images/about-bg.png" alt="" className="   hidden sm:block" />
 
          <img src="images/mob.png" alt="" className=" block sm:hidden h-[750px]" />

          <div className=" absolute left-0 right-0 top-8 sm:top-[8%]">
            <img
              src="images/about.png"
              alt=""
              className="mx-auto text-center h-[30px] sm:h-[60px]"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-center my-4">
          The Heartbeat of Solana's Meme Community
            </h1>
            <p className=" max-w-4xl mx-auto text-center mt-[2%] mb-[3%] text-xs sm:text-xl font-bold">
             is more than just a digital currency; it's a revolution in the Solana ecosystem. Aimed at becoming the premier community coin of Web3, Bonked 420 is setting new standards for integration and utility across 
            </p>

            <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 px-12">
              <div>
                <img src="images/img5.jpeg" alt="" className=" h-auto sm:h-[250px] box-s rounded-3xl border-4 border-black" />
              </div>
              <div>
                <img src="images/img6.jpeg" alt="" className="  h-auto sm:h-[250px] box-s rounded-3xl border-4 border-black" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
