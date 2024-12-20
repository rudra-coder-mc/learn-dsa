let input = 3;
let out = 0;

// function f(out, i) {
//   if (i < 0) {
//     console.log(out);
//     return;
//   }
//
//   f(out + i, i - 1);
// }
//
// f(out, input);
//

function f(n) {
  if (n == 0) return 0;
  return n + f(n - 1);
}

console.log(f(input));
