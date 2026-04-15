import React from 'react';
import { motion } from 'framer-motion';
import Preview from './Preview';

const PreviewPanel = ({ previewRef, data, updateField }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden flex flex-col"
      style={{ minWidth: 0 }}
    >
      <div className="bg-gray-900/80 p-3 text-white border-b border-gray-700">
        <h2 className="text-sm font-bold">👁️ Live Preview</h2>
      </div>
      <div ref={previewRef} className="flex-1 overflow-y-auto">
        <Preview data={data} onUpdate={updateField} />
      </div>
    </motion.div>
  );
};

export default PreviewPanel;
