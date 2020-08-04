export default function convertHoursToMinutes(time: string) {
  // 8:00 Divido no ":" e transformo no tipo numérico
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
