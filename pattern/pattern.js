let input = 5;

// pattern 1

// for (let i = 1; i <= input; i++) {
//   let out = "";
//   for (let j = 1; j <= input; j++) {
//     out += "*";
//   }
//   console.log(out);
// }

// pattern 2

// for (let i = 1; i <= input; i++) {
//   let out = "";
//   for (let j = 1; j <= i; j++) {
//     out += "*";
//   }
//   console.log(out);
// }

// pattern 3

// for (let i = 1; i <= input; i++) {
//   let out = "";
//   for (let j = 1; j <= i; j++) {
//     out += j;
//   }
//   console.log(out);
// }

// pattern 4

// for (let i = 1; i <= input; i++) {
//   let out = "";
//   for (let j = 1; j <= i; j++) {
//     out += i;
//   }
//   console.log(out);
// }

// pattern 5

// for (let i = 0; i < input; i++) {
//   let out = "";
//   for (let j = 1; j <= input - i; j++) {
//     out += "*";
//   }
//   console.log(out);
// }

// pattern 6

// for (let i = 0; i < input; i++) {
//   let out = "";
//   for (let j = 1; j <= input - i; j++) {
//     out += j;
//   }
//   console.log(out);
// }

// pattern 7

// for (let i = 0; i < input; i++) {
//   let out = "";
//   for (let j = 1; j < input - i; j++) {
//     out += "_";
//   }
//   for (let x = 0; x <= i * 2; x++) {
//     out += "*";
//   }
//
//   for (let j = 1; j < input - i; j++) {
//     out += "_";
//   }
//   console.log(out);
// }

// pattern 8

// for (let i = 0; i < input; i++) {
//   let out = "";
//   for (let j = 1; j <= i; j++) {
//     out += "_";
//   }
//   for (let x = 0; x < input * 2 - (i * 2 + 1); x++) {
//     out += "*";
//   }
//
//   for (let j = 2; j <= i; j++) {
//     out += "_";
//   }
//   console.log(out);
// }

// pattern 9

// for (let i = 0; i < input; i++) {
//   let out = "";
//   for (let j = 1; j < input - i; j++) {
//     out += "_";
//   }
//   for (let x = 0; x <= i * 2; x++) {
//     out += "*";
//   }
//
//   for (let j = 1; j < input - i; j++) {
//     out += "_";
//   }
//   console.log(out);
// }
//
// for (let i = 0; i < input; i++) {
//   let out = "";
//   for (let j = 1; j <= i; j++) {
//     out += "_";
//   }
//   for (let x = 0; x < input * 2 - (i * 2 + 1); x++) {
//     out += "*";
//   }
//
//   for (let j = 2; j <= i; j++) {
//     out += "_";
//   }
//   console.log(out);
// }

// pattern 21

// for (let i = 0; i < input; i++) {
//   let out = "";
//   for (let j = 0; j < input; j++) {
//     if (i == 0 || j == 0 || i == input - 1 || j == input - 1) out += "*";
//     // if not border index, print space.
//     else out += " ";
//   }
//
//   console.log(out);
// }

// pattern 22

// for (let i = 0; i < input * 2 - 1; i++) {
//   out = "";
//   for (let j = 0; j < input * 2 - 1; j++) {
//     let top = i;
//     let bottom = j;
//     let right = 2 * input - 2 - j;
//     let left = 2 * input - 2 - i;
//     out += input - Math.min(top, bottom, right, left);
//   }
//   console.log(out);
// }
