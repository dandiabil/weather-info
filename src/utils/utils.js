export function convertToPascalCase(string) {
  return string.replace(
    /\w\S*/g,
    (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
  );
}

export function convertToUTCDate(number, type = "date") {
  if (type === "date") return new Date(number * 1000).toDateString();
  if (type === "time") return new Date(number * 1000).toLocaleTimeString();
}
