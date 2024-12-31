import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4">
            <h2 className="text-2xl font-bold text-black mb-3">JobFinder</h2>
            <p className="text-black pl-6">
              Your trusted platform for finding the best job opportunities
              tailored to your skills.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-black mb-4 cursor-pointer">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <a href="/jobs" className="hover:text-black">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="/employers" className="hover:text-black">
                  Employers
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-black">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-black">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold text-black mb-4">Contact Us</h3>
            <p className="text-black mb-2">Email: support@jobfinder.com</p>
            <p className="text-black mb-4">Phone: +1 (555) 123-4567</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook text-xl hover:text-black"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xl hover:text-black"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-xl hover:text-black"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-black">
            © {new Date().getFullYear()} JobFinder. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
