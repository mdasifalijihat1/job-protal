import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

const Register = () => {
 

     const {createUser} = useContext(AuthContext);   

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // password validation 
        // show password validation

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error.mesage)
        })
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* Username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="At least 6 characters, including uppercase, lowercase, numbers, and symbols"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Register
                    </button>
                </form>

                {/* Google Login */}
                <div className="mt-6 text-center">
                    <button
                        onClick={() => alert('Google Login clicked')}
                        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        <i className="fab fa-google mr-2"></i> Register with Google
                    </button>
                </div>
                {/* Registration Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button className="text-blue-500 hover:underline"> <Link to={'/login'}> Login </Link> </button>
          </p>
        </div>
            </div>
        </div>
    );
};

export default Register;
