// Landing page content for bilingual support (Norwegian/English)
// This file centralizes all copy to make updates easier

const landingContent = {
  no: {
    // Meta & SEO
    meta: {
      title: "Edge Factory | Deterministisk AI-styring for compliance og sikkerhet",
      description: "Få kontroll på AI-beslutninger i produksjon. Leveringsdyktig governance, sporbarhet og audit-klare bevis – på dager, ikke måneder.",
      ogTitle: "Edge Factory – Governance og sporbarhet for AI i produksjon",
      ogDescription: "Evidence-baserte leveranser for compliance, sikkerhet og IT-ledelse. Pre-Audit SSOT Snapshot på 3 dager. Incident Evidence Pack på 48 timer.",
      lang: "no"
    },

    // Language Switcher
    language: {
      label: "Språk:",
      switchTo: "English",
      switchUrl: "/en/"
    },

    // Hero Section
    hero: {
      brand: "Edge Factory",
      headline: "Deterministisk AI-styring for virksomheter som krever kontroll",
      subheadline: "Få strukturerte bevis, sporbarhet og audit-klare leveranser når AI tas i bruk i produksjon. Ingen hype. Kun determinisme, governance og raske leveranser.",
      ctaPrimary: "Bestill en 15-minutters passjekk",
      ctaPrimaryUrl: "#contact",
      ctaSecondary: "Se hva du får",
      ctaSecondaryUrl: "#what-you-get"
    },

    // What You Get Section
    whatYouGet: {
      heading: "Hva du får",
      intro: "Konkrete leveranser – ingen konsulentprat. Du får strukturerte, audit-klare dokumenter levert på dager.",
      deliverables: [
        {
          title: "Evidence Pack",
          description: "Strukturert bevisgrunnlag fra logger, dokumenter og systemer. Klar til revisjon eller hendelseshåndtering."
        },
        {
          title: "SSOT Snapshot",
          description: "Single Source of Truth-snapshot av din konfigurasjon, beslutningskjede og kontrollpunkter."
        },
        {
          title: "Beslutningsspor",
          description: "Komplett audit trail fra input til output. Forutsigbar, repeterbar, forklarbar."
        },
        {
          title: "Dokumentasjon som varer",
          description: "Ikke PowerPoint-slides. Faktisk struktur du kan bruke i produksjon."
        }
      ]
    },

    // Who It's For Section
    whoItsFor: {
      heading: "Hvem dette er for",
      intro: "Vi jobber med ledere og team som må balansere innovasjon med kontroll og etterlevelse.",
      audiences: [
        {
          title: "Compliance & GRC-ledelse",
          description: "Du trenger bevis på at AI-beslutninger kan forklares, spores og revideres."
        },
        {
          title: "Security & SOC-team",
          description: "Du må kunne dokumentere hendelser, undersøke avvik og vise kontroll."
        },
        {
          title: "IT- og Platform-ledelse",
          description: "Du vil ha AI i produksjon – men med governance, ikke gjettverk."
        }
      ]
    },

    // How It Works Section
    howItWorks: {
      heading: "Slik fungerer det",
      steps: [
        {
          number: "1",
          title: "Inntak",
          description: "Du deler relevante logger, dokumenter eller systemtilgang. Vi definerer scope og leveranser."
        },
        {
          number: "2",
          title: "Evidence-innsamling",
          description: "Vi henter ut data, strukturerer bevis og kartlegger beslutningskjeder."
        },
        {
          number: "3",
          title: "Strukturering",
          description: "Vi pakker alt inn i et lesbart, audit-klart format med beslutningsspor."
        },
        {
          number: "4",
          title: "Levering",
          description: "Du får dokumenter, data og sporbarhet klar til revisjon, compliance eller produksjon."
        },
        {
          number: "5",
          title: "Oppfølging (valgfritt)",
          description: "Vi kan fortsette med en pilot, integrasjon eller ytterligere kartlegging."
        }
      ]
    },

    // Why Edge Factory Section
    whyEdgeFactory: {
      heading: "Hvorfor Edge Factory",
      intro: "Vi er ikke et vanlig konsulentselskap. Vi leverer.",
      differentiators: [
        {
          title: "Deterministisk governance",
          description: "Vi bygger systemer med forutsigbar logikk, ikke black boxes. Hver beslutning kan spores, forklares og gjentas."
        },
        {
          title: "Evidence-først",
          description: "Ikke antagelser eller slides. Vi leverer faktiske bevis, strukturerte data og audit trails."
        },
        {
          title: "Audit-klare artefakter",
          description: "Alt vi leverer kan brukes direkte i revisjon, compliance-rapporter eller incident response."
        },
        {
          title: "Reversibelt og sporbart",
          description: "Hver beslutning har et komplett spor. Hvis noe går galt, kan du gå tilbake og forstå hva som skjedde."
        },
        {
          title: "Raske leveranser",
          description: "Dager, ikke måneder. Vi fokuserer på å levere verdi raskt, så du kan ta beslutninger basert på fakta."
        }
      ]
    },

    // Offers Section
    offers: {
      heading: "Velg et tilbud",
      intro: "To faste leveranser for å komme i gang raskt. Ingen store prosjekter. Konkrete resultater på dager.",
      items: [
        {
          name: "Pre-Audit SSOT Snapshot",
          tagline: "Klargjør din konfigurasjon før revisjon",
          turnaround: "3 dager",
          price: "Fastpris – ta kontakt for pris",
          scope: [
            "Snapshot av dagens konfigurasjon og beslutningskjeder",
            "Kartlegging av kontrollpunkter og governance-gaps",
            "Strukturert dokumentasjon klar til revisjon",
            "Anbefalinger for compliance og sporbarhet"
          ],
          inputRequirements: [
            "Tilgang til relevante systemer eller dokumenter",
            "Kort innledende samtale (30 min)",
            "Navngitt kontaktperson internt"
          ],
          outputs: [
            "SSOT-rapport (PDF/Markdown)",
            "Beslutningsspor-diagram",
            "Anbefalt handlingsplan"
          ],
          notIncluded: [
            "Integrasjoner eller kode-endringer",
            "Løpende support etter levering",
            "Fullstendig risikoanalyse"
          ]
        },
        {
          name: "Incident Evidence Pack",
          tagline: "Få strukturert bevis etter en hendelse",
          turnaround: "48 timer",
          price: "Fastpris – ta kontakt for pris",
          scope: [
            "Rask strukturering av logger og hendelsesdata",
            "Tidslinje og beslutningsspor",
            "Rapport klar til incident response eller ledelse",
            "Identifikasjon av root cause og kontrollsvikt"
          ],
          inputRequirements: [
            "Logger, hendelsesrapporter eller systemtilgang",
            "Beskrivelse av hendelsen (kort)",
            "Umiddelbar tilgjengelighet for spørsmål"
          ],
          outputs: [
            "Evidence Pack (PDF/Markdown)",
            "Hendelsestidslinje",
            "Root cause-analyse (initial)"
          ],
          notIncluded: [
            "Juridisk rådgivning",
            "Løpende overvåking",
            "Fullstendig forensisk analyse"
          ]
        }
      ],
      cta: "Bestill eller spør om pris"
    },

    // Contact Section
    contact: {
      heading: "Ta kontakt",
      intro: "Bestill en 15-minutters passjekk eller send oss en melding. Vi svarer innen 24 timer.",
      calendlyText: "Bestill møte direkte:",
      calendlyUrl: "https://calendly.com/edgefactory/15min", // Placeholder
      formHeading: "Eller send oss en melding:",
      form: {
        nameLabel: "Navn",
        namePlaceholder: "Ola Nordmann",
        companyLabel: "Firma",
        companyPlaceholder: "Bedriftsnavn AS",
        emailLabel: "E-post",
        emailPlaceholder: "ola@bedrift.no",
        roleLabel: "Rolle",
        rolePlaceholder: "CTO, CISO, Compliance Manager...",
        messageLabel: "Melding",
        messagePlaceholder: "Fortell oss kort hva dere trenger hjelp med...",
        canShareLabel: "Jeg kan dele dokumenter/logger for et bedre estimat",
        submitButton: "Send melding",
        successMessage: "Takk! Vi tar kontakt innen 24 timer.",
        errorMessage: "Noe gikk galt. Vennligst send en e-post til ole@edgefactory.no"
      }
    },

    // Footer
    footer: {
      company: {
        name: "Edge Factory",
        description: "Deterministisk AI-styring for virksomheter som krever kontroll.",
        orgNumber: "Org.nr: [TBD]"
      },
      contact: {
        heading: "Kontakt",
        email: "ole@edgefactory.no",
        phone: "+47 975 62 612"
      },
      legal: {
        heading: "Personvern",
        privacyNote: "Vi behandler dine data i henhold til GDPR. Ingen data deles med tredjeparter.",
        privacyLinkText: "Les personvernerklæring",
        privacyLinkUrl: "#" // Placeholder
      },
      copyright: "© 2026 Edge Factory. Alle rettigheter forbeholdt."
    }
  },

  en: {
    // Meta & SEO
    meta: {
      title: "Edge Factory | Deterministic AI Governance for Compliance & Security",
      description: "Control AI decisions in production. Actionable governance, traceability, and audit-ready evidence – in days, not months.",
      ogTitle: "Edge Factory – Governance and Traceability for Production AI",
      ogDescription: "Evidence-based delivery for compliance, security, and IT leadership. Pre-Audit SSOT Snapshot in 3 days. Incident Evidence Pack in 48 hours.",
      lang: "en"
    },

    // Language Switcher
    language: {
      label: "Language:",
      switchTo: "Norsk",
      switchUrl: "/"
    },

    // Hero Section
    hero: {
      brand: "Edge Factory",
      headline: "Deterministic AI governance for enterprises that demand control",
      subheadline: "Get structured evidence, traceability, and audit-ready deliverables when adopting AI in production. No hype. Just determinism, governance, and fast delivery.",
      ctaPrimary: "Book a 15-minute fit check",
      ctaPrimaryUrl: "#contact",
      ctaSecondary: "See what you get",
      ctaSecondaryUrl: "#what-you-get"
    },

    // What You Get Section
    whatYouGet: {
      heading: "What You Get",
      intro: "Concrete deliverables – no consultant speak. You get structured, audit-ready documents delivered in days.",
      deliverables: [
        {
          title: "Evidence Pack",
          description: "Structured evidence from logs, documents, and systems. Ready for audits or incident response."
        },
        {
          title: "SSOT Snapshot",
          description: "Single Source of Truth snapshot of your configuration, decision chain, and control points."
        },
        {
          title: "Decision Trail",
          description: "Complete audit trail from input to output. Predictable, repeatable, explainable."
        },
        {
          title: "Documentation That Lasts",
          description: "Not PowerPoint slides. Actual structure you can use in production."
        }
      ]
    },

    // Who It's For Section
    whoItsFor: {
      heading: "Who This Is For",
      intro: "We work with leaders and teams who must balance innovation with control and compliance.",
      audiences: [
        {
          title: "Compliance & GRC Leadership",
          description: "You need proof that AI decisions can be explained, traced, and audited."
        },
        {
          title: "Security & SOC Teams",
          description: "You must document incidents, investigate anomalies, and demonstrate control."
        },
        {
          title: "IT & Platform Leadership",
          description: "You want AI in production – but with governance, not guesswork."
        }
      ]
    },

    // How It Works Section
    howItWorks: {
      heading: "How It Works",
      steps: [
        {
          number: "1",
          title: "Intake",
          description: "You share relevant logs, documents, or system access. We define scope and deliverables."
        },
        {
          number: "2",
          title: "Evidence Collection",
          description: "We extract data, structure evidence, and map decision chains."
        },
        {
          number: "3",
          title: "Structuring",
          description: "We package everything into a readable, audit-ready format with decision trails."
        },
        {
          number: "4",
          title: "Delivery",
          description: "You receive documents, data, and traceability ready for audits, compliance, or production."
        },
        {
          number: "5",
          title: "Follow-up (Optional)",
          description: "We can continue with a pilot, integration, or further mapping."
        }
      ]
    },

    // Why Edge Factory Section
    whyEdgeFactory: {
      heading: "Why Edge Factory",
      intro: "We're not a typical consultancy. We deliver.",
      differentiators: [
        {
          title: "Deterministic Governance",
          description: "We build systems with predictable logic, not black boxes. Every decision can be traced, explained, and repeated."
        },
        {
          title: "Evidence-First",
          description: "No assumptions or slides. We deliver actual evidence, structured data, and audit trails."
        },
        {
          title: "Audit-Ready Artifacts",
          description: "Everything we deliver can be used directly in audits, compliance reports, or incident response."
        },
        {
          title: "Reversible and Traceable",
          description: "Every decision has a complete trail. If something goes wrong, you can go back and understand what happened."
        },
        {
          title: "Fast Delivery",
          description: "Days, not months. We focus on delivering value quickly, so you can make decisions based on facts."
        }
      ]
    },

    // Offers Section
    offers: {
      heading: "Choose an Offer",
      intro: "Two fixed deliverables to get started quickly. No large projects. Concrete results in days.",
      items: [
        {
          name: "Pre-Audit SSOT Snapshot",
          tagline: "Prepare your configuration before audit",
          turnaround: "3 days",
          price: "Fixed fee – contact for pricing",
          scope: [
            "Snapshot of current configuration and decision chains",
            "Mapping of control points and governance gaps",
            "Structured documentation ready for audit",
            "Recommendations for compliance and traceability"
          ],
          inputRequirements: [
            "Access to relevant systems or documents",
            "Brief initial conversation (30 min)",
            "Named internal contact person"
          ],
          outputs: [
            "SSOT Report (PDF/Markdown)",
            "Decision trail diagram",
            "Recommended action plan"
          ],
          notIncluded: [
            "Integrations or code changes",
            "Ongoing support after delivery",
            "Comprehensive risk analysis"
          ]
        },
        {
          name: "Incident Evidence Pack",
          tagline: "Get structured evidence after an incident",
          turnaround: "48 hours",
          price: "Fixed fee – contact for pricing",
          scope: [
            "Rapid structuring of logs and incident data",
            "Timeline and decision trail",
            "Report ready for incident response or leadership",
            "Identification of root cause and control failures"
          ],
          inputRequirements: [
            "Logs, incident reports, or system access",
            "Brief description of the incident",
            "Immediate availability for questions"
          ],
          outputs: [
            "Evidence Pack (PDF/Markdown)",
            "Incident timeline",
            "Root cause analysis (initial)"
          ],
          notIncluded: [
            "Legal advice",
            "Ongoing monitoring",
            "Complete forensic analysis"
          ]
        }
      ],
      cta: "Order or ask for pricing"
    },

    // Contact Section
    contact: {
      heading: "Get in Touch",
      intro: "Book a 15-minute fit check or send us a message. We respond within 24 hours.",
      calendlyText: "Book a meeting directly:",
      calendlyUrl: "https://calendly.com/edgefactory/15min", // Placeholder
      formHeading: "Or send us a message:",
      form: {
        nameLabel: "Name",
        namePlaceholder: "John Doe",
        companyLabel: "Company",
        companyPlaceholder: "Company Name Inc",
        emailLabel: "Email",
        emailPlaceholder: "john@company.com",
        roleLabel: "Role",
        rolePlaceholder: "CTO, CISO, Compliance Manager...",
        messageLabel: "Message",
        messagePlaceholder: "Tell us briefly what you need help with...",
        canShareLabel: "I can share documents/logs for a better estimate",
        submitButton: "Send Message",
        successMessage: "Thanks! We'll get back to you within 24 hours.",
        errorMessage: "Something went wrong. Please send an email to ole@edgefactory.no"
      }
    },

    // Footer
    footer: {
      company: {
        name: "Edge Factory",
        description: "Deterministic AI governance for enterprises that demand control.",
        orgNumber: "Org.nr: [TBD]"
      },
      contact: {
        heading: "Contact",
        email: "ole@edgefactory.no",
        phone: "+47 975 62 612"
      },
      legal: {
        heading: "Privacy",
        privacyNote: "We process your data in accordance with GDPR. No data is shared with third parties.",
        privacyLinkText: "Read privacy policy",
        privacyLinkUrl: "#" // Placeholder
      },
      copyright: "© 2026 Edge Factory. All rights reserved."
    }
  }
};

// Export for use in HTML pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = landingContent;
}
