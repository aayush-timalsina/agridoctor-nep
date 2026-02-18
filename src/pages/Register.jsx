import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Phone, Mail, MapPin } from 'lucide-react';
import { useUserStore } from '../store/useStore';
import clsx from 'clsx';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();
  const [userType, setUserType] = useState('farmer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    login({ name: formData.name, phone: formData.phone }, userType);
    navigate(userType === 'farmer' ? '/farmer-dashboard' : '/buyer-dashboard');
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>रजिस्टर - Register | AgriDoctor NEP</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-2">
                नयाँ खाता बनाउनुहोस्
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Create New Account</p>
            </div>

            {/* User Type */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setUserType('farmer')}
                className={clsx(
                  'p-4 rounded-xl transition-all',
                  userType === 'farmer'
                    ? 'bg-gradient-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800'
                )}
              >
                <div className="text-3xl mb-2">👨‍🌾</div>
                <div className="font-semibold">किसान / Farmer</div>
              </button>
              <button
                onClick={() => setUserType('buyer')}
                className={clsx(
                  'p-4 rounded-xl transition-all',
                  userType === 'buyer'
                    ? 'bg-gradient-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800'
                )}
              >
                <div className="text-3xl mb-2">🛒</div>
                <div className="font-semibold">खरिददार / Buyer</div>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <User size={16} className="inline mr-2" />
                    नाम / Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Phone size={16} className="inline mr-2" />
                    फोन / Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Mail size={16} className="inline mr-2" />
                    इमेल / Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MapPin size={16} className="inline mr-2" />
                    स्थान / Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">पासवर्ड / Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      minLength="6"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">पुष्टि गर्नुहोस् / Confirm</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength="6"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                ✍️ रजिस्टर गर्नुहोस् / Register
              </motion.button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                पहिले नै खाता छ?
              </p>
              <Link to="/login">
                <button className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  लगइन गर्नुहोस् / Login
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Register;
