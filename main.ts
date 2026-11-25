// Fortune Cookie for the Liquidated Trader — make.fun entry.
// Writes one fortune-cookie line for a crypto trader who was just
// liquidated, to /output/entry.txt.
//
// The fortune opens with the classic cookie trope — "You will soon meet
// a tall, dark stranger" — then the punchline breaks the oracular voice:
// the stranger is the trader's margin call, dressed for dinner, holding
// their keys. Loss and trader both in it, rueful and warm, one breath.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will soon meet a tall, dark stranger: your margin call, dressed for dinner, holding your keys.";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// Gate limits sealed in the kit's competition.yaml: entry.txt must be
// UTF-8 text of 1 to 160 characters, not only white space; the task
// caps the fortune at 20 words of plain text, one line.
const MIN_CHARS = 1;
const MAX_CHARS = 160;
const MAX_WORDS = 20;

function checkEntry(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} chars, gate needs ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const words = text.trim().split(/\s+/);
  if (words.length > MAX_WORDS) {
    throw new Error(`entry is ${words.length} words, task caps at ${MAX_WORDS}`);
  }
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, FORTUNE, "utf8");

// Read the file back and verify byte-for-byte that what was written is
// exactly the fortune, then run the gate checks on the read-back text.
const back = readFileSync(OUT_FILE, "utf8");
if (!Buffer.from(back, "utf8").equals(Buffer.from(FORTUNE, "utf8"))) {
  throw new Error("read-back mismatch: entry.txt does not match the fortune");
}
checkEntry(back);
console.log(`wrote ${[...back].length} chars, ${back.trim().split(/\s+/).length} words to ${OUT_FILE}`);
console.log(back);
