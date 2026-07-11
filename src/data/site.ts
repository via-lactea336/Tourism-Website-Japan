export type Destination = {
  city: string;
  slug: string;
  prefecture: string;
  tagline: string;
  title: string;
  description: string;
  introduction: string;
  culture: string;
  experiences: string[];
  practical: { label: string; text: string }[];
  tips: string[];
  bestTime: string;
  visitLength: string;
  image: string;
  fallback: string;
  storyImage: string;
  storyFallback: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  sources: { label: string; url: string }[];
};

export const destinations: Destination[] = [
  {
    city: "Tokyo", slug: "tokyo", prefecture: "Tokyo Metropolis", tagline: "Step into the future", title: "Tales of Japan",
    description: "A layered capital where historic neighborhoods, contemporary culture and everyday rituals share the same map.",
    introduction: "Tokyo is a vast capital best explored as a collection of distinct neighborhoods. Build a route around a few areas at a time, leaving room for small shrines, shops and cafés encountered between major sights.",
    culture: "The city’s Edo-era history remains visible alongside its role as a center for design, food, animation and nightlife. This contrast is part of Tokyo’s character rather than a choice between old and new.",
    experiences: ["Pair a historic district with a contemporary one", "Visit a museum, garden or public park", "Explore food and nightlife with local etiquette in mind"],
    practical: [{ label: "Getting there", text: "International arrivals commonly use Narita or Haneda; rail, bus and ferry connections link Tokyo with other parts of Japan." }, { label: "Getting around", text: "Tokyo’s rail and subway network reaches most visitor areas. Check the official guide for current routes and ticket options." }, { label: "Accessibility", text: "Tokyo Tourist Information Centers provide practical, accessible-tourism guidance; confirm facility-specific access before visiting." }],
    tips: ["Allow time for transfers in large stations.", "Follow local guidance for shrine, temple and transit etiquette.", "Check weather and official notices before outdoor plans."], bestTime: "Tokyo has activities throughout the year; choose according to the seasonal conditions and events you wish to experience.", visitLength: "Plan more than one day if you want to explore several neighborhoods at an unhurried pace.",
    image: "/img/tokyo.webp", fallback: "/img/tokyo.png", storyImage: "/img/tales.webp", storyFallback: "/img/tales.png", imageAlt: "Tokyo streets seen in the evening", metaTitle: "Tokyo travel guide | Japan Travel", metaDescription: "Plan a considered visit to Tokyo with cultural context, practical guidance and official travel resources.", sources: [{ label: "GO TOKYO — Official Tokyo Travel Guide", url: "https://www.gotokyo.org/en/index.html" }, { label: "Getting to Tokyo — GO TOKYO", url: "https://www.gotokyo.org/en/plan/getting-to-tokyo/" }]
  },
  {
    city: "Kyoto", slug: "kyoto", prefecture: "Kyoto Prefecture", tagline: "Turn back the time", title: "Legends of Kyoto",
    description: "A former imperial capital where temples, shrines, crafts and seasonal traditions invite slower exploration.",
    introduction: "Kyoto rewards deliberate planning. Focus on one district or corridor at a time so that the city’s lanes, gardens and cultural sites can be experienced without rushing from landmark to landmark.",
    culture: "Kyoto became Japan’s capital in 794 and held that role for more than a millennium. Its long civic and cultural history helped shape traditions of hospitality, cuisine and the arts that remain closely associated with the city.",
    experiences: ["Explore temple and shrine precincts respectfully", "Walk historic neighborhoods at a calm pace", "Seek seasonal cultural programs through official listings"],
    practical: [{ label: "Getting there", text: "Kyoto is well connected by rail. Consult the official travel guide and your operator for current routes and service information." }, { label: "Getting around", text: "Use public transport and walking to connect districts; allow extra time at busy locations." }, { label: "Accessibility", text: "Access differs among historic sites. Confirm step-free routes and available services with each venue before your visit." }],
    tips: ["Respect photography and quiet-zone rules.", "Check official guidance before visiting popular districts.", "Avoid blocking narrow streets and entrances."], bestTime: "Every season changes Kyoto’s atmosphere; consult official event and seasonal guidance before deciding.", visitLength: "A multi-day stay makes it easier to group sights by district.",
    image: "/img/kyoto.webp", fallback: "/img/kyoto.png", storyImage: "/img/kyoto-tales.webp", storyFallback: "/img/kyoto-tales.png", imageAlt: "A traditional Kyoto street", metaTitle: "Kyoto travel guide | Japan Travel", metaDescription: "Discover Kyoto with cultural context, thoughtful practical advice and official planning resources.", sources: [{ label: "Kyoto City Official Travel Guide — About Kyoto", url: "https://kyoto.travel/en/about_kyoto.html" }, { label: "Kyoto City Official Travel Guide", url: "https://kyoto.travel/en/" }]
  },
  {
    city: "Osaka", slug: "osaka", prefecture: "Osaka Prefecture", tagline: "Taste the city lights", title: "Mystical Osaka",
    description: "An energetic city known for food culture, nightlife, historic sites and a wide range of urban experiences.",
    introduction: "Osaka can be approached through its neighborhoods and interests: food, history, shopping, entertainment or green space. Let one theme guide a day rather than trying to see the whole city at once.",
    culture: "The official tourism guide presents Osaka through food, culture, entertainment, nature and history. That variety makes it suitable for flexible itineraries and repeat visits.",
    experiences: ["Explore local food culture with consideration for venues", "Visit historical and cultural attractions", "Use official guides to find events and neighborhood ideas"],
    practical: [{ label: "Getting there", text: "Rail services link Osaka with major Japanese cities. Use the official guide and transport operator sites for current connections." }, { label: "Getting around", text: "Public transport connects visitor areas across the city; use official route information when planning." }, { label: "Accessibility", text: "Ask individual attractions and transport providers about the access features relevant to your visit." }],
    tips: ["Check venue rules before arriving.", "Use official advisories for weather, events and transport.", "Be mindful of local residents in busy entertainment areas."], bestTime: "Seasonal events and weather influence each visit; check the official calendar for current information.", visitLength: "One or more days can be shaped around a neighborhood or interest.",
    image: "/img/osaka.webp", fallback: "/img/osaka.png", storyImage: "/img/osaka-tales.webp", storyFallback: "/img/osaka-tales.png", imageAlt: "Osaka city lights", metaTitle: "Osaka travel guide | Japan Travel", metaDescription: "Explore Osaka’s food culture, history and city energy with practical planning resources.", sources: [{ label: "OSAKA-INFO — Official Tourism Guide", url: "https://osaka-info.jp/en/" }, { label: "Discover OSAKA official guide", url: "https://osaka-info.jp/en/news/post_96/" }]
  },
  {
    city: "Nara", slug: "nara", prefecture: "Nara Prefecture", tagline: "Find calm in ancient paths", title: "Tales of Serenity",
    description: "Historic landscapes, World Heritage sites and natural settings close to Kyoto and Osaka.",
    introduction: "Nara offers an opportunity to slow down among historic areas, parkland and pilgrimage landscapes. Combine a major site with time to walk and observe the place rather than treating it as a quick stop.",
    culture: "Nara’s official guide highlights three World Heritage groupings in the region, including the Historic Monuments of Ancient Nara. Its historic townscapes and natural settings are central to the experience.",
    experiences: ["Walk Nara Park and its surrounding heritage areas", "Explore historic townscapes at a measured pace", "Look for nature and cultural routes beyond the city center"],
    practical: [{ label: "Getting there", text: "Nara is accessible by train from Kyoto and Osaka. Check current schedules and station access with operators." }, { label: "Getting around", text: "Walking and local transport can be combined depending on your route and mobility needs." }, { label: "Accessibility", text: "Confirm accessible routes and services directly with each site before travel." }],
    tips: ["Treat wildlife and heritage sites with care.", "Check site guidance before visiting temples and shrines.", "Build in time for walking between nearby places."], bestTime: "The official guide presents seasonal experiences throughout the year; consider weather and current conditions.", visitLength: "A full day provides room to combine heritage areas and parkland.",
    image: "/img/nara.webp", fallback: "/img/nara.png", storyImage: "/img/nara-tales.webp", storyFallback: "/img/nara-tales.png", imageAlt: "A serene scene in Nara", metaTitle: "Nara travel guide | Japan Travel", metaDescription: "Plan an unhurried visit to Nara’s heritage landscapes with official travel resources.", sources: [{ label: "Visit Nara — Official Nara Travel Guide", url: "https://www.visitnara.jp/" }]
  }
];

export const navItems = [{ label: "Destinations", href: "/destinos/" }, { label: "Stories", href: "/#history" }, { label: "Experiences", href: "/#experiences" }];
export const featuredDestinations = destinations;
export const stories = destinations;
export const experiences = ["Tea and food culture", "Temple and shrine visits", "Urban nights", "Gardens and parks", "Craft and design", "Historic walking routes"];
