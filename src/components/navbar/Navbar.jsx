import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
 // Import your AuthContext

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Get user and logout from AuthContext
  const isAuthenticated = user !== null; // Check if user is authenticated

  return (
    <nav className="bg-white text-black py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name (Left Side) */}
        <div className="text-xl font-bold">Job Portal</div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-gray-400">
            Jobs
          </Link>
          <Link to="/my-jobs" className="hover:text-gray-400">
            My Jobs
          </Link>
        </div>

        {/* Right Section: Auth Links & User Profile */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL || "/default-avatar.png"} // Show user photo or default avatar
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:inline">{user.displayName}</span>
              </div>
              <Link to="/profile" className="hover:text-gray-400">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-400">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
