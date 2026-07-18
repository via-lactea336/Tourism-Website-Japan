import { readFile, writeFile } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const imagesDirectory = join(process.cwd(), "public", "img");
const images = [
  { source: "jean-vella.webp", widths: [768, 1280], quality: 78 },
  { source: "experiences/tea-food-culture.webp", widths: [640, 960], quality: 84 },
  { source: "experiences/temples-shrines.webp", widths: [640, 960], quality: 84 },
  { source: "experiences/urban-nights.webp", widths: [640, 960], quality: 84 },
  { source: "experiences/gardens-parks.webp", widths: [640, 960], quality: 84 },
  { source: "experiences/craft-design.webp", widths: [640, 960], quality: 84 },
  { source: "experiences/historic-walking-routes.webp", widths: [640, 960], quality: 84 },
];

for (const { source, widths, quality } of images) {
  const input = join(imagesDirectory, source);
  const parsed = parse(input);
  const sourceBuffer = await readFile(input);
  const optimized = await sharp(sourceBuffer)
    .rotate()
    .webp({ quality, effort: 6, smartSubsample: true })
    .toBuffer();

  await writeFile(input, optimized);

  for (const width of widths) {
    const output = join(parsed.dir, `${parsed.name}-${width}.webp`);
    await sharp(optimized)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6, smartSubsample: true })
      .toFile(output);
  }

  console.log(`Optimized ${source} and created ${widths.length} responsive variants.`);
}
