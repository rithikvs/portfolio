const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-4 text-center">
    <h3 className="text-xl font-semibold">{title}</h3>
    {subtitle && <p className="text-slate-400">{subtitle}</p>}
  </div>
)

const Badge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 text-sm rounded-full bg-hero-gradient text-white shadow hover:scale-105 transition-transform">
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
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="mt-2 text-slate-400">Technologies I work with</p>

        {/* Grid layout */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card p-6 flex flex-col items-center">
            <SectionTitle title="Programming" />
            <div className="flex flex-wrap justify-center gap-2">
              {programmingSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6 flex flex-col items-center">
            <SectionTitle title="Libraries" />
            <div className="flex flex-wrap justify-center gap-2">
              {libraries.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6 flex flex-col items-center">
            <SectionTitle title="Frameworks" />
            <div className="flex flex-wrap justify-center gap-2">
              {frameworks.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          <div className="card p-6 flex flex-col items-center">
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
