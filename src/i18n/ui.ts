export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    "site.title": "HEART&SOUL",
    "site.description": "HEART&SOUL — mit Herz und Verstand gemacht.",

    "nav.home": "Startseite",
    "nav.collections": "Kollektionen",
    "nav.about": "About Us",
    "nav.values": "Werte",
    "nav.contact": "Kontakt",
    "nav.cta": "Kontakt aufnehmen",

    "hero.eyebrow": "HEART&SOUL",
    "hero.title": "Mit Herz und Verstand gemacht",
    "hero.subtitle":
      "Zwei Worte, eine Haltung: ehrliche Arbeit, die man spürt — sorgfältig gedacht und mit Liebe zum Detail umgesetzt.",
    "hero.ctaPrimary": "Mehr erfahren",
    "hero.ctaSecondary": "Kontakt",

    "about.eyebrow": "Über uns",
    "about.title": "Unsere Geschichte beginnt mit einer Idee",
    "about.p1":
      "HEART&SOUL ist aus dem Wunsch entstanden, Dinge anders zu machen — persönlicher, sorgfältiger und mit echtem Anspruch an Qualität.",
    "about.p2":
      "Wir glauben, dass gute Arbeit Zeit, Handwerk und Haltung braucht. Genau das bringen wir in jedes Projekt ein.",

    "values.eyebrow": "Werte",
    "values.title": "Was uns antreibt",
    "values.heart.title": "Herz",
    "values.heart.desc": "Wir arbeiten mit echtem Engagement — nicht nur nach Vorschrift.",
    "values.care.title": "Sorgfalt",
    "values.care.desc": "Details entscheiden. Wir nehmen uns die Zeit, sie richtig zu machen.",
    "values.honesty.title": "Ehrlichkeit",
    "values.honesty.desc":
      "Klare Kommunikation und Verlässlichkeit sind für uns Grundlage jeder Zusammenarbeit.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Lass uns sprechen",
    "contact.subtitle": "Du hast ein Projekt im Kopf oder einfach eine Frage? Schreib uns.",
    "contact.email": "hallo@heartandsoul.example",

    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.madeWith": "Made with Astro & Tailwind CSS.",
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

    "collections.eyebrow": "Kollektionen",
    "collections.title": "Unsere Kollektionen",
    "collections.subtitle":
      "Jede HEART&SOUL-Kollektion hat ihren eigenen Charakter. Ein Klick führt dich zur jeweiligen Kollektion auf bhs-tabletop.com.",
    "collections.cta": "Zur Kollektion",
  },
  en: {
    "site.title": "HEART&SOUL",
    "site.description": "HEART&SOUL — made with heart and mind.",

    "nav.home": "Home",
    "nav.collections": "Collections",
    "nav.about": "About Us",
    "nav.values": "Values",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    "hero.eyebrow": "HEART&SOUL",
    "hero.title": "Made with heart and mind",
    "hero.subtitle":
      "Two words, one attitude: honest work you can feel — carefully considered and crafted with love for detail.",
    "hero.ctaPrimary": "Learn more",
    "hero.ctaSecondary": "Contact",

    "about.eyebrow": "About us",
    "about.title": "Our story starts with an idea",
    "about.p1":
      "HEART&SOUL was born from the wish to do things differently — more personally, more carefully, and with a genuine commitment to quality.",
    "about.p2":
      "We believe good work takes time, craft, and attitude. That's exactly what we bring to every project.",

    "values.eyebrow": "Values",
    "values.title": "What drives us",
    "values.heart.title": "Heart",
    "values.heart.desc": "We work with real commitment — not just by the book.",
    "values.care.title": "Care",
    "values.care.desc": "Details matter. We take the time to get them right.",
    "values.honesty.title": "Honesty",
    "values.honesty.desc": "Clear communication and reliability are the foundation of every collaboration.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.subtitle": "Got a project in mind, or just a question? Write to us.",
    "contact.email": "hallo@heartandsoul.example",

    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with Astro & Tailwind CSS.",
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

    "collections.eyebrow": "Collections",
    "collections.title": "Our Collections",
    "collections.subtitle":
      "Every HEART&SOUL collection has its own character. Click through to see it on bhs-tabletop.com.",
    "collections.cta": "View collection",
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
