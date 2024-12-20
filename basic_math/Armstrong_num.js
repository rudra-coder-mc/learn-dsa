let n = 371;
let input = n;
let out = 0;

while (Math.floor(n) > 0) {
  let m = Math.floor(n % 10);
  n = n / 10;

  out += m * m * m;
}

console.log(`input ${input} and  out ${out}`);
if (input == out) {
  console.log("Armstrong", out);
} else console.log("not Armstrong", out);
