const getRandomNumber = (digit) => Math.floor(Math.random() * digit);

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getBrainPrimeLogic = (stagesCount) => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = [];

  for (let i = 0; i < stagesCount; i += 1) {
    const question = getRandomNumber(100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    questionsAndAnswers.push([question, correctAnswer]);
  }

  return [gameRule, questionsAndAnswers];
};

export default getBrainPrimeLogic;
