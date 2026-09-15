import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBMI,
  getBMICategory,
  calculateIdealWeight,
  calculateWaterTarget,
  getGoalRecommendation,
  getExercisePattern,
  getEquipmentAdvice
} from '../js/calculators.js';

describe('Biometric Calculators', () => {
  test('calculateBMI calculates correct BMI rounded to 1 decimal', () => {
    // 70kg, 175cm -> 70 / (1.75^2) = 22.857 -> 22.9
    const bmi = calculateBMI(70, 175);
    assert.equal(bmi, 22.9);
  });

  test('calculateBMI handles edge cases safely', () => {
    assert.equal(calculateBMI(0, 170), 0);
    assert.equal(calculateBMI(70, 0), 0);
  });

  test('getBMICategory returns correct category and color for each range', () => {
    const under = getBMICategory(17.5);
    assert.match(under.text, /Bajo peso/i);

    const normal = getBMICategory(22.5);
    assert.match(normal.text, /Normal/i);

    const over = getBMICategory(27.0);
    assert.match(over.text, /Sobrepeso/i);

    const obese = getBMICategory(32.0);
    assert.match(obese.text, /Obesidad/i);
  });

  test('calculateIdealWeight uses Lorenz formula for male and female', () => {
    // Height 180cm, male: (180 - 100) - ((180 - 150) / 4) = 80 - 7.5 = 72.5 -> 73kg
    const maleIdeal = calculateIdealWeight(180, 'male');
    assert.equal(maleIdeal, 73);

    // Height 160cm, female: (160 - 100) - ((160 - 150) / 2.5) = 60 - 4 = 56kg
    const femaleIdeal = calculateIdealWeight(160, 'female');
    assert.equal(femaleIdeal, 56);
  });

  test('calculateWaterTarget calculates 35ml per kg', () => {
    // 70kg -> 70 * 35 = 2450 ml
    assert.equal(calculateWaterTarget(70), 2450);
  });

  test('getGoalRecommendation recommends goal based on BMI', () => {
    // Overweight BMI -> lose-weight
    const rec1 = getGoalRecommendation(95, 170); // BMI ~32.9
    assert.equal(rec1.goal, 'lose-weight');

    // Underweight BMI -> build-muscle
    const rec2 = getGoalRecommendation(50, 175); // BMI ~16.3
    assert.equal(rec2.goal, 'build-muscle');

    // Normal BMI -> get-fit
    const rec3 = getGoalRecommendation(70, 175); // BMI ~22.9
    assert.equal(rec3.goal, 'get-fit');
  });
});

describe('Exercise Patterns & Equipment Advice', () => {
  test('getExercisePattern returns matching pattern or fallback', () => {
    const squatPattern = getExercisePattern('Sentadillas con peso corporal');
    assert.ok(squatPattern);
    assert.ok(squatPattern.execution);
    assert.ok(squatPattern.postureTip);

    const unknownPattern = getExercisePattern('Movimiento Desconocido X');
    assert.ok(unknownPattern);
    assert.match(unknownPattern.execution, /control/i);
  });

  test('getEquipmentAdvice adapts to user available equipment', () => {
    const pattern = getExercisePattern('Sentadillas con peso corporal');
    const withDumbbells = getEquipmentAdvice(pattern, ['dumbbells']);
    assert.ok(withDumbbells.length > 0);

    const noEquip = getEquipmentAdvice(pattern, []);
    assert.match(noEquip, /corporal/i);
  });
});
