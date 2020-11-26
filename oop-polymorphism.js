class Human {
  constructor(props) {
    // Do something
  }

  introduce() {
    // Do something
  }

  work() {
    console.log(`${this.constructor.name}:`, "Working....");
  }
}

//------------------------------------------------
// Public Server Module/Helper
const PublicServer = (Base) =>
  class extends Base {
    save() {
      console.log("SFX: Thank You!");
    }
  };

// Military Module/Helper
const Military = (Base) =>
  class extends Base {
    shoot() {
      console.log("DOR!");
    }
  };
//------------------------------------------------
