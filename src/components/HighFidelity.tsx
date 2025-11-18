import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { LayoutDashboard, Map, Bell, Workflow } from "lucide-react";

export function HighFidelity() {
  const screens = [
    {
      title: "Dashboard Overview",
      description: "Real-time flight status at a glance with key metrics and alerts",
      icon: LayoutDashboard,
      color: "#00FF66"
    },
    {
      title: "Interactive Map View",
      description: "Geographic visualization with weather overlays and flight paths",
      icon: Map,
      color: "#00D4FF"
    },
    {
      title: "Alert Management",
      description: "Priority-based notification system with quick action controls",
      icon: Bell,
      color: "#FF3333"
    },
    {
      title: "Scenario Planning",
      description: "What-if simulation tools for testing operational decisions",
      icon: Workflow,
      color: "#9D4EDD"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">🖼️</span> High-Fidelity Screens
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Polished, production-ready interfaces that balance aesthetic sophistication with operational clarity.
          </p>
        </div>

        {/* Main mockup showcase */}
        <div className="mb-16">
          <div className="relative">
            {/* Laptop frame */}
            <div className="relative mx-auto max-w-5xl">
              {/* Screen bezel */}
              <div className="bg-gray-900 rounded-t-2xl p-3 border-t-2 border-x-2 border-gray-700">
                {/* Camera notch */}
                <div className="flex justify-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                </div>
                
                {/* Screen content */}
                <div className="bg-black rounded-lg overflow-hidden border border-[#00FF66]/30 shadow-2xl shadow-[#00FF66]/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2NrdXAlMjBkZXNrdG9wfGVufDF8fHx8MTc2MzM3MjA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="High-fidelity dashboard mockup"
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay annotations */}
                  <div className="absolute top-8 left-8 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-[#00FF66]/50">
                    <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></div>
                    <span className="text-sm text-[#00FF66]">Live Updates</span>
                  </div>
                </div>
              </div>
              
              {/* Keyboard base */}
              <div className="bg-gray-800 rounded-b-2xl h-8 border-x-2 border-b-2 border-gray-700"></div>
            </div>

            {/* Floating annotations */}
            <div className="absolute top-20 -right-4 hidden lg:block">
              <div className="p-3 bg-[#00FF66]/10 border border-[#00FF66]/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-[#00FF66]">Real-time data</p>
              </div>
              <div className="w-0.5 h-16 bg-[#00FF66]/50 mx-auto"></div>
            </div>

            <div className="absolute bottom-32 -left-4 hidden lg:block">
              <div className="w-0.5 h-16 bg-[#00D4FF]/50 mx-auto mb-2"></div>
              <div className="p-3 bg-[#00D4FF]/10 border border-[#00D4FF]/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-[#00D4FF]">Interactive controls</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screen features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {screens.map((screen, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#00FF66]/50 transition-all hover:shadow-xl hover:shadow-[#00FF66]/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="p-3 rounded-lg shrink-0" 
                  style={{ 
                    backgroundColor: `${screen.color}20`, 
                    border: `2px solid ${screen.color}40` 
                  }}
                >
                  <screen.icon className="w-6 h-6" style={{ color: screen.color }} />
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: screen.color }}>
                    {screen.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {screen.description}
                  </p>
                </div>
              </div>

              {/* Screen preview */}
              <div className="mt-4 h-48 rounded-lg bg-gradient-to-br from-gray-950 to-black border border-gray-800 overflow-hidden relative">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                <div className="relative z-10 p-4 h-full flex flex-col gap-2">
                  <div className="h-8 bg-gray-800/50 rounded"></div>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="bg-gray-800/30 rounded"></div>
                    <div className="bg-gray-800/20 rounded"></div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2">
                  <screen.icon className="w-8 h-8 opacity-20" style={{ color: screen.color }} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Design highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-[#00FF66]/30 text-center">
            <div className="text-4xl mb-2 text-[#00FF66]">100+</div>
            <p className="text-gray-400">Flights monitored simultaneously</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-[#00D4FF]/30 text-center">
            <div className="text-4xl mb-2 text-[#00D4FF]">&lt;2s</div>
            <p className="text-gray-400">Average interaction response time</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-[#9D4EDD]/30 text-center">
            <div className="text-4xl mb-2 text-[#9D4EDD]">90%</div>
            <p className="text-gray-400">Reduction in decision-making time</p>
          </Card>
        </div>
      </div>
    </section>
  );
}