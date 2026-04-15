import React from 'react';
import InputField from '../InputField';

const SummarySection = ({ data, updateField }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">📝 Summary</h3>
      <InputField
        multiline
        rows={4}
        placeholder="Professional summary"
        value={data.summary || ""}
        onChange={(e) => updateField(["summary"], e.target.value)}
      />
    </div>
  );
};

export default SummarySection;
