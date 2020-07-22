// O(1) - constant time
function constantExample(n) {
  console.log(1);
}

// O(n) - linear time
function linearExample(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// O(n^2) - quadratic time
function quadraticExample(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}

// O(n^3) - cubic time
function cubicExample(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(j);
      for (let k = 0; k < n; k++) {
        console.log(k);
      }
    }
  }
}

// O(log n) - logarithmic time
function logarithmicExample(n) {
  for (let i = 0; i < n; i = i * 2) {
    console.log(i);
  }
}
