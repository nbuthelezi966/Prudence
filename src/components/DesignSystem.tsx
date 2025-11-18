import { Palette, Type, Component, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function DesignSystem() {
  const colors = [
    { name: "Electric Green", hex: "#00FF66", usage: "Primary actions, success states" },
    { name: "Emergency Red", hex: "#FF3333", usage: "Critical alerts, errors" },
    { name: "Warning Amber", hex: "#FFB800", usage: "Warnings, attention" },
    { name: "Radar Blue", hex: "#00D4FF", usage: "Information, links" },
    { name: "Deep Black", hex: "#000000", usage: "Background" },
    { name: "Charcoal", hex: "#1A1A1A", usage: "Cards, surfaces" }
  ];

  const typography = [
    { level: "Display", example: "Flight Manifest Manager", className: "text-5xl" },
    { level: "Heading 1", example: "Dashboard Overview", className: "text-4xl" },
    { level: "Heading 2", example: "Active Flights", className: "text-3xl" },
    { level: "Heading 3", example: "Flight Details", className: "text-2xl" },
    { level: "Body", example: "Status: On-time departure at 14:30 UTC", className: "text-base" },
    { level: "Caption", example: "Last updated: 2 minutes ago", className: "text-sm text-gray-400" }
  ];

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-[#00FF66]/5 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">🎨</span> Design System
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A cohesive visual language built for clarity, speed, and precision in high-stakes operational environments.
          </p>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-6 h-6 text-[#00FF66]" />
            <h3 className="text-3xl text-[#00FF66]">Color Palette</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
                <div 
                  className="w-full h-24 rounded-lg mb-4 shadow-lg" 
                  style={{ 
                    backgroundColor: color.hex,
                    boxShadow: `0 10px 40px ${color.hex}40`
                  }}
                ></div>
                <h4 className="mb-2">{color.name}</h4>
                <p className="text-sm text-gray-500 mb-2 font-mono">{color.hex}</p>
                <p className="text-sm text-gray-400">{color.usage}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-6 h-6 text-[#00FF66]" />
            <h3 className="text-3xl text-[#00FF66]">Typography</h3>
          </div>
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border-gray-800">
            <div className="space-y-6">
              {typography.map((typo, index) => (
                <div key={index} className="pb-6 border-b border-gray-800 last:border-0">
                  <p className="text-sm text-gray-500 mb-2">{typo.level}</p>
                  <p className={typo.className}>{typo.example}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Components */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Component className="w-6 h-6 text-[#00FF66]" />
            <h3 className="text-3xl text-[#00FF66]">Component Library</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Buttons */}
            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <h4 className="mb-4 text-gray-300">Buttons</h4>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#00FF66] text-black hover:bg-[#00FF66]/90">Primary</Button>
                <Button variant="outline" className="border-[#00FF66] text-[#00FF66] hover:bg-[#00FF66]/10">Secondary</Button>
                <Button variant="destructive" className="bg-[#FF3333] hover:bg-[#FF3333]/90">Critical</Button>
                <Button variant="ghost" className="text-gray-400 hover:text-white">Ghost</Button>
              </div>
            </Card>

            {/* Badges */}
            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <h4 className="mb-4 text-gray-300">Status Badges</h4>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-[#00FF66]/20 text-[#00FF66] border-[#00FF66]/50">On-Time</Badge>
                <Badge className="bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/50">Delayed</Badge>
                <Badge className="bg-[#FF3333]/20 text-[#FF3333] border-[#FF3333]/50">Critical</Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-400">Scheduled</Badge>
              </div>
            </Card>

            {/* Data Tables */}
            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <h4 className="mb-4 text-gray-300">Data Table</h4>
              <div className="border border-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-900 border-b border-[#00FF66]/30">
                    <tr>
                      <th className="p-3 text-left text-sm text-[#00FF66]">Flight</th>
                      <th className="p-3 text-left text-sm text-[#00FF66]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="p-3 text-sm">AA 123</td>
                      <td className="p-3 text-sm">
                        <Badge className="bg-[#00FF66]/20 text-[#00FF66] border-[#00FF66]/50 text-xs">On-Time</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-sm">UA 456</td>
                      <td className="p-3 text-sm">
                        <Badge className="bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/50 text-xs">Delayed</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Alert Cards */}
            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <h4 className="mb-4 text-gray-300">Alert Styles</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/50 text-sm">
                  <span className="text-[#00FF66]">✓ Success:</span> Flight cleared for departure
                </div>
                <div className="p-3 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/50 text-sm">
                  <span className="text-[#FFB800]">⚠ Warning:</span> Weather delay possible
                </div>
                <div className="p-3 rounded-lg bg-[#FF3333]/10 border border-[#FF3333]/50 text-sm">
                  <span className="text-[#FF3333]">✕ Critical:</span> Immediate action required
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Visual Elements */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-[#00FF66]" />
            <h3 className="text-3xl text-[#00FF66]">Visual Elements</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <h4 className="mb-4 text-gray-300">Glowing Borders</h4>
              <div className="h-24 rounded-lg border-2 border-[#00FF66] shadow-lg shadow-[#00FF66]/50"></div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <h4 className="mb-4 text-gray-300">Data Grid</h4>
              <div className="h-24 rounded-lg" style={{
                backgroundImage: 'linear-gradient(#00FF66 1px, transparent 1px), linear-gradient(90deg, #00FF66 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3
              }}></div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <h4 className="mb-4 text-gray-300">Gradient Glow</h4>
              <div className="h-24 rounded-lg bg-gradient-to-r from-[#00FF66]/20 via-[#00D4FF]/20 to-[#9D4EDD]/20"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
