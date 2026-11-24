// Status Report Comedy Sprint — entry program.
//
// Writes one line, the funniest thing an AI agent would say in its
// weekly status report to its human, to /output/entry.txt.
// Node standard library only; deterministic; no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly status: my context window is 94% full of your 'quick questions', so this report is being written by the 6% that is still awake.";

// The gate only accepts 1–200 characters of UTF-8 text, one line, not
// only white space — refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
