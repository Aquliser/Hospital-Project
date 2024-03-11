import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
  }

  return (
    <div className="flex">
      <div className="hidden w-full xl:block">
        <div className="h-full w-full p-8 flex justify-end items-center bg-white drop-shadow-2xl">
        <Logo/>
          <div className="flex flex-col justify-end text-right ml-4">
            <div className="text-7xl text-blue-800 font-bold">
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
      <div className="h-full w-full bg-blue-800 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen max-sm:h-screen lg:py-0 w-[80%] lg:w-auto">
            <p className="flex items-center mb-6 text-7xl font-bold text-white dark:text-white">
              Log In
            </p>
            <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
              <div className="mb-4 drop-shadow-lg">
                <input 
                  className="bg-white text-gray-900 sm:text-md sm:p-4 py-2 px-4 rounded-full block w-full"
                  id="username" 
                  type="text" 
                  placeholder="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6 drop-shadow-lg">
                <input 
                  className="bg-white text-gray-900 sm:text-md sm:p-4 py-2 px-4 rounded-full block w-full" 
                  id="password" 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>      
              <div className="flex items-center justify-center">
                <button 
                  className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="flex items-center justify-center w-404 mt-32">
                <div className="w-full border-b border border-gray-3000"></div>
                <p className="inline-block text-white mx-2">OR</p>
                <div className="w-full border-b border border-gray-300"></div>
              </div>
              <div className="mb-4 drop-shadow-lg">
                <div className="flex items-center justify-center">
                  <button 
                    className="bg-white text-blue-700 sm:text-md sm:p-3 py-2 px-4 rounded-full font-bold block w-full"
                    type="submit"
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