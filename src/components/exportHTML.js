/**
 * HTML Export Utilities for clean resume generation
 */

/**
 * Cleans React DOM markup for standalone HTML
 */
export const cleanNodeForHTML = (node) => {
  if (!node) return ''

  let html = node.outerHTML || ''
  
  // Convert className to class (filter empty classes)
  html = html.replace(/className="([^"]*)"/g, (match, classNames) => {
    const trimmedClasses = classNames.split(' ').filter(cls => cls.trim() !== '').map(cls => cls.trim()).join(' ')
    return trimmedClasses ? `class="${trimmedClasses}"` : ''
  })
  
  // Remove React attributes
  html = html.replace(/on[A-Z][a-zA-Z]*="[^"]*"/g, '')
  html = html.replace(/data-[^ =]*="[^"]*"/g, '')
  html = html.replace(/data-reactroot/g, '')
  html = html.replace(/key="[^"]*"/g, '')
  
  return html
}

/**
 * Generates complete standalone HTML document
 */
export const generateStandaloneHTML = (contentHTML) => {
  const cssContent = `@import "tailwindcss";

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    ${cssContent}
    .resume-preview { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      font-size: 10px;
      line-height: 1.4;
    }
    [class*="w-3"], [class*="w-4"] { width: 0.75rem !important; }
    [class*="h-3"], [class*="h-4"] { height: 0.75rem !important; }
    @media print {
      body { margin: 0; }
      .resume-preview { box-shadow: none; }
    }
  </style>
</head>
<body class="bg-white print:bg-white">
  ${contentHTML}
</body>
</html>`
}
