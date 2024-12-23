const swapElements = (array, index1, index2) => {
  array[index1] = array.splice(index2, 1, array[index1])[0];
};

// two pointer i and n

function f(i, array, n) {
  if (i >= n) return;
  swapElements(array, i, n);
  f(i + 1, array, n - 1);
}

let i = 0;
let array = [1, 2, 3, 4, 5];
let n = array.length - 1;

f(i, array, n);

// one pointer n

console.log(array);
