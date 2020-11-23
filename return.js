function operation(num1, num2) {
  let kali = num1 * num2;
  let tambah = num1 * num2;
  let bagi = num1 / num2;

  if (num1 == 0) {
    return "Jangan nol woi";
  }

  if (num2 == 2) {
    return "Boleh lah 2";
  }

  return "Kali woi";
}

let solve = operation(0, 3);
console.log(solve);

// name= "           putri                 alisyah              " > trim() > "putri alisyah"
