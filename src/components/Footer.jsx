import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', nepali: 'हाम्रो बारेमा', path: '/about' },
      { label: 'Contact', nepali: 'सम्पर्क', path: '/contact' },
      { label: 'Careers', nepali: 'करियर', path: '#' },
      { label: 'Blog', nepali: 'ब्लग', path: '#' },
    ],
    services: [
      { label: 'Disease Detection', nepali: 'रोग पहिचान', path: '/detection' },
      { label: 'Marketplace', nepali: 'बजार', path: '/marketplace' },
      { label: 'Community', nepali: 'समुदाय', path: '/community' },
      { label: 'Expert Advice', nepali: 'विशेषज्ञ सल्लाह', path: '#' },
    ],
    support: [
      { label: 'Help Center', nepali: 'सहायता केन्द्र', path: '#' },
      { label: 'FAQs', nepali: 'सामान्य प्रश्न', path: '#' },
      { label: 'Privacy Policy', nepali: 'गोपनीयता नीति', path: '#' },
      { label: 'Terms of Service', nepali: 'सेवाका शर्तहरू', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Youtube, href: '#', label: 'Youtube', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🌾
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">AgriDoctor NEP</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-nepali">
                  नेपाली किसानको AI साथी
                </p>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              Empowering Nepali farmers with AI-powered crop disease detection, 
              direct marketplace access, and expert agricultural guidance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors block"
                  >
                    {link.label}
                    <span className="text-xs ml-2 opacity-70 font-nepali">{link.nepali}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors block"
                  >
                    {link.label}
                    <span className="text-xs ml-2 opacity-70 font-nepali">{link.nepali}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Call Us</p>
              <p className="text-gray-600 dark:text-gray-400">+977 9801234567</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Email Us</p>
              <p className="text-gray-600 dark:text-gray-400">info@agridoctor.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Visit Us</p>
              <p className="text-gray-600 dark:text-gray-400">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} AgriDoctor NEP. All rights reserved. Made with ❤️ for Nepali Farmers
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Terms
              </Link>
              <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
