import React from 'react';
import InputField from '../InputField';

const ProjectsSection = ({ data, updateField, addItem, removeItem }) => {
  return (
    <div className="p-4 bg-gray-700/40 rounded-xl border border-gray-600">
      <h3 className="text-sm font-bold text-gray-200 mb-3">🚀 Projects</h3>
      <div className="space-y-2">
        {(data.projects || []).map((proj, index) => (
          <div key={index} className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 mb-3">
            <InputField
              placeholder="Project Name"
              value={proj.name || ""}
              onChange={(e) => updateField(["projects", index, "name"], e.target.value)}
            />
            <InputField
              multiline
              rows={3}
              placeholder="Description"
              value={proj.description || ""}
              onChange={(e) => updateField(["projects", index, "description"], e.target.value)}
            />
            <InputField
              multiline
              rows={2}
              placeholder="Tech Stack (comma separated or JSON array)"
              value={proj.techStack || ""}
              onChange={(e) => updateField(["projects", index, "techStack"], e.target.value)}
            />
            <div className="grid grid-cols-2 gap-2">
              <InputField
                placeholder="Start Date"
                value={proj.startDate || ""}
                onChange={(e) => updateField(["projects", index, "startDate"], e.target.value)}
              />
              <InputField
                placeholder="End Date"
                value={proj.endDate || ""}
                onChange={(e) => updateField(["projects", index, "endDate"], e.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => addItem("projects")}
                className="flex-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-500"
              >
                + Add
              </button>
              {(data.projects || []).length > 1 && (
                <button
                  onClick={() => removeItem("projects", index)}
                  className="flex-1 bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-rose-500"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        {(data.projects || []).length === 0 && (
          <button
            onClick={() => addItem("projects")}
            className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-emerald-500 text-sm"
          >
            + Add Project
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
