import { Link } from "react-router-dom";
import {
    FaPhoneAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaMapMarkerAlt,
    FaClock,
    FaCar
} from "react-icons/fa";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Topbar */}
            <div className="bg-gray-100 text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-4 text-gray-700">
                    <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-red-600" />
                        222, Street, Morocco
                    </span>
                    <span className="hidden md:flex items-center gap-1">
                        <FaClock className="text-red-600" />
                        Mon - Fri : 09.00 AM - 09.00 PM
                    </span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 mt-2 md:mt-0">
                    <span className="flex items-center gap-1">
                        <FaPhoneAlt className="text-red-600" />
                        +212 666 89 46 40
                    </span>
                    <div className="flex gap-2 text-red-600">
                        <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-white shadow-md px-6 md:px-16 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 text-red-600 text-2xl font-bold">
                    <FaCar />
                    CarServices
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
                    <Link to="/" className="hover:text-red-600">Home</Link>
                    <Link to="/services" className="hover:text-red-600">Services</Link>
                    <Link to="/contact" className="hover:text-red-600">Contact</Link>
                    <Link to="/quotes" className="hover:text-red-600">Quote</Link>
                </nav>

                {/* CTA */}
                <Link
                    to="/quotes"
                    className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 font-semibold rounded shadow-md"
                >
                    GET A QUOTE →
                </Link>
            </div>
        </header>
    );
}
