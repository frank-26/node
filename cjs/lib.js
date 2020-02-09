// lib.js
var counter = 3;
var foo = 3;
const bar = {
  baz:0
};

function incCounter() {
  counter++;
  foo++;
  bar.baz ++
}
module.exports = {
  //   counter: counter,
  get counter() {
    return counter
  },
  incCounter,
  foo,
  bar
};
