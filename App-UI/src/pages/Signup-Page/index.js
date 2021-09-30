import React, { useState } from "react";
import axios from "axios";
// import Signup from "../../pages/Signup-Page";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const registerUrl =
    "https://29in5zdtjb.execute-api.us-east-2.amazonaws.com/prod/register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  async function submitHandler(event) {
    event.preventDefault();
    const requestConfig = {
      headers: {
        "x-api-key": "rsWvNIGAyT7BXGwGRLkln7EoCE3aonmI2aE0N5Tt",
      },
    };
    setMessage(null);

    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password,
    };

    try {
      await axios
        .post(registerUrl, requestBody, requestConfig)
        .then(response => {
          setMessage("Registration Complete.");
        });
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        setMessage(error.response.data.message);
      } else {
        setMessage(
          "Apologies... the backend server is down. Please try again or submit a ticket at the feedback tab. Thank you."
        );
      }
    }
  }

  return (
    <div className='flex top-20 z-50 outline-none focus:outline-none   items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Register An Account
          </h2>
        </div>
        <form
          onSubmit={submitHandler}
          className='mt-8 space-y-6'
          // action='#'
          // method='POST'
        >
          <input type='hidden' name='remember' value='true' />

          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                onChange={event => setName(event.target.value)}
                type='text'
                autoComplete='name'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Name'
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                onChange={event => setEmail(event.target.value)}
                name='email'
                type='text'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Username
              </label>
              <input
                id='username'
                onChange={event => setUsername(event.target.value)}
                name='username'
                type='text'
                autoComplete='username'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Username'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                onChange={event => setPassword(event.target.value)}
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>
          <div>
            <button
              value='Register'
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              Register
            </button>
            <label className='flex justify-center mt-10 ml-2 block text-sm text-gray-900'>
              Or
            </label>
            <a
              href='login-to-account'
              className='flex justify-center font-medium text-indigo-600 hover:text-indigo-500 '
            >
              <Link to='/login'>Login</Link>
            </a>
          </div>
        </form>
        {message && <div>{message}</div>}
      </div>
    </div>
  );
}
