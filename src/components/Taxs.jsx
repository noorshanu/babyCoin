import React from "react";

function Taxs() {
  return (
    <section className="bg-[#0243b9] pt-[10%] pb-[8%]  relative ">
      <img
        src="images/mon.png"
        alt=""
        className=" absolute top-[-10%] left-auto right-[40%] z-10 floating "
        data-aos="fade-up"
        data-aos-duration="1500"
      />

      <div className=" container-wrapper bg-white border-4 border-black rounded-3xl box-s2 py-4 px-4 relative z-20">
        <div className="flex flex-col sm:flex-row justify-evenly gap-4 ">
          <div data-aos="fade-right" data-aos-duration="1500">
            <img
              src="images/img5.jpeg"
              alt=""
              className=" rounded-full h-[300px] img-hov mx-auto"
            />
          </div>
          <div
            className=" flex justify-center flex-col gap-3"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className=" text-3xl sm:text-6xl font-dream font-bold text-center">
              $BABY Treasury
            </h2>

            <h1 className=" text-3xl sm:text-7xl font-dream font-bold text-center">
              4% CEX listings
            </h1>
            <h1 className="text-3xl sm:text-7xl font-dream font-bold text-center">
              3% marketing
            </h1>
            <h1 className="text-3xl sm:text-7xl font-dream font-bold text-center">
              3% burn!
            </h1>
          </div>
        </div>

        <p>
          Team allocation? None. This is a fair launch and team has to buy in as
          well.
        </p>
      </div>
    </section>
  );
}

export default Taxs;
