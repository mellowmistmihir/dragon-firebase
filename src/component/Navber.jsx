import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import users from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navber = () => {
    const {user , logOut } =use(AuthContext)
     const handlelogout = () =>{
        logOut ()
        .then(() => {
  // Sign-out successful.
  alert("signout successfully")
}).catch((error) => {
  // An error happened.
  console.log(error)
});
     }
    return (
        <div className='flex justify-between items-center'>
            <div> {user && user.email}</div>
            <div className='flex gap-3'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={'/about'} >About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className='flex gap-3'>
                 <img src={users} alt="" />
                {
                    user ? <button onClick={handlelogout} className='btn btn-primary px-6'> Logout</button> : <Link to={"/auth/login"} className='btn btn-primary px-6'> Login</Link >
                }
            </div>
        </div>
    );
};

export default Navber;