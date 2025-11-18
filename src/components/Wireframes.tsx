import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

export function Wireframes() {
  const wireframes = [
    { name: "Login", screen: "login" },
    { name: "Dashboard", screen: "dashboard" },
    { name: "Global List", screen: "list" },
    { name: "Map View", screen: "map" },
    { name: "Resource Panel", screen: "resources" },
    { name: "Drill-Down", screen: "detail" },
    { name: "Alerts", screen: "alerts" },
    { name: "Scenario Planner", screen: "planner" },
    { name: "Settings", screen: "settings" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">✏️</span> Wireframes
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Low to mid-fidelity wireframes mapping out the structure, layout, and interaction patterns before visual design.
          </p>
        </div>

        {/* Feature image */}
        <div className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border-[#00FF66]/30 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2hlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzMjY2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wireframe sketches"
              className="w-full h-auto rounded-lg"
            />
          </Card>
        </div>

        {/* Wireframe grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {wireframes.map((wireframe, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#00FF66]/50 transition-all hover:shadow-lg hover:shadow-[#00FF66]/20"
            >
              {/* Wireframe mockup */}
              <div className="mb-4 h-64 rounded-lg bg-gradient-to-br from-gray-950 to-black border border-gray-800 p-4 relative overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Wireframe representation */}
                <div className="relative z-10 h-full flex flex-col gap-3">
                  {/* Header bar */}
                  <div className="h-8 bg-gray-800 rounded"></div>
                  
                  {/* Content area */}
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="bg-gray-800/50 rounded"></div>
                    <div className="bg-gray-800/30 rounded"></div>
                  </div>
                  
                  {/* Bottom section */}
                  <div className="h-12 bg-gray-800/70 rounded"></div>
                </div>

                {/* Label overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="px-4 py-2 bg-[#00FF66]/20 border border-[#00FF66]/50 rounded-lg backdrop-blur-sm">
                    <p className="text-sm text-[#00FF66]">{wireframe.screen}</p>
                  </div>
                </div>
              </div>

              {/* Label */}
              <h3 className="text-center text-gray-300">{wireframe.name}</h3>
            </Card>
          ))}
        </div>

        {/* Process note */}
        <div className="mt-16 p-6 rounded-lg bg-gradient-to-r from-gray-900 to-black border border-gray-800">
          <p className="text-gray-400 text-center">
            <span className="text-[#00FF66]">✓</span> Wireframes validated through iterative feedback sessions with stakeholders and potential users, ensuring alignment before moving to high-fidelity design.
          </p>
        </div>
      </div>
    </section>
  );
}
