const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <h3 className="text-2xl font-semibold">{title}</h3>
    {subtitle && <p className="text-slate-400">{subtitle}</p>}
  </div>
)

const Badge = ({ label }: { label: string }) => (
  <span className="badge">{label}</span>
)

export default function Skills() {
  const programmingSkills = ['C', 'Java', 'Python']
  const libraries = ['React.js']
  const frameworks = ['Node.js', 'Express.js']
  const databases = ['MySQL', 'MongoDB']

  return (
    <section id="skills" className="section">
      <div className="container-max">
        <h2 className="text-3xl font-semibold">Skills</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <SectionTitle title="Programming Skills" />
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6">
            <SectionTitle title="Libraries" />
            <div className="flex flex-wrap gap-2">
              {libraries.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6">
            <SectionTitle title="Frameworks" />
            <div className="flex flex-wrap gap-2">
              {frameworks.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6">
            <SectionTitle title="Databases" />
            <div className="flex flex-wrap gap-2">
              {databases.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
