import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Recycle, Clock, Droplets } from "lucide-react";

const stats = [
  { label: "Rewear rate", value: "42%", delta: "+12% vs last month" },
  { label: "Decision time", value: "6.5 min", delta: "-3.1 min per session" },
  { label: "Closet coverage", value: "67%", delta: "+9% items rotated" },
  { label: "Sustainability score", value: "82 / 100", delta: "+4 pts YoY" },
];

const Analytics = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Insights & analytics</h1>
        <p className="text-muted-foreground mt-2">
          Mock dashboard showing the metrics we’ll report once the backend is wired up.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-primary mt-1">{stat.delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Usage breakdown</CardTitle>
            <CardDescription>Placeholder stacked bars for tops, bottoms, shoes, and accessories.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {["Tops", "Bottoms", "Footwear", "Accessories"].map((category, index) => (
              <div key={category}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>{category}</span>
                  <span className="text-muted-foreground">{[68, 53, 47, 32][index]}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${[68, 53, 47, 32][index]}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Week overview</CardTitle>
            <CardDescription>Daily outfit generations and feedback logs (mocked).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {[...Array(7)].map((_, day) => (
              <div
                key={day}
                className="flex items-center justify-between rounded-2xl border border-border px-3 py-2"
              >
                <span>Day {day + 1}</span>
                <span>{Math.floor(Math.random() * 4) + 2} outfits · {Math.floor(Math.random() * 6) + 1} feedback</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Impact highlights</CardTitle>
          <CardDescription>Story-driven metrics presented with icons.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-border p-4 space-y-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-foreground">Confidence spikes</p>
            <p className="text-sm text-muted-foreground">+18% more outfit approvals week over week.</p>
          </div>
          <div className="rounded-2xl border border-border p-4 space-y-2">
            <Recycle className="h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-foreground">Reuse focus</p>
            <p className="text-sm text-muted-foreground">Eight rarely worn items reintroduced this month.</p>
          </div>
          <div className="rounded-2xl border border-border p-4 space-y-2">
            <Clock className="h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-foreground">Faster prep</p>
            <p className="text-sm text-muted-foreground">Decision time cut in half during weekday mornings.</p>
          </div>
          <div className="rounded-2xl border border-border p-4 space-y-2">
            <Droplets className="h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-foreground">Weather wins</p>
            <p className="text-sm text-muted-foreground">Humidity-aware suggestions triggered 11 times.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Data export</CardTitle>
          <CardDescription>Future button for exporting CSV / PDF snapshots.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Badge variant="secondary">CSV</Badge>
          <Badge variant="secondary">PDF</Badge>
          <Badge variant="secondary">Notion sync</Badge>
          <Badge variant="secondary">API (coming soon)</Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;

