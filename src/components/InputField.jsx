import React from 'react'

const InputField = ({ label, type = 'text', value, onChange, placeholder, multiline, rows = 4 }) => {
  const baseInputClass = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  
  if (multiline) {
    return (
      <div className="mb-4">
        {label && <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>}
        <textarea
          className={baseInputClass}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    )
  }

  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>}
      <input
        type={type}
        className={baseInputClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputField
