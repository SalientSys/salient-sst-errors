export function mapEnumToNumericalValues(
  enumObj: object,
  prefix: number,
): Record<string, number> {
  const values = Object.values(enumObj);
  return values.reduce((acc, val, i) => {
    acc[val] = i + prefix;
    return acc;
  }, {} as Record<string, number>);
}
