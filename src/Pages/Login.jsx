import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
         const { login} = use(AuthContext)
         const [error , setError ] = useState("")
         const location =useLocation()
         console.log(location)
         const navigate = useNavigate()
    const handlelogin = (e) =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
         login(email, password).then((result)=>{
            const user = result.user
            console.log(user)
            navigate(`${location.state ? location.state:"/"}`)
         })
         .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode ,errorMessage)
  });
    }
    return (
        <div className='flex justify-center items-center space-y-3 min-h-full'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center text-2xl font-semibold '>Login Your Account</h2>
      <form onSubmit={handlelogin} class="card-body">
        <fieldset class="fieldset">
          <label class="label">Email</label>
          <input required name='email' type="email" class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input required name='password' type="password" class="input" placeholder="Password" />
          <div><a class="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-500'>{error}</p>
          }
          <button type='submit' class="btn btn-neutral mt-4">Login</button>
          <p className='text-center font-semibold py-3'>Dont’t Have An Account ? <Link to={"/auth/register"} className='text-secondary'> Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;