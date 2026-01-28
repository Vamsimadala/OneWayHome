import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_work-solutions-1/artifacts/zwzc5ldc_icon128.png" 
                alt="OneWay Logo" 
                className="w-8 h-8 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold">OneWay</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md mb-4">
              The universal productivity layer for job seekers. Organize your entire job search, 
              apply smarter, and never lose track — all in one place.
            </p>
            <div className="flex flex-col gap-2">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/demos" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Demo Videos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} OneWay. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built for job seekers, by people who understand the struggle.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
