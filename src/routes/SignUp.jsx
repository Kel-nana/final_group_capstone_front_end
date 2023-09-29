import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';

const SignUp = () => (
  <div className="bg-slate-200">
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Register</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-400 hover:bg-green-500 text-white py-2 px-4"
          >
            Create Account
          </button>
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
          <a
            className="border-blue text-blue-500"
            href="/"
          >
            {' '}
            <AiOutlineHome className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;