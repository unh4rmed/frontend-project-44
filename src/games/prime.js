import { getRandomNum } from '../utility.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isItPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true
};

// very nice and compact roundGen
const generateRound = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isItPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, task);
};

// there was a big unsolved issue with me not using 'npm link', that made some games unable to run without 'make'
export default runBrainPrime;