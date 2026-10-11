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

## Project architecture
- Use a single scrolling index route for the event experience because the approved brief explicitly requires smooth section navigation and a fixed narrative sequence.
- Keep confirmed event settings and editable directory/content in browser-safe configuration/data modules so unknown information is not fabricated by presentation code.
- Use reusable event chrome and section components with CSS semantic tokens; this keeps theme, accessibility, and branding consistent.
- Probe the configured video asset in the browser and render a non-playing fallback until it is available; never ship a broken or fake video player.
