/**
 *
 * @param map The Map Like you want to index: Object | Enum
 * @param index The key of the map you want to index
 * @returns the map at that key (index)
 */
export function indexMap<T>(map: object, index: T) {
  return map[index as keyof typeof map];
}
