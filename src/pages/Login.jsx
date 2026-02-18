import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useUserStore } from '../store/useStore';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();
  const [userType, setUserType] = useState('farmer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate login
    login(
      {
        name: userType === 'farmer' ? 'Ram Bahadur' : 'Krishna Sharma',
        phone: formData.phone,
      },
      userType
    );

    // Redirect based on user type
    navigate(userType === 'farmer' ? '/farmer-dashboard' : '/buyer-dashboard');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>लगइन - Login | AgriDoctor NEP</title>
        <meta name="description" content="Login to AgriDoctor NEP - Access your farmer or buyer dashboard" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Card */}
          <div className="glass-card p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
              >
                👨‍🌾
              </motion.div>
              <h2 className="text-3xl font-bold gradient-text mb-2">
                लगइन गर्नुहोस्
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-nepali">
                आफ्नो खातामा प्रवेश गर्नुहोस्
              </p>
            </div>

            {/* User Type Selector */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType('farmer')}
                className={clsx(
                  'p-4 rounded-xl transition-all text-center',
                  userType === 'farmer'
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                )}
              >
                <div className="text-3xl mb-2">👨‍🌾</div>
                <div className="font-semibold">किसान</div>
                <div className="text-xs opacity-75">Farmer</div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType('buyer')}
                className={clsx(
                  'p-4 rounded-xl transition-all text-center',
                  userType === 'buyer'
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                )}
              >
                <div className="text-3xl mb-2">🛒</div>
                <div className="font-semibold">खरिददार</div>
                <div className="text-xs opacity-75">Buyer</div>
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-nepali">
                  फोन नम्बर / Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">📱</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="९८०१२३४५६७"
                    pattern="[0-9]{10}"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-nepali">
                  पासवर्ड / Password
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="पासवर्ड राख्नुहोस्"
                    minLength="6"
                    required
                    className="w-full pl-12 pr-12 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all text-gray-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-nepali">
                    याद राख्नुहोस्
                  </span>
                </label>
                <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline font-nepali">
                  पासवर्ड बिर्सनुभयो?
                </a>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                🔓 लगइन गर्नुहोस् / Login
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
              <span className="text-sm text-gray-500 dark:text-gray-400">वा / OR</span>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            </div>

            {/* Register */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-3 font-nepali">
                नयाँ प्रयोगकर्ता हुनुहुन्छ?
              </p>
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                >
                  ✍️ नयाँ खाता बनाउनुहोस् / Register
                </motion.button>
              </Link>
            </div>

            {/* Social Login */}
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                छिटो लगइन / Quick Login
              </p>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <span>📧</span>
                  <span className="text-sm font-medium">Google</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <span>📘</span>
                  <span className="text-sm font-medium">Facebook</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Help Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-4 mt-6 flex items-center gap-4"
          >
            <span className="text-2xl">❓</span>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">मद्दत चाहियो?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                📞 ९८०१२३४५६७
              </p>
            </div>
          </motion.div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              ← गृहपृष्ठमा जानुहोस् / Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

// Import clsx
import clsx from 'clsx';

export default Login;
