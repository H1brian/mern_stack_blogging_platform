import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({}); // React hook to manage form data
  const [errorMessage, setErrorMessage] = useState(null);  // Handling the error, default is null
  const [loading, setLoading] = useState(false);  // Set the loading state
  const navigate = useNavigate();

  // Handling the form data
  const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value.trim()}); // Using trim to remove the space
    }; 

  // Handling the submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the webpage to refresh defaultly
    
    // Check if some of the fields are null
    if (!formData.username || !formData.email || !formData.password) {
        return setErrorMessage('Please fill out all fields.');
      }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();  //Change data into JSON format
      if (data.success === false) {
        return setErrorMessage(data.message)
      };
      setLoading(false);
      if(res.ok) {
        navigate('/signin')
      };
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <main className='min-h-screen mt-20'>
      <article className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        <section className='flex-1'>
        <Link to={"/"} className='text-4xl font-bold dark:text-white'> 
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Brian's </span>
        Blog
      </Link>
      <p className='whitespace-pre-line text-sm mt-5'>
        This is a mern stack blog demo project.
        You can sign up with your email and password!
        </p>
        </section>
        {/* right side */}
        <section className='flex-1 mt-10'>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@email.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button type='submit' gradientDuoTone={'purpleToPink'} disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-5'>Loading...</span>
                  </>
                ) : (
                  'Sign Up'
                  )
              }
            </Button>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to={'/signin'} className='text-blue-500'>Sign in</Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
          </form>
        </section>
      </article>
      </main>
  )
}
