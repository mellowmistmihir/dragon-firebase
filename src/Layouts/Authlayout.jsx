import React from 'react';
import Navber from '../component/Navber';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-10/12 mx-auto p-5 '>
                <Navber></Navber>
            </header>

            <main className='w-10/12 mx-auto p-5 my-20'>
               <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Authlayout;