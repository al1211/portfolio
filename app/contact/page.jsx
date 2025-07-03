// app/contact/page.js

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-4 py-2"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-4 py-2"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full border rounded px-4 py-2"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
