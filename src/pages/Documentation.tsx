import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BackButton } from "@/components/common/BackButton";

const docSections = [
  {
    title: "Introduction & Vision",
    detail:
      "Problem framing, target personas, and sustainability goals. Include wardrobe underuse stats plus WardrobeWiz positioning.",
  },
  {
    title: "Literature Review",
    detail: "Benchmark WardrobeWiz against existing virtual try-on apps, AI stylists, and academic prototypes.",
  },
  {
    title: "Software Requirement Specification",
    detail: "Functional + non-functional requirements, user stories, acceptance criteria, and glossary.",
  },
  {
    title: "System Design",
    detail: "Component diagrams, sequence charts, deployment view, and data contracts.",
  },
];

const checklist = [
  { label: "Problem statement signed off", status: "Done" },
  { label: "Persona boards uploaded", status: "Done" },
  { label: "SRS draft v1", status: "In progress" },
  { label: "Architecture diagrams", status: "In progress" },
  { label: "Test plan outline", status: "Pending" },
];

const Documentation = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        <BackButton className="mb-4" />
        <header className="space-y-4 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Deliverable II Hub</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">Vision, SRS, and system design</h1>
          <p className="text-lg text-muted-foreground">
            Curated references for supervisors and teammates. Every button below points to a Google Doc, Figma frame, or
            Loom recording—swap links later when the assets go live.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero">Download master PDF</Button>
            <Button variant="outline">Open Google Drive</Button>
            <Button variant="ghost">Share Notion wiki</Button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {docSections.map((section) => (
            <Card key={section.title} className="shadow-card">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{section.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Submission checklist</CardTitle>
            <CardDescription>Track what’s ready for FAST-NUCES Deliverable II.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {checklist.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl border border-border px-3 py-2">
                <p className="text-sm text-foreground">{item.label}</p>
                <span
                  className={`text-xs font-semibold rounded-full px-3 py-1 ${
                    item.status === "Done"
                      ? "bg-primary/10 text-primary"
                      : item.status === "In progress"
                      ? "bg-accent/20 text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Chapter outline</CardTitle>
            <CardDescription>Use this accordion as the running doc index.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="chapter-1" className="border border-border rounded-2xl px-4">
                <AccordionTrigger className="text-sm font-semibold">Chapter 01 – Introduction</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Problem statement, wardrobe misutilization data, motivation, and project scope.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="chapter-2" className="border border-border rounded-2xl px-4">
                <AccordionTrigger className="text-sm font-semibold">Chapter 02 – Project Vision</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Product vision board, success metrics, and sustainability drivers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="chapter-3" className="border border-border rounded-2xl px-4">
                <AccordionTrigger className="text-sm font-semibold">Chapter 03 – Related Applications</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Competitive landscape (StyleBook, Whering, Fashwell) plus academic references.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="chapter-4" className="border border-border rounded-2xl px-4">
                <AccordionTrigger className="text-sm font-semibold">Chapter 04 – SRS</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Functional requirements, NFRs (performance, privacy), data dictionary, and UI constraints.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="chapter-5" className="border border-border rounded-2xl px-4">
                <AccordionTrigger className="text-sm font-semibold">Chapter 05 – System Design</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Context diagram, component diagram, sequence diagrams for capture, virtual try-on, and feedback loop.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Documentation;

