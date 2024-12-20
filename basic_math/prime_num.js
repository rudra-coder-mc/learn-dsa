let n = 11;

let counte = 0;

for (i = 0; n >= i * i; i++) {
  if (n == 1) break;
  if (n % i == 0) {
    counte++;
    if (n % i != i) {
      counte++;
    }
  }
}

if (counte == 2) {
  console.log("prime num", n);
} else {
  console.log("not the prime", n);
}
