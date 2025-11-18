import { Play, RotateCw, Settings2, Eye, MousePointer } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Prototype() {
  return (
    <section className="py-20 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">🎞️</span> Interactive Prototype
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A functional prototype demonstrating key interactions, user flows, and system behaviors in realistic scenarios.
          </p>
        </div>

        {/* Main prototype showcase */}
        <div className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border-[#00FF66]/30 overflow-hidden">
            {/* Laptop frame */}
            <div className="relative">
              <div className="bg-gray-800 rounded-t-xl p-2 border-t-2 border-x-2 border-gray-700">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-2 px-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF3333]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFB800]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00FF66]"></div>
                  </div>
                  <div className="flex-1 mx-8 bg-gray-900 rounded px-3 py-1 text-xs text-gray-500">
                    prototype.figma.com/fmm-dashboard
                  </div>
                </div>

                {/* Screen */}
                <div className="bg-black rounded overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2NrdXAlMjBkZXNrdG9wfGVufDF8fHx8MTc2MzM3MjA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Interactive prototype"
                    className="w-full h-auto"
                  />
                  
                  {/* Interaction overlays */}
                  <div className="absolute top-1/4 left-1/4 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-[#00FF66]/30 border-2 border-[#00FF66] flex items-center justify-center">
                      <MousePointer className="w-4 h-4 text-[#00FF66]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-b-xl h-6 border-x-2 border-b-2 border-gray-700"></div>
            </div>

            {/* Prototype controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button className="bg-[#00FF66] text-black hover:bg-[#00FF66]/90">
                <Play className="w-4 h-4 mr-2" />
                Run Prototype
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                <RotateCw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                <Settings2 className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </Card>
        </div>

        {/* Key interactions */}
        <div className="mb-12">
          <h3 className="text-2xl text-center mb-8 text-[#00FF66]">Key Interactions Demonstrated</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Flight Monitoring", desc: "Real-time status updates and visual indicators" },
              { icon: MousePointer, title: "Drag & Drop", desc: "Resource allocation through direct manipulation" },
              { icon: Play, title: "Alert Handling", desc: "Priority-based notification interactions" },
              { icon: RotateCw, title: "Scenario Testing", desc: "What-if simulations and previews" },
              { icon: Settings2, title: "Filtering", desc: "Dynamic data views and search" },
              { icon: MousePointer, title: "Drill-Down", desc: "Progressive disclosure of flight details" }
            ].map((interaction, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#00FF66]/50 transition-all"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/30">
                    <interaction.icon className="w-6 h-6 text-[#00FF66]" />
                  </div>
                  <h4 className="text-[#00FF66]">{interaction.title}</h4>
                  <p className="text-sm text-gray-400">{interaction.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* User flow screenshots */}
        <div>
          <h3 className="text-2xl text-center mb-8 text-[#00FF66]">Sample User Flow</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", label: "Login" },
              { step: "2", label: "Dashboard" },
              { step: "3", label: "Select Flight" },
              { step: "4", label: "Take Action" }
            ].map((flow, index) => (
              <Card key={index} className="p-4 bg-gradient-to-br from-gray-900 to-black border-gray-800">
                <div className="relative mb-3">
                  <div className="h-32 rounded bg-gradient-to-br from-gray-950 to-black border border-gray-700 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(rgba(0,255,102,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,0.1) 1px, transparent 1px)',
                      backgroundSize: '15px 15px'
                    }}></div>
                    <div className="relative z-10 text-4xl text-gray-700">{flow.step}</div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#00FF66] text-black flex items-center justify-center">
                    {flow.step}
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400">{flow.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testing note */}
        <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-[#00FF66]/10 to-transparent border border-[#00FF66]/30">
          <p className="text-gray-400 text-center">
            <span className="text-[#00FF66]">✓</span> Prototype tested with 12 AOC managers across 3 airlines, achieving 92% task completion rate and positive feedback on interaction clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
