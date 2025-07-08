import SpotlightCard from "@/app/projects/SpotlightCard"

export default function   ProjectCard({ title, description, image, link }) {
  return (

    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

 

    <a href={link} target="_blank" className="block border rounded-lg p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm mt-1 text-gray-500">{description}</p>
    </a>
</SpotlightCard>
  )
}