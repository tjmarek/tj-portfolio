/**
 * Single source of truth for editable copy, routes, assets, contact and status.
 *
 * Verification legend
 *   VERIFIED    stated in the project brief (docs/) as a known fact
 *   DRAFT       written for this build; TJ must confirm or replace it
 *   null        NOT PROVIDED. The UI omits the action rather than faking it.
 *
 * To add a real contact link, replace null below. The hero constellation,
 * homepage contact section and /contact/ page all pick it up automatically.
 */
import portrait from '../assets/portraits/tj-marek-portrait.jpg';
import cutout from '../assets/portraits/derived/tj-marek-cutout.png';
import logoRed from '../assets/branding/logo-red.png';
import logoCharcoal from '../assets/branding/logo-charcoal.png';
import logoSage from '../assets/branding/logo-light-sage.png';

export const identity = {
  firstLine: 'TJ', // VERIFIED
  secondLine: 'Marek', // VERIFIED
  fullName: 'TJ Marek', // VERIFIED
  role: 'Digital marketing, web operations & design.', // VERIFIED (exact wording from brief)
  roleLines: ['Digital marketing,', 'web operations', '& design.'],
} as const;

export const routes = {
  home: '/',
  work: '/work/',
  experience: '/experience/',
  about: '/about/',
  contact: '/contact/',
} as const;

export const innerNav = [
  { label: 'Work', href: routes.work },
  { label: 'Experience', href: routes.experience },
  { label: 'About', href: routes.about },
  { label: 'Contact', href: routes.contact },
] as const;

export const assets = {
  portrait, // original, intact: used on About
  cutout, // background removed locally from the original: used in the hero
  logoRed,
  logoCharcoal,
  logoSage,
};

/** All NOT PROVIDED in docs/07-user-inputs.md. Do not fill with guesses. */
export const contact: {
  email: string | null;
  linkedin: string | null;
  availability: string | null;
} = {
  email: null, // e.g. 'name@domain.tld'
  linkedin: null, // full https:// URL
  availability: null, // exact wording TJ approves
};

/** Place the file in public/resume/ and set e.g. '/resume/tj-marek-resume.pdf'. */
export const resume: { href: string | null } = { href: null };

/** Exact employer/title/dates are NOT PROVIDED. Add verified entries here. */
export const experienceEntries: {
  role: string;
  employer: string;
  dates: string;
  scope: string;
  results: string[];
}[] = [];

export const draftLabels = {
  section: 'Draft copy',
  visual: 'Draft visual: abstract study, not client work',
  slot: 'Provisional slot',
} as const;

export type PreviewKind = 'websites' | 'search' | 'analytics';

/**
 * Three provisional categories from docs/03. No project names, clients, counts
 * or outcomes have been supplied, so each slot frames the kind of work and says
 * plainly that evidence is pending.
 */
export const workSlots: {
  slug: string;
  title: string;
  preview: PreviewKind;
  teaser: string;
  problem: string;
  contribution: string;
  evidence: string;
}[] = [
  {
    slug: 'websites-operations',
    title: 'Websites & operations',
    preview: 'websites',
    teaser: 'Keeping a working website accurate and quick to change.', // DRAFT
    problem:
      'A website has to carry campaigns, content changes and everyday business needs without every update becoming a project.', // DRAFT
    contribution:
      'Hands-on implementation and upkeep. Specific decisions and actions to be confirmed per project.', // DRAFT
    evidence: 'Not supplied yet, so nothing is claimed here.',
  },
  {
    slug: 'paid-search-landing-pages',
    title: 'Paid search & landing pages',
    preview: 'search',
    teaser: 'Connecting what someone searched for to the page they reach.', // DRAFT
    problem:
      'A search ad makes a promise, and the landing page has to keep it. The two usually get built separately.', // DRAFT
    contribution:
      'Working across the campaign and the page it points to. Specific scope to be confirmed per project.', // DRAFT
    evidence: 'Not supplied yet, so nothing is claimed here.',
  },
  {
    slug: 'analytics-conversion',
    title: 'Analytics & conversion',
    preview: 'analytics',
    teaser: 'Measurement that is reliable enough to act on.', // DRAFT
    problem:
      'Reporting only helps if the numbers can be trusted and someone can say what to change next.', // DRAFT
    contribution:
      'Implementing measurement and reading it against the work. Specific scope to be confirmed per project.', // DRAFT
    evidence: 'Not supplied yet, so nothing is claimed here.',
  },
];

export const copy = {
  meta: {
    homeTitle: 'TJ Marek: digital marketing, web operations & design',
    homeDescription: 'TJ Marek works across digital marketing, web operations and design.',
  },
  hero: {
    aboutLines: ['About', 'TJ'],
    workHeading: 'Selected work',
    viewAll: 'View all',
    experienceLink: 'Experience & résumé',
    talkLines: ["Let's", 'talk'],
  },
  work: {
    heading: 'Selected work',
    intro:
      'Three areas of work, held open for real projects. Each one will show the problem, what I did and the evidence, once those details are confirmed.', // DRAFT
    labels: { problem: 'The problem', contribution: 'My part', evidence: 'Evidence' },
    pendingNote:
      'Project names, permissions, imagery and outcomes have not been supplied. This page does not stand in for them.',
  },
  experience: {
    heading: 'Experience',
    intro:
      'The connecting thread is hands-on implementation and measurement: the same person planning the work, building it and checking it.', // DRAFT
    disciplines: [
      {
        name: 'Digital marketing',
        detail: 'Paid search, landing pages and the campaign work around them.', // DRAFT
      },
      {
        name: 'Web operations',
        detail: 'Keeping websites accurate, working and straightforward to change.', // DRAFT
      },
      {
        name: 'Design',
        detail: 'Visual and layout work in service of the two above, rather than apart from them.', // DRAFT
      },
    ],
    pendingHeading: 'Still to be verified',
    pendingFacts: ['Job title', 'Employer', 'Dates', 'Results'],
    pendingValue: 'Not supplied yet',
    resumeMissing: 'A résumé has not been supplied, so no download is offered yet.',
    resumeLink: 'Download résumé',
    viewLink: 'Experience & résumé',
  },
  about: {
    heading: 'About TJ',
    intro: [
      "I'm TJ Marek. I work across digital marketing, web operations and design, and I like being close to the implementation: the campaign, the page it lands on and the measurement that says whether it worked.", // DRAFT
      'This site is aimed at two kinds of conversation: mid-level digital marketing and web or digital operations roles, and fitting freelance design, website and marketing projects.', // DRAFT
    ],
    link: 'More about TJ',
    portraitAlt: 'Black and white portrait of TJ Marek, facing the camera, wearing a dark T-shirt.',
  },
  contactSection: {
    heading: "Let's talk",
    intro: 'For a role, or for a freelance design, website or marketing project.', // DRAFT
    missing:
      'Direct contact details have not been added to this draft yet. No address or profile has been guessed in their place.',
    email: 'Email',
    linkedin: 'LinkedIn',
    link: 'Contact page',
  },
  footer: {
    draftNote: 'Draft site. Copy and project details are pending verification.',
  },
} as const;

/** Real contact actions only. Empty until values above are supplied. */
export const contactLinks = [
  contact.email
    ? { key: 'email', label: copy.contactSection.email, href: `mailto:${contact.email}`, external: false }
    : null,
  contact.linkedin
    ? { key: 'linkedin', label: copy.contactSection.linkedin, href: contact.linkedin, external: true }
    : null,
].filter((link): link is NonNullable<typeof link> => link !== null);
