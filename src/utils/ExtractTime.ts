export function extractTime(datetimeString: string) {
  const date = new Date(datetimeString);
  const hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours} ${ampm}`;
}
