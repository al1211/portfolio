
import image from "../../public/1.jpg"
export default function Home() {
  return (
    <section className="text-center py-20    w-full flex items-center">
      <div className="w-1/2">

      <h1 className="text-4xl font-bold">Hi, I’m Anil 👋</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        I'm a full-stack developer passionate about clean code and beautiful UI.
      </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
       <img src="/1.jpg" alt="photo" className="h-[50%] w-[70%] rounded-2xl "/>
      </div>
    </section>
  )
}