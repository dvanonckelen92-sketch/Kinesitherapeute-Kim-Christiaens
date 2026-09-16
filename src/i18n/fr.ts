import type { FrDictionary } from './types';
import { SITE } from '../consts';

export const fr: FrDictionary = {
  lang: 'fr',
  htmlLang: 'fr-BE',
  nav: {
    home: 'Accueil',
    perinatal: 'Accompagnement périnatal',
    pelvic: 'Rééducation périnéale',
    manual: 'Thérapie manuelle',
    rates: 'Tarifs',
    contact: 'Contact',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    skipToContent: 'Aller au contenu',
    switchLang: 'Voir cette page en néerlandais',
  },
  cta: {
    call: 'Appeler',
    email: 'Envoyer un e-mail',
    contact: 'Prendre contact',
    discover: 'En savoir plus',
    allServices: 'Tous les traitements',
    backHome: "Retour à l'accueil",
  },
  footer: {
    tagline:
      'Accompagnement périnatal, rééducation périnéale et thérapie manuelle à Heers, Saint-Trond et en Hesbaye.',
    servicesTitle: 'Traitements',
    contactTitle: 'Contact',
    rights: 'Tous droits réservés.',
    privacyLink: 'Politique de confidentialité',
    legalLink: 'Mentions légales',
    madeBy: 'Site réalisé par',
    madeByLink: 'Coop Consult',
  },
  home: {
    metaTitle: 'Kinésithérapie Kim Christiaens — Heers & Saint-Trond',
    metaDescription:
      'La kinésithérapeute Kim Christiaens à Heers vous accompagne en périnatalité, rééducation périnéale et thérapie manuelle. Plus de 10 ans d’expérience, région de Saint-Trond et Hesbaye.',
    heroTitle: 'Une kinésithérapie personnalisée, à chaque étape de la vie',
    heroSubtitle: 'Accompagnement périnatal · Rééducation périnéale · Thérapie manuelle',
    heroText:
      'Plus de 10 ans d’expérience et une compétence professionnelle particulière en rééducation pelvienne et kinésithérapie périnatale, dans un cabinet calme à Heers.',
    aboutTitle: 'À propos du cabinet',
    aboutText: [
      'En plus de plus de 10 ans d’expérience en tant que kinésithérapeute et de nombreuses formations, dont un postgraduat en thérapie manuelle, je possède également une compétence professionnelle particulière en rééducation pelvienne et kinésithérapie périnatale.',
      'Outre l’accompagnement des femmes durant la période périnatale, cette branche de la kinésithérapie se concentre aussi sur le traitement des troubles du plancher pelvien, chez les hommes, les femmes et les enfants. Le plancher pelvien est en effet un maillon essentiel du corset musculaire stabilisateur.',
    ],
    servicesTitle: 'Comment puis-je vous aider ?',
    servicesIntro: 'Trois traitements spécialisés, toujours adaptés à votre corps et à votre parcours.',
    services: [
      {
        title: 'Accompagnement périnatal',
        description:
          'Accompagnement avant, pendant et après la grossesse : travail du plancher pelvien, préparation à l’accouchement, massage bébé et portage.',
        href: '/fr/accompagnement-perinatal/',
      },
      {
        title: 'Rééducation périnéale',
        description:
          'Traitement des troubles urinaires, fécaux et sexuels, ainsi que des prolapsus, chez les femmes, les hommes et les enfants.',
        href: '/fr/reeducation-perineale/',
      },
      {
        title: 'Thérapie manuelle',
        description:
          'Examen et traitement de l’appareil locomoteur en cas de troubles cervicaux, dorsaux, de hanche ou de genou.',
        href: '/fr/therapie-manuelle/',
      },
    ],
    whyTitle: 'Pourquoi choisir ce cabinet ?',
    whyItems: [
      {
        title: '+10 ans d’expérience',
        text: 'Une longue expérience clinique, complétée par un postgraduat en thérapie manuelle et des formations spécialisées.',
      },
      {
        title: 'Spécialisation reconnue',
        text: 'Compétence professionnelle particulière en rééducation pelvienne et kinésithérapie périnatale.',
      },
      {
        title: 'Attention à chaque patient',
        text: 'Pour les femmes, les hommes et les enfants, avec une approche personnalisée adaptée à vos troubles.',
      },
      {
        title: 'Cabinet calme et accessible',
        text: 'Un cabinet à Heers, facilement accessible depuis Saint-Trond, la Hesbaye et la région frontalière wallonne et française toute proche.',
      },
    ],
    areaTitle: 'Cabinet à Heers, également accessible depuis',
    areaText:
      'Le cabinet est situé à Heers (Rukkelingen-Loon), à courte distance de Saint-Trond. Les patients de la région de Hesbaye et de la zone frontalière francophone voisine sont aussi les bienvenus.',
    areaPlaces: ['Heers', 'Saint-Trond', 'Borgloon', 'Tongres', 'Landen', 'Waremme'],
    ctaTitle: 'Prêt·e à faire connaissance ?',
    ctaText: 'N’hésitez pas à me contacter pour un rendez-vous ou pour toute question. Je me ferai un plaisir de vous aider.',
  },
  perinatal: {
    metaTitle: 'Accompagnement périnatal — Kinésithérapie Kim Christiaens',
    metaDescription:
      'Accompagnement avant et après l’accouchement : préparation prénatale, rééducation postnatale, massage bébé et portage. Cabinet à Heers, région de Saint-Trond.',
    title: 'Accompagnement périnatal',
    intro:
      'Tomber enceinte, accoucher et devenir mère est une expérience unique. Je vous accompagne avec plaisir à chaque étape, avec une attention particulière pour votre corps et votre récupération.',
    subServices: [
      {
        id: 'prenatal',
        title: 'Prénatal : vivre sa grossesse et son accouchement en pleine conscience',
        sections: [
          {
            title: 'À quoi vous attendre ?',
            items: [
              'Apprendre à ressentir le plancher pelvien',
              'Information sur le déroulement d’une grossesse et d’un accouchement',
              'Apprendre à utiliser le ballon et la respiration pour gérer les contractions',
              'Le partenaire apprend à accompagner activement',
              'Traitement des douleurs dorsales et pelviennes',
            ],
          },
        ],
      },
      {
        id: 'postnatal',
        title: 'Postnatal : être une mère active',
        sections: [
          {
            title: 'À quoi vous attendre ?',
            items: [
              'Renforcement du plancher pelvien et recherche du juste équilibre entre contraction et relâchement',
              'Renforcement de la ceinture pelvienne et travail de stabilisation',
              'Reconditionnement après l’accouchement',
            ],
          },
        ],
      },
      {
        id: 'massage-bebe',
        title: 'Massage bébé',
        lead:
          'Le massage bébé est une manière agréable, pour un parent, d’apprendre à connaître son bébé et à mieux interagir avec lui.',
        sections: [
          {
            title: 'Objectif',
            items: [
              'Apaiser le bébé',
              'Soulager les coliques et les difficultés de transit',
            ],
          },
        ],
      },
      {
        id: 'portage',
        title: 'Portage',
        lead:
          'Votre bébé a passé neuf mois dans un espace douillet et délimité, où il était constamment bercé et porté, à l’abri des stimulations fortes. Après la naissance, votre enfant arrive dans un monde vaste et froid, rempli de lumière et de sons inconnus. C’est pourquoi il est important, surtout durant les premiers mois de vie, qu’il bénéficie de beaucoup de contact corporel et soit protégé des stimulations excessives. Une écharpe de portage est parfaite pour cela, et libère en même temps les mains des parents.',
        sections: [
          {
            title: 'Pendant une consultation',
            items: [
              'Explications sur les différentes méthodes de portage : écharpe extensible, écharpe tissée, porte-bébé',
              'L’ergonomie de l’enfant et du porteur est au centre de l’attention',
              'Apprentissage des nouages pour le portage ventral et dorsal',
              'Vous apprenez à régler correctement votre porte-bébé',
            ],
          },
        ],
      },
      {
        id: 'cours-groupe',
        title: 'Cours en groupe',
        lead: 'Bientôt disponible. N’hésitez pas à nous contacter pour rester informé·e.',
        sections: [],
      },
    ],
  },
  pelvic: {
    metaTitle: 'Rééducation périnéale — Kinésithérapie Kim Christiaens',
    metaDescription:
      'Rééducation périnéale pour femmes, hommes et enfants : troubles urinaires, fécaux, sexuels, prolapsus et plus. Cabinet à Heers, région de Saint-Trond.',
    title: 'Rééducation périnéale',
    intro:
      'Le plancher pelvien joue un rôle essentiel dans la continence, la sexualité et la posture. Les troubles touchent les femmes, les hommes et les enfants, et se traitent souvent très bien.',
    groups: [
      {
        id: 'femmes',
        title: 'Femmes',
        categories: [
          {
            title: 'Troubles urinaires',
            items: [
              'Incontinence de stress, incontinence par urgenturie',
              'Trouble de la vidange vésicale (dysfunctional voiding)',
              'Après une intervention chirurgicale, p. ex. TOT (transobturatorius tape), TVT (tensionfree vaginal tape)',
            ],
          },
          {
            title: 'Troubles fécaux',
            items: ['Incontinence', 'Constipation', 'Douleurs anorectales'],
          },
          {
            title: 'Troubles sexuels',
            items: ['Vaginisme', 'Dyspareunie (douleur lors des rapports)', 'Vulvodynie'],
          },
          {
            title: 'Prolapsus',
            items: ['Descentes d’organes'],
          },
        ],
        treatments: {
          title: 'Traitements en kinésithérapie',
          items: [
            'Apprendre à relâcher le plancher pelvien',
            'Renforcement du plancher pelvien',
            'Schémas mictionnels et hydriques',
            'Électrostimulation',
            'Biofeedback',
            'Ballonthérapie',
            'Correction posturale et travail de stabilisation',
          ],
        },
      },
      {
        id: 'hommes',
        title: 'Hommes',
        categories: [
          {
            title: 'Troubles urinaires',
            items: [
              'Incontinence',
              'Trouble de la vidange vésicale (dysfunctional voiding)',
              'Après une intervention chirurgicale, p. ex. prostatectomie',
            ],
          },
          {
            title: 'Troubles fécaux',
            items: ['Incontinence', 'Constipation', 'Douleurs anorectales'],
          },
          {
            title: 'Troubles sexuels',
            items: ['Éjaculation précoce', 'Troubles de l’érection'],
          },
        ],
        treatments: {
          title: 'Traitements en kinésithérapie',
          items: [
            'Apprendre à relâcher le plancher pelvien',
            'Renforcement du plancher pelvien',
            'Schémas mictionnels et hydriques',
            'Électrostimulation',
            'Biofeedback',
            'Entraînement au ballon',
            'Correction posturale et travail de stabilisation',
          ],
        },
      },
      {
        id: 'enfants',
        title: 'Enfants',
        categories: [
          {
            title: 'Troubles urinaires',
            items: ['Énurésie nocturne', 'Perte d’urine'],
          },
          {
            title: 'Troubles intestinaux',
            items: ['Perte de selles', 'Constipation'],
          },
          {
            title: 'Comportement de rétention',
            items: [],
          },
        ],
        treatments: {
          title: 'Traitement en kinésithérapie',
          items: [
            'Schéma mictionnel et hydrique',
            'Réveils programmés, jour et nuit',
            'Apprentissage du relâchement et de la contraction du plancher pelvien',
            'Électrostimulation',
            'Biofeedback',
            'Ballonthérapie',
            'Massage',
            'Travail de stabilisation et correction posturale',
          ],
        },
      },
    ],
  },
  manual: {
    metaTitle: 'Thérapie manuelle — Kinésithérapie Kim Christiaens',
    metaDescription:
      'Thérapie manuelle pour les douleurs cervicales, dorsales, de hanche et de genou. Examen et traitement de l’appareil locomoteur. Cabinet à Heers, région de Saint-Trond.',
    title: 'Thérapie manuelle',
    intro: [
      'La thérapie manuelle vise à examiner et traiter les troubles de l’appareil locomoteur. Une surcharge d’un ensemble muscle-tendon-articulation est souvent à l’origine de la plainte, ce qui rend le mouvement difficile et douloureux.',
      'Le thérapeute manuel utilise des mouvements spécifiques — mobilisations et manipulations — pour restaurer la fonction. Une attention particulière est également portée à la rééducation active, via des étirements et des exercices actifs.',
    ],
    indicationsTitle: 'Pour quelles plaintes la thérapie manuelle est-elle indiquée ?',
    indications: [
      'Maux de tête et douleurs cervicales',
      'Troubles cervicaux et de l’épaule, éventuellement irradiant vers le bras ou les doigts',
      'Lombalgies et troubles pelviens',
      'Douleurs de hanche et/ou de genou',
    ],
  },
  rates: {
    metaTitle: 'Tarifs — Kinésithérapie Kim Christiaens',
    metaDescription: 'Tarifs de kinésithérapie Kim Christiaens, cabinet à Heers, région de Saint-Trond.',
    title: 'Tarifs',
    intro: 'Un aperçu clair du coût des traitements.',
    items: [
      { label: 'Statut', value: 'Déconventionné' },
      { label: 'Tarif séance courante', value: '31,50 €' },
    ],
    note:
      'Une question sur le remboursement par votre mutuelle ? N’hésitez pas à me contacter, nous verrons cela ensemble.',
  },
  contact: {
    metaTitle: 'Contact — Kinésithérapie Kim Christiaens',
    metaDescription:
      'Prenez rendez-vous chez Kinésithérapie Kim Christiaens à Heers, région de Saint-Trond. Appelez, écrivez ou passez au cabinet.',
    title: 'Contact',
    intro: 'Une question ou envie de prendre rendez-vous ? Je me ferai un plaisir de vous aider.',
    addressTitle: 'Adresse',
    phoneTitle: 'Téléphone',
    emailTitle: 'E-mail',
    mapTitle: 'Itinéraire vers le cabinet',
    linksTitle: 'Liens utiles',
    links: [
      { label: 'Sage-femme Ilse', href: '#' },
      { label: 'Notre formation vidéo sur YouTube (demandez plus d’informations)', href: '#' },
    ],
    formNote: 'Le plus simple pour me joindre reste le téléphone ou l’e-mail.',
    formTitle: 'Envoyer un message',
    form: {
      name: 'Nom',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      phoneOptional: 'facultatif',
      message: 'Message',
      submit: 'Envoyer',
      honeypot: 'Laissez ce champ vide',
    },
  },
  thankyou: {
    metaTitle: 'Message envoyé — Kinésithérapie Kim Christiaens',
    metaDescription: 'Merci pour votre message. Je vous recontacte dans les plus brefs délais.',
    title: 'Merci pour votre message !',
    text: 'J’ai bien reçu votre message et je vous recontacte dans les plus brefs délais.',
  },
  privacy: {
    metaTitle: 'Politique de confidentialité — Kinésithérapie Kim Christiaens',
    metaDescription:
      'Comment Kinésithérapie Kim Christiaens traite vos données via le formulaire de contact et les statistiques du site.',
    title: 'Politique de confidentialité',
    intro:
      'Cette page explique quelles données ce site collecte, à quoi elles servent, et comment vous pouvez les faire modifier ou supprimer.',
    updated: 'Dernière mise à jour : septembre 2026',
    sections: [
      {
        title: 'Responsable du traitement',
        text: [
          'Ce site est géré par Kim Christiaens, kinésithérapeute, Bovelingenstraat 387, 3870 Heers (responsable du traitement au sens du RGPD). Pour toute question sur vos données, contactez info@kimchristiaens.be.',
        ],
      },
      {
        title: 'Formulaire de contact',
        text: [
          'Lorsque vous complétez le formulaire de contact, les informations que vous saisissez (nom, adresse e-mail, éventuellement numéro de téléphone et votre message) sont utilisées uniquement pour répondre à votre demande ou confirmer un rendez-vous, sur la base de votre consentement lors de l’envoi du formulaire et, le cas échéant, des démarches précontractuelles nécessaires (art. 6.1.a et 6.1.b RGPD).',
          'Ces données ne sont pas utilisées à des fins de marketing et ne sont transmises à aucun tiers, en dehors des sous-traitants mentionnés ci-dessous. Elles sont conservées 12 mois maximum après le dernier contact, sauf si un rendez-vous ou une relation de soins en découle — les délais légaux de conservation des dossiers patients s’appliquent alors.',
        ],
      },
      {
        title: 'Statistiques du site',
        text: [
          'Ce site utilise Netlify Analytics pour obtenir une vue d’ensemble du nombre de visiteurs et des pages consultées, sur la base de notre intérêt légitime à améliorer le site (art. 6.1.f RGPD). Ces statistiques sont établies à partir des journaux du serveur, sans cookies ni scripts de suivi, et ne permettent pas d’identifier les visiteurs individuellement.',
          'Aucun cookie publicitaire ou de suivi tiers n’est utilisé — ce site n’affiche donc pas de bandeau de cookies.',
        ],
      },
      {
        title: 'Sous-traitants et services externes',
        text: [
          'Ce site est hébergé chez Netlify, Inc. (États-Unis), qui traite également le formulaire de contact et les statistiques du site. Pour tout transfert de données hors de l’EEE, Netlify prévoit des garanties appropriées (clauses contractuelles types / EU-U.S. Data Privacy Framework).',
          'La carte de la page Contact est chargée via OpenStreetMap. En consultant cette carte, votre appareil peut se connecter aux serveurs de l’OpenStreetMap Foundation ; nous ne partageons nous-mêmes aucune donnée personnelle à cette occasion.',
        ],
      },
      {
        title: 'Vos droits',
        text: [
          'Vous disposez à tout moment d’un droit d’accès, de rectification, d’effacement et de limitation de vos données, du droit de retirer votre consentement et du droit à la portabilité de vos données. Envoyez un e-mail à info@kimchristiaens.be.',
          'Vous avez également le droit d’introduire une réclamation auprès de l’Autorité de protection des données (APD), rue de la Presse 35, 1000 Bruxelles — contact@apd-gba.be — www.autoriteprotectiondonnees.be.',
        ],
      },
      {
        title: 'Modifications',
        text: [
          'Cette politique de confidentialité peut être adaptée de temps à autre. La date en haut de cette page indique quand la dernière modification a eu lieu.',
        ],
      },
    ],
  },
  legal: {
    metaTitle: 'Mentions légales — Kinésithérapie Kim Christiaens',
    metaDescription: 'Coordonnées légales de Kinésithérapie Kim Christiaens, conformément au Code de droit économique.',
    title: 'Mentions légales',
    intro:
      'Conformément au Code de droit économique belge (Livre XII), vous trouverez ci-dessous les mentions légales de ce cabinet et de ce site.',
    sections: [
      {
        title: 'Identification',
        text: [
          `Kim Christiaens, kinésithérapeute, cabinet situé ${SITE.address.full}.`,
          `Téléphone : ${SITE.phone} — E-mail : ${SITE.email}.`,
          `Numéro d’entreprise (BCE) : ${SITE.companyNumber || 'à compléter'}.`,
        ],
      },
      {
        title: 'Informations professionnelles',
        text: [
          ...(SITE.rizivNumber ? [`Numéro INAMI : ${SITE.rizivNumber}.`] : []),
          'Titre professionnel de « kinésithérapeute » obtenu en Belgique et reconnu par le SPF Santé publique, Sécurité de la Chaîne alimentaire et Environnement.',
          'L’exercice de cette profession est soumis au code de déontologie du Conseil fédéral de kinésithérapie, consultable sur www.health.belgium.be.',
        ],
      },
      {
        title: 'Hébergement',
        text: ['Ce site est hébergé par Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis.'],
      },
      {
        title: 'Responsabilité',
        text: [
          'Le contenu de ce site est établi avec soin, mais a un caractère informatif et ne remplace pas un avis ou un examen médical. Kim Christiaens ne peut être tenue responsable d’éventuelles inexactitudes ni des dommages résultant de l’utilisation de ce site.',
        ],
      },
      {
        title: 'Propriété intellectuelle',
        text: [
          'Les textes, images et le logo de ce site sont protégés par le droit d’auteur et ne peuvent être repris sans autorisation écrite préalable.',
        ],
      },
      {
        title: 'Droit applicable',
        text: [
          'Ce site et les services de ce cabinet sont soumis au droit belge. En cas de litige, les tribunaux de l’arrondissement judiciaire du Limbourg sont compétents.',
        ],
      },
    ],
  },
  notFound: {
    title: 'Page introuvable',
    text: 'La page que vous recherchez n’existe pas ou plus. Retournez à la page d’accueil.',
  },
};
