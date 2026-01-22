# Edge Factory - Landing Page

A minimalistic, bilingual landing page for Edge Factory, focused on establishing credibility and initiating professional dialogue about AI governance in operations.

## Purpose

This site serves as a trust-building landing page for Edge Factory during the early commercial validation phase. It is designed to:

- Establish credibility quickly
- Explain what Edge Factory actually does (without buzzwords)
- Clarify the target audience
- Demonstrate real methodology and systems thinking
- Invite dialogue and potential pilot projects

## Site Structure

```
edgefactory.no/
├── index.html          # Norwegian version (primary)
├── en/
│   └── index.html      # English version
├── CNAME               # Domain configuration for GitHub Pages
└── README.md           # This file
```

## Language Support

The site is fully bilingual with semantic parity:

- **Norwegian** (`/`) - Primary language, served from root
- **English** (`/en/`) - Equal secondary language
- Simple, robust language switching via header links

## Content Themes

The site communicates:

- Deterministic AI governance
- Traceability and auditability
- Decision history and control in complex systems
- The distinction between "AI used" vs "AI controlled in operations"

**Intentionally excluded:**
- Product promises or roadmaps
- Hype or "AI will change everything" messaging
- Generic consultant language
- Aggressive CTAs or conversion psychology

## Design Principles

- **Minimalistic**: Clean, focused layout with maximum signal-to-noise ratio
- **Calm**: No sales colors, no aggressive calls-to-action
- **Technical dignity**: Professional presentation that builds trust
- **Accessibility**: Semantic HTML, clear structure, keyboard navigation

## Deployment

This site is deployed via GitHub Pages:

1. Hosted repository: `nesgarden-ship-it/edgefactory.no`
2. Domain: `edgefactory.no` (configured via CNAME)
3. Deployment: Automatic on push to `main` branch
4. No build process required - static HTML

### Deploying Changes

1. Make changes on a feature branch
2. Test locally (see Development section)
3. Create a pull request to `main`
4. After review and approval, merge to `main`
5. GitHub Pages automatically deploys the update

## Development

### Local Testing

Serve the site locally using any static web server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (with npx)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then visit:
- Norwegian: http://localhost:8000/
- English: http://localhost:8000/en/

### Making Content Changes

1. Edit `index.html` for Norwegian content
2. Edit `en/index.html` for English content
3. Ensure semantic parity between languages
4. Test both language versions locally
5. Verify language switching works correctly

### Style Changes

Both HTML files contain inline CSS in the `<style>` section. To maintain consistency:

1. Update CSS variables in `:root` for color scheme changes
2. Apply style changes to both files identically
3. Test responsive behavior on mobile devices

## Branch Management

### Active Branches

- **main**: Production branch - protected, only updated via approved PRs
- **copilot/cleanup-repo-structure**: Current cleanup and documentation work

### Branch Cleanup Recommendations

The following branches should be reviewed for cleanup:

1. **copilot/update-site-background-and-email** - Already merged to main, can be deleted
2. **copilot/create-bilingual-landing-page** - Contains alternative implementation with extra files (README, IMPLEMENTATION.md, content folder) - evaluate if anything should be preserved before deletion
3. **feat/landing-bilingual-cashflow** - Same commit as main, likely obsolete - verify before deletion

### Branch Policy

- One feature branch per task
- Branch naming: `feature/description` or `fix/description`
- Delete branches after merging
- Never commit directly to `main`

## Technical Details

### Technology Stack

- Pure HTML5 with inline CSS
- No JavaScript frameworks
- No build process
- No external dependencies
- No tracking or analytics

### Browser Support

Modern browsers with CSS Grid and CSS Custom Properties support:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

### Performance

- Minimal page weight (~6.7KB per page, including inline CSS)
- Single request, no external resources
- Instant page loads

## Contact Information

For questions about the site or Edge Factory:

- Email: ole@edgefactory.no
- Phone: +47 975 62 612
- Name: Ole Petter Valderhaug
- Role: Systems Engineering & Architecture

## Operational Guidelines

When making changes to this repository:

1. **Never modify main directly** - use feature branches and PRs
2. **Test locally first** - verify both language versions work
3. **Maintain semantic parity** - ensure Norwegian and English versions convey the same meaning
4. **Keep it simple** - avoid adding frameworks, libraries, or complexity
5. **Document changes** - update this README if structure changes

## License

© 2026 Ole Petter Valderhaug / Edge Factory. All rights reserved.
