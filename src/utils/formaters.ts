export function Percent(divisible: number, divider: number, round?: number) {
  const expression = divisible / divider;
  return +expression.toFixed(round);
}

export function Fix(number: number, round?: number) {
  return +number.toFixed(round);
}

export const roundCounter = (currentNum: number, endNum: number) => {
  if (currentNum === endNum - 1) {
    return 0;
  }
  return (currentNum = currentNum + 1);
};

export function FixForFirstNum(number: number, positiveNum: number) {
  const splitString = number.toString().split(".");
  if (splitString.length === 1) {
    return +splitString[0];
  }
  if (splitString.length > 1) {
    let newNumber = `${splitString[0]}.`;
    let positiveNumberCount = positiveNum;
    const stringNum = splitString[1];

    for (let i = 0; i < stringNum.length && positiveNumberCount; i++) {
      if (+stringNum[i] > 0) {
        positiveNumberCount--;
      }
      newNumber = newNumber + stringNum[i];
    }
    return +newNumber;
  }
}
