export default function Footer() {
  return (
    <footer className="bg-paper border-t border-rule py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="md:grid md:grid-cols-[5rem_1fr] md:gap-x-8">
          <div />
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <p className="font-mono text-xs text-verdigris">Tendai Dzuda</p>
            <p className="font-mono text-xs text-rule">&copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
