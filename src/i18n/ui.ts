export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    "site.title": "HEART&SOUL",
    "site.description": "HEART&SOUL — Geschirr-Kollektionen für die moderne Gastronomie.",

    "nav.home": "Startseite",
    "nav.collections": "Kollektionen",
    "nav.about": "Über die Marke",
    "nav.contact": "Kontakt",
    "nav.cta": "Kontakt aufnehmen",
    "nav.menu": "Menü öffnen",

    "hero.imageAlt": "HEART&SOUL Geschirr auf gedecktem Tisch",
    "hero.headline": "Love at<br />first sight",
    "hero.scrollCue": "Nach unten scrollen",

    "about.heading": "Good vibes only",
    "about.body":
      "HEART&SOUL bringt frischen Wind in die moderne Gastronomie: trendy, unkompliziert und voller Emotion. Vielseitige Designs, natürliche Texturen und trendige Glasuren schaffen eine Atmosphäre voller Genuss und Geselligkeit.",
    "about.cta": "Mehr zur Marke",

    "collections.eyebrow": "Kollektionen",
    "collections.title": "Kollektionen",
    "collections.heading": "Finde deinen Favorit",
    "collections.subtitle":
      "Von organisch bis strukturiert, von zartem Pastell bis kräftigem Indigo – jede HEART&SOUL Kollektion hat ihren eigenen Charakter. Alle sind easy kombinierbar und bringen gute Laune auf jeden Tisch. Stöbere durch die Kollektionen und finde die, die zu deinem Konzept passt. Mix & Match? Unbedingt.",
    "collections.cta": "Zur Kollektion",
    "collections.viewAll": "Alle Kollektionen ansehen →",

    "action.imageAlt": "Gedeckter Tisch mit HEART&SOUL Geschirr",
    "action.heading": "See it in<br />action",
    "action.body":
      "Hier siehst du unsere Kollektionen da, wo sie am schönsten sind: mitten im echten Gastro-Alltag. Lass dich inspirieren, entdecke neue Farbkombis und finde das Setting, das zu deinem Konzept passt.",
    "action.cta": "Mehr entdecken",

    "values.heading": "Good to know",
    "values.dishwasher": "Spülmaschinen-\ngeeignet",
    "values.microwave": "Mikrowellen-\ngeeignet",
    "values.oven": "Backofenfest",
    "values.stackable": "Stapelbar",
    "values.unique": "Unikate",
    "values.colourVariance": "Farbvarianz",
    "values.inStock": "Lagerhaltig",
    "values.fairProduced": "Fair produziert",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Lass uns sprechen",
    "contact.subtitle": "Du hast ein Projekt im Kopf oder einfach eine Frage? Schreib uns.",
    "contact.email": "hallo@heartandsoul.example",

    "footer.instagramHandle": "heartandsoul.tableware",
    "footer.instagramCta": "Follow us on Instagram",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.cookieSettings": "Cookie-Einstellungen",

    "cookie.title": "Wir verwenden Cookies",
    "cookie.text":
      "Wir nutzen notwendige Cookies, damit diese Website funktioniert. Mit deiner Zustimmung nutzen wir außerdem Google Analytics (über Google Tag Manager), um die Nutzung der Website zu verstehen und zu verbessern. Mehr dazu in unserer",
    "cookie.privacyLink": "Datenschutzerklärung",
    "cookie.acceptAll": "Alle akzeptieren",
    "cookie.rejectAll": "Nur notwendige",

    "impressum.eyebrow": "Rechtliches",
    "datenschutz.eyebrow": "Rechtliches",

    "instagram.eyebrow": "Community",
    "instagram.title": "#MyHeartAndSoulMoment",
    "instagram.subtitle": "Momente unserer Community mit HEART&SOUL — direkt von @bhs.tabletop auf Instagram.",
    "instagram.loading": "Beiträge werden geladen …",
    "instagram.empty": "Aktuell sind keine Beiträge mit #MyHeartAndSoulMoment verfügbar.",
    "instagram.error": "Instagram-Beiträge konnten gerade nicht geladen werden.",
    "instagram.cta": "Mehr auf Instagram ansehen",

    "collectionDetail.setHeading": "Das Set im Überblick",
    "collectionDetail.inActionHeading": "See it in action",
    "collectionDetail.shopCta": "Jetzt entdecken",
    "collectionDetail.productCta": "Zur Produktübersicht",
    "collectionDetail.referencesCta": "Zu den Referenzen",
    "collectionDetail.moodHeading": "Impressionen",
    "collectionDetail.colorLabel": "Farbe",
    "collectionDetail.backLink": "← Alle Kollektionen",
  },
  en: {
    "site.title": "HEART&SOUL",
    "site.description": "HEART&SOUL — tableware collections for modern hospitality.",

    "nav.home": "Home",
    "nav.collections": "Collections",
    "nav.about": "About the brand",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    "nav.menu": "Open menu",

    "hero.imageAlt": "HEART&SOUL tableware on a set table",
    "hero.headline": "Love at<br />first sight",
    "hero.scrollCue": "Scroll down",

    "about.heading": "Good vibes only",
    "about.body":
      "HEART&SOUL brings fresh energy to modern hospitality: trendy, uncomplicated and full of emotion. Versatile designs, natural textures and on-trend glazes create an atmosphere of enjoyment and togetherness.",
    "about.cta": "More about the brand",

    "collections.eyebrow": "Collections",
    "collections.title": "Collections",
    "collections.heading": "Find your favourite",
    "collections.subtitle":
      "From organic to structured, from soft pastel to bold indigo — every HEART&SOUL collection has its own character. All of them mix and match effortlessly and bring good vibes to every table. Browse the collections and find the one that fits your concept. Mix & match? Absolutely.",
    "collections.cta": "View collection",
    "collections.viewAll": "View all collections →",

    "action.imageAlt": "Table set with HEART&SOUL tableware",
    "action.heading": "See it in<br />action",
    "action.body":
      "See our collections where they shine brightest: right in the middle of everyday hospitality. Get inspired, discover new colour combinations and find the setting that fits your concept.",
    "action.cta": "Discover more",

    "values.heading": "Good to know",
    "values.dishwasher": "Dishwasher\nsafe",
    "values.microwave": "Microwave\nsafe",
    "values.oven": "Oven safe",
    "values.stackable": "Stackable",
    "values.unique": "One of a kind",
    "values.colourVariance": "Colour variance",
    "values.inStock": "In stock",
    "values.fairProduced": "Fairly produced",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.subtitle": "Got a project in mind, or just a question? Write to us.",
    "contact.email": "hallo@heartandsoul.example",

    "footer.instagramHandle": "heartandsoul.tableware",
    "footer.instagramCta": "Follow us on Instagram",
    "footer.rights": "All rights reserved.",
    "footer.impressum": "Legal notice",
    "footer.datenschutz": "Privacy policy",
    "footer.cookieSettings": "Cookie settings",

    "cookie.title": "We use cookies",
    "cookie.text":
      "We use necessary cookies to make this site work. With your consent, we also use Google Analytics (via Google Tag Manager) to understand and improve how the site is used. Learn more in our",
    "cookie.privacyLink": "privacy policy",
    "cookie.acceptAll": "Accept all",
    "cookie.rejectAll": "Necessary only",

    "impressum.eyebrow": "Legal",
    "datenschutz.eyebrow": "Legal",

    "instagram.eyebrow": "Community",
    "instagram.title": "#MyHeartAndSoulMoment",
    "instagram.subtitle": "Community moments with HEART&SOUL — straight from @bhs.tabletop on Instagram.",
    "instagram.loading": "Loading posts …",
    "instagram.empty": "No posts with #MyHeartAndSoulMoment are available right now.",
    "instagram.error": "Instagram posts couldn't be loaded right now.",
    "instagram.cta": "See more on Instagram",

    "collectionDetail.setHeading": "The set at a glance",
    "collectionDetail.inActionHeading": "See it in action",
    "collectionDetail.shopCta": "Discover now",
    "collectionDetail.productCta": "To the product overview",
    "collectionDetail.referencesCta": "To the references",
    "collectionDetail.moodHeading": "Impressions",
    "collectionDetail.colorLabel": "Colour",
    "collectionDetail.backLink": "← All collections",
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(de|en)/, "") || "/";
  return lang === defaultLang ? cleanPath : `/en${cleanPath}`;
}
