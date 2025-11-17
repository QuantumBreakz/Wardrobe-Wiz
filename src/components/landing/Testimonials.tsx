import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "WardrobeWiz made our virtual try-on demo feel premium—faculty loved the clarity.",
    author: "Areeba Khan",
    role: "FAST-NUCES Final Year Student",
  },
  {
    quote: "I track feedback nightly. The RL agent keeps outfits inventive without new purchases.",
    author: "Danish I.",
    role: "Pilot User",
  },
  {
    quote: "Explainers translate fashion jargon into cues our stakeholders get instantly.",
    author: "Sara Malik",
    role: "Product Design Intern",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-primary/5 border-t border-b border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">Trusted by reviewers, interns, and early adopters</h2>
          <p className="text-muted-foreground">
            Use these proof points in your pitch deck or Deliverable II to show real validation for the WardrobeWiz virtual try-on
            experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-3xl border border-border bg-white/90 p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <p className="text-sm text-foreground leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-primary/20 bg-white/95 p-6 sm:p-8 flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Need the technical deep dive?</p>
            <h3 className="text-2xl font-semibold text-foreground mt-2">Explore architecture, research, and documentation routes.</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <Button asChild variant="secondary">
              <Link to="/architecture">Architecture</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/demo">Demo</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/documentation">Docs</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/research">Research</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

