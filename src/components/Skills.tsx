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

  return (
    <section id="skills" className="section py-16">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-white mb-2 text-center">Skills</h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto text-center">
          A showcase of the technologies I use to build modern, scalable, and efficient applications.
        </p>

        {/* Grid layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Programming */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card p-8 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <Code className="w-10 h-10 text-indigo-400 mb-3" />
            <SectionTitle title="Programming" subtitle="Core coding skills I rely on" />
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {programmingSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </motion.div>

          {/* Libraries */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card p-8 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <Library className="w-10 h-10 text-purple-400 mb-3" />
            <SectionTitle title="Libraries" subtitle="Frontend tools I use" />
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {libraries.map((l) => <Badge key={l} label={l} />)}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card p-8 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <Layers className="w-10 h-10 text-green-400 mb-3" />
            <SectionTitle title="Frameworks" subtitle="Building scalable backends" />
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {frameworks.map((l) => <Badge key={l} label={l} />)}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card p-8 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <Database className="w-10 h-10 text-yellow-400 mb-3" />
            <SectionTitle title="Databases" subtitle="Storage and data management" />
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {databases.map((l) => <Badge key={l} label={l} />)}
            </div>
          </motion.div>
        </div>

        {/* Extra content section */}
        <div className="mt-16 max-w-3xl mx-auto text-slate-300 leading-relaxed text-center">
          <p>
            I enjoy building <b>end-to-end applications</b>, from designing interactive user interfaces
            to creating powerful backend APIs and managing databases. My experience spans across
            different tech stacks, allowing me to adapt quickly to new challenges.
          </p>
          <p className="mt-4">
            Currently, I’m exploring <b>cloud deployment, DevOps practices, and advanced frontend
            optimizations</b> to further enhance my development workflow.
          </p>
        </div>
      </div>
    </section>
  )
}

