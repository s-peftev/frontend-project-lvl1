const isEven = (num) => num % 2 === 0;
const getRandomNumber = (digit) => Math.floor(Math.random() * digit);

const getBrainEvenLogic = (stagesCount) => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAndAnswers = [];

  for (let i = 0; i < stagesCount; i += 1) {
    const questionNumber = getRandomNumber(100);
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
    questionsAndAnswers.push([questionNumber, correctAnswer]);
  }

  return [gameRule, questionsAndAnswers];
};

export default getBrainEvenLogic;
