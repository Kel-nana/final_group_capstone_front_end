import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a JSON object from formData
      const jsonData = JSON.stringify({
        user: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      });

      // Make a POST request using Axios with the JSON data
      const response = await axios.post(
        'https://doctalk-r977.onrender.com/users',
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        },
      );

      // Handle the response as needed
      if (response.status === 200) {
        setMessage('Account created successfully'); // Set message to true
        // Clear the input field
        setFormData({
          name: '',
          email: '',
          password: '',
          confirm_password: '',
        });
        toast.success('Account creation successful! Please login.', { type: toast.TYPE.SUCCESS });
        setTimeout(() => {
          navigate('/login');
        }, 1000); // Wait for 1 second before navigating
      } else {
        toast.error('Account creation failed! Please try again.', { type: toast.TYPE.ERROR });
        navigate('/signup');
      }
    } catch (error) {
      toast.error('Account creation failed! Please try again.', { type: toast.TYPE.ERROR });
      navigate('/signup');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (
      e.target.name === 'confirm_password'
      && formData.password !== e.target.value
    ) {
      setPasswordError('Passwords not match');
    } else {
      setPasswordError('');
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/login');
  };

  return (
    <div className="bg-slate-100">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <div className="text-center text-green-600 mt-4">{message}</div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border focus:outline-none border-grey-light w-full p-3 rounded mb-4"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <input
                type="text"
                className="block border focus:outline-none border-grey-light w-full p-3 rounded mb-4"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <div className="text-center text-yellow-600 mt-4">
                Password should be at least 6 characters
              </div>
              <div className="flex items-stretch justify-between border border-grey-light items-stretch w-full rounded mb-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="focus:outline-none w-3/4 p-3"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-6 h-6 mr-4" />
                  ) : (
                    <AiOutlineEye className="w-6 h-6 mr-4" />
                  )}
                </button>
              </div>
              {passwordError && (
                <div className="text-red-600">{passwordError}</div>
              )}
              <div className="flex items-stretch justify-between border border-grey-light items-stretch w-full rounded mb-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="focus:outline-none w-3/4 p-3"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-6 h-6 mr-4" />
                  ) : (
                    <AiOutlineEye className="w-6 h-6 mr-4" />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-[#97bf0f] hover:bg-[#5b740a] text-white py-2 px-4"
              >
                Create Account
              </button>
            </form>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              {' '}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
              {' '}
              and
              {' '}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue-500"
              href="../login/"
            >
              {' '}
              Log in
            </a>
          </div>
          <div className="text-grey-dark mt-6">
            <a className="no-underline text-[#97bf0f]" href="/" title="Back to Home">
              {' '}
              <AiOutlineHome className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed border border-green inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Registration Successful
            </h2>
            <p>{message}</p>
            <div className="mt-4">
              <button
                className="border-[#97bf0f] border-2 px-4 py-2 rounded"
                onClick={closeSuccessModal}
                type="submit"
              >
                <span className="text-[#97bf0f]">
                  Close
                </span>
              </button>
              <button
                className="bg-[#97bf0f] hover:bg-[#5b740a] text-white px-4 py-2 rounded ml-2"
                onClick={() => navigate('/login')}
                type="submit"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
