'use client';
import SplitText from "./SplitText";
import Particles from "./Particles";
export default function   Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
   <section className="w-full min-h-screen bg-gray-900 relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 py-10">
  {/* Particle Background */}
  <div className="absolute inset-0 z-0">
    <Particles
      particleColors={['#ffffff', '#ffffff']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

  {/* Text Block */}
  <div className="relative z-10 max-w-xl text-center md:text-left w-full md:w-1/2 space-y-4">
    <SplitText
      text="Hi, I’m Anil — Full Stack Developer"
      className="text-3xl md:text-4xl font-bold text-white"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
    <p className="text-gray-300 text-base md:text-lg">
      I'm a full-stack developer passionate about clean code and beautiful UI.
    </p>
  </div>

  {/* Image Block */}
  <div className="relative z-10 w-full md:w-1/2 flex justify-center">
    <img
      src="/1.jpg"
      alt="photo"
      className="rounded-2xl w-full max-w-[300px] md:max-w-[400px] object-cover"
    />
  </div>
</section>

  );
}
