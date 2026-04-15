import React from 'react'
import { FaFilePdf, FaDownload } from 'react-icons/fa'
import { pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import ResumePDF from './ResumePDF'
import { cleanNodeForHTML, generateStandaloneHTML } from './exportHTML.js'

/**
 * Export buttons component for PDF and HTML
 */
const ExportButtons = ({ previewRef, data }) => {
  const exportToPDF = async () => {
    try {
      const doc = <ResumePDF data={data} />
      const asPdf = pdf(doc)
      const blob = await asPdf.toBlob()
      saveAs(blob, 'resume.pdf')
    } catch (error) {
      console.error('PDF generation error:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  const exportToHTML = async () => {
    if (!previewRef.current) {
      alert('Preview not ready. Please wait.')
      return;
    }

    try {
      const previewContent = previewRef.current.querySelector('.resume-preview')
      if (!previewContent) {
        alert('Preview content not found.')
        return;
      }

      const cleanedHTML = cleanNodeForHTML(previewContent)
      
      const cssContent = `@import "tailwindcss";

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }`

      const fullHTML = generateStandaloneHTML(cleanedHTML, cssContent)
      
      const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' })
      saveAs(blob, 'resume.html')
    } catch (error) {
      console.error('HTML export error:', error)
      alert('Error generating HTML. Please try again.')
    }
  }

  return (
    <div className="flex gap-1">
      <button 
        onClick={exportToPDF} 
        className="p-2 bg-red-600 text-white rounded hover:bg-red-500 flex items-center gap-1" 
        title="Download PDF"
      >
        <FaFilePdf className="w-4 h-4" />
        <span className="text-xs font-medium">PDF</span>
      </button>
      <button 
        onClick={exportToHTML} 
        className="p-2 bg-green-600 text-white rounded hover:bg-green-500 flex items-center gap-1" 
        title="Download HTML"
      >
        <FaDownload className="w-4 h-4" />
        <span className="text-xs font-medium">HTML</span>
      </button>
    </div>
  )
}

export default ExportButtons
