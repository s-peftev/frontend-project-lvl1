import readlineSync from 'readline-sync';

const selectGame = (gamesList) => {
  const gameIndex = readlineSync.keyInSelect(
    gamesList,
    'Choose a game to play.',
  );

  return gameIndex;
};

const meetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);

  return playerName;
};

const getAnswer = () => readlineSync.question('Your answer: ');

export { meetPlayer, selectGame, getAnswer };
