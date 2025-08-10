const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
  }, 1000);
});

promise
  .finally(() => console.log("finally"))
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("finally 1"));
