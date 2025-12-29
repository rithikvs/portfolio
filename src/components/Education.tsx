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
    period: '2020-2021', 
    details: 'Percentage: 80.1%', 
    marksheet: 'rithik 10th marksheet.pdf'
  },
]

export default function Education() {
  return (
    <section id="education" className="section bg-transparent">
      <div className="container-max">
        <h2 className="section-title"><span className="section-title-accent">Education</span></h2>

        <ol className="relative border-s-4 border-cyan-500/40 mt-8 space-y-10">
          {education.map((e) => (
            <li key={e.school + e.degree} className="ms-8 group">
              <span className="absolute -start-3.5 mt-1 h-7 w-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/60 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-cyan-400/80 transition-all duration-300 border-4 border-slate-900"></span>
              <div className="card p-6 bg-slate-800/80">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{e.school}</h3>
                  <span className="text-sm font-bold text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full">{e.period}</span>
                </div>
                <p className="text-white font-semibold mt-2 text-lg">{e.degree}</p>
                {e.details && <p className="text-green-300 text-base mt-2 font-semibold">{e.details}</p>}
                {e.marksheet && (
                  <a
                    href={encodeURI(e.marksheet)}  
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block btn-success"
                  >
                    📄 View Marksheet
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
