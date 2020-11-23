const EventEmitter = require("events"); // Import
// Initialize an instance because it is a class
const my = new EventEmitter();

// if event == "Some Event"
my.on("Some Event", function () {
  console.log("Some Event Happened");
});

// onClick, onHover, onDelete, onExit

// event == "Glints Academy" > "Amanda - Glints Academy"
my.on("Glints Academy", () => console.log("Amanda - Glints Academy"));

my.on("wwww.amanda.com/register", () => console.log("Register User"));

my.on("https://www.w3schools.com/jsref/prop_win_self.asp", () =>
  console.log("Window self Property")
);

my.on("register", (namaDepan, namaBelakang = "", email, kataSandi) => {
  // validasi
  if (namaDepan.length > 10) {
    console.log("Kasih nama yang bener wei!");
  }

  // sanitasi
  let user = {
    firstName: namaDepan.toLowerCase(), // amanda disini aja
    lastName: namaBelakang,
    email: email,
    password: kataSandi,
  };

  db.save(user);
});

my.emit("Some Event");
my.emit("Glints Academy");
my.emit("Ga ada yang denger nih");
my.emit("wwww.amanda.com/register");
my.emit("https://www.w3schools.com/jsref/prop_win_self.asp");
