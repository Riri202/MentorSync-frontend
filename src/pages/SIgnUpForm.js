/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../components/form/Input";

export default function SignUpForm() {
  const fillInMessage = '* Your input is required';
  const { state } = useLocation();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required(fillInMessage)
      .matches(/^\S+@\S+$/i, '* invalid email format'),
    password: yup
      .string()
      .required(fillInMessage)
      .min(6)
      .max(10),
    firstname: yup.string().required(fillInMessage).min(3),
    lastname: yup.string().required(fillInMessage),
    bio: yup.string().required(fillInMessage),
    address: yup.string().required(fillInMessage),
    occupation: yup.string().required(fillInMessage),
    // expertise: yup.required(fillInMessage),
    // role: yup.required(fillInMessage),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="p-20">
      <div className="flex flex-col space-y-3 justify-center items-center mb-10">
        <h2 className="text-5xl font-bold">Get Started</h2>
        <p>
          Already have an account?
          <Link to="/signin" state={{ redirectTo: state?.redirectTo ? state?.redirectTo : '/' }}>
            <button
              className="text-green-500 ml-2 cursor-pointer"
              type="button"
            >
              Sign in
            </button>
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-11/12 mx-auto"
      >
        <FormInput
          placeholder="Firstname"
          name="firstname"
          error={errors.firstname}
          register={register}
        />
        <FormInput
          placeholder="Lastname"
          name="lastname"
          error={errors.lastname}
          register={register}
        />
        <FormInput
          placeholder="Email"
          name="email"
          error={errors.email}
          register={register}
        />
        <FormInput
          placeholder="Password"
          name="password"
          error={errors.password}
          register={register}
          type="password"
        />
        <FormInput
          placeholder="Address"
          name="address"
          error={errors.address}
          register={register}
        />
        <FormInput
          placeholder="Bio"
          name="bio"
          error={errors.bio}
          register={register}
        />
        <FormInput
          placeholder="Occupation"
          name="occupation"
          error={errors.occupation}
          register={register}
        />
        {/* <TextField
          select
          value=""
          label="Expertise"
          // {...register("expertise")}
        >
          <MenuItem value="beginner">Beginner</MenuItem>
          <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="expert">Expert</MenuItem>
        </TextField> */}
        <label>Expertise:</label>
        <select
          className="p-3 ring-1 ring-stone-300"
          {...register("expertise")}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        <label>Role:</label>
        <select
          className="p-3 ring-1 ring-stone-300"
          {...register("role")}
        >
          <option value="user">User</option>
          <option value="mentor">Mentor</option>
        </select>

        {/* <input type="submit" /> */}
        <Button
          type="submit"
          variant="contained"
          style={{ width: "40%", padding: "10px" }}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}
