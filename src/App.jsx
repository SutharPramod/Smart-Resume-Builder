import React, { useState, useRef } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import PreviewPanel from "./components/PreviewPanel"

import { initialData, sampleData } from "./data/sampleData.js"

//  Main Smart Resume Builder Application
const App = () => {
  const [data, setData] = useState(initialData)
  const previewRef = useRef(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    social: false,
    summary: false,
    education: false,
    experience: false,
    projects: false,
    skills: false,
    certifications: false,
  })

  // Sidebar section toggles
  const toggleSection = (section) =>
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  const toggleAllSections = (open) =>
    setExpandedSections(
      Object.keys(expandedSections).reduce(
        (acc, k) => ({ ...acc, [k]: open }),
        {},
      ),
    )

  // Data mutation handlers
  const updateField = (path, value) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData))
      let current = newData
      for (let i = 0; i < path.length - 1; i++)
        current = current[path[i]] || {}
      current[path[path.length - 1]] = value
      return newData
    })
  }

  const addItem = (section) =>
    setData((prevData) => ({
      ...prevData,
      [section]: [...(prevData[section] || []), {}],
    }))
  const removeItem = (section, index) =>
    setData((prevData) => ({
      ...prevData,
      [section]: (prevData[section] || []).filter((_, i) => i !== index),
    }))

  const loadSample = () => setData(sampleData)
  const reset = () => setData(initialData)

  const sectionItems = [
    { key: "personal", label: "Personal", icon: "👤" },
    { key: "social", label: "Social", icon: "🔗" },
    { key: "summary", label: "Summary", icon: "📝" },
    { key: "education", label: "Education", icon: "🎓" },
    { key: "experience", label: "Experience", icon: "💼" },
    { key: "projects", label: "Projects", icon: "🚀" },
    { key: "skills", label: "Skills", icon: "⚡" },
    { key: "certifications", label: "Certifications", icon: "🏆" },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-[98vw] mx-auto">
        <Header 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          loadSample={loadSample}
          reset={reset}
          previewRef={previewRef}
          data={data}
        />
        <div className="flex gap-4 h-[calc(100vh-200px)]">
          <Sidebar 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen}
            data={data}
            updateField={updateField}
            addItem={addItem}
            removeItem={removeItem}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            toggleAllSections={toggleAllSections}
            sectionItems={sectionItems}
          />
          <PreviewPanel previewRef={previewRef} data={data} updateField={updateField} />
        </div>
      </div>
    </div>
  )
}

export default App
