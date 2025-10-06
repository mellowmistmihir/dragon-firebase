import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <button className='btn w-full btn-outline btn-secondary mt-5'><FcGoogle size={24}/> Google</button>
            <button className='btn w-full btn-outline btn-primary my-5'><FaGithub size={24}/> GitHub</button>
        </div>
    );
};

export default SocialLogin;