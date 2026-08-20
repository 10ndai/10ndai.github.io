Rebuild my portfolio site at 10ndai.github.io. Full brief is in portfolio-rebuild-brief.md in this repo — read it first before touching anything.

Context: the current site is unedited v0.dev template content — fake employer names, fake degrees, fake projects, broken placeholder links (example.com, generic linkedin.com). None of it is real. This is a full content and design rebuild, not a restyle.

What to do:

1. Read portfolio-rebuild-brief.md for full content structure, v1 scope, and design tokens (colours, type, layout, the "fig." marginalia pattern for projects).

2. Keep the existing stack — Next.js, TypeScript, Tailwind. Rebuild the content and information architecture, not the framework.

3. v1 scope is deliberately minimal: Hero, About, Projects, Contact only. Do not add Experience, Research, or Credentials sections — those are explicitly deferred, listed at the bottom of the brief.

4. Implement the "research ledger" design direction from the brief exactly: the colour palette (ink/paper/oxblood/verdigris/rule), the Fraunces/Public Sans/IBM Plex Mono type pairing, the asymmetric header with mono colophon block, and the "fig. 01 / fig. 02" marginalia annotation on each project entry instead of tags or cards with shadows. Motion stays restrained — fade-in on scroll, underline draw on hover, nothing ambient or looping.

5. Projects section: use the six projects listed in the brief with real one-line descriptions (problem → approach → result). Do not invent metrics or outcomes — I'll fill in real numbers myself. Leave "View code" links pointing to placeholder repo URLs I'll swap in, clearly marked as TODO in a comment, rather than fabricating GitHub links.

6. About section: short, one paragraph, no CV-style bullet list, no employer names or dates.

7. Contact: real LinkedIn URL and GitHub URL — I'll supply these, flag if placeholders are still in the code when you're done.

8. Before finishing, grep the whole site for any leftover placeholder content from the old version (example.com, "Tech Solutions Inc", "University of Technology", tendai@example.com, generic template copy) and confirm none of it remains.

9. Responsive down to mobile, visible keyboard focus states, respects reduced-motion preference.

Ask me before deploying — I want to review the build first.
