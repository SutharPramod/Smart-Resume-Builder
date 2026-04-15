import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

/**
 * Live resume preview component with inline editing
 */
const Preview = ({ data, onUpdate }) => {
  const [editingPath, setEditingPath] = useState(null)

  // Format skills array/string for display
  const formatSkills = (skills) => {
    if (typeof skills === 'string') {
      return skills.split(',').map(s => s.trim()).join(', ')
    }
    if (Array.isArray(skills)) {
      return skills.join(', ')
    }
    return skills || ''
  }

  // Click-to-edit text component
  const EditableText = ({ value, path, isLarge = false, isMultiline = false, className = '' }) => {
    const key = Array.isArray(path) ? path.join(',') : path
    const isEditing = editingPath === key
    
    if (isEditing) {
      return isMultiline ? (
        <textarea
          autoFocus
          value={value || ''}
          onChange={(e) => onUpdate(path, e.target.value)}
          onBlur={() => setEditingPath(null)}
          className={`w-full p-1 border border-blue-500 rounded outline-none text-xs resize-none ${className}`}
          rows={3}
        />
      ) : (
        <input
          autoFocus
          type="text"
          value={value || ''}
          onChange={(e) => onUpdate(path, e.target.value)}
          onBlur={() => setEditingPath(null)}
          className={`w-full p-1 border border-blue-500 rounded outline-none text-xs ${className}`}
        />
      )
    }
    
    return (
      <span
        onClick={() => setEditingPath(key)}
        className={`cursor-pointer hover:bg-yellow-100 px-1 rounded transition ${isLarge ? 'text-lg font-bold' : 'text-xs'} ${className}`}
      >
        {value || 'Click to edit'}
      </span>
    )
  }

  return (
    <div className="w-full h-full bg-white shadow-lg border border-gray-200 font-sans text-xs resume-preview overflow-hidden">
      <div className="p-9 h-full overflow-y-auto">
        
        {/* Header Section */}
        <div className="mb-4 pb-2 text-center border-b-2 border-gray-400">
          <h1 className="text-lg font-bold mb-2">
            <EditableText value={data.personal?.name} path={['personal', 'name']} isLarge={true} />
          </h1>
          
          <div className="text-xs flex flex-col items-center gap-1 mb-2">
            <div className="flex gap-4 print:justify-center flex-wrap">
              {data.personal?.email && (
                <div className="flex items-center gap-1">
                  <FaEnvelope className="w-3 h-3" />
                  <EditableText value={data.personal.email} path={['personal', 'email']} />
                </div>
              )}
              {data.personal?.phone && (
                <div className="flex items-center gap-1">
                  <FaPhone className="w-3 h-3" />
                  <EditableText value={data.personal.phone} path={['personal', 'phone']} />
                </div>
              )}
              {data.personal?.address && (
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  <EditableText value={data.personal.address} path={['personal', 'address']} />
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          {data.social && (data.social.github || data.social.linkedin || data.social.twitter || data.social.website) && (
            <div className="flex justify-center gap-3 pt-1 text-xs">
              {data.social.github && (
                <a href={`https://github.com/${data.social.github}`} target="_blank" className="flex items-center gap-1 hover:text-blue-600 text-sm" rel="noopener noreferrer">
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {data.social.linkedin && (
                <a href={`https://linkedin.com/in/${data.social.linkedin}`} target="_blank" className="flex items-center gap-1 hover:text-blue-600 text-sm" rel="noopener noreferrer">
                  <FaLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
              {data.social.twitter && (
                <a href={`https://twitter.com/${data.social.twitter}`} target="_blank" className="flex items-center gap-1 hover:text-blue-600 text-sm" rel="noopener noreferrer">
                  <FaTwitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              )}
              {data.social.website && (
                <a href={data.social.website.startsWith('http') ? data.social.website : `https://${data.social.website}`} target="_blank" className="flex items-center gap-1 hover:text-blue-600 text-sm" rel="noopener noreferrer">
                  <FaGlobe className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Resume Sections */}
        <div className="space-y-4">
          {data.summary && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Summary</h2>
              <EditableText path={['summary']} isMultiline className="block text-sm leading-relaxed" value={data.summary} />
            </div>
          )}

          {data.experience && data.experience.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Experience</h2>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="mb-3 p-2">
                  <div className="flex justify-between mb-1">
                    <EditableText value={exp.position || ''} path={['experience', idx, 'position']} isLarge />
                    <span className="text-xs text-gray-600">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <EditableText value={exp.company || ''} path={['experience', idx, 'company']} className="font-semibold" />
                  {exp.description && <EditableText value={exp.description} path={['experience', idx, 'description']} isMultiline className="mt-1 text-sm" />}
                </div>
              ))}
            </div>
          )}

          {data.education && data.education.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Education</h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="mb-2 p-2">
                  <div className="flex justify-between">
                    <EditableText value={edu.degree} path={['education', idx, 'degree']} isLarge />
                    <span className="text-xs">{edu.endDate || edu.graduationYear}</span>
                  </div>
                  <EditableText value={edu.institute || edu.school} path={['education', idx, 'institute']} className="font-semibold" />
                </div>
              ))}
            </div>
          )}

          {data.projects && data.projects.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Projects</h2>
              {data.projects.map((proj, idx) => (
                <div key={idx} className="mb-3 p-2">
                  <EditableText value={proj.name} path={['projects', idx, 'name']} isLarge className="font-bold" />
                  <EditableText value={Array.isArray(proj.techStack) ? proj.techStack.join(', ') : (proj.techStack || '').split(',').map(s => s.trim()).join(', ') || ''} path={['projects', idx, 'techStack']} className="text-sm font-semibold mt-1 block" />
                  {proj.description && <EditableText value={proj.description} path={['projects', idx, 'description']} isMultiline className="mt-1 text-sm" />}
                </div>
              ))}
            </div>
          )}

          {data.certifications && data.certifications.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Certifications</h2>
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="flex gap-2 items-center mb-1 text-sm">
                  <EditableText value={cert.name} path={['certifications', idx, 'name']} />
                  <span className="text-xs">({cert.issuer || ''}, {cert.date || ''})</span>
                </div>
              ))}
            </div>
          )}

          {data.technicalSkills && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Technical Skills</h2>
              <EditableText value={formatSkills(data.technicalSkills)} path={['technicalSkills']} className="block text-sm" />
            </div>
          )}
          {data.softSkills && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Soft Skills</h2>
              <EditableText value={formatSkills(data.softSkills)} path={['softSkills']} className="block text-sm" />
            </div>
          )}
          {data.languages && (
            <div>
              <h2 className="text-xs font-bold uppercase mb-1 border-b border-gray-400 pb-1">Languages</h2>
              <EditableText value={formatSkills(data.languages)} path={['languages']} className="block text-sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
