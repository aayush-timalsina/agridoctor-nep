import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Package, TrendingUp, Settings } from 'lucide-react';
import { useUserStore } from '../store/useStore';

const FarmerDashboard = () => {
  const { user } = useUserStore();

  const stats = [
    { icon: Package, label: 'Active Listings', value: '12', color: 'text-blue-600' },
    { icon: TrendingUp, label: 'Total Sales', value: 'रू 45,000', color: 'text-green-600' },
    { icon: BarChart3, label: 'This Month', value: 'रू 12,500', color: 'text-purple-600' },
    { icon: Settings, label: 'Orders', value: '28', color: 'text-orange-600' },
  ];

  return (
    <>
      <Helmet>
        <title>Farmer Dashboard | AgriDoctor NEP</title>
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Welcome, {user?.name || 'Farmer'}! 👨‍🌾
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your crops and track your sales
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <stat.icon className={`${stat.color} mb-4`} size={32} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 text-center"
          >
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold mb-2">Dashboard Under Development</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Full featured dashboard coming soon!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FarmerDashboard;
