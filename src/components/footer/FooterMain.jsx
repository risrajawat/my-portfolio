import React from 'react';

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden mt-4 justify-between max-w-[1200px] mx-auto'>
            <p className='text-3xl text-lightGrey'>Rishabh Singh</p>
            <p className='text-xl text-lightGrey'>© Rishabh | All Rights Reserved</p>
        </div>
    </div>
  )
}
export default FooterMain;