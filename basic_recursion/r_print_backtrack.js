const n = 5;

function f(i) {
  if (i < 1) return;

  f(i - 1);

  console.log(i);
}

f(n);
