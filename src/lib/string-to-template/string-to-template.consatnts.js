const indentSize = 10;
const getIndent = (size = 1) => `<span style='padding-left: ${size * indentSize}px;'></span>`;

const chars = {
  " ": getIndent(1),
  "\t": getIndent(1),
  "\n": "</br>",
  ">": "&gt;",
  "<": "&lt;",
  "{": "&#123;",
  "}": "&#125;",
};

const excessChars = {
  SPACES_LINE_BEGINNING: {
    reg: /^\s{2}/gi,
    value: ''
  }
};

export const CHAR = Object.freeze(chars);
export const EXCESS_CHAR = Object.freeze(excessChars);


