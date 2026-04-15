import React from 'react';
import InputField from '../InputField';

const SocialSection = ({ data, updateField }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">🔗 Social</h3>
      <div className="space-y-3">
        <InputField
          placeholder="GitHub Username"
          value={data.social?.github || ""}
          onChange={(e) => updateField(["social", "github"], e.target.value)}
        />
        <InputField
          placeholder="LinkedIn Username"
          value={data.social?.linkedin || ""}
          onChange={(e) => updateField(["social", "linkedin"], e.target.value)}
        />
        <InputField
          placeholder="Twitter/X Username"
          value={data.social?.twitter || ""}
          onChange={(e) => updateField(["social", "twitter"], e.target.value)}
        />
        <InputField
          placeholder="Portfolio URL"
          value={data.social?.website || ""}
          onChange={(e) => updateField(["social", "website"], e.target.value)}
        />
      </div>
    </div>
  );
};

export default SocialSection;
