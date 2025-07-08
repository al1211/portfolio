
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-900 text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

