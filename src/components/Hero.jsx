import React from "react";

function Hero() {
  return (
    <section className="hero-main relative  bg-[#ffbe2d]  ">
  
      <div className=" container-wrapper pt-[25%] sm:pt-[6%]  overflow-hidden">
        <div>
          <img src="images/hero-txt.png" alt="" className=" mx-auto h-auto sm:h-[300px] w-auto my-[1.5%]" />
        {/* <a href="/" className="text-sm sm:text-2xl font-bold text-center flex justify-center my-4"> </a> */}

         
        </div>
      </div>
      <img src="images/logo2.png" alt="" className=" mx-auto h-auto sm:h-[350px]"
      />
      {/* <img src="images/hero-btn.png" alt="" className="  h-[30px] sm:h-[80px] " /> */}
      <a href="/" className=" mx-auto font-dream box-s2  absolute left-0 right-0 top-[80%] sm:top-[50%] text-xl text-black bg-[#fcfac2] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[200px] text-center font-bold uppercase"> DexTools</a>
    </section>
  );
}

export default Hero;
