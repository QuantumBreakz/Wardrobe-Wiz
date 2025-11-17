import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Search, Filter } from "lucide-react";

const categories = ["All", "Tops", "Bottoms", "Footwear", "Accessories"];

const mockItems = [
  {
    id: 1,
    name: "Coastal Linen Set",
    category: "Tops",
    color: "#f6e7c3",
    notes: "Breathable two-piece for warm commutes.",
    image: "/wardrobe/linen-set.jpg",
  },
  {
    id: 2,
    name: "Honey Knit",
    category: "Tops",
    color: "#d9a441",
    notes: "Layer under blazers for texture.",
    image: "/wardrobe/honey-knit.jpg",
  },
  {
    id: 3,
    name: "Textured Loafers",
    category: "Footwear",
    color: "#4a3828",
    notes: "Comfortable enough for longer walks.",
    image: "/wardrobe/loafers.jpg",
  },
  {
    id: 4,
    name: "Utility Shirt",
    category: "Tops",
    color: "#284b63",
    notes: "Bring out for creative sprints and studio time.",
    image: "/wardrobe/utility-shirt.jpg",
  },
];

const Wardrobe = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = mockItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Wardrobe</h1>
          <p className="text-muted-foreground mt-2">
            Manage and organize your clothing items
          </p>
        </div>
        <Button variant="hero" className="shrink-0">
          <Upload className="mr-2 h-4 w-4" />
          Upload Items
        </Button>
      </div>

      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search your wardrobe..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="w-full justify-start mb-6 overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="flex-shrink-0"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="group overflow-hidden border border-border/60">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm text-foreground">{item.name}</h3>
                        <span className="text-xs text-muted-foreground">{item.category}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.notes}</p>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full border border-border"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-xs text-muted-foreground">Palette ready</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No items found</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wardrobe;
