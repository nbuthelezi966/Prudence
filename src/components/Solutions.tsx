import { LayoutDashboard, Map, MousePointer, Bell, Workflow } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Solutions() {
  const solutions = [
    {
      icon: LayoutDashboard,
      title: "Unified Global Dashboard",
      description: "A single, comprehensive view of all flights with real-time status updates, eliminating the need to jump between multiple systems.",
      features: ["Live flight tracking", "Status indicators", "Quick filters"],
      color: "#00FF66"
    },
    {
      icon: Map,
      title: "Predictive Disruption Map",
      description: "Interactive map overlaying weather patterns, air traffic, and disruption predictions to anticipate issues before they occur.",
      features: ["Weather overlays", "Route visualization", "Risk indicators"],
      color: "#00D4FF"
    },
    {
      icon: MousePointer,
      title: "Drag-and-Drop Resource Allocation",
      description: "Intuitive interface for reassigning crew, gates, and aircraft with visual feedback and conflict detection.",
      features: ["Visual assignments", "Auto-conflict detection", "Instant updates"],
      color: "#FFB800"
    },
    {
      icon: Bell,
      title: "Smart Alert Console",
      description: "Priority-based notification system that surfaces critical issues while filtering noise, ensuring operators focus on what matters most.",
      features: ["Priority levels", "Alert filtering", "Quick actions"],
      color: "#FF3333"
    },
    {
      icon: Workflow,
      title: '"What-If" Scenario Planner',
      description: "Simulation tool allowing operators to test different decisions and see projected outcomes before committing to changes.",
      features: ["Impact simulation", "Timeline preview", "Comparison views"],
      color: "#9D4EDD"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#00FF66]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#00D4FF]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">🧩</span> Possible Solutions
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Transforming complex operational challenges into intuitive, actionable interfaces that empower rapid decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#00FF66]/50 transition-all hover:shadow-xl hover:shadow-[#00FF66]/10 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div 
                  className="inline-flex p-4 rounded-lg transition-transform group-hover:scale-110" 
                  style={{ 
                    backgroundColor: `${solution.color}20`, 
                    border: `2px solid ${solution.color}40` 
                  }}
                >
                  <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl mb-3" style={{ color: solution.color }}>
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="border-gray-700 text-gray-400 hover:border-[#00FF66]/50 hover:text-[#00FF66] transition-colors"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* Mockup placeholder */}
              <div className="mt-6 h-32 rounded-lg bg-gradient-to-br from-gray-950 to-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-[#00FF66]/30 transition-colors">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                <solution.icon className="w-12 h-12 opacity-20" style={{ color: solution.color }} />
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-[#00FF66]/10 to-transparent border border-[#00FF66]/30">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#00FF66]/20 border border-[#00FF66]/50 shrink-0">
              <Workflow className="w-6 h-6 text-[#00FF66]" />
            </div>
            <div>
              <h3 className="text-2xl mb-2 text-[#00FF66]">Integrated Ecosystem</h3>
              <p className="text-gray-400">
                These solutions work together as a cohesive system, sharing data and insights to create a seamless operational experience. Each component enhances the others, reducing cognitive load while increasing situational awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
