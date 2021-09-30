import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../../services/AuthService";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const loginAPIUrl =
    "https://29in5zdtjb.execute-api.us-east-2.amazonaws.com/prod/login";

  function submitHandler(event) {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Both username and password are required.");
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        "x-api-key": "rsWvNIGAyT7BXGwGRLkln7EoCE3aonmI2aE0N5Tt",
      },
    };
    const requestBody = { username: username, password: password };
    try {
      axios.post(loginAPIUrl, requestBody, requestConfig).then(response => {
        setUserSession(response.data.user, response.data.token);
        props.history.push("/user-account");
      });
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(
          "sorry...the backend server is down. please submit try again later."
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
            Log In
          </h2>
        </div>
        <form onSubmit={submitHandler} className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='username' className='sr-only'>
                Username
              </label>
              <input
                onChange={event => setUsername(event.target.value)}
                value={username}
                id='username'
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
                onChange={event => setPassword(event.target.value)}
                value={password}
                id='password'
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
              value='Login'
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
              Log In
            </button>
            <label
              htmlFor='remember-me'
              className='flex justify-center mt-10 ml-2 block text-sm text-gray-900'
            >
              Or
            </label>
            <li
              href='create account'
              className='flex justify-center font-medium text-indigo-600 hover:text-indigo-500 '
            >
              <Link to='/create-account'>Create An Account</Link>
            </li>
          </div>
        </form>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
}
