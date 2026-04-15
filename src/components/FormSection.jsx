import React from 'react'
import { motion } from 'framer-motion'

const FormSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={false}
      className="border border-gray-600 rounded-lg shadow-sm bg-gray-700/30"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-200 hover:bg-gray-700/50"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-4 border-t border-gray-600">{children}</div>
      </motion.div>
    </motion.div>
  )
}

export default FormSection
