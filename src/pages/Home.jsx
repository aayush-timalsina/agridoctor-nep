import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Camera, ShoppingBag, Users, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../components/ProductCard';
import { products, stats, features, testimonials } from '../data/mockData';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AgriDoctor NEP - नेपाली किसानको AI साथी | AI-Powered Agriculture Platform</title>
        <meta name="description" content="The ultimate AI-powered agriculture platform for Nepali farmers. Real-time crop disease detection, marketplace, and farming community." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Marketplace Preview */}
      <MarketplaceSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items- justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-200/30 to-secondary-200/30 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary-200/30 to-primary-200/30 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6"
            >
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                ⚡ AI-Powered Agriculture
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">एक तस्बिर,</span>
              <br />
              सम्पूर्ण समाधान
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              बिरुवाको तस्बिर खिच्नुहोस्, हाम्रो AI ले रोग पहिचान गरी उपचार बताउनेछ। 
              अफलाइनमा पनि काम गर्छ! 🌱
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/detection">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Camera size={20} />
                  <span>📸 अबै नै जाँच गर्नुहोस्</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                >
                  थप जान्नुहोस्
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {['👨‍🌾', '👩‍🌾', '🧑‍🌾', '👨‍🌾'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-xl border-2 border-white dark:border-gray-800"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm mb-1">⭐⭐⭐⭐⭐</div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  10,000+ Happy Farmers
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Crop Preview Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { emoji: '🌾', name: 'धान', price: 'रू 50/kg', rating: '4.8' },
                { emoji: '🍅', name: 'गोलभेडा', price: 'रू 80/kg', rating: '4.9' },
                { emoji: '🥔', name: 'आलु', price: 'रू 40/kg', rating: '4.7' },
                { emoji: '🌾', name: 'गहुं', price: 'रू 45/kg', rating: '4.6' },
              ].map((crop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="glass-card p-6 hover-lift"
                >
                  <div className="text-5xl mb-3">{crop.emoji}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {crop.name}
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {crop.price}
                  </p>
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    {crop.rating}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover-lift"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-nepali">
                {stat.labelNepali}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">किन AgriDoctor NEP?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Modern solutions for Nepali farmers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-6 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3 font-nepali">
                {feature.titleNepali}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Marketplace Section Component
const MarketplaceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Crops</h2>
            <p className="text-gray-600 dark:text-gray-400 font-nepali">
              विशेष बालीहरू
            </p>
          </div>
          <Link to="/marketplace">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-0 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all flex items-center gap-2"
            >
              View All
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">किसानहरूको अनुभव</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            What farmers say about us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-nepali">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                "{testimonial.textEn}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 text-center text-white"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              आज नै सुरु गर्नुहोस्!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of farmers already using AgriDoctor NEP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  रजिस्टर गर्नुहोस्
                </motion.button>
              </Link>
              <Link to="/detection">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white hover:bg-white/30 transition-all"
                >
                  Try Detection
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🌾</div>
            <div className="absolute top-20 right-20 text-5xl">🍅</div>
            <div className="absolute bottom-10 left-20 text-7xl">🥔</div>
            <div className="absolute bottom-20 right-10 text-6xl">🌾</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
