import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BackButton } from "@/components/common/BackButton";

const layers = [
  {
    title: "Perception layer",
    detail:
      "Image capture helpers, OpenCV-based cleanup, background removal, and CLIP ViT-L embeddings stored alongside weather + occasion metadata.",
  },
  {
    title: "Retrieval layer",
    detail:
      "FAISS HNSW index delivers top-N complementary garments within 50ms. Results are filtered by fit profile, laundry status, and sustainability heuristics.",
  },
  {
    title: "Generation + explanation",
    detail:
      "Prompt-chained LLM (Mixtral or GPT-4o mini) crafts the narrative, selects palettes, and outputs structured JSON for the UI + chat surface.",
  },
  {
    title: "Learning loop",
    detail:
      "A lightweight contextual bandit ingests explicit ratings and implicit dwell time to rebalance underused garments and surfaces novel pairings.",
  },
];

const stack = [
  {
    label: "Capture",
    tools: ["Expo + React Native (mobile)", "Web RTC fallback", "OpenCV", "Segment Anything for masks"],
  },
  {
    label: "Processing",
    tools: ["Python FastAPI", "CLIP ViT-L/14", "AWS Lambda for batch jobs"],
  },
  { label: "Vector store", tools: ["FAISS HNSW", "S3 for artifacts", "Redis cache for hot items"] },
  { label: "Reasoning", tools: ["Prompt orchestration via LangChain", "LLM provider (OpenAI / Groq fallback)"] },
  { label: "Front-end", tools: ["Vite + React 18", "Tailwind + shadcn/ui", "TanStack Query"] },
];

const milestones = [
  {
    title: "Sprint 01 – Capture studio",
    notes: [
      "Design overlay + instructions",
      "Implement background cleanup mock",
      "Persist garment metadata locally",
    ],
  },
  {
    title: "Sprint 02 – Closet board + retrieval",
    notes: ["Mock FAISS API", "Client-side filters", "Usage tracking UI"],
  },
  {
    title: "Sprint 03 – Explanation & RL loop",
    notes: ["Chat assistant UI", "Feedback controls", "Policy update scheduler"],
  },
];

const Architecture = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        <BackButton className="mb-4" />
        <header className="space-y-4 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">System blueprint</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">WardrobeWiz technical architecture</h1>
          <p className="text-lg text-muted-foreground">
            This overview fuels Deliverable II: it explains how we capture wardrobe data, search through it, narrate
            outfits, and learn from feedback—even while the backend is still mocked.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-4">
          {layers.map((layer) => (
            <Card key={layer.title} className="shadow-card">
              <CardHeader>
                <CardTitle className="text-base">{layer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{layer.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Implementation stack</CardTitle>
            <CardDescription>Tooling lined up for each layer. Replace or expand as we reach backend sprints.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {stack.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {item.tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Data flow narrative</CardTitle>
              <CardDescription>From wardrobe photo to personalized narration.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                1. User captures a garment (mobile or desktop). Metadata (color, fabric, tags) is collected through quick taps.
              </p>
              <p>
                2. Image hits the perception service → background removal + embedding generation → stored in vector DB with metadata document.
              </p>
              <p>
                3. During try-on, the UI sends context (weather, mood, occasion, fit profile). Retrieval service fetches candidate pieces via FAISS.
              </p>
              <p>
                4. LLM prompt composes the outfit narrative + JSON payload. UI renders the cards and logs user feedback.
              </p>
              <p>
                5. Feedback events are batched; the bandit updates garment priors nightly to diversify recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Delivery milestones</CardTitle>
              <CardDescription>Aligns with FAST-NUCES Deliverable II checkpoints.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {milestones.map((milestone, index) => (
                  <AccordionItem key={milestone.title} value={`milestone-${index}`} className="border border-border rounded-2xl px-4">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">
                      {milestone.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      <ul className="list-disc list-inside space-y-1">
                        {milestone.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Architecture;

