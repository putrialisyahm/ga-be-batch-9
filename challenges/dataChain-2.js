let data = [
  {
    isActive: true,
    ID: 1,
    value: null,
    name: "Seli",
  },
  {
    isActive: false,
    ID: 2,
    value: 2,
    name: "Rose",
  },
  {
    isActive: true,
    ID: 3,
    value: undefined,
    name: "Putri",
  },
  {
    isActive: true,
    ID: 4,
    value: 1,
    name: "Alisyah",
  },
  {
    isActive: false,
    ID: 5,
    value: 8,
    name: "Amanda",
  },
  {
    isActive: true,
    ID: 6,
    value: "10",
    name: "Gunawan",
  },
  {
    isActive: true,
    ID: 7,
    value: false,
    name: "Adhim",
  },
  {
    isActive: true,
    ID: 8,
    value: 1000,
    name: "Cahyani",
  },
  {
    isActive: false,
    ID: 9,
    value: 80,
    name: "Puji",
  },
  {
    isActive: true,
    ID: 10,
    value: 77,
    name: "Wawan",
  },
  {
    isActive: false,
    ID: 11,
    value: 24,
    name: "Setiawan",
  },
  {
    isActive: true,
    ID: 12,
    value: "23",
    name: "Ilham",
  },
  {
    isActive: true,
    ID: 13,
    value: 97,
    name: "Maulana",
  },
  {
    isActive: false,
    ID: 14,
    value: "",
    name: "Rabbani",
  },
];

// filter user yang ACTIVE, tambah field baru UserCode,
// UserCode > name (4 karakter pertama) + ID + value(true) / value(false), UPPERCASING
// e.g. MAUL1397
let arrFilter = data
  .filter((el) => el.isActive)
  .map((el) => {
    return {
      ...el,
      //   isActive: el.isActive,
      //   ID: el.ID,
      //   value: el.value,
      userCode: `${el.name.substring(0, 4)}${el.ID}${
        el.value ? el.value : ""
      }`.toUpperCase(),
    };
  });

// console.log(arrFilter);

// filter ID > 10, Active, dan value nya TRUTHY
// map > ID, value, name, tambah 1 field lagi country: "Indonesia"
let arrFilter2 = data
  .filter(({ ID, isActive, value }) => ID > 10 && isActive && value) // null, undefined, 0, ""
  .map((el) => {
    return {
      ...el,
      country: "Indonesia",
    };
  });

console.log(arrFilter2);
