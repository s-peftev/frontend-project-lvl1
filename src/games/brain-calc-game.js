const getRandomNumber = (digit) => Math.floor(Math.random() * digit);

const getRandomOperation = () => {
  const operators = [
    '+',
    '-',
    '*',
    '+',
    '-',
    '*',
    '+',
    '-',
    '*',
    '+',
  ];

  const operatorIndex = Math.floor(Math.random() * 10);

  return operators[operatorIndex];
};

const calculate = (number1, operator, number2) => {
  let result = null;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      console.log('The unsupportable operator');
  }

  return result;
};

const getBrainCalcLogic = (stagesCount) => {
  const gameRule = 'What is the result of the expression?';
  const questionsAndAnswers = [];

  for (let i = 0; i < stagesCount; i += 1) {
    const number1 = getRandomNumber(10);
    const number2 = getRandomNumber(10);
    const operator = getRandomOperation();
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calculate(number1, operator, number2);

    questionsAndAnswers.push([question, `${correctAnswer}`]);
  }

  return [gameRule, questionsAndAnswers];
};

export default getBrainCalcLogic;
