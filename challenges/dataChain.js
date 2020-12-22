let data = [
  {
    isActive: true,
    ID: 1,
    value: null,
  },
  {
    isActive: false,
    ID: 2,
    value: 2,
  },
  {
    isActive: true,
    ID: 3,
    value: undefined,
  },
  {
    isActive: true,
    ID: 4,
    value: 1,
  },
  {
    isActive: false,
    ID: 5,
    value: 8,
  },
  {
    isActive: true,
    ID: 6,
    value: "10",
  },
  {
    isActive: true,
    ID: 7,
    value: false,
  },
  {
    isActive: true,
    ID: 8,
    value: 1000,
  },
  {
    isActive: false,
    ID: 9,
    value: 80,
  },
  {
    isActive: true,
    ID: 10,
    value: 77,
  },
  {
    isActive: false,
    ID: 11,
    value: 24,
  },
  {
    isActive: true,
    ID: 12,
    value: "23",
  },
  {
    isActive: true,
    ID: 13,
    value: 97,
  },
  {
    isActive: false,
    ID: 14,
    value: "",
  },
];

let data2 = [...data];

// filter data yang aktif aja > isActive equal true
let dataActive = data.filter((el) => el.isActive);

// map value data, falsy value > "No data", true > stay as it is
let dataMap = data.map((el) => {
  if (!el.value) el.value = "No Data";

  return {
    // ...el
    isActive: el.isActive,
    ID: el.ID,
    value: el.value,
  };
});

// console.log(dataMap);

// filter dlu data yang AKTIF, filter juga data yang TRUTHY only
// map ID, VALUE aja. Ga usah isActivenya
let dataFilterMap = data2
  .filter((el) => el.isActive && el.value)
  .map((el) => {
    return {
      ID: el.ID,
      value: el.value,
    };
  });
// console.log(dataFilterMap);
