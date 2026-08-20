# Portfolio Site Rebuild Brief

## Name
Tendai Dzuda (site should display the real name — no placeholders).

## Design direction: "research ledger"
Not a startup landing page. Think annotated manuscript / research journal, grounded in Tendai's actual world (academic research, data precision, literary sensibility) rather than generic AI-design defaults.

**Colour**
- Ink `#1C1F26` — primary text, near-black with blue undertone
- Paper `#EDEAE2` — background, cool parchment (deliberately not the cliché warm cream)
- Oxblood `#7A2E2E` — single accent, book-binding red (not terracotta)
- Verdigris `#5C6B5D` — secondary accent, muted ledger-green, used for labels/metadata
- Rule `#A8A296` — hairline borders and dividers

**Type**
- Display: Fraunces (serif, weight 500) — name, headings. Characterful, used with restraint.
- Body: Public Sans — About text, project descriptions.
- Mono: IBM Plex Mono — labels, metadata, location/contact block, stack tags. This is what signals "data" without a dark hacker theme.

**Layout**
- Header: name set large in serif, one-line positioning statement below it, with a small mono "colophon" block (location, focus, links) set to the side — like front matter in a journal.
- About: single restrained paragraph, no CV-style lists.
- Projects: annotated index rather than glossy cards. Each entry gets a small mono "fig. 01 / fig. 02" marginal label (footnote convention, ties to Tendai's actual academic writing), a serif title, a one-line description, and a mono metadata line for stack/tools.
- Hairline dividers between project entries, not cards with shadows.

**Motion**
Restrained only — soft fade-in per section on scroll, underline draws in on link hover. No ambient or looping animation.

**Signature element**
The "fig." marginalia system on project entries — the one deliberately memorable device, kept quiet everywhere else.

A visual mockup of this direction (hero + about + two project entries) was reviewed and approved before this brief was finalized.


## Context
Current site (10ndai.github.io) is unedited v0.dev template content — fake employer names, fake degrees, fake projects, placeholder/broken links (example.com, generic linkedin.com, tendai@example.com). None of it is real. This is a full content rebuild, not a restyle. Keep the existing stack (Next.js, TypeScript, Tailwind) — rebuild content and IA, not the framework.

## Scope for v1
Deliberately minimal. Experience and Research are being saved for the CV / a later version — not on this site yet. Reed & Carter positioning is not surfaced yet either. v1 is just: About, Projects, Contact/LinkedIn. Nothing hectic.

## Site structure

### 1. Hero
Name, one-line positioning statement. Not "Data Analyst" — something that captures the research + applied data science hybrid, without needing an Experience section to justify it. Draft options to write during build, not template copy.

### 2. About
Real, short bio. Harare-based. Enough to place who you are and what you're building toward, without turning into a CV. No employer list, no dates.

### 3. Projects
Case-study format (problem → approach → result), not just repo links. List now with real write-ups; add "View code" links as each repo goes live on GitHub:
- IndabaX Zimbabwe hackathon — loan default prediction (XGBoost/LightGBM) + Next.js loan officer dashboard, innovation prize entry
- MLOps end-to-end pipeline — UCI hospital readmission dataset, AWS-hosted, 4-week build
- FIFA World Cup prediction model — Dixon-Coles + Monte Carlo
- Pneumonia detector — collaboration with Sawera
- TheraPulse — wellness app for the Zimbabwean market
- CountaStock — POS/inventory tool

### 4. Contact
Real LinkedIn URL, real GitHub URL. Email optional if you'd rather route through LinkedIn only for v1.

## Deferred to later version / CV
- Experience (Mind at Heart, King's College London, Grey & Oak, PhD-adjacent research support)
- Research (TENDAI RCT, systematic review, Y-Mind)
- Credentials (RSS Fellowship, AI Fluency/Frameworks, GCP, AWS)
- Reed & Carter positioning

## Notes for build
- Pull real project details/metrics before writing case studies — don't let Claude Code invent numbers or outcomes.
- Verify every outbound link before shipping (this was the exact failure mode in the current site).
