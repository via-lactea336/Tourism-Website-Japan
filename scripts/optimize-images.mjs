import { stat } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const images = [
  "destinations/index-fuji.jpg",
  "destinations/kyoto-temple.jpg",
  "destinations/nara-deer.jpg",
  "destinations/osaka-skyline.jpg",
  "destinations/tokyo-shinjuku.jpg",
  "experiences/tea-food-culture.png",
  "experiences/temples-shrines.png",
  "experiences/urban-nights.png",
  "experiences/gardens-parks.png",
  "experiences/craft-design.png",
  "experiences/historic-walking-routes.png",
  "home/route/route-tokyo.png",
  "home/route/route-kyoto.png",
  "home/route/route-osaka.png",
  "home/route/route-nara.png",
  "home/seasons/season-spring.png",
  "home/seasons/season-summer.png",
  "home/seasons/season-autumn.png",
  "home/seasons/season-winter.png",
  "home/cta/cta-japan-final.png",
];

const imagesDirectory = join(process.cwd(), "public", "img");

for (const image of images) {
  const input = join(imagesDirectory, image);

  try {
    await stat(input);
  } catch {
    continue;
  }

  const parsed = parse(input);
  const output = join(parsed.dir, `${parsed.name}.webp`);

  await sharp(input)
    .rotate()
    .resize({ width: 2400, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6, smartSubsample: true })
    .toFile(output);

  console.log(`Optimized ${image} -> ${parse(output).base}`);
}
