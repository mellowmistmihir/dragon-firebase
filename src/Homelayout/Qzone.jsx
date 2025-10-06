import React from 'react';
import school from "../assets/class.png"
import swim from "../assets/swimming.png"
import ground from "../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-4 rounded-md'>
            <h2  className='font-bold text-2xl mb-5'>Qzone</h2>

           <div className='mx-5 space-y-5'>
             <img className='w-full object-cover' src={school} alt="" />
            <img className='w-full object-cover' src={swim} alt="" />
            <img className='w-full object-cover' src={ground} alt="" />
           </div>
        </div>
    );
};

export default Qzone;