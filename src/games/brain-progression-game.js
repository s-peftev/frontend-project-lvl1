const MIN_PROGRESSION_LENGTH = 5;
const getRandomNumber = (digit) => Math.floor(Math.random() * digit);

const getProgression = () => {
  const firstNumber = getRandomNumber(100);
  const iterator = getRandomNumber(10);
  const result = [firstNumber];

  const random = getRandomNumber(10);
  const numbersCount = random < MIN_PROGRESSION_LENGTH ? random + MIN_PROGRESSION_LENGTH : random;

  for (let i = 1; i < numbersCount; i += 1) {
    result[i] = result[i - 1] + iterator;
  }

  return result;
};

const hideRandomNumber = (array, placeholder = '..') => {
  const result = array.slice();
  const random = getRandomNumber(10);
  const indexToHide = random < array.length ? random : random - MIN_PROGRESSION_LENGTH;

  const hiddenNumber = result[indexToHide];
  result[indexToHide] = placeholder;

  return [hiddenNumber, result.join(' ')];
};

const getBrainGCDLogic = (stagesCount) => {
  const gameRule = 'What number is missing in the progression?';
  const questionsAndAnswers = [];

  for (let i = 0; i < stagesCount; i += 1) {
    const progression = getProgression();
    const [correctAnswer, question] = hideRandomNumber(progression);

    questionsAndAnswers.push([question, `${correctAnswer}`]);
  }

  return [gameRule, questionsAndAnswers];
};

export default getBrainGCDLogic;
