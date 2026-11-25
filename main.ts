// Till Firmware Do Us Part — one robot wedding vow, one sentence, under 200 chars.
// Writes the vow to MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// The vow is a single sentence: one vow, one line, no setup left to cut.
const ENTRY =
  "I vow to love you through every firmware update, even the 3 AM one that bricked my left arm and left me proposing with a paperclip.";

if (ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
