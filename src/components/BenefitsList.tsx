import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitsListProps {
  className?: string;
}

const benefits = [
  "Compare 50+ top insurance providers",
  "Get quotes in under 2 minutes",
  "No obligation - 100% free",
  "Save up to $750/year on average",
];

export const BenefitsList = ({ className }: BenefitsListProps) => {
  return (
    <ul className={cn("space-y-3", className)}>
      {benefits.map((benefit, index) => (
        <li 
          key={index}
          className="flex items-center gap-3 text-foreground"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-success" />
          </span>
          <span className="text-sm md:text-base">{benefit}</span>
        </li>
      ))}
    </ul>
  );
};
