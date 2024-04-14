// src/utils/generate-slug.ts
function slugify(text) {
  return text.toLowerCase().replace(/[\W_]+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export {
  slugify
};
