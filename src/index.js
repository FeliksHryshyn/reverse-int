
module.exports = function reverse (n) {
    const positive = Math.abs(n);
    const reversed = +positive.toString().split("").reverse().join("");
  return reversed;
}

