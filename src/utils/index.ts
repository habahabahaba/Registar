export function encodePath(path: string): string {
  while (path.includes('/')) {
    path = path.replace('/', '%2f');
  }
  return path;
}

export function decodePath(path: string): string {
  while (path.includes('%2f')) {
    path = path.replace('%2f', '/');
  }
  return path;
}
