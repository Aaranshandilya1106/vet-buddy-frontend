import { useState } from "react";
import Layout from "@/components/Layout";
import { tips } from "@/data/tips";
import { Button } from "@/components/ui/button";

const Tips = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(tips.map(tip => tip.category)))];
  
  const filteredTips = selectedCategory === "All" 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Pet Care Tips & Tricks 💡
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice to keep your furry friends healthy, happy, and thriving. 
            Learn essential care practices from veterinary professionals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {tip.category}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{tip.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No tips found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Need Personalized Advice?
          </h2>
          <p className="text-muted-foreground mb-6">
            Chat with our AI assistant or connect with a professional veterinarian for 
            guidance specific to your pet's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/chatbot">Ask the Chatbot</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/connect-vet">Find a Vet</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tips;
