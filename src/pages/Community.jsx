import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, Plus, TrendingUp, MessageSquare, ThumbsUp } from 'lucide-react';

const Community = () => {
  const posts = [
    {
      id: 1,
      author: 'राम बहादुर',
      authorEn: 'Ram Bahadur',
      avatar: '👨‍🌾',
      time: '2 hours ago',
      title: 'धानमा झुलो रोग कसरी रोक्ने?',
      titleEn: 'How to prevent leaf blight in rice?',
      content: 'मेरो धानको खेतमा झुलो रोग लागेको छ। कसैलाई उपचारको बारेमा थाहा छ?',
      replies: 12,
      likes: 45,
      category: '🌾 धान',
    },
    {
      id: 2,
      author: 'सीता देवी',
      authorEn: 'Sita Devi',
      avatar: '👩‍🌾',
      time: '5 hours ago',
      title: 'गोलभेडाको उत्तम बेला कहिले?',
      titleEn: 'Best time to plant tomatoes?',
      content: 'गोलभेडा रोप्ने सही समय कति हो? कुन महिनामा रोप्दा राम्रो फल हुन्छ?',
      replies: 8,
      likes: 32,
      category: '🍅 तरकारी',
    },
    {
      id: 3,
      author: 'डा. कृष्ण',
      authorEn: 'Dr. Krishna',
      avatar: '🧑‍🔬',
      time: '1 day ago',
      title: 'मौसम अनुसार बाली रोप्ने तरिका',
      titleEn: 'Seasonal crop planting guide',
      content: 'मौसम अनुसार कुन बाली रोप्दा राम्रो हुन्छ भन्ने बारेमा जानकारी साझा गर्दैछु।',
      replies: 24,
      likes: 89,
      category: '📚 शिक्षा',
    },
  ];

  const categories = [
    { icon: '🌾', name: 'धान', count: 234 },
    { icon: '🍅', name: 'तरकारी', count: 456 },
    { icon: '🍎', name: 'फलफूल', count: 189 },
    { icon: '🌶️', name: 'मसला', count: 78 },
    { icon: '💊', name: 'रोग', count: 345 },
    { icon: '📚', name: 'शिक्षा', count: 567 },
  ];

  return (
    <>
      <Helmet>
        <title>किसान समुदाय - Community | AgriDoctor NEP</title>
        <meta name="description" content="Join thousands of farmers - share knowledge, ask questions, and learn from agricultural experts." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4 text-sm">
                👨‍🌾 Farmer Community
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                किसान समुदाय<br />
                मिलेर सिकौं, बढौं
              </h1>
              <p className="text-lg mb-6 opacity-90">
                हजारौं किसानहरूसँग जोडिनुहोस्, अनुभव साझा गर्नुहोस्, 
                र कृषि विशेषज्ञहरूबाट सल्लाह लिनुहोस्। 🌱
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  ✍️ प्रश्न सोध्नुहोस्
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <Search size={20} />
                  🔍 खोज्नुहोस्
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="space-y-4">
                {posts.slice(0, 3).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-lg">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{post.author}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{post.time}</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">{post.title}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <span>💬 {post.replies} जवाफ</span>
                      <span>👍 {post.likes}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 sticky top-24"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                श्रेणीहरू
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content - Posts */}
          <div className="lg:col-span-3">
            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-primary-600" size={20} />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  ट्रेन्डिङ Topics
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['मौसम', 'धान रोग', 'जैविक खेती', 'बीउ', 'मल'].map((topic, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all"
                  >
                    #{topic}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Posts List */}
            <div className="space-y-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 cursor-pointer group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {post.author}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {post.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {post.authorEn}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {post.titleEn}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {post.content}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <MessageSquare size={18} />
                        <span className="text-sm font-medium">{post.replies}</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ThumbsUp size={18} />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 px-6 py-3 glass rounded-xl font-medium hover:shadow-md transition-all"
            >
              थप हेर्नुहोस् / Load More
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
