import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Social Media Links */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
                        <FaFacebookF className="h-6 w-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                        <FaTwitter className="h-6 w-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400">
                        <FaInstagram className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500">
                        <FaLinkedinIn className="h-6 w-6" />
                    </a>
                </div>

                {/* Company Name & Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
