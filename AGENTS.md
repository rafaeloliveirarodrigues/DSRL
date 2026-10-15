<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Assessment content (domains, questions, levels, recommendations) lives in src/data/dsrl.json; scoring in src/lib/dsrl.ts. Why: keeps the framework editable without touching UI.
- Render and download the readiness badge from the same canvas in the dedicated badge component, using global theme tokens. Why: the preview and exported result must stay identical.
