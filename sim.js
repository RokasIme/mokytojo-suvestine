const getSex = (name) => {
  name = name.split("");
  return name[name.length - 1] === "s" ? "mokinio" : "moknės";
};

console.log(getSex(marks1[0]));

const getAverage = (arr) => {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / (arr.length - 1);
};

console.log(getAverage(marks1));

// ar išlaikė
const checkPositive = (mark) => (mark >= 4 ? true : false);
console.log(checkPositive(getAverage(marks1)));

// Fix average
const fixAverage = (arr) => {
  let result = 4;
  do {
    const data = [...arr];
    data.push(result);
    const avg = getAverage(data);
    if (checkPositive(avg)) {
      break;
    }
    result++;
  } while (result <= 10);

  return result > 10 ? false : result;
};

// Get students data

const getStudentsData = (arr) => {
  console.log(`${getSex(arr[0])} vardas yra ${arr[0]}`);
  console.log(`${getSex(arr[0])} vidrukis ${getAverage(arr).toFixed(1)}`);
  console.log(
    `${getSex(arr[0])} kursas yra ${
      checkPositive(avg) ? "Išlaikytas" : "Neišlaikytas"
    }`
  );
  if (!checkPositive(avg)) {
    const favg = fixAverage(arr);
  }
};
