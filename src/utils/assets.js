export const resolveAssetPath = (path) => {
  if (!path) return '';
  // absolute or data URI: return as-is
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path;
  }
  const base = process.env.PUBLIC_URL || '';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};


