let n = 787878;
let out = "";

while (Math.floor(n) > 0) {
  let m = n % 10;
  n = n / 10;
  out += Math.floor(m);
}
console.log(out);
