import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Camera, LayoutPanelLeft, Layers, MessageSquare, Play, UploadCloud, Wand2 } from "lucide-react";
import { BackButton } from "@/components/common/BackButton";

const pipeline = [
  {
    title: "Capture & Clean",
    detail: "Guided prompts ensure each garment photo is crisp, centered, and tagged with color + category metadata.",
    icon: Camera,
  },
  {
    title: "Organize & Search",
    detail:
      "WardrobeWiz builds a searchable closet board—filter by fabric, palette, or usage frequency in milliseconds.",
    icon: LayoutPanelLeft,
  },
  {
    title: "Try-On & Explain",
    detail: "Users preview fits, get plain-language rationale, and log a quick 👍/👎 to keep suggestions improving.",
    icon: Wand2,
  },
];

const demoPanels = [
  {
    label: "Live capture",
    description: "Tablet overlays guide framing, detect creases, and apply background cleanup automatically.",
    action: "View capture script",
  },
  {
    label: "Virtual try-on",
    description: "Layer outfits onto an avatar that reflects the user's fit profile and current context.",
    action: "Open prototype",
  },
  {
    label: "Explainer chat",
    description: "Ask why a piece was chosen, request tweaks, or log feedback—all in one conversational surface.",
    action: "See transcript",
  },
];

const qaCards = [
  {
    title: "What’s powering the demo?",
    detail:
      "A Vite + React front-end with mock data today. The backend spec pairs a CLIP encoder, FAISS index, and lightweight LLM prompting layer.",
  },
  {
    title: "How real is the virtual try-on?",
    detail:
      "The prototype relies on curated shots of your existing garments layered on top of an editable avatar. No mesh fitting yet, but the UI intentionally mirrors the final flow.",
  },
  {
    title: "Where do recordings live?",
    detail:
      "All Loom walkthroughs, pitch decks, and FAST-NUCES deliverables will be linked below so supervisors can validate progress at any time.",
  },
];

const Demo = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        <BackButton className="mb-4" />
        <div className="rounded-[32px] border border-primary/10 bg-white/95 p-8 shadow-card space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Virtual Try-On Demo</p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
                Capture, preview, and explain outfits in under two minutes.
              </h1>
              <p className="text-lg text-muted-foreground">
                This page hosts the live walkthrough: garment capture, interactive closet view, natural-language coaching,
                and satisfaction logging. Everything is mocked in the browser, so evaluators can click through without a backend.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Button asChild variant="hero" size="lg">
                  <Link to="/login">
                    Launch demo space
                    <Play className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Download script (PDF)
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-inner w-full lg:w-[380px]">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Preview window</p>
              <div className="mt-4 h-52 rounded-2xl bg-gradient-to-b from-[#0f1d3b] to-[#0b1024] relative overflow-hidden">
                <div className="absolute inset-4 rounded-2xl border border-white/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-primary-foreground">
                  <div className="h-24 w-24 rounded-full border-2 border-accent/60 bg-white/10" />
                  <div className="h-20 w-12 rounded-2xl border-2 border-white/30" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Layer garments, see palette cues, and record a quick note for the report.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {pipeline.map((stage) => (
              <div key={stage.title} className="rounded-2xl border border-primary/10 bg-white/90 p-4 shadow-sm">
                <stage.icon className="h-5 w-5 text-primary mb-3" />
                <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{stage.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UploadCloud className="h-5 w-5 text-primary" />
                Demo assets
              </CardTitle>
              <CardDescription>Everything supervisors need to review the flow.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {demoPanels.map((panel) => (
                <div key={panel.label} className="rounded-2xl border border-border px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">{panel.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{panel.description}</p>
                  <Button variant="link" className="px-0 text-primary mt-1" size="sm">
                    {panel.action}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Demo checklist
              </CardTitle>
              <CardDescription>Use these beats when presenting WardrobeWiz live.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <ol className="space-y-3 list-decimal list-inside text-foreground">
                <li>Scan a new garment with the guided overlay.</li>
                <li>Jump into the closet board and filter by palette.</li>
                <li>Open the virtual try-on pane and drag in the new piece.</li>
                <li>Ask the chat surface “why this look?” and log feedback.</li>
                <li>Close with sustainability stats + personalization notes.</li>
              </ol>
              <p className="text-muted-foreground">
                Tip: keep each section under 20 seconds to show the end-to-end loop in two minutes.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Interactive modules
            </CardTitle>
            <CardDescription>Switch between experience layers without reloading the page.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="capture" className="space-y-6">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="capture">Capture studio</TabsTrigger>
                <TabsTrigger value="closet">Closet board</TabsTrigger>
                <TabsTrigger value="chat">Explain & adjust</TabsTrigger>
              </TabsList>
              <TabsContent value="capture" className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Shows the camera overlay, lighting indicator, and automatic background cleanup. We simulate progress
                  states so evaluators understand how clean data enters the system.
                </p>
                <p>
                  Future work: integrate actual camera input and artifact detection.
                </p>
              </TabsContent>
              <TabsContent value="closet" className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Displays tiles for tops, bottoms, footwear, and accessories with quick filters for palette, fabric, or
                  last-worn date. Clicking a tile slides it into the virtual outfit tray.
                </p>
                <p>
                  Future work: connect directly to the FAISS similarity search so results reflect embeddings.
                </p>
              </TabsContent>
              <TabsContent value="chat" className="space-y-3 text-sm text-muted-foreground">
                <p>
                  The chat assistant explains each look, accepts custom constraints, and records satisfaction. Right now
                  it uses scripted responses; later it will hit the RAG endpoint.
                </p>
                <p>
                  Future work: wire to the actual large-language-model prompt chain.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid gap-6 sm:grid-cols-3">
          {qaCards.map((card) => (
            <Card key={card.title} className="shadow-card">
              <CardHeader>
                <CardTitle className="text-base">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{card.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Demo;

