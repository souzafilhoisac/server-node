export function slugify(text: string): string {
  return text
  .toLowerCase()
  .replace(/[\W_]+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
};