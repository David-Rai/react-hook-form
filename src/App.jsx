import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";


const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()


  //onSubmit output the form data
  const onSubmit = (data) => {
    console.log("form data", data)
  }

  return (
    <main className='h-screen w-full flex items-center justify-center flex-col bg-gray-300'>
      <h1 className='text-2xl mb-2'>Form Validation</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='min-h-[300px] lg:w-[30%] w-[80%]
         bg-white flex flex-col gap-2 py-3
        items-center justify-around rounded-md'
      >
        {/* Name input field */}
        <input
          {...register("text",
            {
              required: true,
              minLength: { value: 3, message: "minimum length 3 is required" },
              validate: {
                demo: (v) => {
                  console.log(v)
                }
              }

            })}
          className='input'
          type="text" name="text"
          id="text" placeholder='Name' />


        {
          errors.text && <p className='text-red-500'>{errors.text.message}</p>
        }

        {/* Email input field */}
        <input
          {...register("email",
            {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "input the correct email format"
              }
            })}
          className='input'
          type="email" name="email" id="email"
          placeholder='Email' />
        {
          errors.email && <p className='text-red-500'>{errors.email.message}</p>
        }


        {/* Password input field */}
        <input
          {...register("password", {
            required: true,
            minLength: { value: 5, message: "minimum 5 length is required" }
          })}
          className='input' type="password"
          name="password" id="password" placeholder='password' />
        {
          errors.password && <p className='text-red-500'>{errors.password.message}</p>
        }

        {/* Select validation */}
        <select name="select" {...register("country", {
          required: "Country need to be selected"
        })}>
          <option value="">Select Country</option>
          <option value="nepal">nepal</option>
          <option value="india">india</option>
          <option value="china">china</option>
        </select>

        {
          errors.country && <p className='text-red-500'>{errors.country.message}</p>
        }

        {/* Checkbox */}
        <div className='flex gap-2'>
          <input type="checkbox" name="checkbox" {...register("checkbox", {
            required: "Agree the terms"
          })} />
          <p>Terms and condition</p>
        </div>

        {
          errors.checkbox && <p className='text-red-500'>{errors.checkbox.message}</p>
        }

        {/* Radio buttons */}
        <label>
          <input type="radio" {...register("gender", {
            required: "Select the gender"
          })} />
          Male
        </label>

        <label>
          <input type="radio" {...register("gender")} />
        Female
        </label>

        {
          errors.gender && <p className='text-red-500'>{errors.gender.message}</p>
        }

        <button className='btn' type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default App