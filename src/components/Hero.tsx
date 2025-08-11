import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              150+ Partnered IA Firms Connected
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              The <span className="bg-gradient-hero bg-clip-text text-transparent">Central Hub</span> for Independent Adjusters
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stop juggling multiple portals. Flex.IA connects ALL your partnered IA firms into one powerful dashboard. 
              Never miss a claim, maximize your earnings, and streamline your entire operation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Partnered Firms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroDashboard} 
                alt="Flex.IA Dashboard Interface" 
                className="w-full h-auto rounded-2xl shadow-large hover:shadow-glow transition-all duration-500"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl shadow-lg animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;