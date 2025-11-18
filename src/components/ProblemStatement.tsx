import { Clock, Cloud, Users, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

export function ProblemStatement() {
  const painPoints = [
    { icon: Clock, label: "Flight Delays", color: "#FF3333" },
    { icon: Cloud, label: "Weather Impact", color: "#00FF66" },
    { icon: Users, label: "Crew Issues", color: "#FFB800" },
    { icon: Wrench, label: "Mechanical", color: "#FF3333" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FF3333]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4">
            <span className="text-[#FF3333]">⚠️</span> Problem Statement
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#FF3333]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Visual storytelling image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753153481105-7a979eabe5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcm9vbSUyMG9wZXJhdG9yc3xlbnwxfHx8fDE3NjMzNzIwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Control room operators"
              className="w-full h-auto rounded-lg shadow-2xl border border-[#FF3333]/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg flex items-end p-6">
              <p className="text-sm text-gray-300">Operators managing multiple screens with scattered data</p>
            </div>
          </div>

          {/* Problem description */}
          <div>
            <Card className="p-8 bg-gradient-to-br from-[#FF3333]/10 to-black border-[#FF3333]/50 shadow-lg shadow-[#FF3333]/20">
              <div className="mb-6">
                <div className="inline-block p-2 bg-[#FF3333]/20 rounded-lg mb-4">
                  <p className="text-xs uppercase tracking-wider text-[#FF3333]">The Challenge</p>
                </div>
              </div>
              <p className="text-xl mb-6 leading-relaxed">
                "AOC managers struggle to monitor <span className="text-[#00FF66]">100+ global flights</span> and respond quickly to disruptions due to <span className="text-[#FF3333]">scattered data</span> and <span className="text-[#FF3333]">outdated tools</span>."
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF3333] mt-1">▸</span>
                  <span>Information siloed across multiple systems and spreadsheets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF3333] mt-1">▸</span>
                  <span>No real-time visibility into cascading delays and their impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF3333] mt-1">▸</span>
                  <span>Manual coordination leads to slower response times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF3333] mt-1">▸</span>
                  <span>Lack of predictive insights for proactive decision-making</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Pain Points Diagram */}
        <div className="mt-16">
          <h3 className="text-center text-2xl mb-8">Key Pain Points</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="p-6 bg-black/50 border-gray-800 hover:border-[#00FF66]/50 transition-all hover:shadow-lg hover:shadow-[#00FF66]/20">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full" style={{ backgroundColor: `${point.color}20`, border: `1px solid ${point.color}40` }}>
                    <point.icon className="w-8 h-8" style={{ color: point.color }} />
                  </div>
                  <p style={{ color: point.color }}>{point.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
