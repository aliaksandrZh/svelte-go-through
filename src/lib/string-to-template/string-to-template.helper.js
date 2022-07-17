import { CHAR, EXCESS_CHAR } from "./string-to-template.consatnts.js";

export const convertStrToPlainText = (str) => {
  let preparedStr = removeExcessCharacters(str);
  let _str = "";

  for (const c of preparedStr) {
    _str += replaceCharacter(c);
  }

  return _str;
};

const replaceCharacter = (char) => {
  if (char in CHAR) {
    return CHAR[char];
  }

  return char;
};

const appendNewLine = (l) => l + "\n";

const removeExcessCharacters = (str) => {
  const lines = str.split("\n");
  const parsedLines = [];

  for (const l of lines) {
    if (EXCESS_CHAR.SPACES_LINE_BEGINNING.reg.test(l)) {
      parsedLines.push(appendNewLine(l.replace(EXCESS_CHAR.SPACES_LINE_BEGINNING.reg, EXCESS_CHAR.SPACES_LINE_BEGINNING.value)));
      continue;
    }

    parsedLines.push(appendNewLine(l));
  }

  return parsedLines.join("");
};