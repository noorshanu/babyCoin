import React from 'react'

function Taxs() {
  return (
  <section className='bg-[#0243b9] pt-[5%] pb-[8%] overflow-x-hidden '>
    <div className=' container-wrapper bg-white border-4 border-black rounded-3xl box-s2 py-4 px-4'>
        <div className='flex flex-col sm:flex-row justify-evenly gap-4 '>
            <div>

                <img src="images/img5.jpeg" alt="" className=' rounded-full h-[300px] img-hov' />

            </div>
            <div className=' flex justify-center flex-col gap-3'>
                <h2 className=' text-6xl font-dream font-bold text-center'>
                $BABY Treasury
                </h2>

                <h1 className=' text-7xl font-dream font-bold text-center'>
                4% CEX listings
                </h1>
                <h1 className='text-7xl font-dream font-bold text-center'>
                3% marketing
            
                </h1>
                <h1 className='text-7xl font-dream font-bold text-center'>
                3% burn!
                </h1>
            </div>
        </div>

<p>
Team allocation?  None. This is a fair launch and team has to buy in as well.
</p>

    </div>
  </section>
  )
}

export default Taxs