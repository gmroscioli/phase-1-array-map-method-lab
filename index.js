const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // individual sentence
  return tutorials.map(function(sentence) {
    //individualize words
    const words = sentence.split(" ");

    //capitalize individual words and return
    const titledWords = words.map(function(word) {
      // get first letter and capitalize
      const firstLetter = word.charAt(0).toUpperCase();
      // get remaining letters for word
      const rest = word.slice(1);
      //return combined capitalized first letter and rest
      return firstLetter + rest;
    });

    //joins titledWords into strings separated with spaces
    return titledWords.join(" ");
  });
}

