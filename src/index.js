import { selectGame, meetPlayer, getAnswer } from './cli.js';
import getBrainEvenLogic from './games/brain-even-game.js';
import getBrainCalcLogic from './games/brain-calc-game.js';
import getBrainGCDLogic from './games/brain-gcd-game.js';
import getBrainProgressionLogic from './games/brain-progression-game.js';

const GAMES_LIST = ['Brain-Even', 'Brain-Calc', 'Brain-GCD', 'Brain-Progression'];

const STAGES_COUNT = 3;

const isCorrectAnswer = (playerAnswer, correctAnswer) => playerAnswer === correctAnswer;

const play = (playerName, gameLogic) => {
  const [gameRule, questionsAndAnswers] = gameLogic;
  console.log(gameRule);

  for (let i = 0; i < STAGES_COUNT; i += 1) {
    const [question, correctAnswer] = questionsAndAnswers[i];

    console.log(`Question: ${question}`);
    const answer = getAnswer();

    if (isCorrectAnswer(answer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

const runGame = (selectedGame) => {
  switch (selectedGame) {
    case 0:
      play(meetPlayer(), getBrainEvenLogic(STAGES_COUNT));
      break;
    case 1:
      play(meetPlayer(), getBrainCalcLogic(STAGES_COUNT));
      break;
    case 2:
      play(meetPlayer(), getBrainGCDLogic(STAGES_COUNT));
      break;
    case 3:
      play(meetPlayer(), getBrainProgressionLogic(STAGES_COUNT));
      break;
    default:
      console.log('BYE!!!');
  }
};

const run = () => {
  console.log('=== BRAIN-GAMES ===');
  console.log('===     MENU    ===');
  const selectedGame = selectGame(GAMES_LIST);
  runGame(selectedGame);
};

export {
  run, runGame, GAMES_LIST, STAGES_COUNT,
};
