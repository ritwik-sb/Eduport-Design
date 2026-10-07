// Checks that logos.json and svg/ agree, and that every file is a clean, self-contained SVG.
import { readFileSync, readdirSync } from 'node:fs';

const dir = new URL('../svg/', import.meta.url);
const { logos } = JSON.parse(readFileSync(new URL('../logos.json', import.meta.url), 'utf8'));
const files = readdirSync(dir).filter((f) => f.endsWith('.svg'));
const problems = [];

const listed = new Set(logos.map((l) => `${l.name}.svg`));
for (const f of files) if (!listed.has(f)) problems.push(`${f} is not listed in logos.json`);
for (const l of logos) {
  if (!files.includes(`${l.name}.svg`)) problems.push(`${l.name}.svg is listed but missing`);
  if (!l.use) problems.push(`${l.name} has no use case`);
}

for (const f of files) {
  const svg = readFileSync(new URL(f, dir), 'utf8');
  if (!/^<svg[^>]*\sviewBox="0 0 [\d.]+ [\d.]+"/.test(svg)) problems.push(`${f}: needs a viewBox starting at 0 0`);
  if (/<svg[^>]*\s(width|height)=/.test(svg)) problems.push(`${f}: remove width/height so it scales`);
  if (/<(image|script|foreignObject)\b|\son\w+=|href="(?!#)/i.test(svg)) problems.push(`${f}: must not embed images, scripts or external links`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`${files.length} logos OK`);
