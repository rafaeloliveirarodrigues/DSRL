import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
          <Leaf className="h-5 w-5" /> DSRL
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/framework" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground font-medium" }}>
            Framework
          </Link>
          <Link to="/assessment" className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90">
            Start assessment
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          Digital Sustainability Readiness Level · Initial manifesto v0.1 ·{" "}
          <a href="https://digisustainability.io/" target="_blank" rel="noreferrer" className="underline hover:text-foreground">digisustainability.io</a>
          {" "}·{" "}
          <a href="mailto:ror@digisustainability.io" className="underline hover:text-foreground">ror@digisustainability.io</a>
        </p>
        <p>{' Developed with love at Impact Hub Zürich                · A flagship project of digisustainability.io'}</p>
      </div>
    </footer>
  );
}
