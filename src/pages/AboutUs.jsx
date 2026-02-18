import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AgriDoctor NEP</title>
      </Helmet>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 text-center"
          >
            <div className="text-6xl mb-6">🌾</div>
            <h1 className="text-4xl font-bold gradient-text mb-4">About AgriDoctor NEP</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Empowering Nepali farmers with AI-powered agriculture solutions
            </p>
            <div className="text-left space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                AgriDoctor NEP is Nepal's first AI-powered agriculture platform designed specifically 
                for Nepali farmers. We combine cutting-edge technology with local agricultural knowledge.
              </p>
              <p>
                Our mission is to make advanced agricultural tools accessible to every farmer in Nepal, 
                helping them increase productivity and income through smart farming practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
