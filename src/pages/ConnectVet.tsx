import { useState } from "react";
import { Star, MapPin, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { vets } from "@/data/vets";

const ConnectVet = () => {
  const [selectedVet, setSelectedVet] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Connect with Expert Veterinarians 🩺
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find qualified veterinary professionals specializing in various areas of pet care. 
            All our vets are licensed and experienced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Vet Photo */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={vet.photo}
                  alt={vet.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{vet.rating}</span>
                </div>
              </div>

              {/* Vet Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{vet.name}</h3>
                <p className="text-primary font-medium mb-4">{vet.specialization}</p>
                {vet.clinic && (
                  <p className="text-sm text-muted-foreground font-medium mb-3">{vet.clinic}</p>
                )}

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{vet.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span>{vet.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{vet.availability}</span>
                  </div>
                </div>

                <Button
                  onClick={() => setSelectedVet(vet.id)}
                  className="w-full"
                  variant={selectedVet === vet.id ? "secondary" : "default"}
                >
                  {selectedVet === vet.id ? "Selected ✓" : "View Details"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selectedVet && (
          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
            <p className="text-foreground font-medium">
              🎉 Great choice! In a real application, you would now be able to book an appointment 
              or connect with {vets.find(v => v.id === selectedVet)?.name} directly.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ConnectVet;
