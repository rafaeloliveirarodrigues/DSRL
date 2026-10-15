import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Linkedin, Printer, RotateCcw, Share2 } from "lucide-react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ReadinessBadge } from "@/components/readiness-badge";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { computeResults, domains, levelInfo, progression, totalQuestions, type Answers } from "@/lib/dsrl";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "DSRL Self-Assessment" },
      { name: "description", content: "Answer 21 questions to see your digital sustainability readiness profile across seven domains." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "DSRL Self-Assessment" },
      { property: "og:description", content: "Map your digital sustainability readiness on a nine-level scale." },
    ],
  }),
  component: Assessment,
});

const KEY = "dsrl-assessment-v1";
const steps = domains.flatMap((d, di) => d.questions.map((q, qi) => ({ d, di, q, qi })));

function Assessment() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) ?? "null");
      if (s) { setAnswers(s.answers); setStep(s.step); setDone(s.done); }
    } catch { /* ignore */ }
  }, []);
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify({ answers, step, done }));
  }, [answers, step, done]);

  const reset = () => { setAnswers({}); setStep(0); setDone(false); };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        {done ? <Results answers={answers} onReset={reset} onEdit={() => { setDone(false); setStep(0); }} /> : (
          <Wizard answers={answers} setAnswers={setAnswers} step={step} setStep={setStep} onFinish={() => setDone(true)} />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function Wizard({ answers, setAnswers, step, setStep, onFinish }: {
  answers: Answers; setAnswers: (a: Answers) => void; step: number; setStep: (n: number) => void; onFinish: () => void;
}) {
  const current = steps[step] ?? steps[0];
  if (!current) return null;
  const { d, di, q, qi } = current;
  const chosen = answers[d.id]?.[qi];
  const answered = Object.values(answers).reduce((n, r) => n + Object.keys(r).length, 0);
  const last = step === steps.length - 1;

  const choose = (level: number) => setAnswers({ ...answers, [d.id]: { ...answers[d.id], [qi]: level } });

  return (
    <div>
      <div className="mb-8 flex gap-1.5">
        {domains.map((x, i) => (
          <div key={x.id} className={`h-1.5 flex-1 rounded-full ${i < di ? "bg-primary" : i === di ? "bg-accent" : "bg-muted"}`} />
        ))}
      </div>
      <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
        Domain {di + 1} of {domains.length} · {d.abbreviation}
      </p>
      <h2 className="mt-1 text-2xl text-muted-foreground">{d.name}</h2>
      <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">{q.question}</h1>
      <p className="mt-2 text-sm text-muted-foreground">Question {qi + 1} of {d.questions.length} · {answered}/{totalQuestions} answered</p>

      <div className="mt-8 space-y-3" role="radiogroup">
        {q.options.map((o) => {
          const active = chosen === o.level;
          return (
            <Button variant="outline" key={o.text} role="radio" aria-checked={active} onClick={() => choose(o.level)}
              className={`flex h-auto w-full items-center gap-4 whitespace-normal rounded-lg border p-5 text-left transition ${active ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-border bg-card hover:border-primary/50"}`}>
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${active ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                {active && <Check className="h-4 w-4" />}
              </span>
              <span className="flex-1">{o.text}</span>
              <span className="text-xs text-muted-foreground">Level {o.level}</span>
            </Button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 disabled:opacity-40">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <Button variant="outline" disabled={chosen === undefined} onClick={() => (last ? onFinish() : setStep(step + 1))}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground disabled:opacity-40">
          {last ? "See my results" : "Next"} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function Results({ answers, onReset, onEdit }: { answers: Answers; onReset: () => void; onEdit: () => void }) {
  const r = useMemo(() => computeResults(answers), [answers]);
  const chart = domains.map((d) => ({ domain: d.abbreviation, score: r.domainScores[d.id] }));
  const sorted = [...domains].sort((a, b) => (r.domainScores[a.id] ?? 0) - (r.domainScores[b.id] ?? 0));

  const share = async () => {
    const text = `My organization's DSRL readiness: Level ${r.overall} — ${r.level.name}.`;
    const url = window.location.origin;
    if (navigator.share) { try { await navigator.share({ title: "DSRL", text, url }); } catch { /* cancelled */ } }
    else { await navigator.clipboard.writeText(`${text} ${url}`); toast.success("Copied to clipboard"); }
  };

  const shareLinkedIn = () => {
    const text = `We just assessed our Digital Sustainability Readiness Level: Level ${r.overall}/9 — ${r.level.name}. Try the DSRL assessment:`;
    const url = window.location.origin;
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener");
  };

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Your readiness profile</p>
      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl bg-deep p-8 text-deep-foreground">
          <p className="text-sm opacity-70">Overall level</p>
          <p className="font-serif text-8xl leading-none">{r.overall}<span className="text-3xl opacity-50">/9</span></p>
          <p className="mt-4 font-serif text-2xl">{r.level.name}</p>
          <p className="mt-2 text-sm opacity-80">{progression[r.overall]}</p>
          <p className="mt-6 text-xs opacity-60">An average can hide your profile — read the domains below.</p>
        </div>
        <div className="h-80 rounded-2xl border border-border bg-card p-2">
          <ResponsiveContainer>
            <RadarChart data={chart} outerRadius="72%">
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="domain" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <PolarRadiusAxis domain={[0, 9]} tickCount={4} tick={false} axisLine={false} />
              <Radar dataKey="score" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2 className="mt-12 text-2xl">By domain</h2>
      <div className="mt-4 space-y-3">
        {domains.map((d) => {
          const s = r.domainScores[d.id] ?? 0;
          return (
            <div key={d.id} className="rounded-lg border border-border bg-card p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">{d.name}</p>
                <p className="shrink-0 text-sm"><span className="font-serif text-xl text-primary">{s}</span> · {levelInfo(s).name}</p>
              </div>
              <div role="meter" aria-label={`${d.name} readiness`} aria-valuemin={1} aria-valuemax={9} aria-valuenow={s}
                aria-valuetext={`Level ${s} of 9 — ${levelInfo(s).name}`} className="mt-4 flex items-center gap-2">
                <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full bg-primary ring-4 ring-primary/15" />
                <div aria-hidden="true" className="grid h-3 flex-1 grid-cols-9 gap-1 overflow-hidden rounded-full bg-muted p-0.5">
                  {Array.from({ length: 9 }, (_, i) => <span key={i} className={`rounded-sm ${i < s ? "bg-primary" : "bg-border"}`} />)}
                </div>
              </div>
              <div aria-hidden="true" className="mt-2 flex justify-between pl-7 text-xs text-muted-foreground"><span>1 · Awareness</span><span>9 · Leadership</span></div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl">{r.recs.title}</h2>
          <ul className="mt-4 space-y-2">
            {r.recs.items.map((i) => <li key={i} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{i}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl bg-accent/40 p-6">
          <h2 className="text-2xl">Where to focus first</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your lowest-scoring domains are the likeliest places to start.</p>
          <ol className="mt-4 space-y-2">
            {sorted.slice(0, 3).map((d) => <li key={d.id}><span className="font-medium">{d.abbreviation}</span> — {d.name} (level {r.domainScores[d.id]})</li>)}
          </ol>
        </div>
      </div>

      <section aria-labelledby="badge-title" className="mt-12 border-t border-border pt-8">
        <h2 id="badge-title" className="mb-5 text-2xl">Your readiness badge</h2>
        <ReadinessBadge level={r.overall} name={r.level.name} />
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        DSRL v0.1 is an initial discussion draft — a learning aid, not a certification. <Link to="/framework" className="underline">Read the manifesto</Link>.
      </p>

      <div className="no-print mt-8 flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground"><Printer className="h-4 w-4" /> Save as PDF</Button>
        <Button variant="outline" onClick={shareLinkedIn} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5"><Linkedin className="h-4 w-4" /> Share on LinkedIn</Button>
        <Button variant="outline" onClick={share} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5"><Share2 className="h-4 w-4" /> Share</Button>
        <Button variant="outline" onClick={onEdit} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5"><ArrowLeft className="h-4 w-4" /> Review answers</Button>
        <Button variant="outline" onClick={onReset} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5"><RotateCcw className="h-4 w-4" /> Start over</Button>
      </div>
    </div>
  );
}
