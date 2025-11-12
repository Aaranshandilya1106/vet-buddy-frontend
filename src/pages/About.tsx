import Layout from "@/components/Layout";
import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pet-First Approach",
      description: "Every feature is designed with your pet's wellbeing as the top priority."
    },
    {
      icon: Target,
      title: "Accessible Care",
      description: "Making quality veterinary advice available to all pet owners, anytime, anywhere."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connecting you with qualified veterinary professionals you can trust."
    },
    {
      icon: Zap,
      title: "Instant Support",
      description: "Get immediate guidance through our AI-powered chatbot assistant."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-primary fill-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Virtual Vet Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted digital companion for comprehensive pet care guidance and 
            veterinary connections.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
            We believe every pet deserves access to quality healthcare guidance. Virtual Vet Assistant 
            bridges the gap between pet owners and veterinary expertise, providing instant advice, 
            expert connections, and educational resources to help you make informed decisions about 
            your pet's health and happiness.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Chatbot</h3>
              <p className="text-muted-foreground">
                Get instant answers to common pet health questions using our intelligent chatbot 
                trained on veterinary knowledge.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🩺</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Vet Directory</h3>
              <p className="text-muted-foreground">
                Browse profiles of qualified veterinarians with specializations, ratings, and 
                availability to find the perfect match for your pet.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Tips</h3>
              <p className="text-muted-foreground">
                Access a comprehensive library of pet care guides covering nutrition, grooming, 
                training, and preventive health.
              </p>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="text-center bg-muted rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Developed By</h2>
          <p className="text-xl text-primary font-semibold mb-2">Aaran Shandilya</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This project was created as a comprehensive frontend solution to help pet owners 
            access veterinary guidance and connect with professional care. Built with modern 
            web technologies and a passion for animal welfare.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
