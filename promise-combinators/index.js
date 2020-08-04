// Promise.all waits for all promises to resolve. At the end it return an array
Promise.all([
  new Promise(resolve => setTimeout(resolve, 200)),
  new Promise(resolve => setTimeout(resolve, 400)),
  new Promise(resolve => setTimeout(resolve, 700))
])
.then(result => {
  console.log(result);
});

// In Promise.all if one fails, all fails
Promise.all([
  new Promise((resolve, reject) => setTimeout(reject, 200)),
  new Promise(resolve => setTimeout(resolve, 400)),
  new Promise(resolve => setTimeout(resolve, 700))
])
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});

// In Promise.race, the first to resolve is reterned, others are ignored
Promise.race([
  new Promise(resolve => setTimeout(resolve, 200)),
  new Promise(resolve => setTimeout(resolve, 400)),
  new Promise(resolve => setTimeout(resolve, 700))
])
.then(result => {
  console.log(result);
});

// In Promise.allSettled we receive all results with all statuses
Promise.allSettled([
  new Promise(resolve => setTimeout(resolve, 200)),
  new Promise((resolve, reject) => setTimeout(reject, 200)),
  new Promise(resolve => setTimeout(resolve, 700))
])
.then(result => {
  console.log(result);
});
