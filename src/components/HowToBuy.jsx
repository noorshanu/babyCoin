import React from 'react'

function HowToBuy() {
  return (
   <section className='bg-[#0243b9] py-[2%]'>
    <div className=' container-wrapper'>
        <div className=' flex items-center justify-center gap-4'>
            <div className=' bg-white border-4 border-black box-s2 rounded-3xl py-8 px-4'>
                <h1 className='text-7xl font-bold font-dream py-1 text-center'> How To BUY</h1>
                <h2 className='text-7xl font-bold font-dream py-2 text-center'>$BABY</h2>
            </div>

            <div className='bg-white border-4 border-black box-s2 rounded-3xl p-4'>
                <img src="images/logo2.png" alt="" className=' h-[220px]' />
            </div>

        </div>


        <div className=' flex items-center justify-center gap-4'>
            <div className=' bg-white border-4 border-black box-s2 rounded-3xl py-8 px-4 flex flex-col justify-center items-center gap-4'>
    <img src="images/logo3.png" alt="" className='h-[250px]' />
    <a href="/" className=' bg-white border-4 box-s2 px-4 py-1 border-black rounded-full text-4xl font-bold font-dream'>
    
    Buy $BABY</a>
            </div>

            <div className='bg-white border-4 border-black box-s2 rounded-3xl p-4'>
                <img src="images/logo2.png" alt="" className=' h-[220px]' />
            </div>

        </div>

    </div>
   </section>
  )
}

export default HowToBuy