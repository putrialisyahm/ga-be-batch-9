class BangunDatar {
  constructor(name) {
    this.name;
  }

  calculateArea() {}

  calculateVolume() {}
}

class Balok extends BangunDatar {
  constructor(p, l, t) {
    this.p = p;
    this.l = l;
    this.t = t;
  }

  calculateVolume() {
    return this.p * this.l * this.t;
  }
}

let balok1 = new Balok(1, 2, 3);
balok1.calculateVolume();
