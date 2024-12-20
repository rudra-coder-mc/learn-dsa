// let n = 5;
// let i = 0;
//
// function f(n, i) {
//   if (i == n) return;
//   console.log(n);
//
//   f(n - 1, i);
// }
//
// f(n, i);
//

const n = 5;

function f(i) {
  if (i < 1) return;
  console.log(i);

  f(i - 1);
}

f(n);
