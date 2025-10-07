import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {userCreate ,setUser} = use(AuthContext)
    const [errorMassege , setErrorMassege] = useState("")
     const hanleregister = e => {

        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const photo = form.photo.value
        const email= form.email.value
        const password = form.password.value
         if(name.length <5 ){
          setErrorMassege("name should be 5 character ")
          return
         }
         else{
          setErrorMassege("")
         }
        console.log( name , photo)
        userCreate(email , password)
        .then((result) => {
            const user = result.user
            setUser(user)
        })
         .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage ,errorCode)
    // ..
  });
     }
    return (
         <div className='flex justify-center items-center space-y-3 min-h-full'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center text-2xl font-semibold '>Register Your Account</h2>
      <form onSubmit={hanleregister} class="card-body">
        <fieldset class="fieldset">
             {/* name */}
          <label class="label">Name</label>
          <input  required name='name' type="text" class="input" placeholder="Name" />
          {
            errorMassege && <p className='text-xs text-red-500'>{errorMassege}</p>
          }
             {/* Photo url */}
          <label class="label">Photo URl</label>
          <input required  type="text" name='photo' class="input" placeholder="Photo URl" />
            {/* email */}
          <label class="label">Email</label>
          <input required name='email' type="email" class="input" placeholder="Email" />
          {/* password */}
          <label class="label">Password</label>
          <input required name='password' type="password" class="input" placeholder="Password" />

          
          <button type='submit' class="btn btn-neutral mt-4">Register</button>
          <p className='text-center font-semibold py-3'>Already Have An Account ? <Link to={"/auth/login"} className='text-secondary'>Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;