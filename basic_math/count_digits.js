let n = 7888888;
let out = 0;
while (Math.floor(n) > 0) {
  n = n / 10;
  // out += Math.floor(modulo);
  out++;
}
console.log(out);
