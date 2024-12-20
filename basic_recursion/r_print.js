let n = 0;
let times = 25;
let repite = "ram ";

function f(n, times, repite) {
  if (n >= times) return;
  console.log(repite);
  f(n + 1, times, repite);
}

f(n, times, repite);
