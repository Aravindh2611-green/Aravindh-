# Aravindh R. — Portfolio

A responsive React and Vite portfolio for professional background, internship experience, skills, projects, and resume.

## Run locally

```sh
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` to validate changes and create the production bundle.

## Contact form delivery

The contact form sends messages through the existing EmailJS service and template. In the EmailJS dashboard, set the template recipient to the portfolio inbox and use `{{name}}`, `{{email}}`, and `{{message}}` in the template. The required EmailJS public configuration is in `src/pages/Contact.jsx`; no email password or private server credential belongs in the frontend.

The form's Subject is included at the start of the submitted message body because the current template uses the three existing variables above. A successful form response requires EmailJS to resolve the send request successfully. Verify actual delivery in the configured inbox.

## Resume and projects

The downloadable resume is `src/assets/resume.pdf`. Projects that are not publicly deployed are identified as local/showcase work; the Fee Management System's source and technology stack were not included in this repository and are not claimed as verified.

## AI Creative Studio

The portfolio's AI Creative Studio showcases three vertical storytelling videos stored in `public/videos/`, with custom-generated poster images designed to match the supplied videos. Use the AI Studio link in the navigation to view the projects and open the responsive video player.
