import React from 'react';
import InputField from '../InputField';

const ExperienceSection = ({ data, updateField, addItem, removeItem }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">💼 Experience</h3>
      <div className="space-y-2">
        {(data.experience || []).map((exp, index) => (
          <div key={index} className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 mb-3">
            <InputField
              placeholder="Position"
              value={exp.position || ""}
              onChange={(e) => updateField(["experience", index, "position"], e.target.value)}
            />
            <InputField
              placeholder="Company"
              value={exp.company || ""}
              onChange={(e) => updateField(["experience", index, "company"], e.target.value)}
            />
            <InputField
              multiline
              rows={3}
              placeholder="Description"
              value={exp.description || ""}
              onChange={(e) => updateField(["experience", index, "description"], e.target.value)}
            />
            <div className="grid grid-cols-2 gap-2">
              <InputField
                placeholder="Start Date"
                value={exp.startDate || ""}
                onChange={(e) => updateField(["experience", index, "startDate"], e.target.value)}
              />
              <InputField
                placeholder="End Date"
                value={exp.endDate || ""}
                onChange={(e) => updateField(["experience", index, "endDate"], e.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => addItem("experience")}
                className="flex-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-500"
              >
                + Add
              </button>
              {(data.experience || []).length > 1 && (
                <button
                  onClick={() => removeItem("experience", index)}
                  className="flex-1 bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-rose-500"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        {(data.experience || []).length === 0 && (
          <button
            onClick={() => addItem("experience")}
            className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-emerald-500 text-sm"
          >
            + Add Experience
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
