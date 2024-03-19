export type dataTranslatedType = {
  english: string;
  japanese_translation: string;
  japanese: chunkType[];
};

export type chunkType = {
  word: string;
  phonetic: string;
  translation: string;
};
