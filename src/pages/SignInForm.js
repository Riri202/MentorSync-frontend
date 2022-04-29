import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function SignInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const navigate = useNavigate();

    const changeRoute = (path) => {
        navigate(path)
    }

    return (
        <div className='p-20'>

            <div className='flex flex-col space-y-3 justify-center items-center mb-10'>
                <h2 className='text-5xl font-bold'>Welcome Back</h2>
                <p>Don't have an account?
                    <button className='text-green-500 ml-2 cursor-pointer' onClick={() => changeRoute(`/Signup`)}>Create account</button>
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-11/12 mx-auto'>
                <input className='p-3 ring-1 ring-stone-300' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input className='p-3 ring-1 ring-stone-300' type="password" placeholder="Password" {...register("Password", { required: true, max: 10, min: 6, maxLength: 12 })} />

                {/* <input type="submit" /> */}
                <Button type='submit' variant='contained' style={{ width: '40%', padding: '10px' }}>Sign In</Button>
            </form>
        </div>
    );
}