/**
 *
 * @param map The Map Like you want to index: Object | Enum
 * @param index The key of the map you want to index
 * @returns the map at that key (index)
 */
export function indexMap<Map, T extends keyof Map>(map: Map, index: T) {
  return map[index];
}
