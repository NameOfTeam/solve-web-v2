export const escaper = (str: string) => {
  return str.replaceAll(/[\\&<>"']/g, (match) => {
    const escapeMap: Record<string, string> = {
      "\\": "\\\\",
      "&": "\&",
      "<": "\<",
      ">": "\>",
      '"': "\"",
      "'": "\'",
    };
    return escapeMap[match];
  });
}
