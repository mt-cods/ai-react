import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center bg-white border-2 border-[#ff3939] rounded-lg shadow-lg p-6 mx-auto w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="p-4 w-full">
            <label htmlFor="username" className="block mb-1">Username</label>
            <input 
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="text" 
              id="username" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="p-4 w-full">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input 
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center p-4 w-full">
            <Link 
              to="/about"
              className="bg-[#FF3939] text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Submit
            </Link>
          </div>
        </form>
        <div className="w-full text-right p-4">
          <p className="text-xs text-gray-500 cursor-pointer hover:underline">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
