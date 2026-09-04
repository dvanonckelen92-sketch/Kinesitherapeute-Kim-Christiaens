export interface ServiceSummary {
  title: string;
  description: string;
  href: string;
  icon: 'perinatal' | 'pelvic' | 'manual';
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

export interface UiDictionary {
  lang: string;
  htmlLang: string;
  nav: {
    home: string;
    perinatal: string;
    pelvic: string;
    manual: string;
    rates: string;
    contact: string;
    menu: string;
    closeMenu: string;
    skipToContent: string;
    switchLang: string;
  };
  cta: {
    call: string;
    email: string;
    contact: string;
    discover: string;
    allServices: string;
    backHome: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    privacyLink: string;
    legalLink: string;
    madeBy: string;
    madeByLink: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
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
  thankyou: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    text: string;
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    updated: string;
    sections: { title: string; text: string[] }[];
  };
  legal: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    sections: { title: string; text: string[] }[];
  };
  notFound: {
    title: string;
    text: string;
  };
}
