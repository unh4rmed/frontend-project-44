import { getRandomNum } from '../utility.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (numA, numB) => {
  if (numA === 0) {
    return numB;
  }
  return getGreatestCommonDivisor(numB % numA, numA);
};

// cannot think of a way to make 'generateRound' be part of exports from /gameLogic.js
const generateRound = () => {
  const aNumber = getRandomNum(1, 100);
  const bNumber = getRandomNum(1, 100);
  const correctAnswer = String(getGreatestCommonDivisor(aNumber, bNumber));
  const question = `${aNumber} ${bNumber}`;
  return [question, correctAnswer];
};

// this could be part of /gameLogic.js , but lazy and out of time
const runBrainGcd = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, task);
};

export default runBrainGcd;
