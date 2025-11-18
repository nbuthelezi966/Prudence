import { Plane, Radio, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753040050114-ae924195a578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGlnaHQlMjBjb250cm9sJTIwcmFkYXIlMjBkYXJrfGVufDF8fHx8MTc2MzM3MjAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Flight control radar background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#00FF66 1px, transparent 1px), linear-gradient(90deg, #00FF66 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Icons Row */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="p-4 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 animate-pulse">
            <Plane className="w-8 h-8 text-[#00FF66]" />
          </div>
          <div className="p-4 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 animate-pulse" style={{ animationDelay: '0.3s' }}>
            <Radio className="w-8 h-8 text-[#00FF66]" />
          </div>
          <div className="p-4 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 animate-pulse" style={{ animationDelay: '0.6s' }}>
            <Globe className="w-8 h-8 text-[#00FF66]" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-[#00FF66] to-white bg-clip-text text-transparent">
            Flight Manifest Manager
          </span>
        </h1>
        
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#00FF66] to-transparent mb-6"></div>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Real-Time Airline Operations Dashboard
        </p>
        <p className="text-lg text-[#00FF66] mb-12">
          UX/UI Case Study
        </p>

        {/* Designer Info */}
        <div className="mt-16 pt-8 border-t border-[#00FF66]/30">
          <p className="text-gray-400">Designed by</p>
          <p className="text-2xl mt-2">Prudence Buthelezi</p>
          <p className="text-[#00FF66]">UX/UI Designer</p>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#00FF66]/20 to-transparent blur-3xl"></div>
    </section>
  );
}
