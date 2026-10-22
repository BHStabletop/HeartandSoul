export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    "site.title": "HEART&SOUL | Love at first sight",
    "site.description":
      "HEART&SOUL ist buntes Gastro-Geschirr, das einfach passt. Entdecke FLOW, BALANCE, PINE, MIRAGE, SOULMATE und PERFECT MATCH für Café, Brunch und Street Food.",

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
      "HEART&SOUL bringt frischen Wind in die moderne Gastronomie: trendy, unkompliziert und voller Emotion. Bunte Glasuren und natürliche Texturen bringen gute Laune auf jeden Tisch, ob Street Food, Brunch oder regionale Klassiker. Geschirr ohne Schnickschnack, das einfach passt.",
    "about.cta": "Mehr zur Marke",

    "collections.eyebrow": "Kollektionen",
    "collections.title": "Kollektionen",
    "collections.heading": "Finde deine Lieblingskollektion",
    "collections.subtitle":
      "Von organisch bis strukturiert, von zartem Pastell bis kräftigem Indigo: Jede HEART&SOUL-Kollektion hat ihren eigenen Charakter. Alle lassen sich einfach kombinieren und bringen gute Laune auf jeden Tisch. Mix & Match? Unbedingt.",
    "collections.cta": "Zur Kollektion",
    "collections.viewAll": "Alle Kollektionen ansehen",

    "action.imageAlt": "Gedeckter Tisch mit HEART&SOUL Geschirr",
    "action.heading": "See it in<br />action",
    "action.body":
      "Hier siehst du unsere Kollektionen da, wo sie am schönsten sind: mitten im echten Gastro-Alltag, zwischen Brunch-Bowls, Pizza und Espresso. Entdecke neue Farbkombis und finde das Setting, das zu deinem Konzept passt.",
    "action.cta": "Mehr entdecken",

    "values.heading": "Good to know",
    "values.intro":
      "HEART&SOUL-Teile sind gemacht für deinen Gastro-Alltag. Ob internationale Food-Kreationen oder regionale Klassiker: Auf HEART&SOUL sieht alles authentisch aus. Die Glasur schützt die Designs, also einfach ab in die Spülmaschine. Viele Teile sind stapelbar, mega praktisch für kleine Küchen. Und jedes Teil ist ein Unikat, mit Farbvarianzen, die den handwerklichen Look betonen.",
    "values.dishwasher": "Spülmaschinen­fest",
    "values.microwave": "Mikrowellen­geeignet",
    "values.oven": "Ofenfest",
    "values.stackable": "Stapelbar",
    "values.unique": "Unikate",
    "values.colourVariance": "Farbvarianz",
    "values.inStock": "Lagerhaltig",
    "values.fairProduced": "Fair produziert",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Lass uns sprechen",
    "contact.subtitle":
      "Du planst ein neues Konzept oder brauchst schnell Nachschub? Viele Teile sind lagerhaltig. Schreib uns.",
    "contact.email": "hallo@heartandsoul.example",
    "contact.cta": "Kontakt aufnehmen",

    "footer.instagramHandle": "heartandsoul.tableware",
    "footer.instagramCta": "Folge uns auf Instagram",
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
    "instagram.subtitle":
      "Echte Momente aus unserer Community: So sieht HEART&SOUL im Gastro-Alltag aus. Direkt von @bhs.tabletop auf Instagram.",
    "instagram.loading": "Beiträge werden geladen …",
    "instagram.empty": "Aktuell sind keine Beiträge mit #MyHeartAndSoulMoment verfügbar.",
    "instagram.error": "Instagram-Beiträge konnten gerade nicht geladen werden.",
    "instagram.cta": "Mehr auf Instagram ansehen",

    "catalog.heading": "Katalog",
    "catalog.prev": "Zurückblättern",
    "catalog.next": "Weiterblättern",
    "catalog.cue": "Zum Blättern tippen",
    "catalog.page": "Seite",
    "catalog.zoom": "Vergrößern",
    "catalog.zoomAria": "Seite vergrößern",
    "catalog.zoomAlt": "Katalog Seite",
    "catalog.close": "Schließen",

    "collectionDetail.setHeading": "Das Set im Überblick",
    "collectionDetail.inActionHeading": "See it in action",
    "collectionDetail.shopCta": "Jetzt entdecken",
    "collectionDetail.productCta": "Zur Produktübersicht",
    "collectionDetail.referencesCta": "Zu den Referenzen",
    "collectionDetail.moodHeading": "Impressionen",
    "collectionDetail.colorLabel": "Farbe",
    "collectionDetail.nextImage": "Nächstes Bild",
    "collectionDetail.backLink": "← Alle Kollektionen",
  },
  en: {
    "site.title": "HEART&SOUL | Love at first sight",
    "site.description":
      "HEART&SOUL is colorful tableware for modern hospitality that simply fits. Discover FLOW, BALANCE, PINE, MIRAGE, SOULMATE and PERFECT MATCH for cafés, brunch and street food.",

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
      "HEART&SOUL brings a fresh breeze to modern hospitality: trendy, uncomplicated and full of emotion. Colorful glazes and natural textures bring good vibes to every table, whether street food, brunch or regional classics. Tableware without the frills that simply fits.",
    "about.cta": "More about the brand",

    "collections.eyebrow": "Collections",
    "collections.title": "Collections",
    "collections.heading": "Find your favorite",
    "collections.subtitle":
      "From organic to textured, from soft pastel to bold indigo: every HEART&SOUL collection has its own character. They all combine easily and bring good vibes to every table. Mix & match? Absolutely.",
    "collections.cta": "View collection",
    "collections.viewAll": "View all collections",

    "action.imageAlt": "Table set with HEART&SOUL tableware",
    "action.heading": "See it in<br />action",
    "action.body":
      "See our collections where they shine brightest: right in the middle of everyday hospitality, between brunch bowls, pizza and espresso. Discover new color combos and find the setting that fits your concept.",
    "action.cta": "Discover more",

    "values.heading": "Good to know",
    "values.intro":
      "HEART&SOUL pieces are made for your everyday restaurant routine. Whether international food creations or regional classics, everything looks authentic on HEART&SOUL. The glaze protects the designs, so straight into the dishwasher they go. Many pieces are stackable, super practical for small kitchens. And every piece is one of a kind, with color variations that highlight the artisanal look.",
    "values.dishwasher": "Dishwasher-safe",
    "values.microwave": "Microwave-safe",
    "values.oven": "Oven-safe",
    "values.stackable": "Stackable",
    "values.unique": "Unique pieces",
    "values.colourVariance": "Variation in color",
    "values.inStock": "In stock",
    "values.fairProduced": "Fair production",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.subtitle":
      "Planning a new concept or need a quick restock? Many pieces are in stock. Write to us.",
    "contact.email": "hallo@heartandsoul.example",
    "contact.cta": "Get in touch",

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
    "instagram.subtitle":
      "Real moments from our community: this is HEART&SOUL in everyday hospitality. Straight from @bhs.tabletop on Instagram.",
    "instagram.loading": "Loading posts …",
    "instagram.empty": "No posts with #MyHeartAndSoulMoment are available right now.",
    "instagram.error": "Instagram posts couldn't be loaded right now.",
    "instagram.cta": "See more on Instagram",

    "catalog.heading": "Catalog",
    "catalog.prev": "Previous page",
    "catalog.next": "Next page",
    "catalog.cue": "Tap to flip",
    "catalog.page": "Page",
    "catalog.zoom": "Zoom in",
    "catalog.zoomAria": "Zoom in",
    "catalog.zoomAlt": "Catalog page",
    "catalog.close": "Close",

    "collectionDetail.setHeading": "The set at a glance",
    "collectionDetail.inActionHeading": "See it in action",
    "collectionDetail.shopCta": "Discover now",
    "collectionDetail.productCta": "To the product overview",
    "collectionDetail.referencesCta": "To the references",
    "collectionDetail.moodHeading": "Impressions",
    "collectionDetail.colorLabel": "Color",
    "collectionDetail.nextImage": "Next image",
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
