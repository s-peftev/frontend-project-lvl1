import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const brainEven = (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const stagesCount = 3;

  for (let i = 0; i < stagesCount; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (isEven(number)) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was 'yes'.`,
        );
        console.log(`Let's try again, ${playerName}!`);
        return;
      }
    } else if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default brainEven;
