import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaClock,
} from "react-icons/fa";

export default function FooterSection() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-20">
            <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
                {/* Adresse */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        222, Street, Morocco
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaPhoneAlt className="text-red-500" />
                        +212 666 89 46 40
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaClock className="text-red-500" />
                        Mon - Fri : 09:00 AM - 09:00 PM
                    </p>
                </div>

                {/* Liens rapides */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Liens Rapides</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-red-500">Home</Link></li>
                        <li><Link to="/services" className="hover:text-red-500">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
                        <li><Link to="/quote" className="hover:text-red-500">Get a Quote</Link></li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Suivez-nous</h3>
                    <div className="flex gap-4 text-red-500 text-xl">
                        <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Bas du footer */}
            <div className="text-center text-sm text-gray-500 mt-10">
                © {new Date().getFullYear()} CarServices. Tous droits réservés.
            </div>
        </footer>
    );
}
