/** Generates a unique id (time-based + random suffix). */
export function genId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
