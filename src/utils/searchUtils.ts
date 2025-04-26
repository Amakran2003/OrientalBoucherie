/**
 * Normalizes a string by removing accents and special characters
 * @param str The string to normalize
 * @returns The normalized string
 */
export const normalizeSearchTerm = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .toLowerCase()
    .trim();
};

/**
 * Checks if a search term matches a target string, ignoring accents and case
 * @param searchTerm The term to search for
 * @param target The string to search in
 * @returns Whether the search term matches the target
 */
export const matchesSearch = (searchTerm: string, target: string): boolean => {
  const normalizedSearch = normalizeSearchTerm(searchTerm);
  const normalizedTarget = normalizeSearchTerm(target);
  return normalizedTarget.includes(normalizedSearch);
}; 