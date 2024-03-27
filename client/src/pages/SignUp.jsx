import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        <div className='flex-1'>
        <Link to={"/"} className='text-4xl font-bold dark:text-white'> 
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Brian's </span>
        Blog
      </Link>
      <p className='whitespace-pre-line text-sm mt-5'>
        This is a mern stack blog demo project.
        You can sign up with your email and password!
        </p>
        </div>
        {/* right side */}
        <div className='flex-1 mt-10'>
          <form className='flex flex-col gap-5'>
            <div>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='text' placeholder='name@email.com' id='email'/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button type='submit' gradientDuoTone={'purpleToPink'}>
              Sign Up
            </Button>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to={'/signin'}>Sign in</Link>
            </div>
          </form>
        </div>
      </div>
      </div>
  )
}
