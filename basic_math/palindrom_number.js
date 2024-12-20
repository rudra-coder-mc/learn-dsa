let n = 7871;
const comp = n;
let out = "";

while (Math.floor(n) > 0) {
  let m = n % 10;
  n = n / 10;
  out += Math.floor(m);
}

console.log(`n ${comp} and  out ${out}`);
if (Math.floor(comp) == out) {
  console.log("palendrome", out);
} else console.log("not palindrom", out);
