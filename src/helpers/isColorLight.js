// Prende un colore es: "#f7df1e" (giallo JS)
export function isColorLight(hex) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Formula per la luminanza percepita
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance > 186;
}
