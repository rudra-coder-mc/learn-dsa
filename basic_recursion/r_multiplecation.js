let input = 4;
let out = 1;
let col = 0;

// function f(out, i) {
//   if (i < 1) {
//     console.log(out);
//     return;
//   }
//   console.log(out, i);
//
//   f(out * i, i - 1);
// }
//
// f(out, input);
//
function f(n) {
  if (n == 0) return 1;
  return n * f(n - 1);
}

console.log(f(input));
