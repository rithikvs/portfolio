type Edu = { 
  school: string
  degree: string
  period: string
  details?: string
  marksheet?: string 
}

const education: Edu[] = [
  { 
    school: 'KONGU ENGINEERING COLLEGE', 
    degree: 'B.Tech in INFORMATION TECHNOLOGY', 
    period: '2023-2027', 
    details: 'CGPA: 7.81 (till 4th semester)' 
  },
  { 
    school: 'BHARANI VIDHYALAYA SR SEC SCHOOL (CBSE)', 
    degree: '12th', 
    period: '2022-2023', 
    details: 'Percentage: 70.4%', 
    marksheet: 'rithik 12th matksheet.pdf'  // space in file name
  },
  { 
    school: 'BHARANI VIDHYALAYA SR SEC SCHOOL (CBSE)', 
    degree: '10th', 
    period: '2021-2022', 
    details: 'Percentage: 80.1%', 
    marksheet: 'rithik 10th marksheet.pdf'
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-max">
        <h2 className="text-3xl font-semibold">Education</h2>

        <ol className="relative border-s border-white/10 mt-6 space-y-8">
          {education.map((e) => (
            <li key={e.school + e.degree} className="ms-6">
              <span className="absolute -start-2.5 mt-1 h-5 w-5 rounded-full bg-hero-gradient"></span>
              <div className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{e.school}</h3>
                  <span className="text-sm text-slate-400">{e.period}</span>
                </div>
                <p className="text-slate-300">{e.degree}</p>
                {e.details && <p className="text-slate-400 text-sm mt-1">{e.details}</p>}
                {e.marksheet && (
                  <a
                    href={encodeURI(e.marksheet)}   // ✅ Encodes spaces automatically
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block btn-outline"
                  >
                    View Marksheet
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
