import { Button } from "@/components/ui/button";
import { AvatarStack } from "@/components/AvatarStack";
import { TrustBadge } from "@/components/TrustBadge";
import { QuotesTable } from "@/components/QuotesTable";
import { BenefitsList } from "@/components/BenefitsList";
import { Shield, ArrowRight } from "lucide-react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Index = () => {
  const handleCTAClick = () => {
    window.open("https://www.pemjh.site/2FL4HCSN/9FB4HW2/?sub1=fingoinsure", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Social Proof Top */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <AvatarStack count={45554} />
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="text-primary font-semibold">45,000+</span> Americans
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4">
              Compare Free Quotes & Save Up To{" "}
              <span className="text-gradient">75%</span> On Your Auto Insurance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Rates Starting At <span className="text-primary font-bold">$1 Per Day</span> In America
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleCTAClick}
              className="group"
            >
              Lower My Quotes Now!!
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
            <TrustBadge 
              name="Google"
              reviews="22,000+"
              rating="4.8/5.0"
              icon={<GoogleIcon />}
            />
            <TrustBadge 
              name="ConsumerAffairs"
              reviews="46,000+"
              rating="4.9/5.0"
              icon={<span className="text-2xl font-bold text-blue-400">CA</span>}
            />
            <TrustBadge 
              name="Trustpilot"
              reviews="31,000+"
              rating="4.7/5.0"
              icon={<span className="text-2xl">⭐</span>}
            />
          </div>

          {/* Quotes Table */}
          <QuotesTable />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Ready to Start Saving?
          </h2>

          <div className="flex justify-center mb-8">
            <BenefitsList />
          </div>

          <Button 
            variant="cta" 
            size="lg"
            onClick={handleCTAClick}
            className="group"
          >
            Get My Free Quotes
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Softlyo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
