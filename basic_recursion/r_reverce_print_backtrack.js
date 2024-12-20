const n = 5;
let i = 1;

function f(i, n) {
  if (i > n) return;

  f(i + 1, n);

  console.log(i);
}

f(i, n);
