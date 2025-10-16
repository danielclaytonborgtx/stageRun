import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="flex flex-col items-center gap-8 max-w-2xl w-full z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex flex-row items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoS-pJ6yA3yywmL9jQ5ixPuWli4Fij7cos.png"
              alt="StageRun Logo"
              className="w-20 h-20 object-contain drop-shadow-2xl"
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              stageRun
            </h1>
          </div>
        </div>

        {/* Main Card */}
        <Card className="w-full backdrop-blur-sm bg-white/80 border-white/20 shadow-2xl shadow-blue-200/50 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="p-8 sm:p-12 space-y-6">
            {/* Status Badge */}
            <div className="flex justify-center animate-in fade-in zoom-in duration-700 delay-300">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg"
              >
                <svg
                  className="w-4 h-4 mr-2 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Em Manutenção
              </Badge>
            </div>

            {/* Maintenance Icon */}
            <div className="flex justify-center animate-in zoom-in duration-700 delay-400">
              <svg
                className="w-16 h-16 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            {/* Message */}
            <div className="space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Estamos em Manutenção
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                Nosso site está passando por melhorias para oferecer uma
                experiência ainda melhor. Voltaremos em breve com novidades
                incríveis!
              </p>
            </div>

            {/* Progress indicator */}
            <div className="pt-4 animate-in fade-in duration-700 delay-700">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="text-center space-y-2 animate-in fade-in duration-700 delay-1000">
          <p className="text-sm text-gray-500">
            Agradecemos sua compreensão e paciência
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Estimativa: Em breve</span>
          </div>
        </div>
      </div>
    </div>
  );
}
