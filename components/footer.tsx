export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Tendai. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Big Data Analyst | Future Data Engineer</p>
        </div>
      </div>
    </footer>
  )
}
