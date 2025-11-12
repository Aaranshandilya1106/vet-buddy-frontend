import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 🐾 I'm your Virtual Vet Assistant. How can I help you with your pet today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMsg = userMessage.toLowerCase();

    // Keyword-based responses
    if (lowercaseMsg.includes("hello") || lowercaseMsg.includes("hi") || lowercaseMsg.includes("hey")) {
      return "Hello! How can I assist you with your pet's care today? 😊";
    }
    
    if (lowercaseMsg.includes("food") || lowercaseMsg.includes("eat") || lowercaseMsg.includes("diet")) {
      return "For nutrition advice, I recommend feeding your pet high-quality food appropriate for their age and size. Avoid human foods like chocolate, grapes, and onions. Check out our Tips & Tricks page for more detailed dietary guidelines!";
    }
    
    if (lowercaseMsg.includes("sick") || lowercaseMsg.includes("ill") || lowercaseMsg.includes("emergency")) {
      return "If your pet is showing signs of illness or distress, please consult a veterinarian immediately. Use our 'Find a Vet' feature to connect with professionals in your area. For emergencies, contact your nearest 24/7 emergency clinic.";
    }
    
    if (lowercaseMsg.includes("vaccine") || lowercaseMsg.includes("vaccination") || lowercaseMsg.includes("shot")) {
      return "Vaccinations are crucial for your pet's health! Puppies and kittens need a series of vaccines starting at 6-8 weeks. Adult pets require annual boosters. Common vaccines include rabies, distemper, and parvovirus. Schedule a vet visit to discuss your pet's vaccination needs.";
    }
    
    if (lowercaseMsg.includes("exercise") || lowercaseMsg.includes("walk") || lowercaseMsg.includes("activity")) {
      return "Regular exercise is essential! Dogs typically need 30-60 minutes of daily activity depending on breed and age. Cats benefit from 15-30 minutes of interactive play. Exercise prevents obesity, reduces anxiety, and keeps your pet mentally stimulated!";
    }
    
    if (lowercaseMsg.includes("groom") || lowercaseMsg.includes("bath") || lowercaseMsg.includes("brush")) {
      return "Grooming keeps your pet healthy and comfortable! Brush your pet regularly based on their coat type. Bathe dogs every 4-8 weeks, and trim nails monthly. Don't forget dental care - brush teeth 2-3 times per week!";
    }
    
    if (lowercaseMsg.includes("vet") || lowercaseMsg.includes("doctor") || lowercaseMsg.includes("clinic")) {
      return "You can find experienced veterinarians through our 'Find a Vet' page! We have a curated list of qualified professionals specializing in various areas of pet care. Would you like me to direct you there?";
    }
    
    if (lowercaseMsg.includes("thank") || lowercaseMsg.includes("thanks")) {
      return "You're very welcome! I'm here anytime you need pet care advice. Take good care of your furry friend! 🐶🐱";
    }
    
    if (lowercaseMsg.includes("dog")) {
      return "Dogs are wonderful companions! They need regular exercise, balanced nutrition, training, and lots of love. What specific question do you have about your dog?";
    }
    
    if (lowercaseMsg.includes("cat")) {
      return "Cats make great pets! They're more independent but still need daily play, proper nutrition, and regular vet checkups. What would you like to know about caring for your cat?";
    }

    // Default response
    return "That's an interesting question! While I can provide general pet care guidance, for specific medical concerns, I recommend consulting with a licensed veterinarian. You can find qualified vets through our 'Find a Vet' page, or check our Tips & Tricks section for more information!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Chat with Your Virtual Vet 💬
          </h1>
          <p className="text-muted-foreground">
            Ask questions about pet care, health, nutrition, and more!
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-card border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type your question about pet care..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Ask about nutrition", "Vaccination schedule", "Exercise tips"].map((tip, index) => (
            <button
              key={index}
              onClick={() => {
                setInputValue(tip);
              }}
              className="bg-muted hover:bg-muted/80 border border-border rounded-xl p-3 text-sm text-muted-foreground transition-colors"
            >
              💡 {tip}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;
