import React from 'react';
import { motion } from 'framer-motion';
import ExportButtons from './ExportButtons';

const Header = ({ sidebarOpen, setSidebarOpen, loadSample, reset, previewRef, data }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg p-4 mb-6 border border-gray-700/50"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600"
          >
            {sidebarOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <img src="/public/favicon.png" alt="favicon" className='h-15'/>
          <h1 className="text-xl md:text-2xl font-bold bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Smart Resume Builder
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadSample}
            className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-500"
          >
            🎯 Sample
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={reset}
            className="px-3 py-1.5 bg-gray-600 text-white text-xs font-bold rounded-lg hover:bg-gray-500"
          >
            🔄 Reset
          </motion.button>
          <ExportButtons previewRef={previewRef} data={data} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
