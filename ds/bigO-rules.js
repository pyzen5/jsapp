/**
 * Coefficient rule
 * @param {*} n
 */
// f(n) = n
function a(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// f(n) = 5n
function a(n) {
  for (let i = 0; i < 5 * n; i++) {
    console.log(i);
  }
}

// f(n) = n+1
function a(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}

/**
 * Sum rule
 */
// f(n) = n, g(n); f(n)+g(n) = 5n => 6(n) => n
function sumRule(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count++;
  }
  for (let i = 0; i < 5 * n; i++) {
    count++;
  }
}

/**
 * Product rule
 */
// f(n) = n, g(n) = 5n; f(n)g(n) => n*5n => 5n^2 => n^2
function productRule(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count++;
    for (let j = 0; j < 5 * n; j++) {
      count++;
    }
  }
}

/**
 * Polynomial rule
 */
// n^2
function productRule(n) {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count++;
  }
}
