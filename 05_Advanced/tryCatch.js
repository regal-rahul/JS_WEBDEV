const convertToRs = (dollar) => {
  if (typeof dollar === "number") {
    return dollar * 79.87;
  } else {
    throw Error("Enter amount in number!");
  }
};

// const myValue = convertToRs(5);
// console.log(myValue);

try {
  const myValue = convertToRs("5");
  console.log(myValue);
} catch (error) {
  console.log(error);
}
