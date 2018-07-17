import { getPrevToken, getNextToken } from "./token";

// Assuming scheme.type === 'brahmic'.

export const SyllablesSplitter = tokens => {

  const syllables = [];

  for (let i = 0, l = tokens.length; i < l; i += 1) {

    const currToken = tokens[i];
    const prevToken = getPrevToken(tokens, i);
    const nextToken = getNextToken(tokens, i);

    syllables.push(
      getSyllable(
        currToken,
        prevToken,
        nextToken
      )
    );

  }

};