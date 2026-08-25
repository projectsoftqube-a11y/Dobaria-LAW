// lib/phone.ts
// US phone formatting helpers (format-on-blur; no live masking).

/** Keep only digits; drop a leading "1" country code; cap at 10 digits. */
export function digitsOnly(input: string): string {
  let d = (input || "").replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
  return d.slice(0, 10);
}

/**
 * Progressive US formatting used on every keystroke.
 * Accepts only digits (max 10) and formats what's been typed so far:
 *   ""            → ""
 *   "215"         → "(215"
 *   "215362"      → "(215) 362"
 *   "2153622478"  → "(215) 362-2478"
 * Extra characters and digits beyond 10 are dropped, so the value is always
 * a well-formed partial US number — no runaway "123123333333…" input.
 */
export function formatUSPhone(input: string): string {
  const d = digitsOnly(input);
  if (d.length === 0) return "";
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

/** True when the value contains a complete 10-digit US number. */
export function isValidUSPhone(input: string): boolean {
  return digitsOnly(input).length === 10;
}
