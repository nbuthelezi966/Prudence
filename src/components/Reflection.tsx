import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Lightbulb, TrendingUp, Users, Target } from "lucide-react";

export function Reflection() {
  const learnings = [
    {
      icon: Target,
      title: "Clarity Under Pressure",
      insight: "Mission-critical interfaces must eliminate ambiguity. Every second counts, and users need instant understanding without cognitive overhead.",
      color: "#00FF66"
    },
    {
      icon: Users,
      title: "User-Centered Iteration",
      insight: "Direct feedback from AOC managers was invaluable. Their real-world experiences shaped decisions that theory alone couldn't predict.",
      color: "#00D4FF"
    },
    {
      icon: TrendingUp,
      title: "Progressive Disclosure",
      insight: "Balancing comprehensive data with clean interfaces requires careful information hierarchy and smart progressive disclosure patterns.",
      color: "#FFB800"
    },
    {
      icon: Lightbulb,
      title: "Design Systems Matter",
      insight: "Establishing a cohesive design system early accelerated development and ensured consistency across complex workflows.",
      color: "#9D4EDD"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">🪞</span> Reflection & Learnings
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Insights gained from designing a high-stakes operational system that demands precision, speed, and clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Designer image/illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#00FF66]/30 shadow-2xl shadow-[#00FF66]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM0ODI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Designer portrait"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Designer info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl mb-2">Prudence Buthelezi</h3>
                <p className="text-[#00FF66] mb-4">UX/UI Designer</p>
                <p className="text-sm text-gray-400">
                  Specialized in operational systems, dashboards, and high-performance interfaces
                </p>
              </div>
            </div>
          </div>

          {/* Key learnings */}
          <div className="space-y-6">
            {learnings.map((learning, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#00FF66]/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg shrink-0" 
                    style={{ 
                      backgroundColor: `${learning.color}20`, 
                      border: `2px solid ${learning.color}40` 
                    }}
                  >
                    <learning.icon className="w-5 h-5" style={{ color: learning.color }} />
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ color: learning.color }}>
                      {learning.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {learning.insight}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Designer quote */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-[#00FF66]/10 to-black border-[#00FF66]/50 relative overflow-hidden">
          {/* Decorative quote marks */}
          <div className="absolute top-4 left-4 text-8xl text-[#00FF66] opacity-10">"</div>
          <div className="absolute bottom-4 right-4 text-8xl text-[#00FF66] opacity-10">"</div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl mb-6 leading-relaxed">
              Designing under mission-critical conditions taught me that <span className="text-[#00FF66]">clarity</span>, <span className="text-[#00FF66]">speed</span>, and <span className="text-[#00FF66]">precision</span> define great UX. When every second matters, design isn't just about aesthetics — it's about enabling confident, informed decisions that impact real people and operations.
            </p>
            <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-4"></div>
            <p className="text-lg text-gray-400">— Prudence Buthelezi</p>
          </div>
        </Card>

        {/* Impact metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 text-center">
            <div className="text-5xl mb-3 text-[#00FF66]">-65%</div>
            <p className="text-gray-400">Response time to disruptions</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 text-center">
            <div className="text-5xl mb-3 text-[#00D4FF]">+80%</div>
            <p className="text-gray-400">User satisfaction scores</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 text-center">
            <div className="text-5xl mb-3 text-[#9D4EDD]">12</div>
            <p className="text-gray-400">User testing sessions conducted</p>
          </Card>
        </div>

        {/* Final thoughts */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            This project reinforced my belief that <span className="text-white">good design is invisible</span> — only its impact is loud. The success of FMM lies not in flashy features, but in the seamless way it empowers operators to do their jobs better, faster, and with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
