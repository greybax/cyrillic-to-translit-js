export declare class CyrillicToTranslit {
  reverse: (input: string, spaceReplacement?: string) => string;
  transform: (input: string, spaceReplacement?: string) => string;
  constructor(config?: { preset: 'ru' | 'uk' | 'mn' });
}
