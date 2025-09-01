const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold">{title}</h3>
    {subtitle && <p className="text-slate-400">{subtitle}</p>}
  </div>
)

const Badge = ({ label }: { label: string }) => (
  <span className="badge px-3 py-1 text-sm">{label}</span>
)

export default function Skills() {
  const programmingSkills = ['C', 'Java', 'Python']
  const libraries = ['React.js']
  const frameworks = ['Node.js', 'Express.js']
  const databases = ['MySQL', 'MongoDB']

  return (
    <section id="skills" className="section">
      <div className="container-max">
        <h2 className="text-3xl font-semibold text-center">Skills</h2>

        {/* Grid layout */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card p-6 flex flex-col items-center text-center">
            <SectionTitle title="Programming" />
            <div className="flex flex-wrap justify-center gap-2">
              {programmingSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6 flex flex-col items-center text-center">
            <SectionTitle title="Libraries" />
            <div className="flex flex-wrap justify-center gap-2">
              {libraries.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6 flex flex-col items-center text-center">
            <SectionTitle title="Frameworks" />
            <div className="flex flex-wrap justify-center gap-2">
              {frameworks.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6 flex flex-col items-center text-center">
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
