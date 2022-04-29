import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const changeRoute = (path) => {
        navigate(path)
    }

  return (
    <div className='p-20'>

      <div className='flex flex-col space-y-3 justify-center items-center mb-10'>
        <h2 className='text-5xl font-bold'>Get Started</h2>
        <p>Already have an account?
          <button className='text-green-500 ml-2 cursor-pointer' onClick={() => changeRoute(`/Signin`)}>Sign in</button>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-11/12 mx-auto'>
        <input className='p-3 ring-1 ring-stone-300' type="text" placeholder="First name" {...register("Firstname", { required: true, maxLength: 80 })} />
        {errors.Firstname && <p className='text-red-500'>Please enter first name</p>}
        <input className='p-3 ring-1 ring-stone-300' type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
        <input className='p-3 ring-1 ring-stone-300' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.Email && <p className='text-red-500'>Please enter valid email</p>}
        {/* password should contain one Capital Letter, one Small Letter, and the number of characters should be between 6 to 15 */}
        <input className='p-3 ring-1 ring-stone-300' type="password" placeholder="Password" {...register("Password", { required: true, max: 10, min: 6, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} /> 
        <input className='p-3 ring-1 ring-stone-300' type="text" placeholder="Address" {...register("Address", {})} />
        <input className='p-3 ring-1 ring-stone-300' type="text" placeholder="Bio" {...register("Bio", {})} />
        <input className='p-3 ring-1 ring-stone-300' type="text" placeholder="Occupation" {...register("Occupation", {})} />
        <label>Expertise:</label>
        <select className='p-3 ring-1 ring-stone-300' {...register("Expertise", { required: true })}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        {/* <input type="submit" /> */}
        <Button type="submit" variant='contained' style={{ width: '40%', padding: '10px' }}>Create Account</Button>
      </form>
    </div>
  );
}