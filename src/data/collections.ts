export interface CollectionDetail {
  /** Intro section heading, e.g. "Tiefblau mit Charakter". */
  headingDe: string;
  headingEn: string;
  bodyDe: string;
  bodyEn: string;
  /** "See it in action" body copy. */
  actionBodyDe: string;
  actionBodyEn: string;
  /** Full-bleed hero image (name bubble baked in). */
  hero: string;
  /** Product line-up image ("Zur Produktübersicht"). */
  product: string;
  /** Feature image for the "See it in action" block. */
  action: string;
  /** Reference photos shown in the carousel. */
  references: string[];
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
  },
  {
    slug: "balance",
    name: "BALANCE",
    image: "/collections/balance.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/balance",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/balance",
    descriptionDe: "Klare Linien und ausgewogene Proportionen für zeitlose Eleganz.",
    descriptionEn: "Clean lines and balanced proportions for timeless elegance.",
  },
  {
    slug: "pine",
    name: "PINE",
    image: "/collections/pine.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/pine",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/pine",
    descriptionDe: "Strukturiertes Relief-Dekor, inspiriert von natürlichen Texturen.",
    descriptionEn: "Textured relief decor, inspired by natural surfaces.",
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
        "MIRAGE im kräftigen Indigo ist ein echter Eyecatcher. Die tiefblaue Oberfläche mit schwarzen Akzenten wirkt modern und ausdrucksstark, während florale Ornamente und rustikale Ränder eine handgemachte Note reinbringen. Ob frischer Salat, kleine Snacks oder herzhafte Hauptgerichte – auf MIRAGE gewinnt jede Speise an Präsenz. So machst du aus jedem Teller ein Highlight.",
      bodyEn:
        "MIRAGE in a bold indigo is a real eye-catcher. The deep-blue surface with black accents looks modern and expressive, while floral ornaments and rustic rims add a handmade touch. Whether a fresh salad, small snacks or hearty mains – on MIRAGE every dish gains presence. Turn every plate into a highlight.",
      actionBodyDe:
        "Kleine Snacks, große Wirkung: Auf den rechteckigen Platten von MIRAGE kommen Fingerfood, Tapas und Sharing-Boards richtig zur Geltung. Noch mehr Ideen, wie MIRAGE am Tisch wirkt, findest du auf unserer Referenzseite.",
      actionBodyEn:
        "Small snacks, big impact: MIRAGE's rectangular platters are made for finger food, tapas and sharing boards. Find more ideas of MIRAGE in action on our references page.",
      hero: "/collections/mirage-hero.webp",
      product: "/collections/mirage-produkt.webp",
      action: "/collections/mirage-action.webp",
      // Reference carousel photos (e.g. the pizza shot from the mockup) go here;
      // the carousel renders automatically once at least one is provided.
      // TODO: replace these placeholders with the real MIRAGE reference photos.
      references: [
        "/collections/mirage-ref-placeholder-1.svg",
        "/collections/mirage-ref-placeholder-2.svg",
      ],
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
  },
  {
    slug: "perfect-match",
    name: "PERFECT MATCH",
    image: "/collections/perfect-match.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/perfect-match",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/perfect-match",
    descriptionDe: "Warme Erdtöne, die sich mühelos miteinander kombinieren lassen.",
    descriptionEn: "Warm earth tones that combine effortlessly with one another.",
  },
  {
    slug: "add-on",
    name: "ADD-ON",
    image: "/collections/add-on.png",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/add-on",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/add-on",
    descriptionDe: "Vielseitige Ergänzungsstücke, die jede HEART&SOUL-Kollektion abrunden.",
    descriptionEn: "Versatile accent pieces that round out every HEART&SOUL collection.",
  },
];
