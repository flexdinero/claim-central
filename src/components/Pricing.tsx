import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    "Unified Claims Hub (150+ firms)",
    "Custom Performance Dashboard",
    "Earnings Optimizer & Analytics",
    "Smart Scheduling & Routing", 
    "Secure Document Vault",
    "Mobile Companion App",
    "Integrated Communication Hub",
    "24/7 Priority Support",
    "Advanced AI Assistant",
    "Unlimited Cloud Storage",
    "Real-time Sync Across Devices",
    "Enterprise-grade Security"
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Simple Pricing
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            One Plan, <span className="bg-gradient-hero bg-clip-text text-transparent">All Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            No confusing tiers or hidden fees. Get access to every feature of Flex.IA with our single, 
            comprehensive plan designed for serious adjusters.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="default" className="bg-success">
                Save $180/year
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-primary shadow-glow hover:shadow-large transition-all duration-500">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">F</span>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Flex.IA Pro</CardTitle>
              <CardDescription className="text-muted-foreground">
                Complete platform access with all features included
              </CardDescription>
              
              <div className="mt-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-primary">
                    ${isAnnual ? '82' : '97'}
                  </span>
                  <span className="text-xl text-muted-foreground ml-2">
                    /month
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Billed annually at $984/year
                  </p>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button variant="hero" size="lg" className="w-full text-lg py-6">
                Start Your Free Trial
              </Button>

              {/* Guarantee */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  🔒 30-day money-back guarantee
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Cancel anytime. No long-term contracts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">$15,000+</div>
              <div className="text-sm text-muted-foreground">Average annual income increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Reduction in administrative time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;