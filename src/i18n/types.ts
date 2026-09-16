export interface ServiceSummary {
  title: string;
  description: string;
  href: string;
}

export interface ListSection {
  title: string;
  intro?: string;
  items: string[];
}

export interface SubService {
  id: string;
  title: string;
  lead?: string;
  sections: ListSection[];
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

/* ---------- Nederlands: nieuwe structuur volgens de websitebrief ---------- */

interface NlNav extends NavBase {
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

export interface NlDictionary {
  lang: 'nl';
  htmlLang: string;
  nav: NlNav;
  cta: CtaLabels;
  footer: FooterLabels;
  home: {
    metaTitle: string;
    metaDescription: string;
    heroTagline: string;
    heroTitle: string;
    heroIntro: string[];
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
    appointmentsText: string;
    prescriptionTitle: string;
    prescriptionText: string;
    ratesTitle: string;
    ratesText: string;
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

/* ---------- Frans: bestaande structuur, ongewijzigd ---------- */

interface FrNav extends NavBase {
  perinatal: string;
  pelvic: string;
  manual: string;
  rates: string;
}

export interface FrDictionary {
  lang: 'fr';
  htmlLang: string;
  nav: FrNav;
  cta: CtaLabels;
  footer: FooterLabels;
  home: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    heroText: string;
    aboutTitle: string;
    aboutText: string[];
    servicesTitle: string;
    servicesIntro: string;
    services: ServiceSummary[];
    whyTitle: string;
    whyItems: { title: string; text: string }[];
    areaTitle: string;
    areaText: string;
    areaPlaces: string[];
    ctaTitle: string;
    ctaText: string;
  };
  perinatal: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    subServices: SubService[];
  };
  pelvic: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    groups: {
      id: string;
      title: string;
      categories: ListSection[];
      treatments: ListSection;
    }[];
  };
  manual: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string[];
    indicationsTitle: string;
    indications: string[];
  };
  rates: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    items: { label: string; value: string }[];
    note: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    mapTitle: string;
    linksTitle: string;
    links: { label: string; href: string }[];
    formNote: string;
    formTitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      phoneOptional: string;
      message: string;
      submit: string;
      honeypot: string;
    };
  };
  thankyou: ThankYouSection;
  privacy: PrivacySection;
  legal: LegalSection;
  notFound: NotFoundSection;
}

export type UiDictionary = NlDictionary | FrDictionary;
