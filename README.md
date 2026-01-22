# Edge Factory Landing Page

A bilingual (Norwegian/English) landing page for Edge Factory, focused on credibility, lead capture, and fast delivery of governance and compliance solutions for AI in production.

## Overview

This is a static HTML site optimized for:
- **Credibility**: Evidence-based messaging, no hype
- **Lead Capture**: Contact form with Calendly integration
- **Fast Sales**: Two concrete fixed-price offers with clear boundaries
- **SEO**: Complete meta tags, OpenGraph, language alternates
- **Accessibility**: WCAG-compliant with proper ARIA labels and keyboard navigation
- **Performance**: No heavy frameworks, minimal dependencies, fast load times

## Structure

```
/
├── index.html              # Norwegian landing page (default)
├── en/
│   └── index.html         # English landing page
├── content/
│   └── landing-copy.js    # Centralized bilingual content (for reference)
├── CNAME                  # Domain configuration for GitHub Pages
└── README.md              # This file
```

## Features

### 1. Hero Section
- Clear value proposition
- Two CTAs: Primary (Book 15-min fit check) and Secondary (See what you get)

### 2. What You Get
- 4 concrete deliverables: Evidence Pack, SSOT Snapshot, Decision Trail, Documentation

### 3. Who It's For (ICP)
- Compliance & GRC Leadership
- Security & SOC Teams
- IT & Platform Leadership

### 4. How It Works
- 5-step process from intake to delivery

### 5. Why Edge Factory
- 5 differentiators: Deterministic governance, Evidence-first, Audit-ready artifacts, Reversible/traceable, Fast delivery

### 6. Offers
Two fixed-price offers with clear scope:
- **Pre-Audit SSOT Snapshot** (3 days)
- **Incident Evidence Pack** (48 hours)

Each offer includes:
- Scope bullets
- Input requirements
- Output artifacts
- "Not included" boundaries (to prevent scope creep)

### 7. Contact Section
- Calendly integration for direct booking
- Contact form with mailto fallback
- Fields: name, company, email, role, message, checkbox for document sharing

### 8. Footer
- Company info
- Contact details
- Privacy note (GDPR-compliant)

## Internationalization

### Language Detection
- Default language: Norwegian
- Auto-detects browser language on first visit (if English, redirects to /en/)
- Stores preference in localStorage
- Manual language toggle in header

### Adding/Editing Content
All content is embedded in the HTML files for simplicity. To update copy:

1. Edit the Norwegian version in `index.html`
2. Edit the English version in `en/index.html`
3. The `content/landing-copy.js` file is provided as a reference structure but is not actively used

## Development

### Local Testing
```bash
# Start a local web server
python3 -m http.server 8080

# Open in browser
# Norwegian: http://localhost:8080/
# English: http://localhost:8080/en/
```

### File Editing
The site uses vanilla HTML/CSS/JavaScript. No build process required.

To make changes:
1. Edit HTML files directly
2. Test in browser
3. Commit and push to GitHub

## Deployment

This site is hosted on **GitHub Pages**.

### Automatic Deployment
- Push to `main` branch (or configured branch)
- GitHub Pages automatically deploys changes
- Available at: https://edgefactory.no/

### Manual Deployment
Not required for GitHub Pages. Just push to the repository.

## SEO

Each page includes:
- Title and description meta tags
- OpenGraph tags for social sharing
- Canonical URLs
- Language alternates (`hreflang` tags)
- Proper heading hierarchy (H1-H4)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Skip to content link
- Keyboard navigation support
- Sufficient color contrast (WCAG AA compliant)
- Focus visible styles
- Form labels and required field indicators

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Works without JavaScript (degrades gracefully)

## Form Handling

The contact form uses a `mailto:` fallback to open the user's email client. 

**To implement a backend form handler:**
1. Replace the form submission handler in the `<script>` section
2. POST form data to your backend endpoint
3. Display success/error messages using the `.form-message` element

Example services:
- Formspree
- Netlify Forms
- Custom backend API

## Customization

### Colors
Update CSS variables in the `<style>` section:
```css
:root {
  --accent-color: #3b82f6;  /* Primary blue */
  --bg-color: #ffffff;
  --text-main: #1e293b;
  /* etc. */
}
```

### Calendly Link
Update the Calendly URL in both `index.html` and `en/index.html`:
```html
<a href="https://calendly.com/edgefactory/15min" ...>
```

### Contact Email
Update the email address in:
- Form submission handler (`mailto:ole@edgefactory.no`)
- Footer contact section

## Performance

- No external dependencies
- Inline CSS (no separate stylesheet)
- Minimal JavaScript (< 2KB)
- Total page size: ~30KB
- Load time: < 1s on fast connections

## License

© 2026 Edge Factory. All rights reserved.

## Contact

For questions or support:
- Email: ole@edgefactory.no
- Phone: +47 975 62 612
