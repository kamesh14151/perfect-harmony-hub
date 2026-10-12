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
- Keep About, Tracks, Schedule, and Organizers in dedicated content routes with shared root navigation/footer; the home page contains only the intro, hero, registration and FAQ.
- Keep confirmed event settings and editable directory/content in browser-safe configuration/data modules so unknown information is not fabricated by presentation code.
- Use reusable event chrome and section components with CSS semantic tokens; this keeps theme, accessibility, and branding consistent.
- Probe the configured video asset in the browser and render a non-playing fallback until it is available; never ship a broken or fake video player.
- Keep placeholder portraits explicitly flagged in organizer data and separate official-logo settings from placeholder imagery so pending assets cannot be mistaken for real branding or photos.
- Store suggested schedule and policy content separately from confirmed event settings; suggestions must remain visibly pending approval so the countdown never treats a proposal as an official start time.
