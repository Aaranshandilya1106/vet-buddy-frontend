import { Link } from "react-router-dom";
import { MessageCircle, Stethoscope, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Home = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Chatbot Assistant",
      description: "Get instant answers to your pet health questions 24/7",
      link: "/chatbot",
      color: "text-primary"
    },
    {
      icon: Stethoscope,
      title: "Connect with Vets",
      description: "Find qualified veterinarians in your area",
      link: "/connect-vet",
      color: "text-secondary"
    },
    {
      icon: Lightbulb,
      title: "Pet Care Tips",
      description: "Expert advice on nutrition, grooming, and wellness",
      link: "/tips",
      color: "text-accent"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-primary fill-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Virtual Vet Assistant 🐾
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your trusted companion for pet care. Get instant advice, connect with veterinarians, 
            and access expert tips to keep your furry friends healthy and happy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chatbot">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                Start Chat
              </Button>
            </Link>
            <Link to="/connect-vet">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                Find a Vet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How We Help Your Pets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Pet Owners Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "24/7", label: "Support Available" },
              { number: "8+", label: "Expert Veterinarians" },
              { number: "12", label: "Pet Care Tips" },
              { number: "100%", label: "Free to Use" }
            ].map((stat, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Care for Your Pet Better?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of pet owners who trust Virtual Vet Assistant for their pet care needs.
          </p>
          <Link to="/chatbot">
            <Button size="lg" className="text-lg px-10">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
