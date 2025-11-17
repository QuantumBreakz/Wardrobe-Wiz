import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Activity, ArrowRight, BookOpen, PlayCircle, Recycle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const heroStats = [
  { value: "12k", label: "Virtual try-ons", detail: "Closets digitized" },
  { value: "18 min", label: "Time saved / session", detail: "Decision relief" },
  { value: "+42%", label: "Rewear rate", detail: "Idle pieces revived" },
];

const workflowTiles = [
  {
    tag: "Capture",
    title: "Digitize wardrobe",
    blurb: "Guided capture, cleanup, and textile tags keep data trustworthy.",
  },
  {
    tag: "Try-On",
    title: "Preview fits virtually",
    blurb: "Mix actual garments with weather, mood, or occasion overlays.",
  },
  {
    tag: "Explain",
    title: "Coach with context",
    blurb: "Plain-language tips make every outfit choice obvious.",
  },
];

const contextScenarios = [
  {
    label: "Sunny Commute",
    detail: "26°C • client visit • light breeze",
    score: "Confidence 91%",
    palette: ["#0f1d3b", "#f7c948", "#fcefd5"],
    pieces: ["Navy chore coat", "Honey knit top", "Light denim", "Textured loafers"],
    insight: "Breathable layers with pops of saffron keep it polished yet relaxed.",
  },
  {
    label: "Evening Gala",
    detail: "21°C • indoor • semi-formal",
    score: "Confidence 88%",
    palette: ["#10172a", "#ffd75e", "#c7d2fe"],
    pieces: ["Midnight tux blazer", "Silk camisole", "Tailored trousers", "Metallic heels"],
    insight: "High-contrast navy and metallic accents meet the dress code without new buys.",
  },
  {
    label: "Creative Sprint",
    detail: "24°C • studio day • casual",
    score: "Confidence 86%",
    palette: ["#0b3d91", "#f9a826", "#fef3c7"],
    pieces: ["Denim overshirt", "Graphic tee", "Utility pants", "Canvas sneakers"],
    insight: "Ease of movement plus gentle reminders to wear neglected workwear.",
  },
];

const pipelineSteps = [
  { title: "Capture", summary: "Camera coach", detail: "Framing hints keep garment photos crisp." },
  { title: "Organize", summary: "Smart closet", detail: "Wardrobe items auto-tag into categories and palettes." },
  { title: "Match", summary: "Style brain", detail: "Mixes pieces instantly for weather, mood, or agenda." },
  { title: "Explain", summary: "Plain tips", detail: "Tells you why each choice works, no jargon." },
  { title: "Refine", summary: "Feedback loop", detail: "Daily reactions keep ideas fresh and personal." },
];

const trustSignals = [
  {
    title: "Life-cycle aware",
    detail: "Suggests reuse, resale, or donation to tame fashion waste.",
    icon: Recycle,
  },
  {
    title: "Adaptive RL agent",
    detail: "Learns from taps, dwell, and ratings to keep ideas fresh.",
    icon: Activity,
  },
  {
    title: "Secure vault",
    detail: "Garment photos stay encrypted with privacy guardrails.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    quote: "WardrobeWiz made our virtual try-on demo feel premium—faculty loved the clarity.",
    name: "Areeba Khan",
    role: "FAST-NUCES Final Year Student",
  },
  {
    quote: "I track feedback nightly. The RL agent keeps outfits inventive without new purchases.",
    name: "Danish I.",
    role: "Pilot User",
  },
  {
    quote: "Explainers translate fashion jargon into cues our stakeholders get instantly.",
    name: "Sara Malik",
    role: "Product Design Intern",
  },
];

const panelBase =
  "rounded-3xl border border-primary/15 bg-white/95 shadow-card backdrop-blur supports-[backdrop-filter]:bg-white/85";

