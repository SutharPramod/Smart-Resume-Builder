import React from 'react';
import InputField from '../InputField';

const SkillsSection = ({ data, updateField }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">⚡ Skills</h3>
      <div className="space-y-3">
        <InputField
          multiline
          rows={3}
          placeholder="Technical Skills (comma separated)"
          value={data.technicalSkills || ""}
          onChange={(e) => updateField(["technicalSkills"], e.target.value)}
        />
        <InputField
          multiline
          rows={2}
          placeholder="Soft Skills (comma separated)"
          value={data.softSkills || ""}
          onChange={(e) => updateField(["softSkills"], e.target.value)}
        />
        <InputField
          placeholder="Languages (comma separated)"
          value={data.languages || ""}
          onChange={(e) => updateField(["languages"], e.target.value)}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
