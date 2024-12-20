let n = 36;
let out = [];

for (i = 0; n >= i * i; i++) {
  if (n % i == 0) {
    out.push(i);
    if (n % i != i) {
      out.push(n / i);
    }
  }
}
console.log(
  out.sort(function (a, b) {
    return a - b;
  }),
);
