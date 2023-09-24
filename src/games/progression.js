import { getRandomNum } from '../utility.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const task = 'What number is missing in the progression?';
// smart suggestion, progression that is less than 5 in length would be harder to guess
const progressionLength = 10;

const generateArithmeticProgressionBase = () => {
  const step = getRandomNum(1, 10);
  const progressionStartNumber = getRandomNum(1, 100);

  const resultProgression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    resultProgression.push(progressionStartNumber + i * step);
  }
  return resultProgression;
};

// generate round is hard :(
const generateRound = () => {
  const resultProgression = generateArithmeticProgressionBase();
  const pIndex = getRandomNum(0, progressionLength - 1);
  const correctAnswer = String(resultProgression[pIndex]);
  resultProgression[pIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

const runBrainProgression = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, task);
};

export default runBrainProgression;
