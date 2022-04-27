export function convertToPascalCase(string) {
  return string.replace(
    /\w\S*/g,
    (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
  );
}

export function convertToUTCDate(number) {
  return new Date(number * 1000).toDateString();
}
