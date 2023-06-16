const compareStringLength = (string, numberOfSymbols) => string.length <= numberOfSymbols ? true : false;
// console.log(compareStringLength('проверяемая строка', 10));
// console.log(compareStringLength('проверяемая строка', 20));

const palindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= string.length / 2; i++) {
    return string[i] !== string[string.length - 1 - i]
      ? `${false} ${string}`
      : `${true} ${string}`;
  }
};

// console.log(palindrome('топот'));
// console.log(palindrome('ДовОд'));
// console.log(palindrome('Кекс'));
// console.log(palindrome('Лёша на полке клопа нашёл '));

const returnNumbers = (string) => {
  let newString = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      newString += parseInt(string[i], 10);
    }
  }
  return parseInt(newString, 10);
};

// console.log(returnNumbers('2023 год'));            // 2023
// console.log(returnNumbers('ECMAScript 2022'));     // 2022
// console.log(returnNumbers('1 кефир, 0.5 батона')); // 105
// console.log(returnNumbers('агент 007'));           // 7
// console.log(returnNumbers('а я томат'));
