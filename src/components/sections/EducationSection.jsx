import React from 'react';
import InputField from '../InputField';

const EducationSection = ({ data, updateField, addItem, removeItem }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">🎓 Education</h3>
      <div className="space-y-2">
        {(data.education || []).map((edu, index) => (
          <div key={index} className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 mb-3">
            <InputField
              placeholder="Degree"
              value={edu.degree || ""}
              onChange={(e) => updateField(["education", index, "degree"], e.target.value)}
            />
            <div className="grid grid-cols-2 gap-2">
              <InputField
                placeholder="School"
                value={edu.school || ""}
                onChange={(e) => updateField(["education", index, "school"], e.target.value)}
              />
              <InputField
                placeholder="Institute"
                value={edu.institute || ""}
                onChange={(e) => updateField(["education", index, "institute"], e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <InputField
                placeholder="Start"
                value={edu.startDate || ""}
                onChange={(e) => updateField(["education", index, "startDate"], e.target.value)}
              />
              <InputField
                placeholder="End"
                value={edu.endDate || ""}
                onChange={(e) => updateField(["education", index, "endDate"], e.target.value)}
              />
              <InputField
                placeholder="Grad Year"
                value={edu.graduationYear || ""}
                onChange={(e) => updateField(["education", index, "graduationYear"], e.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => addItem("education")}
                className="flex-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-500"
              >
                + Add
              </button>
              {(data.education || []).length > 1 && (
                <button
                  onClick={() => removeItem("education", index)}
                  className="flex-1 bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-rose-500"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        {(data.education || []).length === 0 && (
          <button
            onClick={() => addItem("education")}
            className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-emerald-500 text-sm"
          >
            + Add Education Entry
          </button>
        )}
      </div>
    </div>
  );
};

export default EducationSection;
