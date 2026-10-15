# DSRL — Digital Sustainability Readiness Level

A self-assessment across seven domains and a nine-level maturity model. Flagship project of digisustainability.io.

- `DSRL_Manifesto.tex` — the initial manifesto (v0.1), also downloadable from the Framework page.
- `src/data/dsrl.json` — domains, questions, levels and recommendations (migrated from the original app).

Built with TanStack Start, React and Tailwind CSS.

```sh
npm i
npm run dev
```

## Merging into the existing DSRL repository

This app is meant to live in the existing `rafaeloliveirarodrigues/DSRL` repository. Merge it **without destructive replacement**:

1. Clone the existing repo and create a branch: `git clone https://github.com/rafaeloliveirarodrigues/DSRL && cd DSRL && git checkout -b lovable-app`.
2. Copy this project's files in, **except** do not overwrite the repo's existing `DSRL_Manifesto.tex` blindly — the updated manifesto here carries the current author/contact details. Compare both versions and keep the updated one at the same path (`DSRL_Manifesto.tex` at the repo root). Everything else in this project is additive.
3. The original app's `index.html`, `app.js` and `style.css` are superseded by `src/`; keep or remove them as you prefer — nothing here depends on them.
4. Commit, push the branch, and open a pull request so the merge is reviewable: `git add -A && git commit -m "Add Lovable DSRL app" && git push -u origin lovable-app`.

Never use `git push --force` against `main`; the manifesto and repository history must be preserved.
