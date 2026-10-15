import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { domains, levels, progression } from "@/lib/dsrl";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: "The DSRL Manifesto — Framework" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "description", content: "Purpose, principles, seven domains and nine levels of the Digital Sustainability Readiness Level framework." },
      { property: "og:title", content: "The DSRL Manifesto" },
      { property: "og:description", content: "A first statement on digital sustainability readiness — initial discussion draft v0.1." },
    ],
  }),
  component: Framework,
});

function Framework() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Initial manifesto · v0.1 · October 2026</p>
        <h1 className="mt-3 text-5xl font-semibold">The DSRL Manifesto</h1>
        <p className="mt-2 text-xl text-muted-foreground">A first statement on digital sustainability readiness</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Rafael Oliveira Rodrigues ·{" "}
          <a href="https://digisustainability.io/" target="_blank" rel="noreferrer" className="underline hover:text-foreground">digisustainability.io</a>
          {" "}·{" "}
          <a href="mailto:ror@digisustainability.io" className="underline hover:text-foreground">ror@digisustainability.io</a>
        </p>
        <p className="mt-1 text-sm text-muted-foreground">After 1 year of review, this is the first manifesto — produced with love at Impact Hub Zurich.</p>
        <a href="/DSRL_Manifesto.tex" download className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-muted">
          <Download className="h-4 w-4" /> Download LaTeX source
        </a>

        <blockquote className="my-10 border-l-4 border-primary pl-5 font-serif text-2xl italic text-secondary">
          Digital progress should advance human and planetary well-being, not make either an afterthought.
        </blockquote>

        <div className="space-y-5 leading-relaxed">
          <p>
            The Digital Sustainability Readiness Level (DSRL) is a proposed framework for helping organizations consider
            digital transformation and sustainability together. It asks two connected questions: how can digital
            capabilities contribute to positive environmental and social outcomes, and how can the impacts of digital
            systems themselves be understood and reduced?
          </p>
          <p className="text-muted-foreground">
            It is a starting point for discussion and validation, not a completed standard, certification scheme, or
            claim of demonstrated impact.
          </p>
        </div>

        <h2 className="mt-14 text-3xl">Seven connected domains</h2>
        <ol className="mt-6 space-y-4">
          {domains.map((d, i) => (
            <li key={d.id} className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">{i + 1} · {d.abbreviation}</p>
              <h3 className="mt-1 text-xl">{d.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.description}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 text-3xl">A nine-level progression</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          {levels.map((l) => (
            <div key={l.level} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-border bg-card p-4 last:border-0">
              <span className="font-serif text-2xl text-primary">{l.level}</span>
              <div>
                <p className="font-medium">{l.name}</p>
                <p className="text-sm text-muted-foreground">{progression[l.level]}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          An organization may be at different levels across domains; a single average should not hide that profile.
        </p>

        <h2 className="mt-14 text-3xl">How DSRL should be used</h2>
        <p className="mt-4 leading-relaxed">
          As a structured self-assessment and learning aid: define the scope, gather relevant evidence, involve people
          with different responsibilities and perspectives, describe uncertainty, and turn findings into prioritized
          actions.
        </p>
        <Link to="/assessment" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
          Start the self-assessment
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