export const Hero = () => {
  const [activeScenario, setActiveScenario] = useState(contextScenarios[0].label);
  const scenario = contextScenarios.find((item) => item.label === activeScenario) ?? contextScenarios[0];

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 hero-gradient -z-10" />
      <div className="hero-aurora -z-10" />

      <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={cn(panelBase, "p-8 space-y-8 text-foreground")}>
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2 bg-accent/30 text-primary">
                <Sparkles className="h-4 w-4 text-primary" />
                Virtual Try-On Suite
              </Badge>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  Try every outfit from your actual closet—before touching a hanger.
                </h1>
                <p className="text-lg text-muted-foreground">
                  WardrobeWiz blends friendly AI and your real wardrobe photos to become a responsive styling cockpit.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-primary/10 bg-white px-4 py-5 shadow-card transition hover:-translate-y-0.5"
                >
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm font-medium text-foreground/70">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              {workflowTiles.map((tile) => (
                <div
                  key={tile.title}
                  className="flex-1 min-w-[180px] rounded-2xl border border-primary/10 bg-white/90 p-4 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{tile.tag}</p>
                  <h3 className="text-base font-semibold text-foreground mt-1">{tile.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tile.blurb}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:flex-row">
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/register">
                    Get Personalized Plan
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-primary/40 text-primary">
                  <Link to="/demo">
                    <PlayCircle className="h-5 w-5" />
                    Watch Try-On Demo
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full">
                  <Link to="/architecture">View Architecture</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Building your Deliverable II?{" "}
                <Link to="/documentation" className="font-semibold text-primary hover:text-primary/80">
                  Open the official docs
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#08122b] p-8 text-primary-foreground shadow-card-hover">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Live virtual preview</p>
              <div className="flex gap-2 flex-wrap">
                {contextScenarios.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setActiveScenario(option.label)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition border",
                      activeScenario === option.label
                        ? "bg-accent text-primary border-accent"
                        : "bg-white/10 text-primary-foreground border-white/10 hover:bg-white/20",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">{scenario.detail}</p>
                <p className="text-xs text-primary-foreground/70 mt-1">{scenario.insight}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-primary-foreground/70">
                  <span>Avatar overlay</span>
                  <span>{scenario.score}</span>
                </div>
                <div className="mt-4 h-48 rounded-2xl bg-gradient-to-b from-[#132347] via-[#0f1d3b] to-transparent relative overflow-hidden">
                  <div className="absolute inset-4 rounded-2xl border border-white/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="h-24 w-24 rounded-full border-2 border-accent/60 bg-white/10" />
                    <div className="h-20 w-12 rounded-2xl border-2 border-white/30" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {scenario.palette.map((swatch) => (
                    <span
                      key={swatch}
                      className="h-8 w-8 rounded-full border border-white/20"
                      style={{ backgroundColor: swatch }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/70">Pieces queued</p>
                <ul className="mt-3 space-y-2 text-sm text-primary-foreground">
                  {scenario.pieces.map((piece) => (
                    <li key={piece} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {piece}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={cn(panelBase, "p-8 space-y-6")}>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Closed-loop pipeline
              </Badge>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Smart styling loop</span>
            </div>
            <div className="space-y-4">
              {pipelineSteps.map((step, index) => (
                <HoverCard key={step.title} openDelay={50}>
                  <HoverCardTrigger asChild>
                    <div className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-white px-4 py-3 transition hover:border-primary/40">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-base font-semibold text-foreground">{step.title}</p>
                          <span className="text-xs text-muted-foreground">{step.summary}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{step.detail}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent align="start">{step.detail}</HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          <div className={cn(panelBase, "p-8 space-y-6")}>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-foreground">Live confidence & usage</h3>
              <span className="text-xs font-semibold text-primary">{scenario.score}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              WardrobeWiz monitors how often garments appear across contexts to avoid fatigue. Scores above 0.85 mean
              the virtual try-on result aligns with both aesthetic and scenario constraints.
            </p>
            <div className="rounded-2xl border border-primary/10 bg-white/90 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Rewear tracker</p>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex-1 rounded-full bg-primary/10 h-2">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "68%" }} />
                </div>
                <span className="text-sm font-semibold text-primary">68%</span>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white/90 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Palette rationale</p>
              <p className="text-sm text-foreground mt-2">{scenario.insight}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {trustSignals.map((signal) => (
            <div
              key={signal.title}
              className="rounded-2xl border border-primary/10 bg-white/95 p-4 shadow-sm flex flex-col gap-2"
            >
              <signal.icon className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-foreground">{signal.title}</p>
              <p className="text-sm text-muted-foreground">{signal.detail}</p>
            </div>
          ))}
        </div>

        <div className={cn(panelBase, "p-8 space-y-6 bg-white text-foreground border-primary/15")}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Testimonials</p>
            <h3 className="text-3xl font-semibold text-foreground">Trusted by reviewers, interns, and early adopters</h3>
            <p className="text-muted-foreground max-w-3xl">
              Use these proof points in your pitch deck or Deliverable II to show real validation for the WardrobeWiz
              virtual try-on experience.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-border bg-white p-4 text-sm leading-relaxed shadow-card"
              >
                &ldquo;{testimonial.quote}&rdquo;
                <div className="mt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border border-primary/15 bg-white/95 rounded-3xl px-6 py-4 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-foreground">Need the technical deep dive?</p>
            <p className="text-sm text-muted-foreground">Explore architecture, research, and documentation routes.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link to="/architecture" className="rounded-full border border-primary/20 px-4 py-2 text-primary hover:border-primary/40">
              Architecture
            </Link>
            <Link to="/demo" className="rounded-full border border-primary/20 px-4 py-2 text-primary hover:border-primary/40">
              Demo
            </Link>
            <Link to="/documentation" className="rounded-full border border-primary/20 px-4 py-2 text-primary hover:border-primary/40">
              Docs
            </Link>
            <Link to="/research" className="rounded-full border border-primary/20 px-4 py-2 text-primary hover:border-primary/40">
              Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
