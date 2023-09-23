import runGameLogic, { roundsNumber } from '../gameLogic.js';
import { getRandomNum } from '../utility.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isItEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isItEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, task);
};

export default runBrainEven;
