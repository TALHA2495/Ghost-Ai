"use client";

import { Sparkles, SlidersHorizontal, SquareTerminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const tokenRows = [
  ["Base", "bg-base", "#080809"],
  ["Surface", "bg-surface", "#111114"],
  ["Elevated", "bg-elevated", "#18181c"],
  ["Subtle", "bg-subtle", "#1e1e23"],
  ["Border", "border-surface-border", "#2a2a30"],
  ["Brand", "text-brand", "#00c8d4"],
  ["AI", "text-ai-text", "#8b82ff"],
  ["Muted copy", "text-copy-muted", "#808090"],
];

const layerRows = [
  "Project shell",
  "Canvas surface",
  "Inspector panel",
  "AI composer",
  "Spec preview",
  "Share dialog",
  "Connection status",
  "Prompt history",
  "Node editor",
  "Template browser",
];

export function DesignSystemShowcase() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-base text-copy-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,212,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(100,87,249,0.16),transparent_26%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between rounded-3xl border border-surface-border bg-surface/80 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-dim text-brand">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-copy-faint">
                Design System
              </p>
              <h1 className="text-sm font-semibold text-copy-primary">
                Ghost AI foundation preview
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs text-copy-secondary">
              Dark only
            </span>
            <span className="rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs text-copy-secondary">
              shadcn-ready
            </span>
          </div>
        </header>

        <div className="grid flex-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="grid gap-6">
            <Card className="border-surface-border bg-surface/90">
              <CardHeader className="space-y-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs uppercase tracking-[0.22em] text-copy-secondary">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-brand" />
                  UI primitives
                </div>
                <div className="max-w-2xl space-y-3">
                  <CardTitle className="text-3xl font-semibold tracking-tight">
                    A dark technical workspace with reusable primitives.
                  </CardTitle>
                  <CardDescription className="max-w-xl text-base leading-7 text-copy-secondary">
                    Buttons, cards, dialogs, inputs, tabs, textarea, and scroll
                    areas now share the same tokenized palette and radius scale.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="project-name" className="text-sm text-copy-secondary">
                      Project name
                    </label>
                    <Input
                      id="project-name"
                      defaultValue="Ghost AI architecture workspace"
                      className="bg-elevated"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="prompt" className="text-sm text-copy-secondary">
                      AI prompt
                    </label>
                    <Textarea
                      id="prompt"
                      defaultValue="Design a resilient event-driven system with clear boundaries, collaborative editing, and spec generation."
                      className="min-h-32 bg-elevated"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:justify-items-end">
                  <Button size="lg" className="w-full md:w-auto">
                    Generate architecture
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full md:w-auto">
                    Save draft
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="w-full md:w-auto">
                        Open preview dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Workspace preview</DialogTitle>
                        <DialogDescription>
                          The dialog primitive follows the same dark surface, border,
                          and focus-ring tokens as the rest of the system.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-3 rounded-2xl border border-surface-border bg-elevated p-4">
                        <div className="flex items-center gap-2 text-sm text-copy-secondary">
                          <SquareTerminal className="h-4 w-4 text-brand" />
                          Liveblocks canvas shell
                        </div>
                        <p className="text-sm leading-6 text-copy-muted">
                          This preview proves the primitives import cleanly and stay
                          visually consistent without leaking starter light styling.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2 border-t border-surface-border pt-6">
                <span className="rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs text-copy-secondary">
                  cn() helper verified
                </span>
                <span className="rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs text-copy-secondary">
                  Lucide icons installed
                </span>
                <span className="rounded-full border border-surface-border bg-elevated px-3 py-1 text-xs text-copy-secondary">
                  Tokenized Tailwind theme
                </span>
              </CardFooter>
            </Card>

            <Card className="border-surface-border bg-surface/90">
              <CardHeader>
                <CardTitle className="text-xl">Component usage</CardTitle>
                <CardDescription>
                  A quick view of the content patterns these primitives now support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tokens" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="tokens">Tokens</TabsTrigger>
                    <TabsTrigger value="layers">Layers</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="tokens" className="mt-4">
                    <ScrollArea className="h-72 rounded-2xl border border-surface-border bg-elevated">
                      <div className="divide-y divide-surface-border">
                        {tokenRows.map(([label, utility, value]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between gap-4 px-4 py-3"
                          >
                            <div>
                              <p className="text-sm font-medium text-copy-primary">
                                {label}
                              </p>
                              <p className="text-xs text-copy-muted">{utility}</p>
                            </div>
                            <code className="font-mono text-xs text-copy-secondary">
                              {value}
                            </code>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="layers" className="mt-4">
                    <ScrollArea className="h-72 rounded-2xl border border-surface-border bg-elevated">
                      <div className="grid gap-2 p-4">
                        {layerRows.map((layer, index) => (
                          <div
                            key={layer}
                            className={cn(
                              "flex items-center justify-between rounded-xl border px-3 py-2 text-sm",
                              index % 2 === 0
                                ? "border-surface-border bg-subtle"
                                : "border-surface-border bg-surface",
                            )}
                          >
                            <span>{layer}</span>
                            <span className="font-mono text-xs text-copy-muted">
                              0{index + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="notes" className="mt-4">
                    <div className="grid gap-3 rounded-2xl border border-surface-border bg-elevated p-4 text-sm leading-6 text-copy-secondary">
                      <p>
                        Cards use deeper surfaces, buttons rely on the accent palette,
                        and dialogs stay centered with a strong border and backdrop blur.
                      </p>
                      <p>
                        The page intentionally avoids the starter scaffold and shows the
                        palette in a way that feels like a real collaborative workspace.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          <aside className="grid gap-6">
            <Card className="border-surface-border bg-surface/90">
              <CardHeader>
                <CardTitle className="text-xl">Theme checklist</CardTitle>
                <CardDescription>
                  The design system now exposes the utility names the rest of the app
                  will depend on.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  "bg-base / bg-surface / bg-elevated / bg-subtle",
                  "text-copy-primary / secondary / muted / faint",
                  "border-surface-border / border-surface-border-subtle",
                  "text-brand / bg-brand-dim / text-ai-text",
                  "rounded-xl / rounded-2xl / rounded-3xl",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-surface-border bg-elevated px-3 py-2 text-sm text-copy-secondary"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-surface-border bg-surface/90">
              <CardHeader>
                <CardTitle className="text-xl">Responsive shell</CardTitle>
                <CardDescription>
                  The showcase scales from one column on mobile to a two-column editor
                  style workspace on desktop.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-copy-secondary">
                <p>
                  Inputs, tabs, scrollable areas, and modal content all use the same
                  foundational tokens, which keeps the future editor shell coherent.
                </p>
                <p>
                  This also gives us a fast visual smoke test for the new shared helper
                  and primitives.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
