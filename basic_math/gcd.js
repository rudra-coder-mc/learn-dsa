let n1 = 15;
let n2 = 20;

while (n1 > 0 && n2 > 0) {
  if (n1 < n2) n2 = n2 % n1;
  else n1 = n1 % n2;
}

if (n1 == 0) console.log("gcd", n2);
else console.log("gcd", n1);
