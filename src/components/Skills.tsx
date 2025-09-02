const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6 text-center">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    {subtitle && <p className="text-slate-300 mt-1">{subtitle}</p>}
  </div>
)

const Badge = ({ label }: { label: string }) => (
  <span className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
    {label}
  </span>
)

export default function Skills() {
  const programmingSkills = ['C', 'Java', 'Python']
  const libraries = ['React.js']
  const frameworks = ['Node.js', 'Express.js']
  const databases = ['MySQL', 'MongoDB']

  return (
    <section id="skills" className="section">
      <div className="container-max text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Skills</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Technologies I work with</p>

        {/* Grid layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="card p-8 flex flex-col items-center bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
            <SectionTitle title="Programming" />
            <div className="flex flex-wrap justify-center gap-3">
              {programmingSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-8 flex flex-col items-center bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
            <SectionTitle title="Libraries" />
            <div className="flex flex-wrap justify-center gap-3">
              {libraries.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-8 flex flex-col items-center bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
            <SectionTitle title="Frameworks" />
            <div className="flex flex-wrap justify-center gap-3">
              {frameworks.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-8 flex flex-col items-center bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
            <SectionTitle title="Databases" />
            <div className="flex flex-wrap justify-center gap-2">
              {databases.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
