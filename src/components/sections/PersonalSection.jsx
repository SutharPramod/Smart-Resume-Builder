import React from 'react';
import InputField from '../InputField';

const PersonalSection = ({ data, updateField }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">👤 Personal</h3>
      <div className="space-y-3">
        <InputField
          placeholder="Full Name"
          value={data.personal?.name || ""}
          onChange={(e) => updateField(["personal", "name"], e.target.value)}
        />
        <InputField
          placeholder="Email"
          type="email"
          value={data.personal?.email || ""}
          onChange={(e) => updateField(["personal", "email"], e.target.value)}
        />
        <InputField
          placeholder="Phone"
          type="tel"
          value={data.personal?.phone || ""}
          onChange={(e) => updateField(["personal", "phone"], e.target.value)}
        />
        <InputField
          placeholder="Address"
          value={data.personal?.address || ""}
          onChange={(e) => updateField(["personal", "address"], e.target.value)}
        />
      </div>
    </div>
  );
};

export default PersonalSection;
