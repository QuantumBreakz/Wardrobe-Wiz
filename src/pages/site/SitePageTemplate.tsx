import { BackButton } from "@/components/common/BackButton";

type Section = {
  title: string;
  description: string;
  bullets?: string[];
};

type SitePageTemplateProps = {
  title: string;
  description: string;
  sections: Section[];
};

const SitePageTemplate = ({ title, description, sections }: SitePageTemplateProps) => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-10">
        <BackButton className="mb-4" />
        <header className="space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">WardrobeWiz</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </header>

        <div className="space-y-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-border bg-white/95 p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              <p className="text-muted-foreground mt-2">{section.description}</p>
              {section.bullets && (
                <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SitePageTemplate;

