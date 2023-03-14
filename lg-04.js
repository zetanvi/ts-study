const promise = new Promise((resolve, reject) => {
  resolve(1);
  // reject(2);
});

promise
  .then((r) => {
    console.log(r);
    return r + 1;
  })
  .catch((e) => {
    console.log(e);
    return e;
  })
  .then((r) => console.log(r, "新的then"));

