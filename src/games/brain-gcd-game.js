const getRandomNumber = (digit) => Math.floor(Math.random() * digit);

const getGCD = (number1, number2) => {
  const lessNumber = Math.min(number1, number2);
  let GCD = lessNumber;

  for (let i = GCD; i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      GCD = i;
      return GCD;
    }
  }

  GCD = 1;
  return GCD;
};

const getBrainGCDLogic = (stagesCount) => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const questionsAndAnswers = [];

  for (let i = 0; i < stagesCount; i += 1) {
    const number1 = getRandomNumber(100);
    const number2 = getRandomNumber(100);

    const question = `${number1} ${number2}`;
    const correctAnswer = getGCD(number1, number2);

    questionsAndAnswers.push([question, `${correctAnswer}`]);
  }

  return [gameRule, questionsAndAnswers];
};

export default getBrainGCDLogic;
