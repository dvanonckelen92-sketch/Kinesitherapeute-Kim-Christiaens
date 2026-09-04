import type { UiDictionary } from './types';
import { SITE } from '../consts';

export const nl: UiDictionary = {
  lang: 'nl',
  htmlLang: 'nl-BE',
  nav: {
    home: 'Home',
    perinatal: 'Perinatale begeleiding',
    pelvic: 'Bekkenbodemtherapie',
    manual: 'Manuele therapie',
    rates: 'Tarieven',
    contact: 'Contact',
    menu: 'Menu',
    closeMenu: 'Menu sluiten',
    skipToContent: 'Ga naar de inhoud',
    switchLang: 'Bekijk deze pagina in het Frans',
  },
  cta: {
    call: 'Bel nu',
    email: 'Stuur een e-mail',
    contact: 'Neem contact op',
    discover: 'Meer weten',
    allServices: 'Alle behandelingen',
    backHome: 'Terug naar home',
  },
  footer: {
    tagline: 'Perinatale begeleiding, bekkenbodemtherapie en manuele therapie in Heers, Sint-Truiden en Haspengouw.',
    servicesTitle: 'Behandelingen',
    contactTitle: 'Contact',
    rights: 'Alle rechten voorbehouden.',
    privacyLink: 'Privacybeleid',
    legalLink: 'Wettelijke vermeldingen',
    madeBy: 'Website door',
    madeByLink: 'Coop Consult',
  },
  home: {
    metaTitle: 'Kinesitherapie Kim Christiaens — Heers & Sint-Truiden',
    metaDescription:
      'Kinesitherapeute Kim Christiaens in Heers begeleidt je bij perinatale zorg, bekkenbodemtherapie en manuele therapie. Meer dan 10 jaar ervaring, regio Sint-Truiden en Haspengouw.',
    heroEyebrow: 'Kinesitherapie met aandacht',
    heroTitle: 'Persoonlijke kinesitherapie voor elke levensfase',
    heroSubtitle: 'Perinatale begeleiding · Bekkenbodemtherapie · Manuele therapie',
    heroText:
      'Meer dan 10 jaar ervaring en een bijzondere beroepsbekwaamheid in pelvische revalidatie en perinatale kinesitherapie, in een rustige praktijk in Heers.',
    aboutTitle: 'Over de praktijk',
    aboutText: [
      'Naast meer dan 10 jaar ervaring als kinesitherapeute en het volgen van allerhande opleidingen, waaronder een postgraduaat manuele therapie, heb ik ook een bijzondere beroepsbekwaamheid in de pelvische revalidatie en perinatale kinesitherapie.',
      'Naast begeleiding van vrouwen in de perinatale periode, richt deze tak van de kinesitherapie zich ook op de behandeling van klachten van de bekkenbodem, en dit bij mannen, vrouwen en kinderen. Daarnaast wordt de bekkenbodem bekeken als een belangrijke schakel in het stabiliserend spiercorset.',
    ],
    servicesTitle: 'Waarmee kan ik je helpen?',
    servicesIntro: 'Drie gespecialiseerde behandelingen, telkens op maat van jouw lichaam en jouw verhaal.',
    services: [
      {
        title: 'Perinatale begeleiding',
        description:
          'Begeleiding voor, tijdens en na de zwangerschap: van bekkenbodemwerk en bevallingsvoorbereiding tot babymassage en dragen.',
        href: '/perinatale-begeleiding/',
        icon: 'perinatal',
      },
      {
        title: 'Bekkenbodemtherapie',
        description:
          'Behandeling van urinaire, faecale en seksuele klachten en verzakkingen bij vrouwen, mannen en kinderen.',
        href: '/bekkenbodemtherapie/',
        icon: 'pelvic',
      },
      {
        title: 'Manuele therapie',
        description:
          'Onderzoek en behandeling van het bewegingsapparaat bij nek-, rug-, heup- en knieklachten.',
        href: '/manuele-therapie/',
        icon: 'manual',
      },
    ],
    whyTitle: 'Waarom kiezen voor deze praktijk?',
    whyItems: [
      {
        title: '10+ jaar ervaring',
        text: 'Jarenlange klinische ervaring, aangevuld met een postgraduaat manuele therapie en gespecialiseerde bijscholingen.',
      },
      {
        title: 'Erkende specialisatie',
        text: 'Bijzondere beroepsbekwaamheid in pelvische revalidatie en perinatale kinesitherapie.',
      },
      {
        title: 'Aandacht voor elke patiënt',
        text: 'Voor vrouwen, mannen en kinderen, met een persoonlijke aanpak op maat van jouw klachten.',
      },
      {
        title: 'Rustige, toegankelijke praktijk',
        text: 'Een praktijk in Heers, vlot bereikbaar vanuit Sint-Truiden, Haspengouw en het naburige Waalse en Franse grensgebied.',
      },
    ],
    areaTitle: 'Praktijk in Heers, ook bereikbaar vanuit',
    areaText:
      'De praktijk is gevestigd in Heers (Rukkelingen-Loon), op korte afstand van Sint-Truiden. Patiënten uit de ruimere Haspengouwse regio en het aangrenzende Franstalige grensgebied zijn ook van harte welkom.',
    areaPlaces: ['Heers', 'Sint-Truiden', 'Borgloon', 'Tongeren', 'Landen', 'Waremme'],
    ctaTitle: 'Klaar om kennis te maken?',
    ctaText: 'Neem gerust contact op voor een afspraak of met al je vragen. Ik help je graag verder.',
  },
  perinatal: {
    metaTitle: 'Perinatale begeleiding — Kinesitherapie Kim Christiaens',
    metaDescription:
      'Begeleiding voor en na de bevalling: prenatale voorbereiding, postnatale revalidatie, babymassage en dragen. Praktijk in Heers, regio Sint-Truiden.',
    title: 'Perinatale begeleiding',
    intro:
      'Zwanger worden, bevallen en moeder worden is een unieke ervaring. Ik begeleid je graag doorheen elke fase, met aandacht voor je lichaam en je herstel.',
    subServices: [
      {
        id: 'prenataal',
        title: 'Prenataal: bewust zwanger en bevallen',
        sections: [
          {
            title: 'Wat mag je verwachten?',
            items: [
              'Leren aanvoelen van de bekkenbodem',
              'Informatie over het verloop van een zwangerschap en bevalling',
              'Leren gebruikmaken van bal en ademhaling om weeën op te vangen',
              'De partner leert om actief te begeleiden',
              'Behandeling van rug- en bekkenklachten',
            ],
          },
        ],
      },
      {
        id: 'postnataal',
        title: 'Postnataal: actief moeder zijn',
        sections: [
          {
            title: 'Wat mag je verwachten?',
            items: [
              'Versterken van de bekkenbodem en de juiste balans tussen opspannen en loslaten',
              'Versterken van het bekkencorset en stabilisatietraining',
              'Reconditionering na de bevalling',
            ],
          },
        ],
      },
      {
        id: 'babymassage',
        title: 'Babymassage',
        lead:
          'Babymassage is een prettige manier om als ouder je baby beter te leren kennen en ermee om te gaan.',
        sections: [
          {
            title: 'Doel',
            items: [
              'Baby tot rust leren brengen',
              'Verlichting bij darmkrampjes en moeilijke stoelgang',
            ],
          },
        ],
      },
      {
        id: 'dragen',
        title: 'Dragen',
        lead:
          'Je baby heeft negen maanden in een knusse, begrensde ruimte vertoefd, waarin het constant gewiegd en gedragen werd, en afgeschermd was voor harde prikkels. Na de geboorte komt je kindje in een grote, koude wereld terecht met veel licht en onbekende geluiden. Daarom is het belangrijk dat het kindje vooral tijdens de eerste levensmaanden veel lichaamscontact en aanrakingen heeft. Een draagdoek is hier perfect voor, en ondertussen hebben ouders hun handen vrij.',
        sections: [
          {
            title: 'Tijdens een consult',
            items: [
              'Uitleg over de verschillende manieren van dragen: rekbare doek, geweven doek, draagzak',
              'De ergonomie van kindje en drager staat centraal',
              'Aanleren van knopen voor buik- en rugdragen',
              'Je leert hoe je je draagzak correct afstelt',
            ],
          },
        ],
      },
      {
        id: 'groepslessen',
        title: 'Groepslessen',
        lead: 'Binnenkort beschikbaar. Neem gerust contact op om op de hoogte te blijven.',
        sections: [],
      },
    ],
  },
  pelvic: {
    metaTitle: 'Bekkenbodemtherapie — Kinesitherapie Kim Christiaens',
    metaDescription:
      'Bekkenbodemtherapie voor vrouwen, mannen en kinderen: urinaire, faecale en seksuele klachten, verzakkingen en meer. Praktijk in Heers, regio Sint-Truiden.',
    title: 'Bekkenbodemtherapie',
    intro:
      'De bekkenbodem speelt een belangrijke rol bij continentie, seksualiteit en houding. Klachten komen voor bij vrouwen, mannen en kinderen, en zijn vaak goed te behandelen.',
    groups: [
      {
        id: 'vrouwen',
        title: 'Vrouwen',
        categories: [
          {
            title: 'Urinaire problemen',
            items: [
              'Stress-incontinentie, urge-incontinentie',
              'Dysfunctional voiding',
              'Na chirurgische ingrepen, bv. TOT (transobturatorius tape), TVT (tensionfree vaginal tape)',
            ],
          },
          {
            title: 'Faecale problemen',
            items: ['Incontinentie', 'Constipatie', 'Anorectale pijnklachten'],
          },
          {
            title: 'Seksuele problemen',
            items: ['Vaginisme', 'Dyspareunie (pijn bij betrekkingen)', 'Vulvodynie'],
          },
          {
            title: 'Prolaps',
            items: ['Verzakkingen'],
          },
        ],
        treatments: {
          title: 'Kinebehandelingen',
          items: [
            'Leren ontspannen van de bekkenbodem',
            'Versterken van de bekkenbodem',
            'Drank- en plasschema’s',
            'Elektrostimulatie',
            'Biofeedback',
            'Ballontherapie',
            'Houdingscorrectie en stabilisatietraining',
          ],
        },
      },
      {
        id: 'mannen',
        title: 'Mannen',
        categories: [
          {
            title: 'Urinaire problemen',
            items: [
              'Incontinentie',
              'Dysfunctional voiding',
              'Na chirurgische ingrepen, bv. prostatectomie',
            ],
          },
          {
            title: 'Faecale problemen',
            items: ['Incontinentie', 'Constipatie', 'Anorectale pijnklachten'],
          },
          {
            title: 'Seksuele problemen',
            items: ['Vroegtijdige ejaculatie', 'Erectiestoornissen'],
          },
        ],
        treatments: {
          title: 'Kinebehandelingen',
          items: [
            'Leren ontspannen van de bekkenbodem',
            'Versterken van de bekkenbodem',
            'Drank- en plasschema’s',
            'Elektrostimulatie',
            'Biofeedback',
            'Ballontraining',
            'Houdingscorrectie en stabilisatietraining',
          ],
        },
      },
      {
        id: 'kinderen',
        title: 'Kinderen',
        categories: [
          {
            title: 'Urinaire problemen',
            items: ['Bedplassen', 'Urineverlies'],
          },
          {
            title: 'Darmproblemen',
            items: ['Stoelgangsverlies', 'Constipatie'],
          },
          {
            title: 'Ophoudgedrag',
            items: [],
          },
        ],
        treatments: {
          title: 'Kinebehandeling',
          items: [
            'Plas- en drankschema',
            'Dag- en nachtwekkers',
            'Aanleren van ontspannen en opspannen van de bekkenbodem',
            'Elektrostimulatie',
            'Biofeedback',
            'Ballontherapie',
            'Massage',
            'Stabilisatietraining en houdingscorrectie',
          ],
        },
      },
    ],
  },
  manual: {
    metaTitle: 'Manuele therapie — Kinesitherapie Kim Christiaens',
    metaDescription:
      'Manuele therapie voor hoofd-, nek-, rug-, heup- en knieklachten. Onderzoek en behandeling van het bewegingsapparaat. Praktijk in Heers, regio Sint-Truiden.',
    title: 'Manuele therapie',
    intro: [
      'Manuele therapie is bedoeld om klachten in het bewegingsapparaat te onderzoeken en te behandelen. Vaak is een overbelasting van een spier-pees-gewricht de oorzaak van de klacht, waardoor bewegen moeilijk en pijnlijk wordt.',
      'De manueel therapeut gebruikt specifieke bewegingen — mobilisaties en manipulaties — om de functiestoornis te herstellen. Daarnaast wordt ook aandacht besteed aan actieve revalidatie via stretching en actieve oefeningen.',
    ],
    indicationsTitle: 'Voor welke klachten is manuele therapie geschikt?',
    indications: [
      'Hoofd- en nekpijn',
      'Nek- en schouderklachten, eventueel uitstralend naar de arm of vingers',
      'Lage rugklachten en bekkenklachten',
      'Heup- en/of knieklachten',
    ],
  },
  rates: {
    metaTitle: 'Tarieven — Kinesitherapie Kim Christiaens',
    metaDescription: 'Tarieven kinesitherapie Kim Christiaens, praktijk in Heers, regio Sint-Truiden.',
    title: 'Tarieven',
    intro: 'Een duidelijk overzicht van de behandelingskost.',
    items: [
      { label: 'Statuut', value: 'Gedeconventioneerd' },
      { label: 'Tarief courante behandeling', value: '€ 31,50' },
    ],
    note:
      'Heb je vragen over terugbetaling door je ziekenfonds? Neem gerust contact op, dan bekijken we dit samen.',
  },
  contact: {
    metaTitle: 'Contact — Kinesitherapie Kim Christiaens',
    metaDescription:
      'Maak een afspraak bij Kinesitherapie Kim Christiaens in Heers, regio Sint-Truiden. Bel, mail of kom langs.',
    title: 'Contact',
    intro: 'Heb je een vraag of wil je een afspraak maken? Ik help je graag verder.',
    addressTitle: 'Adres',
    phoneTitle: 'Telefoon',
    emailTitle: 'E-mail',
    mapTitle: 'Route naar de praktijk',
    linksTitle: 'Nuttige links',
    links: [
      { label: 'Vroedvrouw Ilse', href: '#' },
      { label: 'Onze videotraining op YouTube (vraag meer informatie)', href: '#' },
    ],
    formNote: 'Je kan me het snelst bereiken via telefoon of e-mail.',
    formTitle: 'Stuur een bericht',
    form: {
      name: 'Naam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      phoneOptional: 'optioneel',
      message: 'Bericht',
      submit: 'Versturen',
      honeypot: 'Laat dit veld leeg',
    },
  },
  thankyou: {
    metaTitle: 'Bericht verzonden — Kinesitherapie Kim Christiaens',
    metaDescription: 'Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.',
    title: 'Bedankt voor je bericht!',
    text: 'Ik heb je bericht ontvangen en neem zo snel mogelijk contact met je op.',
  },
  privacy: {
    metaTitle: 'Privacybeleid — Kinesitherapie Kim Christiaens',
    metaDescription: 'Hoe Kinesitherapie Kim Christiaens omgaat met je gegevens via het contactformulier en websitestatistieken.',
    title: 'Privacybeleid',
    intro:
      'Deze pagina legt uit welke gegevens deze website verzamelt, waarvoor ze gebruikt worden en hoe je ze kan laten aanpassen of verwijderen.',
    updated: 'Laatst bijgewerkt: september 2026',
    sections: [
      {
        title: 'Verantwoordelijke',
        text: [
          'Deze website wordt beheerd door Kim Christiaens, kinesitherapeute, Bovelingenstraat 387, 3870 Heers (verwerkingsverantwoordelijke in de zin van de AVG/GDPR). Voor vragen over je gegevens kan je terecht op info@kimchristiaens.be.',
        ],
      },
      {
        title: 'Contactformulier',
        text: [
          'Wanneer je het contactformulier invult, worden de gegevens die je zelf invult (naam, e-mailadres, eventueel telefoonnummer en je bericht) enkel gebruikt om je vraag te beantwoorden of een afspraak te bevestigen. Dit gebeurt op basis van jouw toestemming bij het versturen van het formulier en, waar van toepassing, om stappen te zetten voorafgaand aan een behandelingsovereenkomst (art. 6.1.a en 6.1.b AVG).',
          'Deze gegevens worden niet gebruikt voor marketing en niet doorgegeven aan derden, buiten de hierna vermelde verwerkers. Ze worden bewaard tot maximaal 12 maanden na de laatste contactname, tenzij er een afspraak of behandelrelatie uit voortvloeit — in dat geval gelden de wettelijke bewaartermijnen voor patiëntendossiers.',
        ],
      },
      {
        title: 'Websitestatistieken',
        text: [
          'Deze website gebruikt Netlify Analytics om een algemeen beeld te krijgen van het aantal bezoekers en de bezochte pagina’s, op basis van ons gerechtvaardigd belang om de website te verbeteren (art. 6.1.f AVG). Deze statistieken worden verzameld op basis van serverlogs, niet via cookies of trackingscripts, en laten geen individuele bezoekers herkennen.',
          'Er worden geen advertentie- of trackingcookies van derden gebruikt, en er verschijnt daarom geen cookiebanner op deze website.',
        ],
      },
      {
        title: 'Verwerkers en externe diensten',
        text: [
          'Deze website wordt gehost bij Netlify, Inc. (Verenigde Staten), dat ook het contactformulier en de websitestatistieken verwerkt. Voor eventuele doorgifte van gegevens buiten de EER voorziet Netlify passende waarborgen (standaardcontractbepalingen / EU-U.S. Data Privacy Framework).',
          'De routekaart op de contactpagina wordt ingeladen via OpenStreetMap. Bij het bekijken van deze kaart kan je toestel een verbinding maken met de servers van de OpenStreetMap Foundation; wij delen hierbij zelf geen persoonsgegevens.',
        ],
      },
      {
        title: 'Jouw rechten',
        text: [
          'Je hebt steeds het recht op inzage, verbetering, verwijdering en beperking van je gegevens, het recht om je toestemming in te trekken en het recht op overdraagbaarheid van je gegevens. Stuur hiervoor een e-mail naar info@kimchristiaens.be.',
          'Je hebt ook het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA), Drukpersstraat 35, 1000 Brussel — contact@apd-gba.be — www.gegevensbeschermingsautoriteit.be.',
        ],
      },
      {
        title: 'Wijzigingen',
        text: [
          'Dit privacybeleid kan van tijd tot tijd aangepast worden. De datum bovenaan deze pagina geeft aan wanneer de laatste wijziging gebeurde.',
        ],
      },
    ],
  },
  legal: {
    metaTitle: 'Wettelijke vermeldingen — Kinesitherapie Kim Christiaens',
    metaDescription: 'Wettelijke identificatiegegevens van Kinesitherapie Kim Christiaens, conform het Wetboek van Economisch Recht.',
    title: 'Wettelijke vermeldingen',
    intro:
      'Conform het Belgische Wetboek van Economisch Recht (Boek XII) vind je hieronder de wettelijke identificatiegegevens van deze praktijk en website.',
    sections: [
      {
        title: 'Identificatie',
        text: [
          `Kim Christiaens, kinesitherapeute, met praktijkadres ${SITE.address.full}.`,
          `Telefoon: ${SITE.phone} — E-mail: ${SITE.email}.`,
          `Ondernemingsnummer (KBO): ${SITE.companyNumber || 'wordt aangevuld'}.`,
        ],
      },
      {
        title: 'Beroepsinformatie',
        text: [
          ...(SITE.rizivNumber ? [`RIZIV-nummer: ${SITE.rizivNumber}.`] : []),
          'Beroepstitel "kinesitherapeut" behaald in België en erkend door de FOD Volksgezondheid, Veiligheid van de Voedselketen en Leefmilieu.',
          'Op de uitoefening van dit beroep is de deontologische code van de Federale Raad voor Kinesitherapeuten van toepassing. Deze code kan geraadpleegd worden via www.health.belgium.be.',
        ],
      },
      {
        title: 'Hosting',
        text: ['Deze website wordt gehost door Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, Verenigde Staten.'],
      },
      {
        title: 'Aansprakelijkheid',
        text: [
          'De inhoud van deze website is met zorg samengesteld, maar heeft een informatief karakter en vervangt geen medisch advies of onderzoek. Kim Christiaens is niet aansprakelijk voor eventuele onjuistheden of voor schade die zou voortvloeien uit het gebruik van deze website.',
        ],
      },
      {
        title: 'Intellectuele eigendom',
        text: [
          'De teksten, afbeeldingen en het logo op deze website zijn beschermd door het auteursrecht en mogen niet worden overgenomen zonder voorafgaande schriftelijke toestemming.',
        ],
      },
      {
        title: 'Toepasselijk recht',
        text: [
          'Op deze website en de diensten van deze praktijk is het Belgische recht van toepassing. Bij geschillen zijn de rechtbanken van het gerechtelijk arrondissement Limburg bevoegd.',
        ],
      },
    ],
  },
  notFound: {
    title: 'Pagina niet gevonden',
    text: 'De pagina die je zoekt bestaat niet (meer). Ga terug naar de homepagina.',
  },
};
