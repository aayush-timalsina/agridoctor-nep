import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ShoppingCart, Menu, X, Sun, Moon, User } from 'lucide-react';
import { useThemeStore, useCartStore, useUIStore, useUserStore } from '../store/useStore';
import clsx from 'clsx';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const { getItemCount } = useCartStore();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const { isAuthenticated, user } = useUserStore();

  const cartCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', nepali: 'गृहपृष्ठ' },
    { path: '/detection', label: 'Detection', nepali: 'पहिचान' },
    { path: '/marketplace', label: 'Marketplace', nepali: 'बजार' },
    { path: '/community', label: 'Community', nepali: 'समुदाय' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass shadow-lg'
            : 'bg-gradient-primary'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center text-2xl shadow-lg glow-primary"
              >
                🌾
              </motion.div>
              <div className="hidden sm:block">
                <h1
                  className={clsx(
                    'text-lg sm:text-xl font-bold transition-all',
                    scrolled
                      ? 'gradient-text'
                      : 'text-white'
                  )}
                >
                  AgriDoctor NEP
                </h1>
                <p
                  className={clsx(
                    'text-[10px] sm:text-xs font-nepali transition-all',
                    scrolled
                      ? 'text-gray-600 dark:text-gray-400'
                      : 'text-white/90'
                  )}
                >
                  नेपाली किसानको AI साथी
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={clsx(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all relative group',
                      isActive(link.path)
                        ? scrolled
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-white bg-white/20'
                        : scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={clsx(
                  'p-2 rounded-lg transition-all',
                  scrolled
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    : 'hover:bg-white/10 text-white'
                )}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  'relative p-2 rounded-lg transition-all',
                  scrolled
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    : 'hover:bg-white/10 text-white'
                )}
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </motion.button>

              {/* Cart */}
              <Link to="/marketplace">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={clsx(
                    'relative p-2 rounded-lg transition-all',
                    scrolled
                      ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      : 'hover:bg-white/10 text-white'
                  )}
                  aria-label="Cart"
                >
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.button>
              </Link>

              {/* Login/User */}
              {isAuthenticated ? (
                <Link to="/farmer-dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={clsx(
                      'hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
                      scrolled
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    )}
                  >
                    <User size={18} />
                    <span className="hidden md:inline">{user?.name || 'Profile'}</span>
                  </motion.button>
                </Link>
              ) : (
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={clsx(
                      'hidden sm:block px-4 py-2 rounded-lg font-medium transition-all',
                      scrolled
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    )}
                  >
                    लगइन गर्नुहोस्
                  </motion.button>
                </Link>
              )}

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className={clsx(
                  'lg:hidden p-2 rounded-lg transition-all',
                  scrolled
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    : 'hover:bg-white/10 text-white'
                )}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-[70px] right-0 bottom-0 w-80 glass-card z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={clsx(
                        'block px-4 py-3 rounded-lg font-medium transition-all',
                        isActive(link.path)
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      )}
                    >
                      <span className="block">{link.label}</span>
                      <span className="block text-xs opacity-70 font-nepali">{link.nepali}</span>
                    </Link>
                  ))}
                </nav>

                {!isAuthenticated && (
                  <div className="mt-6 space-y-2">
                    <Link to="/login" onClick={closeMobileMenu}>
                      <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all">
                        लगइन गर्नुहोस्
                      </button>
                    </Link>
                    <Link to="/register" onClick={closeMobileMenu}>
                      <button className="w-full px-4 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all">
                        रजिस्टर गर्नुहोस्
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
