export function gettingLastWeek() {
  return [new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), new Date()];
}
