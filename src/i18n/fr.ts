import type { Dictionary } from './types';
import { ROUTES } from './routes';
import { SITE } from '../consts';

export const fr: Dictionary = {
  lang: 'fr',
  htmlLang: 'fr-BE',
  nav: {
    home: 'Accueil',
    about: 'À propos de Kim',
    pelvic: 'Santé pelvienne',
    pelvicHome: 'Aperçu santé pelvienne',
    pelvicWomen: 'Femmes',
    pelvicMen: 'Hommes',
    pelvicChildren: 'Enfants',
    hormones: 'Hormones et étapes de la vie',
    movement: 'Mouvement et sport',
    lectures: 'Conférences et ateliers',
    practical: 'Informations pratiques',
    contact: 'Contact',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    skipToContent: 'Aller au contenu',
    switchLang: 'Voir cette page en néerlandais',
  },
  cta: {
    call: 'Appeler',
    email: 'Envoyer un e-mail',
    mailKim: 'Écrire à Kim',
    contact: 'Prendre rendez-vous',
    discover: 'En savoir plus',
    allServices: 'Tout l’accompagnement',
    backHome: 'Retour à l’accueil',
  },
  footer: {
    tagline: 'Santé pelvienne, santé hormonale et mouvement à Heers, région de Saint-Trond et Hesbaye.',
    servicesTitle: 'Accompagnement',
    contactTitle: 'Contact',
    rights: 'Tous droits réservés.',
    privacyLink: 'Politique de confidentialité',
    legalLink: 'Mentions légales',
    madeBy: 'Site réalisé par',
    madeByLink: 'Coop Consult',
  },
  home: {
    metaTitle: 'Plancher pelvien, hormones et mouvement | The Happy Floor',
    metaDescription:
      'Kim Christiaens accompagne les femmes, les hommes et les enfants en santé pelvienne, hormones et mouvement. Cabinet à Heers, région de Saint-Trond et Hesbaye.',
    heroTagline: 'Santé pelvienne · Hormones · Mouvement',
    heroTitle: 'Comprendre votre corps. Ressentir. Bouger. Lui faire confiance.',
    heroIntro: [
      'Bienvenue. Je suis Kim Christiaens, kinésithérapeute spécialisée en santé pelvienne, santé hormonale et mouvement. Ma passion pour le plancher pelvien m’a progressivement menée vers une vision beaucoup plus globale du corps. Car le plancher pelvien ne fonctionne jamais de manière isolée : hormones, respiration, mouvement, force, sommeil, stress, récupération et sexualité sont liés.',
      'J’accompagne les femmes, les hommes et les enfants face à des troubles qui peuvent avoir un impact important sur la vie quotidienne, mais dont il n’est pas toujours facile de parler : fuites urinaires, douleurs, symptômes de prolapsus, difficultés urinaires ou intestinales, troubles sexuels ou changements pendant et après une grossesse, durant la périménopause et la ménopause.',
      'Je m’intéresse aussi à ce qui se passe au-delà de la zone où vous ressentez vos symptômes. Votre plancher pelvien est lié au reste de votre corps. La respiration, le mouvement, la force, les tensions, le sommeil, la récupération, les hormones et les contraintes quotidiennes peuvent tous jouer un rôle. C’est pourquoi je prends en compte l’ensemble de votre histoire corporelle. Ensemble, nous cherchons ce dont vous avez besoin pour mieux comprendre votre corps, bouger plus librement et retrouver confiance dans ses capacités.',
    ],
    servicesTitle: 'Comment puis-je vous aider',
    services: [
      {
        title: 'Santé pelvienne',
        description:
          'Accompagnement des troubles du plancher pelvien, de la vessie, des intestins, de la douleur et de la sexualité.',
        href: ROUTES.pelvic.fr,
      },
      {
        title: 'Hormones et étapes de la vie',
        description: 'Compréhension et soutien face aux changements corporels aux différentes étapes de la vie.',
        href: ROUTES.hormones.fr,
      },
      {
        title: 'Mouvement et sport',
        description: 'Travail ciblé sur la force, la récupération, la coordination et la confiance dans le mouvement.',
        href: ROUTES.movement.fr,
      },
      {
        title: 'Conférences et ateliers',
        description:
          'Des connaissances accessibles, des situations concrètes et des outils pratiques pour les groupes et les professionnels.',
        href: ROUTES.lectures.fr,
      },
    ],
    wholeBodyTitle: 'Le plancher pelvien ne fonctionne jamais de manière isolée',
    wholeBodyText: [
      'Un trouble s’explique rarement par un seul muscle simplement trop faible ou trop tendu. Votre manière de respirer, de bouger, de récupérer et de gérer les contraintes joue un rôle. Les changements hormonaux, le stress, le sommeil, les expériences passées et votre étape de vie peuvent aussi avoir une influence.',
      'Pour moi, l’accompagnement commence donc par l’écoute, l’évaluation et les explications. Nous construisons ensuite une approche adaptée à votre corps, votre histoire et vos objectifs.',
    ],
    approachTitle: 'Ma manière de travailler',
    approachItems: [
      'Du temps et de l’attention pour votre histoire',
      'Des explications claires sur ce qui se passe dans votre corps',
      'Une évaluation et un traitement adaptés à votre demande',
      'Des exercices concrets et des outils pratiques à utiliser chez vous',
      'Une collaboration avec les médecins et les autres professionnels de santé lorsque cela est utile',
    ],
    brandStoryTitle: 'The Happy Floor reflète ma vision globale',
    brandStoryText: [
      'The Happy Floor est né de ma passion pour le plancher pelvien et résume ma manière actuelle d’aborder la santé. Le plancher pelvien ne fonctionne jamais de manière isolée. Mon travail concerne donc aussi tout ce qui lui est lié : hormones, respiration, mouvement, force, récupération, sexualité et bien-être dans son corps.',
      'Ce nom réunit mon accompagnement, mon expertise, mes conférences, mes ateliers et Instagram dans une identité reconnaissable. Quel que soit le contexte dans lequel vous me découvrez, vous retrouverez la même approche chaleureuse, experte et globale. Suivez @thehappyfloorandmore pour des explications, des situations dans lesquelles vous reconnaître et des informations pratiques.',
    ],
    ctaTitle: 'Prêt·e à faire connaissance ?',
    ctaText: 'N’hésitez pas à me contacter pour un rendez-vous ou pour toute question. Je me ferai un plaisir de vous aider.',
  },
  about: {
    metaTitle: 'À propos de Kim Christiaens | The Happy Floor',
    metaDescription:
      'Kim Christiaens, kinésithérapeute avec une compétence particulière en rééducation pelvienne et kinésithérapie périnatale, formée en santé hormonale.',
    eyebrow: 'À propos de Kim',
    title: 'La curiosité pour le corps et pour l’histoire qui l’accompagne',
    intro: [
      'Je suis Kim Christiaens, kinésithérapeute, toujours curieuse de comprendre comment le corps fonctionne, évolue et s’adapte.',
      'Mon intérêt pour la santé pelvienne a grandi au fil des années. Non seulement parce que le plancher pelvien est une région anatomique fascinante, mais surtout parce que les troubles du bassin peuvent profondément influencer la manière dont une personne se sent, bouge et vit. Je trouve essentiel de pouvoir en parler. Sans honte, sans tabou et sans avoir le sentiment que votre corps vous abandonne.',
      'Grâce à mes formations et à mon expérience, je me suis spécialisée en rééducation pelvienne, kinésithérapie périnatale, thérapie manuelle, santé des femmes, santé pelvienne masculine et santé hormonale. Ma vision s’est aussi élargie : je ne considère pas uniquement un muscle ou une articulation, mais la personne qui se trouve devant moi. Comment bougez-vous ? Comment gérez-vous les efforts et la récupération ? Qu’est-ce qui change dans votre vie ? Que vous dit votre corps ? Ces questions sont souvent plus utiles que la seule localisation de la douleur.',
    ],
    approachTitle: 'Ma manière de travailler',
    approachText: [
      'J’aime donner des explications claires, proposer des outils pratiques et chercher ensemble ce qui fonctionne. Je souhaite qu’après une consultation, vous repartiez non seulement avec des exercices, mais aussi avec une meilleure compréhension de votre corps et davantage de confiance.',
      'L’objectif final est que vous sachiez à nouveau ce dont votre corps a besoin et comment agir vous-même, plutôt que de rester dépendant de la thérapie.',
    ],
    educationTitle: 'Formations et expertise',
    educationIntro:
      'Cette sélection concise présente la formation initiale, la compétence professionnelle particulière reconnue et les formations complémentaires directement liées à l’offre actuelle.',
    education: [
      'Master en sciences de la réadaptation et kinésithérapie, option réadaptation pédiatrique — KU Leuven, 2007',
      'Thérapie manuelle — VMTV, 2011',
      'Compétence professionnelle particulière en rééducation pelvienne et kinésithérapie périnatale — formation interuniversitaire, 2017',
      'Dry Needling Pelvic Floor — Gahl, De Berekuyl, 2021',
      'Formation postgraduée en coaching de mode de vie et kinésithérapie, 2022',
      'Pelvic Organ Prolapse Program, thérapie par pessaire — Dr N’Dongo Abdallahi, BICAP, 2022',
      'The Athletic Pelvis — Bill Taylor, 2023',
      'Formation postgraduée Body in Balance, Muscle Chains — FICO, 2024-2025',
      'Biofeedback and Ultrasound in Pelvic Health — Montse Rejano, 2025',
      'Women in Balance : expertise du cycle et de la ménopause — SmartEducation, 2026',
    ],
  },
  pelvicHome: {
    metaTitle: 'Santé pelvienne à Heers | The Happy Floor',
    metaDescription:
      'Accompagnement des troubles du plancher pelvien chez les femmes, les hommes et les enfants : fuites urinaires, douleurs, prolapsus. Cabinet à Heers.',
    eyebrow: 'Santé pelvienne',
    title: 'Les troubles du bassin méritent votre attention',
    intro:
      'Les troubles du plancher pelvien sont fréquents, mais peuvent être très personnels et difficiles à aborder. Vous présentez peut-être des fuites urinaires, une douleur, une sensation de pression, des difficultés pour uriner ou aller à la selle, ou des rapports sexuels qui ne sont plus aussi simples ou indolores qu’avant. Vous n’avez pas besoin de savoir précisément quel muscle ou quelle structure est à l’origine du problème. Nous partons de ce que vous ressentez et de ce que vous souhaitez pouvoir faire à nouveau.',
    audiencesTitle: 'Pour qui',
    audiences: [
      {
        title: 'Femmes',
        description:
          'Fuites urinaires, envies pressantes, prolapsus, douleur, endométriose, SOPK, troubles du cycle et de la fertilité, sexualité, grossesse et postpartum.',
        href: ROUTES.pelvicWomen.fr,
      },
      {
        title: 'Hommes',
        description:
          'Troubles avant ou après un traitement de la prostate, fuites urinaires, douleurs pelviennes, difficultés urinaires et troubles sexuels comme les troubles de l’érection.',
        href: ROUTES.pelvicMen.fr,
      },
      {
        title: 'Enfants',
        description:
          'Pipi au lit, fuites urinaires ou de selles, constipation, comportements de rétention et difficultés à se relâcher aux toilettes.',
        href: ROUTES.pelvicChildren.fr,
      },
    ],
    expectTitle: 'À quoi vous attendre',
    expectText: [
      'Lors du premier rendez-vous, nous faisons le point sur vos symptômes, vos habitudes, les contraintes auxquelles vous êtes soumis et vos objectifs. L’examen est toujours expliqué et réalisé avec votre consentement. Selon votre demande, il peut comprendre une observation, une évaluation fonctionnelle, une échographie ou d’autres méthodes de mesure et de biofeedback.',
      'Le traitement peut comprendre des explications, des techniques de respiration et de relaxation, un entraînement musculaire ciblé, des techniques manuelles, des conseils comportementaux, des exercices et une reprise progressive des activités quotidiennes ou du sport.',
    ],
  },
  pelvicWomen: {
    metaTitle: 'Santé pelvienne des femmes | The Happy Floor',
    metaDescription:
      'Troubles du plancher pelvien chez la femme : fuites urinaires, prolapsus, douleurs, endométriose, SOPK, grossesse et postpartum. Cabinet à Heers.',
    eyebrow: 'Santé pelvienne · Femmes',
    title: 'Vous ne devez pas simplement apprendre à vivre avec vos symptômes',
    intro:
      'Les troubles du plancher pelvien peuvent apparaître ou évoluer après une grossesse ou un accouchement, lors de changements hormonaux, après une opération, pendant le sport ou sans cause évidente. Ils peuvent influencer vos mouvements, votre travail, votre sommeil, votre sexualité et votre confiance en vous.',
    checklistTitle: 'Vous pouvez notamment consulter pour',
    checklist: [
      'Des fuites urinaires ou des envies soudaines et pressantes',
      'Des difficultés à uriner ou à vider complètement la vessie',
      'Une constipation, une incontinence fécale ou des douleurs anorectales',
      'Une sensation de lourdeur ou de pression et des symptômes de prolapsus',
      'Des douleurs au niveau du bassin, de la vulve ou du vagin',
      'Des douleurs pendant les rapports sexuels ou des difficultés à relâcher les muscles',
      'Une endométriose et des douleurs menstruelles ou pelviennes persistantes',
      'Un SOPK et des symptômes liés au cycle',
      'Des troubles du cycle, une infertilité ou des difficultés à concevoir',
      'Des symptômes pendant la grossesse ou après l’accouchement',
    ],
    secondaryTitle: 'Le bon équilibre',
    secondaryText: [
      'Un plancher pelvien fonctionnel n’est pas seulement fort. Les muscles doivent aussi pouvoir se relâcher, réagir et travailler avec votre respiration et le reste de votre corps. Contracter davantage n’est donc pas toujours la solution.',
      'Ensemble, nous examinons les facteurs qui vous concernent et travaillons de manière ciblée sur le contrôle, le confort, la force et la confiance.',
    ],
  },
  pelvicMen: {
    metaTitle: 'Santé pelvienne des hommes | The Happy Floor',
    metaDescription:
      'Troubles pelviens chez l’homme : fuites urinaires, difficultés urinaires, douleurs pelviennes et troubles sexuels, aussi après un traitement de la prostate.',
    eyebrow: 'Santé pelvienne · Hommes',
    title: 'Un accompagnement ciblé pour des troubles dont on parle peu',
    intro:
      'Les hommes peuvent également présenter des troubles du plancher pelvien, par exemple après une opération de la prostate, en cas de douleurs pelviennes chroniques, de difficultés urinaires ou de troubles sexuels.',
    checklistTitle: 'Vous pouvez notamment consulter pour',
    checklist: [
      'Des fuites urinaires avant ou après un traitement de la prostate',
      'Des envies pressantes ou un besoin fréquent d’uriner',
      'Des difficultés à commencer à uriner, le besoin de pousser ou une vidange incomplète de la vessie',
      'Des douleurs pelviennes chroniques ou des tensions',
      'Des troubles anorectaux ou une constipation',
      'Des troubles sexuels, tels que des troubles de l’érection, des douleurs pendant les rapports ou des difficultés liées à l’éjaculation',
    ],
    secondaryTitle: 'Un accompagnement personnel et discret',
    secondaryText: [
      'Nous abordons calmement ce que vous ressentez et son impact sur votre quotidien. L’examen et le traitement sont expliqués étape par étape et réalisés uniquement avec votre consentement.',
      'L’accompagnement porte sur la force musculaire, mais aussi sur la coordination, le relâchement, la respiration, la gestion des pressions et la reprise progressive des activités quotidiennes ou du sport.',
    ],
  },
  pelvicChildren: {
    metaTitle: 'Santé pelvienne des enfants | The Happy Floor',
    metaDescription:
      'Pipi au lit, fuites urinaires ou de selles et constipation chez l’enfant : une approche adaptée, sans pression. Cabinet à Heers, région de Saint-Trond.',
    eyebrow: 'Santé pelvienne · Enfants',
    title: 'Apprendre à écouter les signaux du corps',
    intro:
      'Les troubles urinaires et intestinaux sont souvent éprouvants pour l’enfant et sa famille. La honte, la frustration et les conflits autour des passages aux toilettes peuvent vite apparaître. Il est essentiel de comprendre qu’il ne s’agit généralement pas d’un manque de volonté.',
    checklistTitle: 'Les enfants peuvent notamment consulter pour',
    checklist: [
      'Le pipi au lit',
      'Des fuites urinaires pendant la journée',
      'Des envies fréquentes ou très pressantes d’uriner',
      'Des fuites de selles',
      'Une constipation et des douleurs aux toilettes',
      'Une tendance à retenir longtemps les urines ou les selles',
      'Des difficultés à se relâcher ou une technique de poussée inadaptée',
    ],
    secondaryTitle: 'Une approche adaptée à l’enfant',
    secondaryText: [
      'Nous expliquons simplement le fonctionnement de la vessie, des intestins et du plancher pelvien, puis cherchons ensemble des habitudes réalistes. Selon les besoins, nous utilisons un calendrier mictionnel ou des selles, des exercices ludiques, la respiration, l’échographie comme retour visuel et des consignes pratiques pour la maison.',
      'Les parents sont associés de manière à soutenir l’enfant sans ajouter de pression. Si le développement global, le traitement des informations sensorielles ou les émotions interviennent, une collaboration avec d’autres professionnels peut être utile.',
    ],
  },
  hormones: {
    metaTitle: 'Hormones et étapes de la vie | The Happy Floor',
    metaDescription:
      'Accompagnement des changements hormonaux : cycle, grossesse, postpartum, périménopause et ménopause. Cabinet à Heers, région de Saint-Trond.',
    eyebrow: 'Hormones et étapes de la vie',
    title: 'Votre corps change et mérite d’être mieux compris',
    intro:
      'Les hormones influencent bien plus que le cycle menstruel. Elles peuvent intervenir dans l’énergie, le sommeil, la récupération, la force musculaire, le tissu conjonctif, la santé osseuse, la composition corporelle, l’humeur, la sexualité et le fonctionnement du plancher pelvien. De la puberté et des premières règles à la périménopause et à la ménopause, en passant par la fertilité, la grossesse et l’accouchement, chaque étape s’accompagne de changements hormonaux et de symptômes possibles.',
    helpTitle: 'Comment puis-je vous aider',
    helpItems: [
      'Mieux comprendre les changements de votre corps',
      'Adapter le mouvement et l’entraînement à votre capacité à supporter les efforts',
      'Développer progressivement la force musculaire, les sollicitations osseuses et la récupération',
      'Replacer les troubles du plancher pelvien dans leur contexte global',
      'Aborder des choix de mode de vie pratiques et réalistes',
      'Vous orienter de manière ciblée lorsqu’une évaluation médicale est nécessaire',
    ],
    approachTitle: 'Une approche globale et réaliste',
    approachText: [
      'Votre corps peut réagir autrement aux efforts et à la récupération, le mouvement peut être ressenti différemment et certains troubles qui disparaissaient spontanément peuvent devenir récurrents. Ensemble, nous déterminons les besoins de soutien propres à cette étape et les situations nécessitant une évaluation médicale complémentaire.',
      'Nous examinons les adaptations possibles du mouvement, du renforcement musculaire, du sommeil, de la régulation du stress, de la récupération et des habitudes quotidiennes pour soutenir votre corps. L’alimentation et, lorsque cela est pertinent, des compléments soigneusement choisis peuvent aussi être abordés dans cette approche globale.',
    ],
    referralText:
      'En cas d’endométriose, de SOPK, de troubles importants du cycle ou de difficultés à concevoir, cet accompagnement s’inscrit dans le suivi médical. Si nécessaire, je collabore avec un médecin généraliste, un gynécologue, un endocrinologue, un spécialiste de la fertilité ou un diététicien, ou je vous oriente vers eux, afin que les différentes interventions s’articulent en toute sécurité.',
  },
  movement: {
    metaTitle: 'Mouvement et sport | The Happy Floor',
    metaDescription:
      'Reprendre le mouvement et le sport avec confiance malgré des fuites urinaires, une sensation de pression, des douleurs ou des blessures. Cabinet à Heers.',
    eyebrow: 'Mouvement et sport',
    title: 'Bouger avec confiance dans votre corps',
    intro: [
      'Le mouvement est une composante importante de la santé et de la récupération. Pourtant, faire du sport peut devenir source d’incertitude en cas de fuites urinaires, de sensation de pression, de douleur, de blessures récurrentes ou lorsque le corps réagit autrement qu’avant.',
      'Je vous aide à comprendre les facteurs en jeu et à reprendre progressivement le mouvement. Nous considérons le plancher pelvien, mais aussi la respiration, le tronc, les hanches, la force, la coordination, la capacité à supporter les efforts et la récupération.',
    ],
    helpTitle: 'Motifs possibles de consultation',
    helpItems: [
      'Des symptômes pendant la course, comme des fuites urinaires, des envies pressantes, une sensation de pression ou des douleurs pelviennes',
      'Des fuites urinaires ou une sensation de pression pendant les sauts ou le renforcement musculaire',
      'La reprise de la course et du sport après une grossesse ou un accouchement',
      'Des douleurs au bassin, à l’aine, aux adducteurs ou aux ischio-jambiers',
      'Des difficultés à gérer les pressions lorsque vous soulevez ou portez une charge',
      'Le développement de la force et de la capacité à supporter les efforts pendant les changements hormonaux',
      'Réapprendre à bouger après une douleur ou une période d’inactivité',
    ],
    closingText:
      'L’objectif est de trouver comment continuer, de manière sûre et durable, les activités qui comptent pour vous.',
  },
  lectures: {
    metaTitle: 'Conférences et ateliers | The Happy Floor',
    metaDescription:
      'Conférences et ateliers sur la santé pelvienne, les changements hormonaux et le mouvement, adaptés aux patients, sportifs, professionnels et entreprises.',
    eyebrow: 'Conférences et ateliers',
    title: 'Des connaissances qui parlent au quotidien',
    intro: [
      'En parallèle de mon travail au cabinet, je donne des conférences et des ateliers sur la santé pelvienne, la santé des femmes et des hommes, les changements hormonaux et le mouvement.',
      'J’aime rendre les sujets complexes compréhensibles et traduire les connaissances scientifiques en outils utiles au quotidien ou dans la pratique professionnelle. Les séances proposent des explications claires, des situations concrètes et des pistes pratiques, plutôt qu’une simple accumulation de théorie.',
    ],
    themesTitle: 'Thèmes possibles',
    themes: [
      'Ménopause et mouvement',
      'Hormones et sport',
      'Plancher pelvien et stress',
      'Santé pelvienne dans le sport et la réadaptation',
      'Santé des femmes',
      'Santé pelvienne masculine',
      'Plancher pelvien et sexualité',
      'Le corps pendant et après la grossesse',
    ],
    audienceTitle: 'Pour qui',
    audienceText:
      'Les conférences et ateliers peuvent être adaptés aux patients, sportifs, professionnels de santé, associations, entreprises et autres groupes. Le contenu, la durée et le niveau sont définis selon le public et la demande de l’organisateur.',
    form: {
      title: 'Demander des informations ou une proposition',
      orgName: 'Nom de l’organisation',
      contactPerson: 'Personne de contact',
      audience: 'Public cible',
      attendees: 'Nombre prévu de participants',
      theme: 'Thème souhaité',
      preferredDate: 'Date souhaitée',
      location: 'Lieu',
      extra: 'Informations complémentaires',
      submit: 'Envoyer',
      honeypot: 'Laissez ce champ vide',
    },
  },
  practical: {
    metaTitle: 'Informations pratiques | The Happy Floor',
    metaDescription:
      'Rendez-vous, tarifs, remboursement, annulation et disponibilité chez The Happy Floor by Kim Christiaens à Heers, région de Saint-Trond.',
    eyebrow: 'Informations pratiques',
    title: 'Informations pratiques',
    intro:
      'Tout ce que vous devez savoir avant et entre vos rendez-vous : le déroulement d’une première consultation, le coût d’une séance et la manière la plus rapide de me joindre.',
    appointmentsTitle: 'Rendez-vous',
    appointmentsText: [
      'Le premier rendez-vous dure environ 60 minutes. Il prévoit ainsi suffisamment de temps pour discuter de votre demande, de vos antécédents et de vos objectifs et, si cela est approprié, commencer l’examen.',
      'Les consultations suivantes durent 30 minutes et sont adaptées à votre parcours.',
    ],
    ratesTitle: 'Tarifs',
    rates: [
      { label: 'Premier rendez-vous', duration: 'environ 60 minutes', price: '92 € à 100 €' },
      { label: 'Consultation de suivi', duration: '30 minutes', price: '46 €' },
    ],
    prescriptionTitle: 'Prescription et remboursement',
    prescriptionText: [
      'Pour un remboursement par votre mutuelle, vous avez besoin d’une prescription de votre médecin.',
      'Je suis déconventionnée : mes tarifs ne sont pas liés aux tarifs officiels de l’INAMI. Une partie des frais vous est toutefois remboursée par votre mutuelle. Le montant dépend de votre statut.',
    ],
    paymentTitle: 'Paiement',
    paymentText: 'Vous payez à chaque séance, par Bancontact ou Payconiq.',
    cancelTitle: 'Annulation',
    cancelText:
      'Vous ne pouvez pas venir ? Prévenez-moi dès que possible. Les rendez-vous annulés moins de 24 heures à l’avance peuvent être facturés, sauf en cas de force majeure.',
    reachTitle: 'Me contacter',
    reachText:
      'Pour un rendez-vous ou une question, je préfère recevoir un e-mail ou un message. Pendant les séances, je ne peux pas répondre au téléphone et écouter les messages vocaux est moins pratique pour moi. Un message écrit me permet de vous répondre plus rapidement et de façon plus précise. Les messages reçoivent généralement une réponse dans les trois jours ouvrables.',
  },
  contact: {
    metaTitle: 'Contact et rendez-vous | The Happy Floor',
    metaDescription:
      'Prenez rendez-vous chez The Happy Floor by Kim Christiaens à Heers, région de Saint-Trond. Envoyez un e-mail ou un message, ou passez au cabinet.',
    eyebrow: 'Contact',
    title: 'Vous n’avez pas à trouver toutes les réponses par vous-même',
    intro:
      'Vous avez une question et vous ne savez pas par où commencer ? Expliquez brièvement ce qui vous pose problème et ce que vous aimeriez pouvoir faire à nouveau. Nous verrons ensuite quel accompagnement vous convient. Vous n’avez pas besoin de tout comprendre à votre corps avant de demander de l’aide : c’est justement ce que nous pouvons commencer à explorer ensemble.',
    addressTitle: 'Adresse',
    phoneTitle: 'Téléphone',
    emailTitle: 'E-mail',
    mapTitle: 'Planifier l’itinéraire',
    formNote: 'Je préfère un contact écrit ; merci de ne pas laisser de message vocal.',
    formTitle: 'Envoyer un message',
    form: {
      name: 'Nom',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      phoneOptional: 'facultatif',
      phoneHint: 'Utilisez uniquement des chiffres, éventuellement précédés d’un + (au moins 8 chiffres)',
      subject: 'Objet',
      preferredContactLabel: 'Mode de contact préféré',
      preferredContactEmail: 'E-mail',
      preferredContactMessage: 'Message',
      preferredContactPhone: 'Téléphone',
      message: 'Message',
      consent: 'J’accepte que mes données soient utilisées pour répondre à ma demande.',
      privacyLink: 'Lire la politique de confidentialité',
      submit: 'Envoyer',
      honeypot: 'Laissez ce champ vide',
    },
    practiceNoteTitle: 'Un cabinet dans un cadre verdoyant',
    practiceNoteText:
      'Le cabinet se trouve dans un environnement calme et rural à Heers. Des photos du cabinet et des informations pratiques sur le stationnement, l’accessibilité et l’entrée suivront ici dès qu’elles seront disponibles.',
  },
  thankyou: {
    metaTitle: 'Message envoyé | The Happy Floor',
    metaDescription: 'Merci pour votre message. Je vous recontacte dans les plus brefs délais.',
    title: 'Merci pour votre message !',
    text: 'J’ai bien reçu votre message et je vous recontacte dans les plus brefs délais.',
  },
  privacy: {
    metaTitle: 'Politique de confidentialité | The Happy Floor',
    metaDescription:
      'Comment The Happy Floor by Kim Christiaens traite vos données via les formulaires de contact et les statistiques du site.',
    title: 'Politique de confidentialité',
    intro:
      'Cette page explique quelles données ce site collecte, à quoi elles servent, et comment vous pouvez les faire modifier ou supprimer.',
    updated: 'Dernière mise à jour : octobre 2026',
    sections: [
      {
        title: 'Responsable du traitement',
        text: [
          `Ce site est géré par ${SITE.legalName}, le cabinet de Kim Christiaens, kinésithérapeute, ${SITE.address.full} (responsable du traitement au sens du RGPD). Pour toute question sur vos données, contactez ${SITE.email}.`,
        ],
      },
      {
        title: 'Formulaires de contact',
        text: [
          'Lorsque vous complétez un formulaire de contact ou de demande, les informations que vous saisissez sont utilisées uniquement pour répondre à votre question, confirmer un rendez-vous ou traiter une demande de conférence ou d’atelier. Cela se fait sur la base de votre consentement lors de l’envoi du formulaire et, le cas échéant, des démarches précontractuelles nécessaires (art. 6.1.a et 6.1.b RGPD).',
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
          'Ce site est hébergé chez Netlify, Inc. (États-Unis), qui traite également les formulaires de contact et les statistiques du site. Pour tout transfert de données hors de l’EEE, Netlify prévoit des garanties appropriées (clauses contractuelles types / EU-U.S. Data Privacy Framework).',
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
    metaTitle: 'Mentions légales | The Happy Floor',
    metaDescription:
      `Coordonnées légales de ${SITE.legalName}, le cabinet de Kim Christiaens, conformément au Code de droit économique.`,
    title: 'Mentions légales',
    intro:
      'Conformément au Code de droit économique belge (Livre XII), vous trouverez ci-dessous les mentions légales de ce cabinet et de ce site.',
    sections: [
      {
        title: 'Identification',
        text: [
          `${SITE.legalName}, cabinet de Kim Christiaens, kinésithérapeute, situé ${SITE.address.full}.`,
          `Téléphone : ${SITE.phone} — E-mail : ${SITE.email}.`,
          `Numéro d’entreprise (BCE) : ${SITE.companyNumber || 'à compléter'}.`,
          `Marque : ${SITE.brandFull}.`,
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
          `Le contenu de ce site est établi avec soin, mais a un caractère informatif et ne remplace pas un avis ou un examen médical. ${SITE.legalName} ne peut être tenue responsable d’éventuelles inexactitudes ni des dommages résultant de l’utilisation de ce site.`,
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
