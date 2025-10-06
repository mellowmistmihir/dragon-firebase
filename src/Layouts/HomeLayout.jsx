import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navber from '../component/Navber';
import LeftAside from '../Homelayout/LeftAside';
import Rightsude from '../Homelayout/Rightsude';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header>
               <section className='w-10/12 mx-auto'>
                  <LatestNews></LatestNews>
               </section>
               <nav className='w-10/12 mx-auto my-10'>
                <Navber></Navber>
               </nav>
            </header>
              
            <main className='w-10/12 mx-auto my-3 gap-5 grid grid-cols-12'>
                <aside className='col-span-3 sticky top-5 h-fit'><LeftAside></LeftAside></aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-5 h-fit'><Rightsude></Rightsude></aside>
            </main>
        </div>
    );
};

export default HomeLayout;