export type chunkType = {
  word: string;
  reading: string;
  phonetic: string;
  translation: string;
  grammar: string;
};

export type dataResponseType = {
  english: string;
  japanese: string;
  chunks: chunkType[];
};
