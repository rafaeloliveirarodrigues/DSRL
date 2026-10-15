import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { domains, levels, totalQuestions } from "@/lib/dsrl";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DSRL — Digital Sustainability Readiness Level" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "description", content: "Assess your organization's digital sustainability readiness across seven domains on a nine-level maturity scale." },
      { property: "og:title", content: "DSRL — Digital Sustainability Readiness Level" },
      { property: "og:description", content: "A free self-assessment across seven domains and nine maturity levels, from digisustainability.io." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
          <p className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
            digisustainability.io · Flagship project
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            Digital progress should advance <em className="text-primary">human and planetary</em> well-being.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The Digital Sustainability Readiness Level helps organizations consider digital transformation and
            sustainability together — across seven connected domains and a nine-level progression.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/assessment" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
              Take the assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/framework" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-muted">
              <FileText className="h-4 w-4" /> Read the manifesto
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{totalQuestions} questions · about 8 minutes · nothing leaves your browser</p>
        </section>

        <section className="bg-deep py-20 text-deep-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl md:text-4xl">Seven connected domains</h2>
            <p className="mt-3 max-w-2xl opacity-80">Connected lenses rather than independent silos.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {domains.map((d, i) => (
                <div key={d.id} className="rounded-xl border border-deep-foreground/15 p-6">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-3xl opacity-50">0{i + 1}</span>
                    <span className="text-xs font-semibold tracking-widest opacity-70">{d.abbreviation}</span>
                  </div>
                  <h3 className="mt-4 text-xl">{d.name}</h3>
                  <p className="mt-2 text-sm opacity-75">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl md:text-4xl">A nine-level progression</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            From limited awareness toward integrated, adaptive and transformative practice. A profile, not a verdict.
          </p>
          <ol className="mt-10 grid gap-2 md:grid-cols-9">
            {levels.map((l) => (
              <li key={l.level} className="flex gap-3 rounded-lg border border-border bg-card p-4 md:flex-col" style={{ borderTop: `4px solid ${l.color}` }}>
                <span className="font-serif text-2xl text-primary">{l.level}</span>
                <span className="text-sm font-medium leading-snug">{l.name}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
