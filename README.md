# Chaima Touj — Developer Portfolio

A responsive, animated portfolio for **Chaima Touj**, Junior Full Stack Web Developer specializing in the MERN stack.

## What's included

- Original dark-purple / anime-inspired portfolio identity.
- Dark and light themes, with the selected theme saved in `localStorage`.
- GSAP + ScrollTrigger section reveal animations with reduced-motion support.
- CV information based on the supplied CV, including education, experience, skills, languages and certifications.
- 16 distinct website projects supplied by Chaima, each with a preview image and a locally hosted project preview.
- Project detail modal, category filters and search.
- Contact form that opens the visitor's email application using `mailto:` (it does not claim to send mail from a server).
- Original CV PDF available from the CV modal.

## Run locally

**Requirements:** Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

1. Push this project to a GitHub repository owned by Chaima.
2. In Vercel, import that repository.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy. No Gemini API key is required for this portfolio.

## Project previews

The 16 project source sites and their assets are stored under `public/projects/<project-slug>/`. Their preview routes are listed in `src/data/portfolioData.ts` and are served as static pages from `/projects/<project-slug>/index.html`.

The independent Ralph Lauren-inspired concept is clearly labelled as unofficial and is not affiliated with the brand.

## Personal information

Portfolio data is maintained in `src/data/portfolioData.ts`. The downloadable CV is stored at `public/cv/Chaima_Touj_CV.pdf`.

Before publishing, Chaima should verify all contact details, project previews, and any content she has permission to make public.
