function warnTheSheep(queue) {
  // your code here

  queue.reverse(); // reversing the queue
  let wolfIndex = queue.indexOf("wolf"); // wolf index checker
  // wolf is the closest animal to me
  if (wolfIndex == 0) return "Pls go away and stop eating my sheep";
  // warn the closest sheep to the wolf
  else
    return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;

  //   return wolfIndex == 0
  //     ? "Pls go away and stop eating my sheep"
  //     : `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(fun === result);
}

// Test assertions
Test(
  warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]),
  "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
  warnTheSheep(["sheep", "sheep", "wolf"]),
  "Pls go away and stop eating my sheep"
);
Test(
  warnTheSheep(["sheep", "wolf", "sheep"]),
  "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),
  "Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
