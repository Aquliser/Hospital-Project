import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
  }
  
  return (
<div className="flex flex-col sm:flex-row">
  <div className="md:w-1/2">
    <div className="h-full w-full p-8 flex justify-end items-center bg-white drop-shadow-2xl">
      <Logo />
      <div className="flex-col justify-end text-right ml-4 hidden sm:block">
        <div className="md:text-7xl text-blue-800 text-lg font-bold">
          WELCOME!
        </div>
        <p className="text-blue-800">
          Enter Personal Detail For Login
        </p>
        <p className="text-blue-800">
          Or Choose Create Account
        </p>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 h-full  bg-blue-800 rounded-t-[36px] sm:rounded-none sm:w-1/2">
  <div className="flex flex-col items-center h-1/2 justify-center py-8 sm:h-screen">
    <p className="flex items-center mb-6 text-7xl font-bold text-white dark:text-white">
      Log In
    </p>
    <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
      <div className="mb-4 drop-shadow-lg">
        <input 
          className="bg-white text-gray-900 sm:text-md sm:p-4 py-2 px-4 rounded-full block w-full"
          id="email" 
          type="@" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6 drop-shadow-lg">
        <input 
          className="bg-white text-gray-900 sm:p-4 py-2 px-4 rounded-full block w-full" 
          id="password" 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>      
      <div className="flex items-center justify-center">
        <button 
          className="bg-white text-blue-700 sm:p-3 py-2 px-4 rounded-full font-bold block w-full" 
          type="submit"
        >
          Login
        </button>
      </div>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full border-b border border-gray-3000"></div>
        <p className="inline-block text-white mx-2">OR</p>
        <div className="w-full border-b border border-gray-300"></div>
      </div>
      <div className="mb-4 drop-shadow-lg">
        <div className="flex items-center justify-center">
          <button 
            className="bg-white text-blue-700 sm:text-md sm:p-3 py-2 px-4 rounded-full font-bold block w-full"
          >
            <Link to="/Register">Create Account</Link>
          </button>
        </div> 
      </div>     
    </form>
  </div>
</div>
</div>


  );
};

export default Login;