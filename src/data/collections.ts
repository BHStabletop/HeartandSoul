export interface Collection {
  slug: string;
  name: string;
  image: string;
  urlDe: string;
  urlEn: string;
  descriptionDe: string;
  descriptionEn: string;
}

export const collections: Collection[] = [
  {
    slug: "flow",
    name: "FLOW",
    image: "/collections/flow.jpg",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/flow",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/flow",
    descriptionDe: "Weiche, fließende Formen mit einer ruhigen, organischen Ausstrahlung.",
    descriptionEn: "Soft, flowing shapes with a calm, organic character.",
  },
  {
    slug: "balance",
    name: "BALANCE",
    image: "/collections/balance.jpg",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/balance",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/balance",
    descriptionDe: "Klare Linien und ausgewogene Proportionen für zeitlose Eleganz.",
    descriptionEn: "Clean lines and balanced proportions for timeless elegance.",
  },
  {
    slug: "pine",
    name: "PINE",
    image: "/collections/pine.jpg",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/pine",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/pine",
    descriptionDe: "Strukturiertes Relief-Dekor, inspiriert von natürlichen Texturen.",
    descriptionEn: "Textured relief decor, inspired by natural surfaces.",
  },
  {
    slug: "mirage",
    name: "MIRAGE",
    image: "/collections/mirage.jpg",
    urlDe: "https://www.bhs-tabletop.com/de-de/heartandsoul/mirage",
    urlEn: "https://www.bhs-tabletop.com/en-en/heartandsoul/mirage",
    descriptionDe: "Ausdrucksstarke Farbtiefe mit einem lebendigen, modernen Look.",
    descriptionEn: "Expressive color depth with a vivid, modern look.",
  },
  {
    slug: "soulmate",
    name: "SOULMATE",
    image: "/collections/soulmate.jpg",
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
