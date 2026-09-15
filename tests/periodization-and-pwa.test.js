import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { WEEK_PERIODIZATION, getWeekPeriodization } from '../js/database.js';

describe('Weekly Periodization (Mesocycles 1 to 4)', () => {
  test('WEEK_PERIODIZATION has full definitions for Weeks 1 through 4', () => {
    for (let w = 1; w <= 4; w++) {
      const p = WEEK_PERIODIZATION[w];
      assert.ok(p, `Week ${w} periodization must exist`);
      assert.equal(p.week, w);
      assert.ok(p.title && p.title.length > 5, `Week ${w} title should be descriptive`);
      assert.ok(p.tag && p.tag.length > 3, `Week ${w} tag should exist`);
      assert.ok(p.description && p.description.length > 20, `Week ${w} description should explain purpose`);
      assert.ok(p.progressionAdvice && p.progressionAdvice.length > 10, `Week ${w} advice should be clear`);
      assert.ok(p.badgeClass, `Week ${w} badgeClass should exist`);
    }
  });

  test('getWeekPeriodization returns correct metadata and safe fallback', () => {
    const w1 = getWeekPeriodization(1);
    assert.equal(w1.week, 1);
    assert.ok(w1.title.includes('Semana 1'));

    const w2 = getWeekPeriodization(2);
    assert.equal(w2.week, 2);
    assert.ok(w2.title.includes('Semana 2'));
    assert.ok(w2.repsSuffix.includes('+1-2 reps'));

    const w3 = getWeekPeriodization(3);
    assert.equal(w3.week, 3);
    assert.ok(w3.title.includes('Semana 3'));

    const w4 = getWeekPeriodization(4);
    assert.equal(w4.week, 4);
    assert.ok(w4.title.includes('Semana 4'));
    assert.ok(w4.title.includes('Descarga') || w4.tag.includes('Descarga'));

    // Edge cases
    const wInvalid = getWeekPeriodization(99);
    assert.equal(wInvalid.week, 1, 'Should fallback to Week 1');
    const wNull = getWeekPeriodization(null);
    assert.equal(wNull.week, 1, 'Should fallback to Week 1 for null');
  });

  test('Specific weekly goals explain to user why exercises remain but stimulus changes', () => {
    // Week 1: Technique & baseline
    assert.match(WEEK_PERIODIZATION[1].description, /técnica|referencia/i);
    // Week 2: Progressive overload
    assert.match(WEEK_PERIODIZATION[2].description, /repeticiones|sobrecarga|\+2\.5/i);
    // Week 3: Peak intensity RIR
    assert.match(WEEK_PERIODIZATION[3].description, /límite|intensidad|pico|rir/i);
    // Week 4: Deload / recovery
    assert.match(WEEK_PERIODIZATION[4].description, /descarga|recuperación|articulaciones/i);
  });
});

describe('PWA Auto-Update & Service Worker Integrity', () => {
  test('sw.js contains skipWaiting and clients.claim for instant PWA home-screen updates', () => {
    const swPath = path.resolve('sw.js');
    assert.ok(fs.existsSync(swPath), 'sw.js must exist on disk');
    const swContent = fs.readFileSync(swPath, 'utf8');

    // Must have updated cache version
    assert.match(swContent, /gymflow-cache-v/i, 'Cache version must be declared');
    // Must contain self.skipWaiting()
    assert.match(swContent, /skipWaiting\(\)/, 'sw.js must call skipWaiting()');
    // Must contain clients.claim()
    assert.match(swContent, /clients\.claim\(\)/, 'sw.js must call clients.claim()');
    // Must listen for SKIP_WAITING message
    assert.match(swContent, /SKIP_WAITING/, 'sw.js must handle SKIP_WAITING message');
  });

  test('sw.js ASSETS array includes all 10 realistic 3D anatomical GIFs', () => {
    const swPath = path.resolve('sw.js');
    const swContent = fs.readFileSync(swPath, 'utf8');

    const expectedGifs = [
      'assets/exercises/squat.gif',
      'assets/exercises/pushup.gif',
      'assets/exercises/bench.gif',
      'assets/exercises/row.gif',
      'assets/exercises/deadlift.gif',
      'assets/exercises/shoulder.gif',
      'assets/exercises/lunge.gif',
      'assets/exercises/core.gif',
      'assets/exercises/calves.gif',
      'assets/exercises/burpee.gif'
    ];

    for (const gif of expectedGifs) {
      assert.ok(swContent.includes(gif), `sw.js ASSETS should contain ${gif}`);
    }
  });
});
