import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      title: "Unified Claims Hub",
      description: "Connect and manage claims from ALL 150+ partnered IA firms in one dashboard. Get instant notifications for new opportunities.",
      icon: "🎯",
      badge: "Core Feature"
    },
    {
      title: "Custom Performance Dashboard",
      description: "Build your command center with 20+ configurable widgets. Track KPIs, earnings trends, and growth metrics tailored to your priorities.",
      icon: "📊",
      badge: "Analytics"
    },
    {
      title: "Earnings Optimizer",
      description: "Gain actionable insights into income streams, claim values, and profitability to maximize your earning potential.",
      icon: "💰",
      badge: "Financial"
    },
    {
      title: "Smart Scheduling & Routing",
      description: "Intelligently manage your calendar with automated scheduling, optimized route planning, and proactive deadline reminders.",
      icon: "🗓️",
      badge: "Productivity"
    },
    {
      title: "Secure Document Vault",
      description: "Store, organize, and access all essential claim documents, photos, reports, and files securely in the cloud.",
      icon: "🔒",
      badge: "Security"
    },
    {
      title: "Mobile Companion App",
      description: "Work offline, capture photos with geo-tagging, and sync automatically. Never lose data in the field.",
      icon: "📱",
      badge: "Mobile"
    },
    {
      title: "Integrated Communication Hub",
      description: "Streamline all messaging with firms, claimants, and your team directly within the platform.",
      icon: "💬",
      badge: "Communication"
    },
    {
      title: "Expansive Firm Network",
      description: "Access and connect with our curated network of 150+ top-tier insurance firms – all centralized in Flex.IA.",
      icon: "🤝",
      badge: "Network"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Comprehensive Platform
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Everything You Need in <span className="bg-gradient-hero bg-clip-text text-transparent">One Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flex.IA provides a comprehensive suite of features tailored to the unique needs of independent adjusters. 
            Eliminate chaos, maximize efficiency, and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl">{feature.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl shadow-large p-8 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of independent adjusters who've already streamlined their operations with Flex.IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;