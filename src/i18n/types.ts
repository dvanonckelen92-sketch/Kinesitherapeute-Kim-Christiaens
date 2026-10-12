import type { Locale } from '../consts';

export interface ServiceSummary {
  title: string;
  description: string;
  href: string;
}

interface NavBase {
  home: string;
  contact: string;
  menu: string;
  closeMenu: string;
  skipToContent: string;
  switchLang: string;
}

interface CtaLabels {
  call: string;
  email: string;
  /** Secundaire knop in de CTA-banner: Kim wil liefst geschreven contact, geen telefoon. */
  mailKim: string;
  contact: string;
  discover: string;
  allServices: string;
  backHome: string;
}

interface FooterLabels {
  tagline: string;
  servicesTitle: string;
  contactTitle: string;
  rights: string;
  privacyLink: string;
  legalLink: string;
  madeBy: string;
  madeByLink: string;
}

interface ThankYouSection {
  metaTitle: string;
  metaDescription: string;
  title: string;
  text: string;
}

interface PrivacySection {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  updated: string;
  sections: { title: string; text: string[] }[];
}

interface LegalSection {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sections: { title: string; text: string[] }[];
}

interface NotFoundSection {
  title: string;
  text: string;
}

/* ---------- Eén structuur voor NL en FR, volgens de websitebrief ---------- */

interface Nav extends NavBase {
  about: string;
  pelvic: string;
  pelvicHome: string;
  pelvicWomen: string;
  pelvicMen: string;
  pelvicChildren: string;
  hormones: string;
  movement: string;
  lectures: string;
  practical: string;
}

interface TopicPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  checklistTitle: string;
  checklist: string[];
  secondaryTitle: string;
  secondaryText: string[];
}

export interface Dictionary {
  lang: Locale;
  htmlLang: string;
  nav: Nav;
  cta: CtaLabels;
  footer: FooterLabels;
  home: {
    metaTitle: string;
    metaDescription: string;
    heroTagline: string;
    heroTitle: string;
    heroIntro: string[];
    servicesTitle: string;
    services: ServiceSummary[];
    wholeBodyTitle: string;
    wholeBodyText: string[];
    approachTitle: string;
    approachItems: string[];
    brandStoryTitle: string;
    brandStoryText: string[];
    ctaTitle: string;
    ctaText: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string[];
    approachTitle: string;
    approachText: string[];
    educationTitle: string;
    educationIntro: string;
    education: string[];
  };
  pelvicHome: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    audiencesTitle: string;
    audiences: { title: string; description: string; href: string }[];
    expectTitle: string;
    expectText: string[];
  };
  pelvicWomen: TopicPage;
  pelvicMen: TopicPage;
  pelvicChildren: TopicPage;
  hormones: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    helpTitle: string;
    helpItems: string[];
    approachTitle: string;
    approachText: string[];
    referralText: string;
  };
  movement: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string[];
    helpTitle: string;
    helpItems: string[];
    closingText: string;
  };
  lectures: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string[];
    themesTitle: string;
    themes: string[];
    audienceTitle: string;
    audienceText: string;
    form: {
      title: string;
      orgName: string;
      contactPerson: string;
      audience: string;
      attendees: string;
      theme: string;
      preferredDate: string;
      location: string;
      extra: string;
      submit: string;
      honeypot: string;
    };
  };
  practical: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    appointmentsTitle: string;
    appointmentsText: string[];
    ratesTitle: string;
    rates: { label: string; duration: string; price: string }[];
    prescriptionTitle: string;
    prescriptionText: string[];
    paymentTitle: string;
    paymentText: string;
    cancelTitle: string;
    cancelText: string;
    reachTitle: string;
    reachText: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    mapTitle: string;
    formNote: string;
    formTitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      phoneOptional: string;
      phoneHint: string;
      subject: string;
      preferredContactLabel: string;
      preferredContactEmail: string;
      preferredContactMessage: string;
      preferredContactPhone: string;
      message: string;
      consent: string;
      privacyLink: string;
      submit: string;
      honeypot: string;
    };
    practiceNoteTitle: string;
    practiceNoteText: string;
  };
  thankyou: ThankYouSection;
  privacy: PrivacySection;
  legal: LegalSection;
  notFound: NotFoundSection;
}
