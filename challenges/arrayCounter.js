let input = [
  { class: "Backend" },
  { class: "Backend" },
  { class: "Frontend" },
  { class: "ReactNative" },
  { class: "IoS" },
];

// output
// let sol = [
//   { class: "Backend", count: 2 },
//   { class: "Frontend", count: 1 },
//   { class: "ReactNative", count: 1 },
// ];

function idrus(input) {
  let counterBackend = {
    count: 0,
  };
  let counterFrontend = {
    count: 0,
  };
  let counterReactNative = {
    count: 0,
  };

  // class > backend. counter.class = "Backend", counter.count = 1
  // class > backend, counter.class, counter.count++
  // class > frontend, counter.class = "Frontend", counter.count = 1

  for (let i = 0; i < input.length; i++) {
    if (input[i].class === "Backend") {
      counterBackend.class = "Backend";
      counterBackend.count += 1;
    } else if (input[i].class === "Frontend") {
      counterFrontend.class = "Frontend";
      counterFrontend.count += 1;
    } else {
      counterReactNative.class = "React Native";
      counterReactNative.count += 1;
    }
  }

  return [counterBackend, counterFrontend, counterReactNative];
  console.log(counterBackend);
  console.log(counterFrontend);
  console.log(counterReactNative);
}

console.log(idrus(input));

// for(let i =0; i<input.length; i++){
//   if (input[i].class == "Backend")
//   let A =
// }

// }
// function ocounterArr()input{}
// for(let i=0 i<input.length ;i++){
//   if (input[i].class('Backend')){

//   }
// }

// function counterArr(input) {
//   for (let i = 0; )

// }  for ()letlet i =0; inpput.i<input.length; i++{}if for
