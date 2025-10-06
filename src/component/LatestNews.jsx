import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 gap-5 p-3'>
           <p className=' bg-secondary py-2 text-base-100 px-3'>Latest</p>
           <Marquee speed={50} pauseOnHover={true}> <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a voluptatem   facere ut similique impedit ullam molestias. Facilis exercitationem quod deserunt unde perspiciatis repellendus temporibus aspernatur consectetur rerum! Quia, soluta!</p></Marquee>
        </div>
    );
};

export default LatestNews;