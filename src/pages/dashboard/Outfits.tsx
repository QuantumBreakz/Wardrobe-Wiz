import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, BookmarkCheck, Share2 } from "lucide-react";

const savedOutfits = [
  {
    title: "Investor Lunch",
    mood: "Calm confidence",
    tags: ["Navy", "Honey knit", "Loafers"],
    image: "/wardrobe/linen-set.jpg",
  },
  {
    title: "Studio Sprint",
    mood: "Functional",
    tags: ["Utility shirt", "Graphic tee", "Sneakers"],
    image: "/wardrobe/utility-shirt.jpg",
  },
  {
    title: "Evening Gala",
    mood: "Statement",
    tags: ["Silk camisole", "Tailored trousers", "Metallic heels"],
    image: "/wardrobe/honey-knit.jpg",
  },
];

const Outfits = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Saved outfits & lookbook</h1>
          <p className="text-muted-foreground mt-2">
            Review what WardrobeWiz has generated so far. Pin favorites, share with friends, or refine a look.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="hero">
            <Sparkles className="h-4 w-4 mr-2" />
            Generate new look
          </Button>
          <Button variant="secondary">
            <Share2 className="h-4 w-4 mr-2" />
            Share board
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {savedOutfits.map((outfit) => (
          <Card key={outfit.title} className="shadow-card overflow-hidden">
            <div className="aspect-[4/3]">
              <img src={outfit.image} alt={outfit.title} className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{outfit.mood}</p>
                  <h3 className="text-lg font-semibold text-foreground">{outfit.title}</h3>
                </div>
                <Button variant="ghost" size="icon">
                  <BookmarkCheck className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {outfit.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Lookbook tabs</CardTitle>
          <CardDescription>Drag-and-drop interactions will come later; for now preview the tab structure.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="day" className="space-y-4">
            <TabsList className="justify-start overflow-x-auto">
              <TabsTrigger value="day">Daytime</TabsTrigger>
              <TabsTrigger value="night">Evening</TabsTrigger>
              <TabsTrigger value="weekend">Weekend</TabsTrigger>
            </TabsList>
            <TabsContent value="day" className="text-sm text-muted-foreground">
              Breezy commutes, client coffee chats, and hybrid workdays—WardrobeWiz proposes looks that stay comfortable yet polished.
            </TabsContent>
            <TabsContent value="night" className="text-sm text-muted-foreground">
              Statement accessories, elevated fabrics, and confident silhouettes for dinners or galas.
            </TabsContent>
            <TabsContent value="weekend" className="text-sm text-muted-foreground">
              Lean into textures and relaxed fits. Mix the utility shirt with denim or layer the honey knit over shorts for coastal walks.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Outfits;

