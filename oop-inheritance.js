// extends, super
class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }

  ngomong() {
    console.log(`Halo, aku ${this.name}`);
  }
}

class Fish extends Animal {
  constructor(name, kind, habitat) {
    super(name, kind);
    this.habitat = habitat;
  }

  teriak(alam = "laut") {
    super.ngomong();
    console.log(`Aku hidup di ${alam}`);
  }
}

class Chicken extends Animal {
  constructor(name, ras) {
    super(name);
    this.ras = ras;
  }

  teriak() {
    super.ngomong();
  }
}

let masKoki = new Fish("MasKoki", "Gold", "Air Tawar");
let kampung = new Chicken("Kampung", "Darat");

console.log(masKoki);
masKoki.teriak("tawar");
kampung.teriak();
