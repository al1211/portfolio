import projects from "../../data/project"
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  )
}