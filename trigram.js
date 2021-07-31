/**
 * Returns the trigram sentence for the sku name.
 *
 * @param {string} value is a sentence that has more than one.
 * @return {string} return is a trigram of words with 5 numbers behind.
 */
function autoTrigramName(value) {
  let text = value.trim().split(' ');
  let result = [];
  if (text.length == 1) {
    let textSplit = text.toString().split('');
    textSplit.forEach((element, index) => {
      if (index <= 2) result.push(element.toUpperCase());
    });
  }
  if (text.length == 2) {
    let textSplit = text.toString().split(',');
    textSplit.forEach((elementI, i) => {
      textSplit[i]
        .toString()
        .split('')
        .forEach((elementJ, j) => {
          if (i == 0 && j == 0) result.push(elementJ.toUpperCase());
          if (i == 1 && j <= 1) result.push(elementJ.toUpperCase());
        });
    });
  }
  if (text.length >= 3) {
    let textSplit = text.toString().split(',');
    textSplit.forEach((elementI, i) => {
      textSplit[i]
        .toString()
        .split('')
        .forEach((elementJ, j) => {
          if (i == 0 && j == 0) result.push(elementJ.toUpperCase());
          if (i == 1 && j == 0) result.push(elementJ.toUpperCase());
          if (i == 2 && j == 0) result.push(elementJ.toUpperCase());
        });
    });
  }
  return result.join('') + Math.floor(Math.random() * (99999 - 10000) + 10000);
}
