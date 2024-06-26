export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 500
): (...args: Parameters<T>) => void {
  let timerId: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>): void {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(fn, delay, ...args);
  };
}
