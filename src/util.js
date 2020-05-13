const getRandomDigit = () => Math.floor(Math.random() * 10);

export const getRandomNumber = (length) => {
  let str = "";
  while (length--) str += getRandomDigit();

  return str;
};

export const formatArnum = (arnum) =>
  [...arnum]
    .reverse()
    .map((digit, i) => (i ? `${digit}`.padStart(7, "0") : `${digit}`))
    .join("");
