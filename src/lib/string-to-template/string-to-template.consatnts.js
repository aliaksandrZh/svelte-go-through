const indentSize = 10;
const getIndent = (size = 1) => `<span style="padding-left: ${ size * indentSize }px;"></span>`;

// TODO: remove dependency from order
const chars = {
  "CHAR_>": {
    reg: />/gi,
    replaceWith: "&gt;",
  },
  "CHAR_<": {
    reg: /</gi,
    replaceWith: "&lt;",
  },
  "CHAR_{": {
    reg: /\{/gi,
    replaceWith: "&#123;",
  },
  "CHAR_}": {
    reg: /}/gi,
    replaceWith: "&#125;",
  },
  "DOUBLE_SPACES_START_LINE": {
    reg: /^\s{2}/gi,
    replaceWith: "",
  },
  "DOUBLE_SPACES": {
    reg: /  /gi,
    replaceWith: getIndent(2),
  },
  "TAB": {
    reg: /\t/gi,
    replaceWith: getIndent(2),
  },
  "EMPTY": {
    reg: /^$/gi,
    replaceWith: "",
  },
};

export const CHAR = Object.freeze(chars);
