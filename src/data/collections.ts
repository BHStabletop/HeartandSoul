export interface ArticleVariant {
  /** Colour/finish name, e.g. "Frost". Omitted for single-variant collections. */
  color?: string;
  /** Article line-up image (products on a coloured blob, transparent PNG → webp). */
  image: string;
}

export interface CollectionDetail {
  /** Optional intro heading. When omitted, only the body lead is shown. */
  headingDe?: string;
  headingEn?: string;
  bodyDe: string;
  bodyEn: string;
  /** Full-bleed header image (name bubble + organic shape baked in). */
  header: string;
  /** Article preview(s). More than one → colour slider above the preview. */
  articles: ArticleVariant[];
  /** Mood photos shown in the bottom slider. */
  moods: string[];
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
    descriptionDe: "Weiche, fließende Formen mit einer ruhigen, organischen Ausstrahlung.",
    descriptionEn: "Soft, flowing shapes with a calm, organic character.",
    detail: {
      bodyDe:
        "FLOW bringt mit weichen, organischen Formen Ruhe auf den Tisch. Die handgeformte Optik in klassischem Weiß passt zu jedem Anlass und lässt deine Speisen natürlich wirken.",
      bodyEn:
        "FLOW brings calm to the table with soft, organic shapes. The handmade look in classic white suits every occasion and lets your dishes shine naturally.",
      header: "/collections/flow-header.webp",
      articles: [
        { color: "White", image: "/collections/flow-article-white.webp" },
        { color: "Moon", image: "/collections/flow-article-moon.webp" },
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
    descriptionDe: "Klare Linien und ausgewogene Proportionen für zeitlose Eleganz.",
    descriptionEn: "Clean lines and balanced proportions for timeless elegance.",
    detail: {
      bodyDe:
        "BALANCE vereint klare Linien mit ausgewogenen Proportionen. In drei ruhigen Farbwelten – Frost, Matcha und Smoke – schaffst du zeitlose, harmonische Tischbilder.",
      bodyEn:
        "BALANCE combines clean lines with balanced proportions. In three calm colourways – Frost, Matcha and Smoke – you create timeless, harmonious table settings.",
      header: "/collections/balance-header.webp",
      articles: [
        { color: "Frost", image: "/collections/balance-article-frost.webp" },
        { color: "Matcha", image: "/collections/balance-article-matcha.webp" },
        { color: "Smoke", image: "/collections/balance-article-smoke.webp" },
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
    descriptionDe: "Strukturiertes Relief-Dekor, inspiriert von natürlichen Texturen.",
    descriptionEn: "Textured relief decor, inspired by natural surfaces.",
    detail: {
      bodyDe:
        "PINE lebt von strukturiertem Relief-Dekor, inspiriert von natürlichen Texturen. Fünf Farbtöne – Almond, Blush, Coal, Cream und Sky – laden zum Kombinieren ein.",
      bodyEn:
        "PINE is all about textured relief decor, inspired by natural surfaces. Five shades – Almond, Blush, Coal, Cream and Sky – invite you to mix and match.",
      header: "/collections/pine-header.webp",
      articles: [
        { color: "Almond", image: "/collections/pine-article-almond.webp" },
        { color: "Blush", image: "/collections/pine-article-blush.webp" },
        { color: "Coal", image: "/collections/pine-article-coal.webp" },
        { color: "Cream", image: "/collections/pine-article-cream.webp" },
        { color: "Sky", image: "/collections/pine-article-sky.webp" },
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
    descriptionDe: "Ausdrucksstarke Farbtiefe mit einem lebendigen, modernen Look.",
    descriptionEn: "Expressive color depth with a vivid, modern look.",
    detail: {
      headingDe: "Tiefblau mit Charakter",
      headingEn: "Deep blue with character",
      bodyDe:
        "MIRAGE im kräftigen Indigo ist ein echter Eyecatcher. Die tiefblaue Oberfläche mit schwarzen Akzenten wirkt modern und ausdrucksstark, während florale Ornamente und rustikale Ränder eine handgemachte Note reinbringen. Ob frischer Salat, kleine Snacks oder herzhafte Hauptgerichte – auf MIRAGE gewinnt jede Speise an Präsenz.",
      bodyEn:
        "MIRAGE in a bold indigo is a real eye-catcher. The deep-blue surface with black accents looks modern and expressive, while floral ornaments and rustic rims add a handmade touch. Whether a fresh salad, small snacks or hearty mains – on MIRAGE every dish gains presence.",
      header: "/collections/mirage-header.webp",
      articles: [{ image: "/collections/mirage-article.webp" }],
      moods: ["/collections/mirage-mood-1.webp", "/collections/mirage-mood-2.webp"],
    },
  },
  {
    slug: "soulmate",
    name: "SOULMATE",
    image: "/collections/soulmate.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/soulmate",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/soulmate",
    descriptionDe: "Kräftige Farbtöne und character-starkes Design zum Kombinieren.",
    descriptionEn: "Bold colors and characterful design, made for mixing.",
    detail: {
      bodyDe:
        "SOULMATE setzt auf kräftige Farbtöne und charakterstarkes Design. Die beiden Farbwelten Jade und Sienna lassen sich wunderbar miteinander kombinieren.",
      bodyEn:
        "SOULMATE relies on bold colours and characterful design. The two colourways, Jade and Sienna, combine beautifully with one another.",
      header: "/collections/soulmate-header.webp",
      articles: [
        { color: "Jade", image: "/collections/soulmate-article-jade.webp" },
        { color: "Sienna", image: "/collections/soulmate-article-sienna.webp" },
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
    descriptionDe: "Warme Erdtöne, die sich mühelos miteinander kombinieren lassen.",
    descriptionEn: "Warm earth tones that combine effortlessly with one another.",
    detail: {
      bodyDe:
        "PERFECT MATCH bringt warme Erdtöne auf den Tisch, die sich mühelos miteinander kombinieren lassen. Vier Farben – Avocado, Breeze, Cumin und Thyme – für dein perfektes Mix & Match.",
      bodyEn:
        "PERFECT MATCH brings warm earth tones to the table that combine effortlessly. Four colours – Avocado, Breeze, Cumin and Thyme – for your perfect mix & match.",
      header: "/collections/perfect-match-header.webp",
      articles: [
        { color: "Avocado", image: "/collections/perfect-match-article-avocado.webp" },
        { color: "Breeze", image: "/collections/perfect-match-article-breeze.webp" },
        { color: "Cumin", image: "/collections/perfect-match-article-cumin.webp" },
        { color: "Thyme", image: "/collections/perfect-match-article-thyme.webp" },
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
    descriptionDe: "Vielseitige Ergänzungsstücke, die jede HEART&SOUL-Kollektion abrunden.",
    descriptionEn: "Versatile accent pieces that round out every HEART&SOUL collection.",
    detail: {
      bodyDe:
        "ADD-ON ergänzt die HEART&SOUL-Kollektionen mit vielseitigen Teilen, die jedes Set abrunden – flexibel kombinierbar mit all deinen Lieblingsstücken.",
      bodyEn:
        "ADD-ON complements the HEART&SOUL collections with versatile pieces that round out every set – flexibly combinable with all your favourites.",
      header: "/collections/add-on-header.webp",
      articles: [{ image: "/collections/add-on-article.webp" }],
      moods: [],
    },
  },
];
