export const processVowel = (currToken, prevToken, nextToken) => {

  syllables.push({

    syllable: currToken.char,

  });

};

export const processVowelMark = (currToken, prevToken, nextToken) => {



};

export const processSuppressedConsonant = (currToken, prevToken, nextToken) => {};
export const processConsonant = (currToken, prevToken, nextToken) => {};
export const processAyogavaha = (currToken, prevToken, nextToken) => {};
export const processSymbols = (currToken, prevToken, nextToken) => {};

if (currToken.type === 'vowels') {



} else if (currToken.type === 'vowelMarks') {

  if (prevToken.type === 'consonants') {

    syllables.push()

  }

}
