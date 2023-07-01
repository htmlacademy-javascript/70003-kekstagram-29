const compareStringLength = (string, numberOfSymbols) => string.length <= numberOfSymbols;
compareStringLength('проверяемая строка', 10);
compareStringLength('проверяемая строка', 20);

const palindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= string.length / 2; i++) {
    return string[i] !== string[string.length - 1 - i]
      ? `${false} ${string}`
      : `${true} ${string}`;
  }
};

palindrome('топот');
palindrome('ДовОд');
palindrome('Кекс');
palindrome('Лёша на полке клопа нашёл ');

const returnNumbers = (string) => {
  let newString = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      newString += parseInt(string[i], 10);
    }
  }
  return parseInt(newString, 10);
};

returnNumbers('2023 год'); // 2023
returnNumbers('ECMAScript 2022'); // 2022
returnNumbers('1 кефир, 0.5 батона'); // 105
returnNumbers('агент 007');
returnNumbers('а я томат');
