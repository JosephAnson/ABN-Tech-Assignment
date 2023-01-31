export function toHoursAndMinutes(totalMinutes: number) {
  if (totalMinutes < 60) return `${totalMinutes}m`
  if (!(totalMinutes % 60)) return `${totalMinutes / 60}h`
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${hours}h ${minutes}m`
}
