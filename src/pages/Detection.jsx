import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Camera, Upload, X, Loader, CheckCircle, AlertCircle } from 'lucide-react';

const Detection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = async () => {
    if (!isCameraOpen) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraOpen(true);
        }
      } catch (error) {
        alert('Camera access denied or not available');
      }
    } else {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      if (canvas && video) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setSelectedImage(imageData);
        
        // Stop camera
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsCameraOpen(false);
        setResult(null);
      }
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        disease: 'Leaf Blight',
        diseaseNepali: 'पात झुलो रोग',
        confidence: 94,
        severity: 'Moderate',
        treatment: [
          'Remove and destroy infected leaves',
          'Apply fungicide (Mancozeb 75% WP)',
          'Improve air circulation',
          'Avoid overhead irrigation',
        ],
        treatmentNepali: [
          'संक्रमित पातहरू हटाउनुहोस्',
          'फंगिसाइड (Mancozeb 75% WP) प्रयोग गर्नुहोस्',
          'हावा संचार सुधार गर्नुहोस्',
          'माथिबाट सिंचाइ नगर्नुहोस्',
        ],
      });
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>रोग पत्ता लगाउनुहोस् - Disease Detection | AgriDoctor NEP</title>
        <meta name="description" content="AI-powered crop disease detection. Upload or capture a photo of your crop for instant diagnosis and treatment recommendations." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">रोग पत्ता लगाउनुहोस्</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Upload a photo of your crop for AI-powered disease detection
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Upload/Camera */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Upload Area */}
              {!selectedImage && !isCameraOpen && (
                <div className="glass-card p-8">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Choose Input Method
                  </h3>
                  
                  <div className="space-y-4">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl hover:border-primary-500 transition-all group"
                    >
                      <Upload size={48} className="mx-auto mb-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Upload Photo
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Click to browse from your device
                      </p>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCameraCapture}
                      className="w-full p-6 bg-gradient-primary text-white rounded-2xl hover:shadow-lg transition-all"
                    >
                      <Camera size={48} className="mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Use Camera</h4>
                      <p className="text-sm opacity-90">
                        Take a photo directly
                      </p>
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Camera View */}
              {isCameraOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-6"
                >
                  <div className="relative bg-black rounded-xl overflow-hidden mb-4">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[70%] h-[70%] border-3 border-dashed border-primary-400 rounded-2xl" />
                    </div>
                  </div>
                  <canvas ref={canvasRef} className="hidden" />
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCameraCapture}
                      className="flex-1 px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium"
                    >
                      📸 Capture
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const video = videoRef.current;
                        if (video) {
                          const stream = video.srcObject;
                          const tracks = stream.getTracks();
                          tracks.forEach(track => track.stop());
                        }
                        setIsCameraOpen(false);
                      }}
                      className="px-6 py-3 bg-gray-500 text-white rounded-lg font-medium"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Preview */}
              {selectedImage && !isCameraOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Preview
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setSelectedImage(null);
                        setResult(null);
                      }}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full h-auto rounded-xl mb-4"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="w-full px-6 py-4 bg-gradient-primary text-white rounded-xl font-semibold disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader className="animate-spin" size={20} />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <span>🔍 Analyze Disease</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            {/* Right Column - Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="glass-card p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle size={32} className="text-green-500" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Detection Complete
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Results are ready
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Disease Info */}
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                        <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">
                          Detected Disease
                        </h4>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {result.disease}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-nepali">
                          {result.diseaseNepali}
                        </p>
                      </div>

                      {/* Confidence */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Confidence Level
                          </span>
                          <span className="text-sm font-bold text-primary-600">
                            {result.confidence}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.confidence}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                          />
                        </div>
                      </div>

                      {/* Severity */}
                      <div className="flex items-center gap-2">
                        <AlertCircle size={20} className="text-yellow-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Severity: <span className="font-semibold">{result.severity}</span>
                        </span>
                      </div>

                      {/* Treatment */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Recommended Treatment:
                        </h4>
                        <div className="space-y-2">
                          {result.treatment.map((step, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + index * 0.1 }}
                              className="flex gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                            >
                              <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </span>
                              <div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                  {step}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-nepali mt-1">
                                  {result.treatmentNepali[index]}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all"
                      >
                        Save Report
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="glass-card p-8 text-center"
                  >
                    <div className="text-6xl mb-6">🔬</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      AI Analysis Ready
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Upload or capture a photo to detect crop diseases instantly
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: '⚡',
                title: 'Instant Results',
                desc: 'Get disease detection in seconds',
              },
              {
                icon: '🎯',
                title: '95% Accuracy',
                desc: 'AI-powered precise diagnosis',
              },
              {
                icon: '📴',
                title: 'Works Offline',
                desc: 'No internet required',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Detection;
