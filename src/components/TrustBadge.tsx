import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  name: string;
  reviews: string;
  rating: string;
  icon: React.ReactNode;
  className?: string;
}

export const TrustBadge = ({ name, reviews, rating, icon, className }: TrustBadgeProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50",
      className
    )}>
      <div className="text-2xl">{icon}</div>
      <span className="font-semibold text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground">Based On {reviews} Reviews</span>
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium text-foreground">Rating:</span>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-primary text-primary"
            />
          ))}
        </div>
        <span className="text-sm font-bold text-primary">{rating}</span>
      </div>
    </div>
  );
};
