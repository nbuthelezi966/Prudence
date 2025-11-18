import { LogIn, LayoutDashboard, List, MapPin, Users, FileText, Bell, Workflow, Settings, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

export function AppFlow() {
  const flowNodes = [
    { icon: LogIn, label: "Login", color: "#00FF66" },
    { icon: LayoutDashboard, label: "Dashboard", color: "#00D4FF" },
    { icon: List, label: "Global Flight List", color: "#FFB800" },
    { icon: MapPin, label: "Timeline & Map", color: "#9D4EDD" },
    { icon: Users, label: "Resource Allocation", color: "#FF3333" },
    { icon: FileText, label: "Drill-Down Manifest", color: "#00FF66" },
    { icon: Bell, label: "Alerts Console", color: "#FF3333" },
    { icon: Workflow, label: "What-If Planner", color: "#00D4FF" },
    { icon: Settings, label: "Settings", color: "#FFB800" }
  ];

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#00FF66 1px, transparent 1px), linear-gradient(90deg, #00FF66 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">🧭</span> Application Flow
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A logical, intuitive navigation structure designed to minimize clicks and maximize efficiency for time-sensitive operations.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {flowNodes.map((node, index) => (
            <div key={index} className="relative">
              <Card 
                className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#00FF66]/50 transition-all hover:shadow-lg hover:shadow-[#00FF66]/20 group"
              >
                {/* Node number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-black border-2 flex items-center justify-center text-sm" style={{ borderColor: node.color, color: node.color }}>
                  {index + 1}
                </div>

                {/* Icon and label */}
                <div className="flex flex-col items-center gap-4">
                  <div 
                    className="p-4 rounded-lg transition-transform group-hover:scale-110" 
                    style={{ 
                      backgroundColor: `${node.color}20`, 
                      border: `2px solid ${node.color}40` 
                    }}
                  >
                    <node.icon className="w-8 h-8" style={{ color: node.color }} />
                  </div>
                  <p className="text-center" style={{ color: node.color }}>
                    {node.label}
                  </p>
                  
                  {/* Mini screen mockup */}
                  <div className="w-full h-24 rounded bg-gradient-to-br from-gray-950 to-black border border-gray-800 flex items-center justify-center">
                    <node.icon className="w-8 h-8 opacity-20" style={{ color: node.color }} />
                  </div>
                </div>

                {/* Arrow connector (for non-last items in row) */}
                {(index + 1) % 3 !== 0 && index !== flowNodes.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#00FF66] opacity-50" />
                  </div>
                )}
              </Card>

              {/* Vertical arrow for row transitions */}
              {index === 2 && (
                <div className="hidden md:flex absolute -bottom-9 left-1/2 transform -translate-x-1/2 flex-col items-center gap-1">
                  <div className="w-0.5 h-6 bg-[#00FF66] opacity-50"></div>
                  <div className="w-2 h-2 border-l-2 border-b-2 border-[#00FF66] opacity-50 rotate-[-45deg]"></div>
                </div>
              )}
              {index === 5 && (
                <div className="hidden md:flex absolute -bottom-9 left-1/2 transform -translate-x-1/2 flex-col items-center gap-1">
                  <div className="w-0.5 h-6 bg-[#00FF66] opacity-50"></div>
                  <div className="w-2 h-2 border-l-2 border-b-2 border-[#00FF66] opacity-50 rotate-[-45deg]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow description */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-[#00FF66]/30">
            <h3 className="text-xl mb-4 text-[#00FF66]">Primary Flow</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#00FF66] mt-1">→</span>
                <span>Login → Dashboard for at-a-glance overview</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FF66] mt-1">→</span>
                <span>Global List for detailed flight status</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FF66] mt-1">→</span>
                <span>Map view for geographic context</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FF66] mt-1">→</span>
                <span>Resource allocation for adjustments</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-[#FF3333]/30">
            <h3 className="text-xl mb-4 text-[#FF3333]">Critical Paths</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#FF3333] mt-1">⚡</span>
                <span>Alert Console accessible from anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3333] mt-1">⚡</span>
                <span>Quick drill-down from any flight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3333] mt-1">⚡</span>
                <span>What-If Planner for scenario testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3333] mt-1">⚡</span>
                <span>Settings for customization</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
