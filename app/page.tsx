export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-4">
      <div className="flex flex-col items-center gap-6 max-w-md text-center">
        {/* Logo and Brand */}
        <div className="flex flex-row items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoS-pJ6yA3yywmL9jQ5ixPuWli4Fij7cos.png"
            alt="StageRun Logo"
            className="w-24 h-24 object-contain"
          />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            stageRun
          </h1>
        </div>

        {/* Maintenance Message */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">Estamos em Manutenção</h2>
          <p className="text-gray-600 leading-relaxed">
            Nosso site está passando por melhorias. Voltaremos em breve com novidades!
          </p>
        </div>
      </div>
    </div>
  )
}
