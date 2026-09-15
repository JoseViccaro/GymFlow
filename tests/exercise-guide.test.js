import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { getExercisePattern } from '../js/calculators.js';

describe('Exercise Guide & Animated Avatar Data', () => {
  test('Squat pattern provides clear step-by-step instructions, breathing and errors', () => {
    const pattern = getExercisePattern('Sentadillas con peso corporal');
    assert.ok(pattern);
    assert.ok(Array.isArray(pattern.steps), 'steps should be an array');
    assert.ok(pattern.steps.length >= 3, 'steps should have at least 3 steps');
    assert.ok(pattern.breathing, 'breathing tip should exist');
    assert.ok(Array.isArray(pattern.commonMistakes), 'commonMistakes should be an array');
    assert.ok(pattern.svg.includes('<svg'), 'svg avatar should be present');
  });

  test('Push pattern provides clear instructions, anatomical muscles, and glowing 3D SVG avatar', () => {
    const pattern = getExercisePattern('Flexiones de brazos');
    assert.ok(pattern);
    assert.ok(Array.isArray(pattern.steps));
    assert.ok(pattern.breathing);
    assert.ok(pattern.primaryMuscles && pattern.primaryMuscles.includes('Pectorales'));
    assert.ok(pattern.secondaryMuscles && pattern.secondaryMuscles.includes('Deltoides'));
    assert.ok(pattern.svg.includes('<svg'));
    assert.ok(pattern.svg.includes('muscleGlowOrange'), 'Should contain vivid glowing orange muscle gradient');
    assert.ok(pattern.svg.includes('anim-press-chest') || pattern.svg.includes('anim-press-arms'), 'Should contain kinetic animation');
  });

  test('All primary movement patterns have rich anatomical 3D graphics and target muscles', () => {
    const testCases = [
      { name: 'Sentadilla Goblet', muscle: 'Cuádriceps', anim: 'anim-squat' },
      { name: 'Remo con mancuernas', muscle: 'Dorsal', anim: 'anim-row' },
      { name: 'Peso muerto rumano', muscle: 'Isquiotibiales', anim: 'anim-hinge' },
      { name: 'Press militar', muscle: 'Deltoides', anim: 'anim-shoulder' },
      { name: 'Zancadas caminando', muscle: 'Cuádriceps', anim: 'anim-lunge' },
      { name: 'Plancha clásica', muscle: 'Recto Abdominal', anim: 'anim-core' },
      { name: 'Elevación de talones', muscle: 'Gastrocnemio', anim: 'anim-calves' },
      { name: 'Jumping Jacks', muscle: 'Cardiovascular', anim: 'cardio' }
    ];

    for (const tc of testCases) {
      const p = getExercisePattern(tc.name);
      assert.ok(p, `Pattern for ${tc.name} should exist`);
      assert.ok(p.primaryMuscles.includes(tc.muscle), `${tc.name} primary muscles should include ${tc.muscle}`);
      assert.ok(p.svg.includes(tc.anim), `${tc.name} SVG should contain kinetic class ${tc.anim}`);
      assert.ok(p.svg.includes('muscleGlowOrange') || p.svg.includes('cardio'), `${tc.name} should have muscle glow gradient`);
    }
  });

  test('Exercise patterns provide realistic 3D animated GIF media assets', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const testExercises = [
      'Sentadillas con peso corporal',
      'Flexiones de brazos',
      'Press de banca',
      'Remo con mancuernas',
      'Peso muerto rumano',
      'Press de hombros',
      'Zancadas alternas',
      'Plancha clásica',
      'Elevación de talones',
      'Burpees completos'
    ];

    for (const name of testExercises) {
      const p = getExercisePattern(name);
      assert.ok(p.mediaUrl, `Pattern for ${name} must have mediaUrl`);
      assert.ok(fs.existsSync(p.mediaUrl), `File ${p.mediaUrl} must exist on disk for ${name}`);
    }
  });

  test('Unknown exercises provide friendly beginner fallback steps and guidance', () => {
    const fallback = getExercisePattern('Ejercicio Inventado Super Raroo');
    assert.ok(fallback);
    assert.ok(Array.isArray(fallback.steps));
    assert.ok(fallback.breathing);
    assert.ok(Array.isArray(fallback.commonMistakes));
    assert.ok(fallback.svg);
    assert.ok(fallback.mediaUrl);
  });
});

