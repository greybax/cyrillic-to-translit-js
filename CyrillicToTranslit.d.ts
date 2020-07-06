
export interface CyrillicToTranslit {
  (config?: { preset: "ru" | "uk" }): {
    transform(input: string, spaceReplacement?: string): string;
    reverse(input: string, spaceReplacement?: string): string;
  }
}

declare const cyrillicToTranslit: CyrillicToTranslit  

export default cyrillicToTranslit
