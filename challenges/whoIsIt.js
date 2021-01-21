let firstDay = ["Anton", "Joko", "Mike", "Zoe", "Badu"];
let seconDay = ["Ani", "Budi", "Anton", "Wowo", "Zoe", "Bobo"];

function checkVisitor(visitorDayOne, visitorDayTwo) {
  let visitors = [];

  for (let visitor of visitorDayOne) {
    if (visitorDayTwo.includes(visitor)) {
      visitors.push(visitor);
    }
  }
  return visitors;
}

let sol = checkVisitor(firstDay, seconDay);

console.log(sol);
