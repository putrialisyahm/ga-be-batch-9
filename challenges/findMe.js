// function to find a name in a very long string

let str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id accusamus accusantium dolores adipisci sapiente, a nemo exercitationem eveniet, Seli, reiciendis dolore quam. Quae, nesciunt. Beatae dolores eligendi, aut quo saepe dolore.Architecto porro iure nobis delectus doloremque cupiditate eaque! Quidem laborum dolor, ipsa excepturi voluptatem tenetur nihil, eligendi dicta dolores iste unde reprehenderit perferendis, maiores voluptas officiis ducimus wawansetiawan recusandae accusantium? Fugit.";

function findMe(str, me) {
  let startIndex = str.indexOf(me); // -1 > tidak ketemu, ketemu > startIndex

  if (startIndex < 0) {
    // validator if me not found
    return console.log(`${me} itu ga ada`);
  }

  let length = me.length;
  let endIndex = startIndex + length;

  let strPrint = str.slice(startIndex, endIndex);

  console.log(startIndex, strPrint);
}

findMe(str, "putri");
// kalo ketemu, balikin start index + print namanya
// kalo ga ketemu, "Seli itu ga ada"
