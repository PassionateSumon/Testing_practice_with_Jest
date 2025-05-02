export type stringInfo = {
  lowercase: string;
  uppercase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringInfo: stringInfo): number {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}
