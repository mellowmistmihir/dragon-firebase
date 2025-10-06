import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const Rightsude = () => {
    return (
        <div className='space-y-7'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <Qzone></Qzone>
        </div>
    );
};

export default Rightsude;