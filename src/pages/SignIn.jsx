/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Alert } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormInput from '../components/form/Input';
import { useSignIn } from '../hooks/useSignin';
import syncImage from '../assets/images/signup-sync-white.jpg';

export default function SignInForm() {
  const { state } = useLocation();
  const fillInMessage = '* Your input is required';

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^\S+@\S+$/i,
      )
      .required(fillInMessage),
    password: yup
      .string()
      .required(fillInMessage),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorText, setErrorText] = useState('');

  const navigate = useNavigate();

  const onChange = (event) => {
    setCredentials((other) => ({
      ...other,
      [event.target.name]: event.target.value,
    }));
  };
  const [signin, loading] = useSignIn();

  const onSubmit = async (data) => {
    if (errors === {}) return;
    const response = await signin(data);
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      navigate(state?.redirectTo ? `${state?.redirectTo}` : '/');
    }
  };

  return (
    <div className="p-20">
      {/* <Paper elevation={12} style={{ paddingRight: 150, borderRadius: 20 }}> */}
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="md:pl-3 w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-3 justify-center items-center mb-10">
            <h2 className="text-5xl font-bold">Welcome Back</h2>
            <p>
              Don&apos;t have an account?
              <Link to="/Signup" state={{ redirectTo: state?.redirectTo ? state?.redirectTo : '/' }}>
                <button
                  className="text-green-500 ml-2 cursor-pointer underline"
                  type="button"
                >
                  Create one
                </button>
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-[80%]"
          >
            {errorText && (
            <Alert severity="error">
              {errorText}
            </Alert>
            )}
            <FormInput
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              error={errors.email}
              register={register}
              type="text"
            />
            <FormInput
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              error={errors.password}
              register={register}
              type="password"
            />
            <Button
              type="submit"
              variant="contained"
              style={{ padding: '10px', color: '#fff' }}
              disabled={loading}
            >
              {loading ? <CircularProgress color="inherit" /> : 'Sign In'}
            </Button>
          </form>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src={syncImage}
            className="rounded-[20px]"
            color="blue"
            alt="people meeting online"
          />
          <p className="absolute bottom-10 pl-3 text-xs flex justify-center items-center font-light text-gray-500">
            <a className="" href="https://www.freepik.com/free-vector/online-virtual-team-building-isometric-composition-with-male-worker-sitting-computer-table-with-coworker-avatars-illustration_17544091.htm#query=online%20mentorship&position=6&from_view=search&track=ais">
              Image by macrovector on Freepik
            </a>
          </p>
        </div>
      </div>
      {/* </Paper> */}
    </div>
  );
}
