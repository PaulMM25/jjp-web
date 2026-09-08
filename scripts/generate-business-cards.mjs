import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";
import { company, teamMembers, telephone } from "../src/data/teamMembers.mjs";

// Require the confirmed public origin; never encode a preview or guessed domain.
const origin = process.argv[2];
if (!origin || new URL(origin).protocol !== "https:" || new URL(origin).origin !== origin) {
  throw new Error("Pass the confirmed HTTPS origin without a trailing slash: npm run generate:cards -- https://example.com");
}

const escape = (text) => text.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
// Fold at 75 UTF-8 bytes without splitting accented characters (vCard 3.0).
function fold(line) {
  let result = "", size = 0;
  for (const character of line) {
    const bytes = Buffer.byteLength(character);
    if (size + bytes > 75) { result += "\r\n "; size = 1; }
    result += character;
    size += bytes;
  }
  return result;
}

await mkdir(new URL("../public/qr/", import.meta.url), { recursive: true });
await mkdir(new URL("../public/contacts/", import.meta.url), { recursive: true });
for (const member of teamMembers) {
  const url = `${origin}/team/${member.slug}`;
  await QRCode.toFile(fileURLToPath(new URL(`../public/qr/${member.slug}.svg`, import.meta.url)), url, {
    type: "svg", errorCorrectionLevel: "M", margin: 4, width: 1200,
    color: { dark: "#000000", light: "#ffffff" },
  });
  const lines = [
    "BEGIN:VCARD", "VERSION:3.0", `FN:${escape(member.name)}`,
    `N:${[member.familyName, member.givenName, member.additionalName || "", "", ""].map(escape).join(";")}`,
    `ORG:${escape(company)}`, `TITLE:${escape(member.title)}`,
    `TEL;TYPE=CELL,VOICE:${telephone(member)}`, `EMAIL;TYPE=INTERNET,WORK:${member.email}`,
    `URL:${origin}/`, `URL;TYPE=WORK:${member.linkedin}`, "END:VCARD",
  ];
  await writeFile(new URL(`../public/contacts/${member.slug}.vcf`, import.meta.url), lines.map(fold).join("\r\n") + "\r\n", "utf8");
  console.log(`${member.slug}: ${url} (QR + vCard)`);
}
