import { getRandomNum } from '../utility.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const task = 'What is the result of the expression?';

// searched for better names that what i had here at first for half of the variables and functions
const getRandomElementaryArithmeticOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperatorOut = getRandomNum(0, operators.length - 1);
  return operators[randomOperatorOut];
};

const calculate = (operator, operandA, operandB) => {
  // ifelse was a mess
  switch (operator) {
    case '+':
      return operandA + operandB;
    case '-':
      return operandA - operandB;
    case '*':
      return operandA * operandB;
    default:
      return Error('Sorry operator error');
  }
};

// roundGen is harder than i thought
const generateRound = () => {
  const operator = getRandomElementaryArithmeticOperator();
  const aOperand = getRandomNum(1, 100);
  const bOperand = getRandomNum(1, 100);
  const question = `${aOperand} ${operator} ${bOperand}`;
  const correctAnswer = String(calculate(operator, aOperand, bOperand));
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, task);
};

export default runBrainCalc;
