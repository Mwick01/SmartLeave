/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';

function LoginPage() {
  const navigate = useNavigate();
  const [useUsername, setUserName] = useState('admin');
  const [usePassword, setPassword] = useState('1234');
  const [useError, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await window.api.adminLogin({
        username: useUsername,
        password: usePassword,
      });

      if (response.success) {
        setError('');
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      setError('Error connecting to database');
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-[url(../assets/images/background.jpg)] bg-cover bg-center lg:pt-30 pt-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <Logo />

      <div className="flex bg-[#CFE0C3]/75 border rounded-2xl shadow-lg p-4 lg:p-10 z-10 w-[60vh] h-[40vh] flex-col items-center mt-30">
        <h1 className="text-3xl font-semibold">LOGIN</h1>
        <div className="lg:mt-8 mt-2">
          <form className="grid gap-6" onSubmit={handleLogin}>
            <input
              type="text"
              className="border border-white rounded-full bg-white w-80 px-3 h-8 focus:outline-none"
              placeholder="Username"
              value={useUsername}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              className="border border-white rounded-full bg-white w-80 px-3 h-8 focus:outline-none"
              placeholder="Password"
              value={usePassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#1F363D] text-white px-10 py-1 rounded-full focus:outline-none hover:bg-black"
              >
                Login
              </button>
            </div>
          </form>
          {useError && (
            <div className="flex justify-center items-center mt-2">
              <p className="text-red-600">{useError}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
