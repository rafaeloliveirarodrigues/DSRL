import raw from "@/data/dsrl.json";

export type Option = { text: string; level: number };
export type Question = { question: string; options: Option[] };
export type Domain = {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  color: string;
  questions: Question[];
};
export type Level = { level: number; name: string; description: string; color: string };

export const domains = raw.domains as Domain[];
export const levels = raw.levels as Level[];
export const recommendations = raw.recommendations as Record<
  "low" | "medium" | "high",
  { title: string; items: string[] }
>;

/** Manifesto v0.1 indicative progression for each level. */
export const progression: Record<number, string> = {
  1: "No established recognition or practice in the domain.",
  2: "Initial understanding; actions remain informal or isolated.",
  3: "Early data, review, or assessment begins to establish a baseline.",
  4: "Goals, responsibilities, and plans are defined.",
  5: "Approaches are tested in bounded settings and reviewed.",
  6: "Practices with evidence of value are expanded and integrated into operations.",
  7: "Responsibilities, processes, and monitoring are embedded across the organization.",
  8: "Evidence and feedback support ongoing adaptation and optimization.",
  9: "The organization demonstrates learning and leadership beyond its own boundaries.",
};

/** answers[domainId][questionIndex] = chosen level */
export type Answers = Record<string, Record<number, number>>;

export const totalQuestions = domains.reduce((n, d) => n + d.questions.length, 0);

export function levelInfo(score: number): Level {
  return levels.find((l) => l.level === score) ?? levels[0]!;
}

export function computeResults(answers: Answers) {
  const domainScores: Record<string, number> = {};
  let sum = 0;
  for (const d of domains) {
    const vals = Object.values(answers[d.id] ?? {});
    const s = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 1;
    domainScores[d.id] = s;
    sum += s;
  }
  const overall = Math.round(sum / domains.length);
  const tier = overall <= 3 ? "low" : overall <= 6 ? "medium" : "high";
  return { domainScores, overall, level: levelInfo(overall), recs: recommendations[tier] };
}
