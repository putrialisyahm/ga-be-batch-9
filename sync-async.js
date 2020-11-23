// synchronous - order
// asynchronous - unorder - execution time
// callback, promise, async await

setTimeout(function () {
  console.log("Registering the user....");
  console.log("Gagal ei");
}, 2000);

setTimeout(function () {
  console.log("Successfully registered!");
}, 1000);
