import { cn } from "@/lib/utils";

interface AvatarStackProps {
  count: number;
  className?: string;
}

export const AvatarStack = ({ count, className }: AvatarStackProps) => {
  const avatars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex -space-x-3">
        {avatars.map((i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/40?img=${i + 10}`}
            alt={`User ${i}`}
            className="w-10 h-10 rounded-full border-2 border-background object-cover"
          />
        ))}
      </div>
      <div className="text-sm">
        <span className="font-bold text-primary">{count.toLocaleString()}</span>
        <span className="text-muted-foreground ml-1">Americans Saved</span>
      </div>
    </div>
  );
};
