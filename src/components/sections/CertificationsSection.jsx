import React from 'react';
import InputField from '../InputField';

const CertificationsSection = ({ data, updateField, addItem, removeItem }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">🏆 Certifications</h3>
      <div className="space-y-2">
        {(data.certifications || []).map((cert, index) => (
          <div key={index} className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 mb-3">
            <InputField
              placeholder="Certification Name"
              value={cert.name || ""}
              onChange={(e) => updateField(["certifications", index, "name"], e.target.value)}
            />
            <InputField
              placeholder="Issuer"
              value={cert.issuer || ""}
              onChange={(e) => updateField(["certifications", index, "issuer"], e.target.value)}
            />
            <InputField
              placeholder="Date"
              value={cert.date || ""}
              onChange={(e) => updateField(["certifications", index, "date"], e.target.value)}
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => addItem("certifications")}
                className="flex-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-500"
              >
                + Add
              </button>
              {(data.certifications || []).length > 1 && (
                <button
                  onClick={() => removeItem("certifications", index)}
                  className="flex-1 bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-rose-500"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        {(data.certifications || []).length === 0 && (
          <button
            onClick={() => addItem("certifications")}
            className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-emerald-500 text-sm"
          >
            + Add Certification
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificationsSection;
