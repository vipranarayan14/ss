export const getSyllable = (currToken, prevToken, nextToken) => ({

  'vowels': processVowel(currToken, prevToken, nextToken),

  'vowelMarks': processVowelMark(currToken, prevToken, nextToken),

  'suppressedConsonants': processSuppressedConsonant(currToken, prevToken, nextToken),

  'consonants': processConsonant(currToken, prevToken, nextToken),

  'ayogavahas': processAyogavaha(currToken, prevToken, nextToken),

  'symbols': processSymbols(currToken, prevToken, nextToken)

}[currToken.type]);
