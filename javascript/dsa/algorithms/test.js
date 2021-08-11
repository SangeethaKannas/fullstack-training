let acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice",
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob",
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice",
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice",
  },
];

let balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344,
};

const fnGetBankUser = (user = "", sortBy = "user", sortDirection = "asc") => {
  let returnArray = [];
  if (user.length > 0) {
    returnArray = acctData
      .filter((data) => data.user === user)
      .reduce((accumulator, data) => {
        return [...accumulator, data.acctNum];
      }, []);
  } else {
    returnArray = Object.keys(balance);
  }

  const sortFunction = (valueA, valueB) => {
    if (sortBy === "acctNum") {
      return sortDirection === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else if (sortBy === "balance") {
      return sortDirection === "asc"
        ? balance[valueB] - balance[valueA]
        : balance[valueA] - balcne[valueB];
    }
  };

  returnArray.sort(sortFunction);
  return returnArray;
};

console.log("A: ", fnGetBankUser("Bob"), "\n"); // A: [ 'AAA - 5231' ]
console.log("B: ", fnGetBankUser("Charlie"), "\n"); // B: []
console.log("C: ", fnGetBankUser("", "acctNum"), "\n"); // C: [ 'AAA - 1234', 'AAA - 5231', 'AAA - 9921', 'AAA - 8191' ]
console.log("D: ", fnGetBankUser("Alice", "balance", "asc")); // D: [ 'AAA - 1234', 'AAA - 8191', 'AAA - 9921' ]
