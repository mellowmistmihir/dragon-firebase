import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold'>Find Us On</h2>

            <div className="join join-vertical my-5 w-full ">
                <button className="btn join-item bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item bg-base-100 justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item bg-base-100 justify-start"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;