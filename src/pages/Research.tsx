import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/common/BackButton";

const comparisons = [
  { name: "StyleBook", strength: "Manual cataloging, basic outfit rules", gap: "No AI explanations, no sustainability" },
  { name: "Whering", strength: "Polished UI, brand marketplace", gap: "Limited personalization, no RAG chat" },
  { name: "Fashwell (research)", strength: "Robust embeddings", gap: "Enterprise focus, no consumer experience" },
  { name: "WardrobeWiz", strength: "Virtual try-on + chat explanations", gap: "Backend in progress" },
];

const datasets = [
  { dataset: "DeepFashion2", usage: "Detection + segmentation pre-training", license: "Non-commercial research" },
  { dataset: "Fashion-Gen", usage: "Text-image pairs for caption tuning", license: "Creative Commons" },
  { dataset: "Custom Wardrobe Shots", usage: "Fine-tuning + RAG base", license: "User provided" },
];

const Research = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        <BackButton className="mb-4" />
        <header className="space-y-4 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Literature & benchmarks</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">Research companion</h1>
          <p className="text-lg text-muted-foreground">
            Evidence for each subsystem: capture, embeddings, retrieval, explanation, reinforcement learning, and sustainability.
          </p>
        </header>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Related applications matrix</CardTitle>
            <CardDescription>Use this table in the report’s comparison chapter.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground border-b border-border">
                  <th className="py-2 pr-4 font-semibold">Product / Paper</th>
                  <th className="py-2 pr-4 font-semibold">Strength</th>
                  <th className="py-2 font-semibold">Gap vs. WardrobeWiz</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.name} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 font-semibold text-foreground">{row.name}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{row.strength}</td>
                    <td className="py-3 text-muted-foreground">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Dataset plan</CardTitle>
              <CardDescription>Placeholder references until data collection kicks off.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {datasets.map((row) => (
                <div key={row.dataset} className="rounded-2xl border border-border p-3">
                  <p className="font-semibold text-foreground">{row.dataset}</p>
                  <p className="text-muted-foreground">Usage: {row.usage}</p>
                  <p className="text-muted-foreground">License: {row.license}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Benchmark notebook (planned)</CardTitle>
              <CardDescription>Metrics to collect once backend endpoints are ready.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• Zero-shot retrieval accuracy @5, @10.</p>
              <p>• Diversity score (Jaccard across outfits per user).</p>
              <p>• Sustainability uplift (rewear % vs. baseline month).</p>
              <p>• Decision time reduction (survey + telemetry).</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Research timeline</CardTitle>
            <CardDescription>Align investigations with build sprints.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3 text-sm">
              <div className="rounded-2xl border border-border p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Month 1</p>
                <p className="mt-2 font-semibold text-foreground">Literature scan + dataset sourcing</p>
              </div>
              <div className="rounded-2xl border border-border p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Month 2</p>
                <p className="mt-2 font-semibold text-foreground">Embedding + retrieval experiments</p>
              </div>
              <div className="rounded-2xl border border-border p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Month 3</p>
                <p className="mt-2 font-semibold text-foreground">User study + RL tuning plan</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              All notes will live in a shared Notion or Overleaf file. Replace this placeholder text with actual links once available.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Research;

