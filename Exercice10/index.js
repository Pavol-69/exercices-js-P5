function printNumbers(n) {
  let result = "";
  // gestion du cas n = 0
  if (n < 0) {
    result = "0";
  } else {
    result = "1";
  }
  for (let i = 2; i <= n; i++) {
    result = `${result} ${i}`;
  }

  console.log(result);
}

export default printNumbers;
