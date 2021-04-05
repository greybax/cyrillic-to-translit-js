type CyrillicToTranslit = (config?: { preset: "ru" | "uk" | "mn" }) => {
  transform(input: string, spaceReplacement?: string): string;
  reverse(input: string, spaceReplacement?: string): string;
}

declare const cyrillicToTranslit: CyrillicToTranslit

export default cyrillicToTranslit
