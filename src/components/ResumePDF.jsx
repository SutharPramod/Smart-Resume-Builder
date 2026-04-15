import React from 'react'
import { Document, Page, Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer'

/**
 * PDF Resume generator component
 */
const ResumePDF = ({ data }) => {
  if (!data) return null;

  // Date formatting utility
  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const str = dateStr.trim().toLowerCase()
    if (str === 'present') return 'Present'
    if (/^\d{4}$/.test(str)) return str

    const months = {
      jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun',
      jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Dec'
    }
    
    const match = str.match(/^(\w+)\s+(\d{4})/)
    if (match) {
      const [, mon, year] = match
      return `${months[mon.substring(0,3)] || mon.charAt(0).toUpperCase() + mon.slice(1,3)} ${year}`
    }
    
    const parts = str.split(/\s+/)
    const year = parts[parts.length-1].match(/\d{4}/)?.[0]
    const month = parts[0].substring(0,3).toUpperCase()
    return year ? `${month} ${year}` : dateStr
  }

  // PDF Styles
  const styles = StyleSheet.create({
    page: { 
      padding: 36, 
      backgroundColor: '#FFFFFF', 
      fontFamily: 'Helvetica', 
      color: '#1a1a1a' 
    },
    
    // Header Styles
    header: { marginBottom: 15, textAlign: 'center' },
    name: { fontSize: 20, fontWeight: 'bold', marginBottom: 2, textTransform: 'uppercase' },
    nameDivider: { height: 3, backgroundColor: '#374151', marginBottom: 8 },
    contactRow: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 12, fontSize: 9, marginBottom: 4 },
    socialRow: { flexDirection: 'row', justifyContent: 'center', gap: 15, fontSize: 9, marginTop: 2, alignItems: 'center' },
    iconBox: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    icon: { width: 15, height: 15 },
    separator: { width: 1, height: 12, backgroundColor: '#9ca3af', marginHorizontal: 6 },
    clickableLink: { color: '#2563eb', textDecoration: 'none' },

    // Section Styles
    section: { marginTop: 14 },
    sectionTitle: { fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', borderBottomWidth: 1, borderBottomColor: '#9ca3af', paddingBottom: 2, marginBottom: 8 },

    // Entry Styles
    entry: { marginBottom: 10, paddingHorizontal: 8 },
    entryHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    entryTitle: { fontSize: 10, fontWeight: 'bold' },
    entrySubtitle: { fontSize: 9, fontWeight: 'bold' },
    date: { fontSize: 9, color: '#1f2937', fontWeight: 600 },
    description: { fontSize: 9, marginTop: 3, lineHeight: 1.5, textAlign: 'justify' },

    // Skills Styles
    skillRow: { flexDirection: 'row', marginBottom: 5, paddingHorizontal: 8 },
    subHeading: { fontSize: 8, fontWeight: 'bold', color: '#28282B', textTransform: 'uppercase', width: 75 },
    skillText: { fontSize: 9, flex: 1, lineHeight: 1.4 }
  })

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal?.name || 'NAME'}</Text>
          <View style={styles.nameDivider} />
          <View style={styles.contactRow}>
            {data.personal?.email && (
              <>
                <Text>{data.personal.email}</Text>
                {(data.personal?.phone || data.personal?.address) && <View style={styles.separator} />}
              </>
            )}
            {data.personal?.phone && (
              <>
                <Text>{data.personal.phone}</Text>
                {data.personal?.address && <View style={styles.separator} />}
              </>
            )}
            {data.personal?.address && <Text>{data.personal.address}</Text>}
          </View>
          <View style={styles.socialRow}>
            {data.social?.github && (
              <>
                <Link src={`https://github.com/${data.social.github}`} style={styles.clickableLink}>
                  <View style={styles.iconBox}><Image src="/github.png" style={styles.icon} /><Text>GitHub</Text></View>
                </Link>
                {(data.social?.linkedin || data.social?.twitter || data.social?.website) && <View style={styles.separator} />}
              </>
            )}
            {data.social?.linkedin && (
              <>
                <Link src={`https://linkedin.com/in/${data.social.linkedin}`} style={styles.clickableLink}>
                  <View style={styles.iconBox}><Image src="/linkedin.png" style={styles.icon} /><Text>LinkedIn</Text></View>
                </Link>
                {(data.social?.twitter || data.social?.website) && <View style={styles.separator} />}
              </>
            )}
            {data.social?.twitter && (
              <>
                <Link src={`https://x.com/${data.social.twitter.replace('@', '')}`} style={styles.clickableLink}>
                  <View style={styles.iconBox}><Image src="/twitter.png" style={styles.icon} /><Text>Twitter/X</Text></View>
                </Link>
                {data.social?.website && <View style={styles.separator} />}
              </>
            )}
            {data.social?.website && (
              <Link src={data.social.website.startsWith('http') ? data.social.website : `https://${data.social.website}`} style={styles.clickableLink}>
                <View style={styles.iconBox}><Image src="/globe.png" style={styles.icon} /><Text>Portfolio</Text></View>
              </Link>
            )}
          </View>
        </View>

        {/* Summary */}
        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <View style={{ paddingHorizontal: 8 }}><Text style={styles.description}>{data.summary}</Text></View>
          </View>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((exp, idx) => (
              <View key={idx} style={styles.entry} wrap={false}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{exp.designation || exp.position}</Text>
                  <Text style={styles.date}>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</Text>
                </View>
                <Text style={styles.entrySubtitle}>{exp.company}</Text>
                {exp.description && <Text style={styles.description}>{exp.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((proj, idx) => (
              <View key={idx} style={styles.entry} wrap={false}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{proj.name}</Text>
                  {(proj.startDate || proj.endDate) && (
                    <Text style={styles.date}>{formatDate(proj.startDate)} - {formatDate(proj.endDate)}</Text>
                  )}
                </View>
                <Text style={styles.entrySubtitle}>Tech Stack: {Array.isArray(proj.techStack) ? proj.techStack.join(', ') : (proj.techStack || '').split(',').map(s => s.trim()).filter(Boolean).join(', ')}</Text>
                {proj.description && <Text style={styles.description}>{proj.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, idx) => (
              <View key={idx} style={styles.entry} wrap={false}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{edu.degree}</Text>
                  <Text style={styles.date}>{formatDate(edu.startDate)} - {formatDate(edu.endDate || edu.graduationYear)}</Text>
                </View>
                <Text style={styles.entrySubtitle}>{edu.institute || edu.school}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Certifications */}
        {data.certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certifications.map((cert, idx) => (
              <View key={idx} style={styles.entry} wrap={false}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{cert.name}</Text>
                  <Text style={styles.date}>{formatDate(cert.date)}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {(data.technicalSkills || data.softSkills) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillRow}>
              <Text style={styles.subHeading}>Technical:</Text>
              <Text style={styles.skillText}>{data.technicalSkills}</Text>
            </View>
            <View style={styles.skillRow}>
              <Text style={styles.subHeading}>Soft Skills:</Text>
              <Text style={styles.skillText}>{data.softSkills}</Text>
            </View>
          </View>
        )}

      </Page>
    </Document>
  )
}

export default ResumePDF
