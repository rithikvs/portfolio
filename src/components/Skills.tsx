import { Code, Database, Layers, Library } from "lucide-react"
import { motion } from "framer-motion"

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-4 text-center">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    {subtitle && <p className="text-slate-300 mt-1 text-sm">{subtitle}</p>}
  </div>
)

const Badge = ({ label }: { label: string }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
  >
    {label}
  </motion.span>
)

export default function Skills() {
  const programmingSkills = ["C", "Java", "Python"]
  const libraries = ["React.js"]
  const frameworks = ["Node.js", "Express.js"]
  const databases = ["MySQL", "MongoDB"]
  const softSkills = [
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Leadership"
  ]

  return (
    <section id="skills" className="section py-16">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-white mb-2 text-center">Skills</h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto text-center">
          A showcase of the technologies and soft skills I use to build modern, scalable, and efficient applications.
        </p>

        {/* Grid layout */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {/* Programming */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-indigo-400 mr-3" />
              <SectionTitle title="Programming" subtitle="Core coding skills I rely on" />
            </div>
            <div className="flex flex-wrap gap-3">
              {programmingSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Libraries */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-4">
              <Library className="w-8 h-8 text-purple-400 mr-3" />
              <SectionTitle title="Libraries" subtitle="Frontend tools I use" />
            </div>
            <div className="flex flex-wrap gap-3">
              {libraries.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Frameworks */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-4">
              <Layers className="w-8 h-8 text-green-400 mr-3" />
              <SectionTitle title="Frameworks" subtitle="Building scalable backends" />
            </div>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Databases */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-yellow-400 mr-3" />
              <SectionTitle title="Databases" subtitle="Storage and data management" />
            </div>
            <div className="flex flex-wrap gap-3">
              {databases.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-4">
              <span className="w-8 h-8 flex items-center justify-center mr-3 text-pink-400 text-2xl">🤝</span>
              <SectionTitle title="Soft Skills" subtitle="Professional & personal strengths" />
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>
        </div>

        {/* Extra content section */}
        <div className="mt-16 max-w-2xl mx-auto text-slate-300 leading-relaxed text-center">
          <p>
            Passionate about building full-stack applications and always eager to learn new technologies. Adaptable, collaborative, and focused on delivering impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

