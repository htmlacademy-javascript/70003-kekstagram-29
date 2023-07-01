const compareStringLength = (indexString, numberOfSymbols) => indexString.length <= numberOfSymbols;
compareStringLength('проверяемая строка', 10);
compareStringLength('проверяемая строка', 20);

const palindrome = (indexString) => {
  indexString = indexString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= indexString.length / 2; i++) {
    return indexString[i] !== indexString[indexString.length - 1 - i]
      ? `${false} ${indexString}`
      : `${true} ${indexString}`;
  }
};

palindrome('топот');
palindrome('ДовОд');
palindrome('Кекс');
palindrome('Лёша на полке клопа нашёл ');

const returnNumbers = (indexString) => {
  let newString = '';
  for (let i = 0; i <= indexString.length - 1; i++) {
    if (!Number.isNaN(parseInt(indexString[i], 10))) {
      newString += parseInt(indexString[i], 10);
    }
  }
  return parseInt(newString, 10);
};

returnNumbers('2023 год'); // 2023
returnNumbers('ECMAScript 2022'); // 2022
returnNumbers('1 кефир, 0.5 батона'); // 105
returnNumbers('агент 007');
returnNumbers('а я томат');
