import { Plane, MapPin, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

export function ProjectSummary() {
  return (
    <section className="py-20 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">⭐</span> Project Summary
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Icons and Text */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/30 shrink-0">
                <Plane className="w-6 h-6 text-[#00FF66]" />
              </div>
              <div>
                <h3 className="mb-2">Mission-Critical Operations</h3>
                <p className="text-gray-400">
                  Airline Operations Control (AOC) managers need to monitor 100+ flights in real-time across global routes, weather conditions, and crew availability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/30 shrink-0">
                <MapPin className="w-6 h-6 text-[#00FF66]" />
              </div>
              <div>
                <h3 className="mb-2">Global Scale Challenge</h3>
                <p className="text-gray-400">
                  Coordinating resources across multiple time zones with real-time updates on flight status, weather disruptions, and crew logistics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#FF3333]/10 border border-[#FF3333]/30 shrink-0">
                <AlertTriangle className="w-6 h-6 text-[#FF3333]" />
              </div>
              <div>
                <h3 className="mb-2">Rapid Decision Making</h3>
                <p className="text-gray-400">
                  Every minute counts. Delays cascade quickly, and operators need instant access to critical information to make informed decisions under pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-[#00FF66]/30 shadow-lg shadow-[#00FF66]/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761813409462-9329c23c7541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNvY2twaXQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzMzI2MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dashboard preview"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">Dashboard Preview</p>
              <p className="text-xs text-[#00FF66] mt-1">Real-time flight monitoring interface</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
