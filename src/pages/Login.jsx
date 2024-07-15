import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {
  const formRef = useRef(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Add login logic here
    let formData = Object.fromEntries(new FormData(formRef.current));

    try {
      const {remember_me, ...request} = formData
      console.log(request);
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      const data = await response.json();

      if (request.email.includes('hr')) {
        localStorage.setItem('hr_login', 1);
        localStorage.setItem('user_login', JSON.stringify(data.data));
        navigate('/dashboard');
      } else {
        localStorage.setItem('user_login', JSON.stringify(data.data));
        navigate('/');
      }

    } catch (err) {
      console.error(err.message);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div 
        className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'
        >
        <div className='flex items-center gap-8'>
          <button
            onClick={handleBack}
            className='flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'></path>
            </svg>
          </button>
          <h2 className='text-2xl font-semibold text-center text-gray-800'>
            HR Recruiter System Login
          </h2>
        </div>
        <form 
          className='mt-8' onSubmit={handleLogin}
          ref={formRef}
        >
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4 flex items-center'>
            <input
              type='checkbox'
              id='rememberMe'
              name='remember_me'
              className='mr-2'
            />
            <label htmlFor='rememberMe' className='text-gray-700'>
              Remember Me
            </label>
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
