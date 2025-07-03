export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-6 pb-4 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Anil. All rights reserved.</p>
      <p>
        Built with <a href="https://nextjs.org/" className="underline hover:text-black">Next.js</a> & Tailwind CSS
      </p>
    </footer>
  )
}
