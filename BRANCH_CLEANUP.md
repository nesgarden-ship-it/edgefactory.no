# Branch Cleanup Recommendations

This document provides analysis and recommendations for cleaning up branches in the edgefactory.no repository.

## Current Branch Status

As of 2026-01-22, the following branches exist:

| Branch Name | SHA | Status | Recommendation |
|-------------|-----|--------|----------------|
| `main` | 1af199a | Production | **KEEP** - Protected |
| `copilot/cleanup-repo-structure` | 083bb71 | Active work | **MERGE then DELETE** |
| `copilot/update-site-background-and-email` | 78781c0 | Merged | **DELETE** |
| `copilot/create-bilingual-landing-page` | 8a28ccf | Alternative impl | **REVIEW then DELETE** |
| `feat/landing-bilingual-cashflow` | 1af199a | Same as main | **DELETE** |

## Detailed Analysis

### 1. main (KEEP)
- **SHA:** 1af199a
- **Status:** Production branch
- **Last Update:** 2026-01-22 09:38:29Z
- **Action:** Keep as protected production branch
- **Notes:** This is the authoritative source. Never delete.

### 2. copilot/cleanup-repo-structure (MERGE then DELETE)
- **SHA:** 083bb71
- **Status:** Current active work
- **Parent:** 1af199a (main)
- **Changes:** Added README.md and .gitignore
- **Action:** Merge to main after review, then delete
- **Notes:** This is the current PR branch. Once merged, it should be cleaned up.

### 3. copilot/update-site-background-and-email (DELETE)
- **SHA:** 78781c0
- **Status:** Already merged to main
- **Created:** 2026-01-22 09:23:30Z
- **Merged:** 2026-01-22 09:38:29Z (PR #1)
- **Action:** **DELETE immediately**
- **Command:** `git push origin --delete copilot/update-site-background-and-email`
- **Notes:** This work is already in main. No longer needed.

### 4. copilot/create-bilingual-landing-page (DELETE)
- **SHA:** 8a28ccf
- **Status:** Alternative implementation, never merged, NOT aligned with requirements
- **Created:** 2026-01-22 10:30:59Z
- **Changes:** Contains different approach:
  - Different `README.md` and `IMPLEMENTATION.md`
  - `content/landing-copy.js` - JavaScript content file
  - Different `index.html` implementation (30KB vs 7KB)
  - **Sales-focused approach** with:
    - Pricing and offers ("Offer A", "Offer B")
    - CTAs like "Bestill en 15-minutters passjekk" 
    - Contact forms with Calendly integration
    - Hero sections with primary/secondary CTAs
    - "What You Get" sections with deliverables
    - LocalStorage language switching
- **Action:** **DELETE** - This approach contradicts requirements
- **Command:** `git push origin --delete copilot/create-bilingual-landing-page`
- **Notes:** ⚠️ **This implementation is fundamentally incompatible with the stated requirements:**
  - Problem statement explicitly says: NO aggressive CTAs, NO "Book demo", NO product promises
  - Current requirements: "Low-friction contact", "Start a dialogue", NOT "Book demo" or "Get started"
  - This branch has aggressive CTAs, pricing offers, demo booking, etc.
  - The current simple approach on main (7KB, personal, dialogue-focused) is correct
  - **Nothing from this branch should be preserved or merged**

### 5. feat/landing-bilingual-cashflow (DELETE)
- **SHA:** 1af199a (identical to main)
- **Status:** Obsolete, same commit as main
- **Action:** **DELETE immediately**
- **Command:** `git push origin --delete feat/landing-bilingual-cashflow`
- **Notes:** This branch points to the exact same commit as main. It serves no purpose.

## Cleanup Sequence

Execute cleanup in this order:

### Phase 1: Immediate Deletions (Safe)
These branches can be deleted immediately without risk:

```bash
# Delete already-merged branch
git push origin --delete copilot/update-site-background-and-email

# Delete obsolete branch (same as main)
git push origin --delete feat/landing-bilingual-cashflow
```

### Phase 2: Delete Alternative Implementation
The `copilot/create-bilingual-landing-page` branch has a fundamentally different approach that contradicts the requirements. It can be deleted immediately:

```bash
# Delete incompatible alternative implementation
git push origin --delete copilot/create-bilingual-landing-page
```

**Why it should be deleted:** This branch implements a sales-focused landing page with aggressive CTAs ("Book demo"), pricing offers, and conversion-focused design. This directly contradicts the stated requirements which explicitly call for:
- NO aggressive CTAs
- NO "Book demo" or "Get started" buttons
- Low-friction contact approach
- "Start a dialogue" not conversion psychology

The current simple, personal approach on main is correct.

### Phase 3: Merge Current Work
After this PR is approved:

```bash
# Merge to main (via GitHub UI or CLI)
# Then delete the cleanup branch
git push origin --delete copilot/cleanup-repo-structure
```

## Future Branch Policy

To prevent branch accumulation:

1. **Delete branches after merging** - Set GitHub to auto-delete branches after PR merge
2. **Use descriptive names** - Format: `feature/short-description` or `fix/issue-description`
3. **One branch per task** - Don't create multiple branches for the same work
4. **Regular cleanup** - Review branches monthly, delete obsolete ones
5. **Protect main** - Require PR reviews before merging to main

## Verification

After cleanup, only these branches should remain:

- `main` (production)
- Any active feature branches currently being worked on

Verify with:

```bash
git branch -r
```

Expected output after full cleanup:

```
origin/main
```

## Risks and Mitigations

**Risk:** Deleting a branch that someone is working on
**Mitigation:** Check with team before deleting any branch except obviously obsolete ones

**Risk:** Losing important documentation or code
**Mitigation:** Review `copilot/create-bilingual-landing-page` thoroughly before deletion

**Risk:** Branch still has unmerged valuable changes
**Mitigation:** Use `git log` to verify branch has no unique valuable commits

## References

- GitHub Repository: https://github.com/nesgarden-ship-it/edgefactory.no
- Production Site: https://edgefactory.no
- Documentation: See README.md in repository root
