export interface ArticleVariant {
  /** Color/finish name, e.g. "Frost". Omitted for single-variant collections. */
  color?: string;
  /** Article line-up image (products on a colored blob, transparent PNG → webp). */
  image: string;
  /** Short teaser shown in the color slider; switches with the selected variant. */
  teaserDe?: string;
  teaserEn?: string;
}

export interface CollectionDetail {
  /** Short English two-word claim shown as a kicker above the H1 (same DE/EN). */
  kicker: string;
  bodyDe: string;
  bodyEn: string;
  /** SEO meta description for the collection detail page. */
  metaDe: string;
  metaEn: string;
  /** Full-bleed header image (name bubble + organic shape baked in). */
  header: string;
  /** Article preview(s). More than one → color slider above the preview. */
  articles: ArticleVariant[];
  /** Mood photos shown in the bottom slider. */
  moods: string[];
  /** 1-based catalogue page the flipbook opens to for this collection. */
  catalogPage: number;
}

export interface Collection {
  slug: string;
  name: string;
  image: string;
  urlDe: string;
  urlEn: string;
  descriptionDe: string;
  descriptionEn: string;
  /** Present when a fully-designed detail page exists for the collection. */
  detail?: CollectionDetail;
}

export const collections: Collection[] = [
  {
    slug: "flow",
    name: "FLOW",
    image: "/collections/flow.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/flow",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/flow",
    descriptionDe: "Weiche, organische Formen in WHITE und MOON.",
    descriptionEn: "Soft, organic shapes in WHITE and MOON.",
    detail: {
      kicker: "Organic",
      bodyDe:
        "FLOW setzt auf organische Formen und eine moderne, natürliche Ausstrahlung. Erhältlich in zwei Varianten, dem zeitlosen FLOW WHITE und dem matten FLOW MOON. Perfekt für Suppe, Sashimi oder Falafel.",
      bodyEn:
        "FLOW features organic shapes and a modern, natural look. Available in two variations, the timeless FLOW WHITE and the matte FLOW MOON. Perfect for soup, sashimi or falafel.",
      metaDe:
        "FLOW von HEART&SOUL: organische Formen in WHITE und MOON. Coup-Teller und Bowls für Suppe, Sashimi und Desserts zum Teilen.",
      metaEn:
        "FLOW by HEART&SOUL: organic shapes in WHITE and MOON. Coupe plates and bowls for soup, sashimi and sharing desserts.",
      header: "/collections/flow-header.webp",
      catalogPage: 7,
      articles: [
        {
          color: "White",
          image: "/collections/flow-article-white.webp",
          teaserDe:
            "FLOW WHITE spielt mit weichen Linien und einem zeitlosen Ivory-Ton. Ideal für Suppe und Brot, und super easy mit FLOW MOON zu mixen.",
          teaserEn:
            "FLOW WHITE plays with soft lines and a timeless ivory tone. Ideal for soup and bread, and super easy to mix with FLOW MOON.",
        },
        {
          color: "Moon",
          image: "/collections/flow-article-moon.webp",
          teaserDe:
            "Mattes Finish und Farbsprenkel geben FLOW MOON echten Charakter. Ideal für Tuna Sashimi, Falafel oder Desserts zum Teilen.",
          teaserEn:
            "A matte finish and color speckles give FLOW MOON its character. Ideal for tuna sashimi, falafel or sharing desserts.",
        },
      ],
      moods: ["/collections/flow-mood-1.webp", "/collections/flow-mood-2.webp"],
    },
  },
  {
    slug: "balance",
    name: "BALANCE",
    image: "/collections/balance.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/balance",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/balance",
    descriptionDe: "Sanfte Farbwelten und reaktive Glasuren, jedes Teil ein Unikat.",
    descriptionEn: "Soft color tones and reactive glazes, every piece one of a kind.",
    detail: {
      kicker: "Pure balance",
      bodyDe:
        "BALANCE steht für sanfte Farbwelten im modernen Look. Reaktive Glasuren machen jedes Teil zum Unikat, perfekt für vielseitige Table-Settings. Die moderne Coup-Form passt zu jedem Stil, ob Carpaccio, Steak oder Tarte.",
      bodyEn:
        "BALANCE stands for soft color tones with a modern look. Reactive glazes make each piece unique, perfect for versatile table settings. The modern coupe shape suits any style, whether carpaccio, steak or tart.",
      metaDe:
        "BALANCE von HEART&SOUL: reaktive Glasuren in FROST, MATCHA und SMOKE. Coup-Teller, Bowls und Platten, jedes Teil ein Unikat.",
      metaEn:
        "BALANCE by HEART&SOUL: reactive glazes in FROST, MATCHA and SMOKE. Coupe plates, bowls and platters, every piece one of a kind.",
      header: "/collections/balance-header.webp",
      catalogPage: 20,
      articles: [
        {
          color: "Frost",
          image: "/collections/balance-article-frost.webp",
          teaserDe:
            "Mit hellem Blau bringt BALANCE FROST frische Leichtigkeit ins Setting. Für die süßen Momente, ob mit oder ohne Cookie.",
          teaserEn:
            "With its light blue hue, BALANCE FROST adds fresh lightness to any setting. For the sweet moments, with or without a cookie.",
        },
        {
          color: "Matcha",
          image: "/collections/balance-article-matcha.webp",
          teaserDe:
            "Das Grün von BALANCE MATCHA macht gute Laune und passt zu allem, von Carpaccio und Tatar bis zu frischen Veggie-Ideen.",
          teaserEn:
            "The green of BALANCE MATCHA lifts the mood and works with everything, from carpaccio and tartare to fresh veggie ideas.",
        },
        {
          color: "Smoke",
          image: "/collections/balance-article-smoke.webp",
          teaserDe:
            "Auf BALANCE SMOKE bekommt dein Food den großen Auftritt. Passt zu Steak, Salat und Snacks zu guten Drinks.",
          teaserEn:
            "On BALANCE SMOKE, your food gets its big moment. Works with steak, salad and snacks with good drinks.",
        },
      ],
      moods: [
        "/collections/balance-mood-1.webp",
        "/collections/balance-mood-2.webp",
        "/collections/balance-mood-3.webp",
      ],
    },
  },
  {
    slug: "pine",
    name: "PINE",
    image: "/collections/pine.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/pine",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/pine",
    descriptionDe: "Auffällige Relief-Struktur in fünf Glasurfarben.",
    descriptionEn: "Striking relief texture in five glaze colors.",
    detail: {
      kicker: "Textured style",
      bodyDe:
        "Mit seiner auffälligen Relief-Struktur bringt PINE nicht nur Style, sondern auch eine besondere Haptik mit. Erhältlich in fünf Glasurfarben, perfekt für Avocado-Toast, Pasta oder Bowls.",
      bodyEn:
        "With its striking relief texture, PINE offers not only style but also a unique tactile feel. Available in five glaze colors, perfect for avocado toast, pasta or bowls.",
      metaDe:
        "PINE von HEART&SOUL: Relief-Geschirr in fünf Glasurfarben von ALMOND bis COAL. Für Brunch, Pasta und Bowls mit Style.",
      metaEn:
        "PINE by HEART&SOUL: embossed tableware in five glaze colors from ALMOND to COAL. For brunch, pasta and bowls with style.",
      header: "/collections/pine-header.webp",
      catalogPage: 38,
      articles: [
        {
          color: "Almond",
          image: "/collections/pine-article-almond.webp",
          teaserDe:
            "Der sanfte Beigeton von PINE ALMOND strahlt Wärme aus. Ob Pasta, herzhafte Suppe oder frischer Salat: Hier steht das Essen im Mittelpunkt.",
          teaserEn:
            "The soft beige tone of PINE ALMOND radiates warmth. Whether pasta, hearty soup or fresh salad, the food takes center stage.",
        },
        {
          color: "Blush",
          image: "/collections/pine-article-blush.webp",
          teaserDe:
            "PINE BLUSH bringt Style auf den Frühstückstisch: Avocado-Toast und Matcha Latte inklusive. Perfekt, wenn dein Brunch zum Highlight werden soll.",
          teaserEn:
            "PINE BLUSH brings style to the breakfast table: avocado toast and matcha latte included. Perfect for turning your brunch into a highlight.",
        },
        {
          color: "Coal",
          image: "/collections/pine-article-coal.webp",
          teaserDe:
            "Mit nur 10 Artikeln zauberst du mit PINE COAL das perfekte Table-Setting. Ein Farbton, der jedes Essen cooler wirken lässt. Weniger ist mehr!",
          teaserEn:
            "With just 10 items, PINE COAL lets you create the perfect table setting. A shade that makes every dish look cooler. Less is more!",
        },
        {
          color: "Cream",
          image: "/collections/pine-article-cream.webp",
          teaserDe:
            "Die neue Glasur PINE CREAM setzt einen soften Ton, der jedes Gericht untermalt. Entspannt und trotzdem sofort ein Hingucker.",
          teaserEn:
            "The new PINE CREAM glaze sets a soft tone that complements any dish. Relaxed and still an instant eye-catcher.",
        },
        {
          color: "Sky",
          image: "/collections/pine-article-sky.webp",
          teaserDe:
            "Warum immer Bowls, wenn der tiefe Teller in PINE SKY dein neues Trendpiece sein kann? Perfekt für Pasta, Salate oder dein neues Lieblingsgericht.",
          teaserEn:
            "Why always go for bowls when the deep plate in PINE SKY can be your new trend piece? Perfect for pasta, salads or your new favorite dish.",
        },
      ],
      moods: [
        "/collections/pine-mood-1.webp",
        "/collections/pine-mood-2.webp",
        "/collections/pine-mood-3.webp",
      ],
    },
  },
  {
    slug: "mirage",
    name: "MIRAGE",
    image: "/collections/mirage.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/mirage",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/mirage",
    descriptionDe: "Tiefes Indigo mit floralem Dekor und rustikalen Rändern.",
    descriptionEn: "Deep indigo with floral decor and rustic rims.",
    detail: {
      kicker: "Shadow chic",
      bodyDe:
        "MIRAGE INDIGO ist ein echter Hingucker: tiefes Blau, schwarze Akzente, florales Dekor und rustikale Ränder. Perfekt für knackige Summer Rolls, Pasta oder Pizza zum Teilen. Kombi-Tipp: MIRAGE passt perfekt zu PINE COAL.",
      bodyEn:
        "MIRAGE INDIGO is a real eye-catcher: deep blue, black accents, floral decor and rustic rims. Perfect for crunchy summer rolls, pasta or pizza to share. Pairing tip: MIRAGE goes perfectly with PINE COAL.",
      metaDe:
        "MIRAGE von HEART&SOUL: Gastro-Geschirr in tiefem INDIGO mit floralem Dekor. Pizzateller, eckige Platten und Bowls zum Teilen.",
      metaEn:
        "MIRAGE by HEART&SOUL: tableware in deep INDIGO with floral decor. Pizza plates, square platters and bowls for sharing.",
      header: "/collections/mirage-header.webp",
      catalogPage: 60,
      articles: [{ color: "Indigo", image: "/collections/mirage-article.webp" }],
      moods: ["/collections/mirage-mood-1.webp", "/collections/mirage-mood-2.webp"],
    },
  },
  {
    slug: "soulmate",
    name: "SOULMATE",
    image: "/collections/soulmate.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/soulmate",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/soulmate",
    descriptionDe: "Moderne Folk-Vibes in SIENNA und JADE.",
    descriptionEn: "Modern folk vibes in SIENNA and JADE.",
    detail: {
      kicker: "Vibe & dine",
      bodyDe:
        "SOULMATE bringt moderne Folk-Vibes auf den Tisch, inspiriert von orientalischen Mustern. SOULMATE SIENNA und SOULMATE JADE lassen sich perfekt mischen, ob für Pizza, Brunch oder den Abend mit Freunden.",
      bodyEn:
        "SOULMATE brings modern folk vibes to the table, inspired by oriental patterns. SOULMATE SIENNA and SOULMATE JADE mix perfectly, whether for pizza, brunch or an evening with friends.",
      metaDe:
        "SOULMATE von HEART&SOUL: orientalisch inspiriertes Dekor in SIENNA und JADE. Je 20 Artikel, von Pizzateller bis Becher.",
      metaEn:
        "SOULMATE by HEART&SOUL: oriental-inspired decor in SIENNA and JADE. 20 items each, from pizza plates to mugs.",
      header: "/collections/soulmate-header.webp",
      catalogPage: 72,
      articles: [
        {
          color: "Jade",
          image: "/collections/soulmate-article-jade.webp",
          teaserDe:
            "Die chillige Farbe SOULMATE JADE liebt Nachos mit Guac und knusprige Pizza. Kombi-Tipp: PERFECT MATCH AVOCADO und THYME.",
          teaserEn:
            "The chill color SOULMATE JADE loves nachos with guac and crispy pizza. Pairing tip: PERFECT MATCH AVOCADO and THYME.",
        },
        {
          color: "Sienna",
          image: "/collections/soulmate-article-sienna.webp",
          teaserDe:
            "SOULMATE SIENNA bringt moderne Folk-Vibes auf den Tisch. Perfekt für Margherita, Diavola oder fluffige Croissants zum Brunch.",
          teaserEn:
            "SOULMATE SIENNA brings modern folk vibes to the table. Perfect for Margherita, Diavola or fluffy croissants at brunch.",
        },
      ],
      moods: ["/collections/soulmate-mood-1.webp", "/collections/soulmate-mood-2.webp"],
    },
  },
  {
    slug: "perfect-match",
    name: "PERFECT MATCH",
    image: "/collections/perfect-match.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/perfect-match",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/perfect-match",
    descriptionDe: "Vier natürliche Glasurfarben, alle miteinander kombinierbar.",
    descriptionEn: "Four natural glaze colors that all combine with each other.",
    detail: {
      kicker: "Friendship fuel",
      bodyDe:
        "PERFECT MATCH begleitet dich durch den ganzen Tag, vom Espresso am Morgen bis zu Pasta & Vino mit deinen Lieblingsmenschen. Vier natürliche Glasurfarben, die sich alle miteinander kombinieren lassen. Der Name ist Programm.",
      bodyEn:
        "PERFECT MATCH takes you through the whole day, from your morning espresso to pasta & vino with your favorite people. Four natural glaze colors that all combine. The name says it all.",
      metaDe:
        "PERFECT MATCH von HEART&SOUL: vier Glasurfarben, AVOCADO, BREEZE, CUMIN und THYME. Teller, Bowls, Tassen und Becher für den ganzen Food-Tag.",
      metaEn:
        "PERFECT MATCH by HEART&SOUL: four glaze colors, AVOCADO, BREEZE, CUMIN and THYME. Plates, bowls, cups and mugs for the whole day.",
      header: "/collections/perfect-match-header.webp",
      catalogPage: 92,
      articles: [
        {
          color: "Avocado",
          image: "/collections/perfect-match-article-avocado.webp",
          teaserDe:
            "Pasta & Vino mit deinen Lieblingsmenschen? PERFECT MATCH AVOCADO bringt mit besonderer Haptik den passenden Look auf den Tisch.",
          teaserEn:
            "Pasta & vino with your favorite people? PERFECT MATCH AVOCADO brings the right look to the table with its unique texture.",
        },
        {
          color: "Breeze",
          image: "/collections/perfect-match-article-breeze.webp",
          teaserDe:
            "PERFECT MATCH BREEZE bringt frischen Wind auf den Tisch. Die lebendige Glasur erinnert ans Meer und passt nicht nur zu Seafood.",
          teaserEn:
            "PERFECT MATCH BREEZE brings a breath of fresh air to the table. The vibrant glaze evokes the sea and suits far more than seafood.",
        },
        {
          color: "Cumin",
          image: "/collections/perfect-match-article-cumin.webp",
          teaserDe:
            "Die erdige, goldbraune Nuance von PERFECT MATCH CUMIN ist ideal für die Veggie-Küche und den Espresso zwischendurch.",
          teaserEn:
            "The earthy, golden-brown hue of PERFECT MATCH CUMIN is ideal for veggie cuisine and a quick espresso.",
        },
        {
          color: "Thyme",
          image: "/collections/perfect-match-article-thyme.webp",
          teaserDe:
            "PERFECT MATCH THYME bringt frischen Schwung auf den Tisch und holt das Grüne direkt zu deinem Müsli oder Salat.",
          teaserEn:
            "PERFECT MATCH THYME brings fresh energy to the table and puts nature's green right next to your muesli or salad.",
        },
      ],
      moods: ["/collections/perfect-match-mood-1.webp", "/collections/perfect-match-mood-2.webp"],
    },
  },
  {
    slug: "add-on",
    name: "ADD-ON",
    image: "/collections/add-on.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/add-on",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/add-on",
    descriptionDe: "Die kleinen Extras, die deinen Tisch komplett machen.",
    descriptionEn: "The little extras that complete your table.",
    detail: {
      kicker: "Little extras",
      bodyDe:
        "Salz- und Pfefferstreuer, Gießer und Zuckerstick-Behälter: ADD-ON liefert die kleinen Extras, die deinen Tisch komplett machen. Passt zu jeder HEART&SOUL-Kollektion, vom Frühstück bis zum Feierabend.",
      bodyEn:
        "Salt and pepper shakers, creamer and sugar stick holder: ADD-ON delivers the little extras that complete your table. Works with every HEART&SOUL collection, from breakfast to after-work.",
      metaDe:
        "ADD-ON von HEART&SOUL: Salz- und Pfefferstreuer, Gießer und Zuckerstick-Behälter, passend zu jeder HEART&SOUL-Kollektion.",
      metaEn:
        "ADD-ON by HEART&SOUL: salt and pepper shakers, creamer and sugar stick holder that match every HEART&SOUL collection.",
      header: "/collections/add-on-header.webp",
      catalogPage: 1,
      articles: [{ image: "/collections/add-on-article.webp" }],
      moods: [],
    },
  },
];
