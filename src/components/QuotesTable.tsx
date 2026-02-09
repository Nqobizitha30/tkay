import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Quote {
  name: string;
  model: string;
  state: string;
  rate: string;
}

const initialQuotes: Quote[] = [
  { name: "Brooke Allford", model: "McLaren", state: "RI", rate: "$29/mo" },
  { name: "Gordon Francis", model: "Lucid", state: "TX", rate: "$26/mo" },
  { name: "Sarah Mitchell", model: "Tesla", state: "CA", rate: "$31/mo" },
  { name: "David Chen", model: "BMW", state: "NY", rate: "$34/mo" },
  { name: "Emily Rodriguez", model: "Audi", state: "FL", rate: "$28/mo" },
  { name: "Michael Johnson", model: "Mercedes", state: "IL", rate: "$32/mo" },
];

const additionalQuotes: Quote[] = [
  { name: "Jennifer Lee", model: "Porsche", state: "WA", rate: "$35/mo" },
  { name: "Robert Wilson", model: "Lexus", state: "AZ", rate: "$27/mo" },
  { name: "Amanda Garcia", model: "Rivian", state: "CO", rate: "$30/mo" },
  { name: "James Taylor", model: "Ferrari", state: "NV", rate: "$38/mo" },
];

export const QuotesTable = () => {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [newQuoteIndex, setNewQuoteIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = additionalQuotes[Math.floor(Math.random() * additionalQuotes.length)];
      setQuotes(prev => {
        const newQuotes = [randomQuote, ...prev.slice(0, 5)];
        return newQuotes;
      });
      setNewQuoteIndex(0);
      
      setTimeout(() => setNewQuoteIndex(null), 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground">Real-Time Quotes</h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success pulse-live"></span>
          <span className="text-sm text-muted-foreground">Live updates</span>
        </div>
      </div>
      
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Name</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Model</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">State</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Rate</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote, index) => (
              <tr 
                key={`${quote.name}-${index}`}
                className={cn(
                  "border-b border-border/50 last:border-0 transition-all duration-500",
                  index === newQuoteIndex && "bg-primary/10 animate-slide-up"
                )}
              >
                <td className="py-3 px-4 text-sm font-medium text-foreground">{quote.name}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{quote.model}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-xs font-bold text-foreground">
                    {quote.state}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <span className="text-sm font-bold text-success">{quote.rate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="text-xs text-muted-foreground mt-3 text-center">
        * Rates shown are examples and may vary based on individual circumstances
      </p>
    </div>
  );
};
