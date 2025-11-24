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
    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/40 hover:shadow-lg hover:shadow-cyan-400/60 transition-all duration-300"
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
    <section id="skills" className="section bg-transparent">
      <div className="container-max">
        <h2 className="section-title">Skills</h2>
        <p className="subtext">
          A showcase of the technologies and soft skills I use to build modern, scalable, and efficient applications.
        </p>

        {/* Grid layout - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Programming */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-3">
              <Code className="w-7 h-7 text-cyan-400 mr-2" />
              <h3 className="text-lg font-bold text-white">Programming</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Libraries */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-3">
              <Library className="w-7 h-7 text-blue-400 mr-2" />
              <h3 className="text-lg font-bold text-white">Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {libraries.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Frameworks */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-3">
              <Layers className="w-7 h-7 text-cyan-300 mr-2" />
              <h3 className="text-lg font-bold text-white">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Databases */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-3">
              <Database className="w-7 h-7 text-blue-300 mr-2" />
              <h3 className="text-lg font-bold text-white">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {databases.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>

          {/* Soft Skills - Full Width */}
          <div className="card flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 md:col-span-2">
            <div className="flex items-center justify-center mb-3">
              <span className="w-7 h-7 flex items-center justify-center mr-2 text-cyan-300 text-xl">🤝</span>
              <h3 className="text-lg font-bold text-white">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {softSkills.map((l) => <Badge key={l} label={l} />)}
            </div>
          </div>
        </div>

        {/* LeetCode Profile Link - Centered */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://leetcode.com/u/Rithik_vs/"
            target="_blank"
            rel="noreferrer"
            className="btn-success inline-flex items-center gap-2 px-6 py-3"
          >
            💻 View My LeetCode Profile
          </a>
        </div>

        {/* Extra content section - Below LeetCode */}
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <div className="text-slate-200 leading-relaxed">
            <p className="text-base">
              I enjoy building <b className="text-cyan-300">end-to-end applications</b>, from designing interactive user interfaces
              to creating powerful backend APIs and managing databases.
            </p>
            <p className="mt-3 text-base">
              Currently exploring <b className="text-cyan-300">cloud deployment, DevOps practices, and advanced frontend
              optimizations</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

