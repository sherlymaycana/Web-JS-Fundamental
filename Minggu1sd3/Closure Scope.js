// Closure adalah function di dalam function yang tetap mengingat variabel luar.
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
