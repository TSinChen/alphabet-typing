export const isTyped = (inputs: string, letter: string) =>
  inputs.includes(letter);

export const notAlphabet = (char: string) => /[^a-zA-Z]/.test(char);
