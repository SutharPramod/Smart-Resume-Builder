import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Sections from './sections';

const SectionComponent = ({ sectionKey, ...props }) => {
  const Component = Sections[`${sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}Section`];
  return Component ? <Component {...props} /> : null;
};

const Sidebar = ({ sidebarOpen, data, updateField, addItem, removeItem, expandedSections, toggleSection, toggleAllSections, sectionItems }) => {
  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "42%" }}
          exit={{ opacity: 0, width: 0 }}
          className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden shrink-0 flex flex-col"
        >
          <div className="p-3 border-b border-gray-700 bg-gray-800 sticky top-0 z-10">
            <div className="grid grid-cols-2 gap-1.5">
              {sectionItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleSection(item.key)}
                  className={`flex items-center justify-between px-2 py-1.5 rounded text-xs font-medium ${expandedSections[item.key] ? "bg-gray-600 text-gray-100" : "bg-gray-700/50 text-gray-400 hover:bg-gray-700"}`}
                >
                  <span className="flex items-center gap-1">
                    <span>{item.icon}</span> {item.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex gap-1.5 mt-2">
              <button
                onClick={() => toggleAllSections(true)}
                className="flex-1 px-2 py-1 bg-gray-600 rounded text-xs text-gray-300 hover:bg-gray-500"
              >
                ⬆ Expand All
              </button>
              <button
                onClick={() => toggleAllSections(false)}
                className="flex-1 px-2 py-1 bg-gray-600 rounded text-xs text-gray-300 hover:bg-gray-500"
              >
                ⬇ Collapse All
              </button>
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            <div className="p-3 space-y-5">
              {sectionItems.map((item) => (
                expandedSections[item.key] && (
                  <SectionComponent 
                    key={item.key}
                    data={data}
                    updateField={updateField}
                    addItem={addItem}
                    removeItem={removeItem}
                    sectionKey={item.key}
                  />
                )
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
