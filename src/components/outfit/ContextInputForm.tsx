import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { OutfitContext } from "@/types/outfit";

interface ContextInputFormProps {
  context: OutfitContext;
  onChange: (context: OutfitContext) => void;
  className?: string;
}

export const ContextInputForm = ({
  context,
  onChange,
  className,
}: ContextInputFormProps) => {
  const handleChange = (field: keyof OutfitContext, value: string | number) => {
    onChange({
      ...context,
      [field]: value,
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Outfit Context</CardTitle>
        <CardDescription>
          Provide details about the occasion, weather, and your preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="event">Event / Occasion</Label>
            <Input
              id="event"
              placeholder="e.g., Board meeting, Casual dinner"
              value={context.event || ""}
              onChange={(e) => handleChange("event", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="e.g., Karachi, Lahore, Office"
              value={context.location || ""}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weather">Weather</Label>
            <Input
              id="weather"
              placeholder="e.g., Sunny, Humid, Cold"
              value={context.weather || ""}
              onChange={(e) => handleChange("weather", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="temperature">Temperature (°C)</Label>
            <Input
              id="temperature"
              type="number"
              placeholder="e.g., 26"
              value={context.temperature || ""}
              onChange={(e) => handleChange("temperature", parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mood">Mood / Style</Label>
            <Input
              id="mood"
              placeholder="e.g., Professional, Casual, Playful"
              value={context.mood || ""}
              onChange={(e) => handleChange("mood", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dressCode">Dress Code</Label>
            <Input
              id="dressCode"
              placeholder="e.g., Business casual, Smart casual"
              value={context.dressCode || ""}
              onChange={(e) => handleChange("dressCode", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="occasion">Additional Notes</Label>
          <Textarea
            id="occasion"
            placeholder="Any additional context or preferences..."
            value={context.occasion || ""}
            onChange={(e) => handleChange("occasion", e.target.value)}
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
};

