import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Sun, CloudRainWind, Briefcase, Coffee, Moon, SendHorizonal } from "lucide-react";

const presets = [
  { label: "Sunny commute", detail: "26°C / client visit" },
  { label: "Creative sprint", detail: "Studio day / casual" },
  { label: "Evening gala", detail: "Indoor / semi-formal" },
];

const Recommend = () => {
  const [scenario, setScenario] = useState(presets[0].label);
  const [prompt, setPrompt] = useState("Need something breathable for a humid investor meeting");
  const [notes, setNotes] = useState([
    "Pair the honey knit with the linen set for tone-on-tone balance.",
    "Swap loafers for sneakers if commute exceeds 1 km.",
  ]);

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-primary/10 bg-white/95 p-8 shadow-card space-y-6">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Recommendation studio</p>
          <h1 className="text-3xl font-semibold text-foreground">Describe your day, WardrobeWiz handles the rest.</h1>
          <p className="text-muted-foreground">
            Choose a preset or type your own context. We’ll blend weather, wardrobe usage, and your saved measurements to
            suggest an outfit plus a short explainer.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => setScenario(preset.label)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                scenario === preset.label ? "bg-primary text-primary-foreground border-primary" : "bg-white text-muted-foreground"
              }`}
            >
              {preset.label} · {preset.detail}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="h-32"
            placeholder="Tell WardrobeWiz about your plan..."
          />
          <div className="rounded-2xl border border-border p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">What WardrobeWiz considers</p>
            <p className="text-sm text-muted-foreground">• Updated measurements</p>
            <p className="text-sm text-muted-foreground">• Last time each garment was worn</p>
            <p className="text-sm text-muted-foreground">• Palette preferences + weather</p>
          </div>
        </div>
        <Button className="w-full md:w-auto">
          Generate recommendation
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Context inputs</CardTitle>
            <CardDescription>Fine-tune the prompt WardrobeWiz sees.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="Location (e.g. Karachi)" />
              <Input placeholder="Event (e.g. Investor lunch)" />
              <Input placeholder="Mood (e.g. Playful)" />
              <Input placeholder="Palette (e.g. Navy + Honey)" />
            </div>
            <Textarea placeholder="Additional notes (dress code, comfort preferences, etc.)" />
            <Button variant="secondary" className="w-full sm:w-auto">
              Save as preset
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Latest notes</CardTitle>
            <CardDescription>WardrobeWiz logs the coaching tips that resonate.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {notes.map((note, index) => (
              <div key={index} className="rounded-2xl border border-border px-3 py-2">
                {note}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Preview outputs</CardTitle>
          <CardDescription>Mocked cards show how the UI will respond once hooked to the backend.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary" className="space-y-4">
            <TabsList className="justify-start">
              <TabsTrigger value="summary">
                <Sun className="h-4 w-4 mr-2" />
                Summary
              </TabsTrigger>
              <TabsTrigger value="pieces">
                <Briefcase className="h-4 w-4 mr-2" />
                Pieces
              </TabsTrigger>
              <TabsTrigger value="care">
                <Coffee className="h-4 w-4 mr-2" />
                Care tips
              </TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="text-sm text-muted-foreground space-y-2">
              <p>
                Start with the <strong>coastal linen set</strong> for ventilation, layer the <strong>honey knit</strong> to match the boardroom vibe, and end with the <strong>textured loafers</strong> for polish.
              </p>
              <p>
                Swap to the utilitarian shirt if the venue cranks up the AC. Add your favorite watch for a subtle accent.
              </p>
            </TabsContent>
            <TabsContent value="pieces" className="grid gap-3 sm:grid-cols-3 text-sm">
              {["Linen set", "Honey knit", "Loafers"].map((piece) => (
                <div key={piece} className="rounded-2xl border border-border px-3 py-2">
                  {piece}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="care" className="space-y-2 text-sm text-muted-foreground">
              <p>• Let the linen set air out overnight before steaming.</p>
              <p>• Brush the loafers after wear so the texture stays crisp.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommend;

