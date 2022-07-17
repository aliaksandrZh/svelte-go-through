import { CHAR } from "./string-to-template.consatnts.js";

export const convertStrToPlainText = (str) => {
  let lines = str.split("\n");

  if (CHAR.EMPTY.reg.test(lines[0])) {
    lines.shift();
  }

  let _lines = [];

  for (const line of lines) {
    const l = replaceCharacters(line);
    _lines.push(l);
  }

  return _lines.join("\n");
};

const replaceCharacters = (str) => {
  for (const charName in CHAR) {
    const { reg, replaceWith } = CHAR[charName];

    if (reg.test(str)) {
      str = str.replace(reg, replaceWith);
    }
  }

  return str;
};
