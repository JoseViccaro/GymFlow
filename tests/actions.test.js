import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { StateManager } from '../js/state.js';
import { ActionController } from '../js/actions.js';

class MockLocalStorage {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

describe('ActionController', () => {
  let storage;
  let stateMgr;
  let actions;

  beforeEach(() => {
    storage = new MockLocalStorage();
    stateMgr = new StateManager(storage);
    actions = new ActionController(stateMgr);
  });

  test('createProfile creates profile with defaults and sets it active', () => {
    const profile = actions.createProfile({
      name: 'Valeria',
      weight: 65,
      height: 168,
      age: 28,
      gender: 'female',
      goal: 'get-fit',
      equipment: ['dumbbells']
    });

    assert.ok(profile.id);
    assert.equal(profile.name, 'Valeria');
    assert.equal(profile.phase, 1);
    assert.equal(profile.week, 1);
    assert.equal(profile.streak, 0);
    assert.deepEqual(profile.history, {});
    assert.deepEqual(profile.exerciseWeights, {});
    assert.equal(stateMgr.getState().activeProfileId, profile.id);
  });

  test('updateProfile updates existing profile attributes', () => {
    const p = actions.createProfile({ name: 'Martin', weight: 80, height: 180, age: 30, gender: 'male', goal: 'lose-weight' });
    actions.updateProfile(p.id, { weight: 78, phase: 2, week: 3 });

    const updated = stateMgr.getActiveProfile();
    assert.equal(updated.weight, 78);
    assert.equal(updated.phase, 2);
    assert.equal(updated.week, 3);
  });

  test('deleteProfile removes profile and resets activeProfileId if active', () => {
    const p1 = actions.createProfile({ name: 'User1', weight: 70, height: 170, age: 25, gender: 'male', goal: 'get-fit' });
    const p2 = actions.createProfile({ name: 'User2', weight: 60, height: 160, age: 22, gender: 'female', goal: 'lose-weight' });

    assert.equal(stateMgr.getState().activeProfileId, p2.id);
    actions.deleteProfile(p2.id);

    const state = stateMgr.getState();
    assert.equal(state.profiles.length, 1);
    assert.equal(state.activeProfileId, p1.id);
  });

  test('toggleDayCompleted toggles status and updates streak', () => {
    const p = actions.createProfile({ name: 'Sol', weight: 58, height: 165, age: 26, gender: 'female', goal: 'build-muscle' });
    
    // Toggle completed
    const res1 = actions.toggleDayCompleted(p.id, 1, 1, 0);
    assert.equal(res1.completed, true);
    assert.equal(res1.streak, 1);
    assert.ok(p.history['1-1-0']);

    // Toggle back to incomplete
    const res2 = actions.toggleDayCompleted(p.id, 1, 1, 0);
    assert.equal(res2.completed, false);
    assert.equal(p.history['1-1-0'], undefined);
  });

  test('toggleExerciseCompleted tracks individual exercises', () => {
    const p = actions.createProfile({ name: 'Diego', weight: 82, height: 178, age: 34, gender: 'male', goal: 'build-muscle' });
    
    actions.toggleExerciseCompleted(p.id, 1, 1, 0, 'Sentadillas con peso corporal');
    assert.equal(actions.isExerciseCompleted(p.id, 1, 1, 0, 'Sentadillas con peso corporal'), true);

    actions.toggleExerciseCompleted(p.id, 1, 1, 0, 'Sentadillas con peso corporal');
    assert.equal(actions.isExerciseCompleted(p.id, 1, 1, 0, 'Sentadillas con peso corporal'), false);
  });

  test('saveExerciseWeight records exercise weight', () => {
    const p = actions.createProfile({ name: 'Elena', weight: 62, height: 167, age: 29, gender: 'female', goal: 'get-fit' });
    
    actions.saveExerciseWeight(p.id, 'Press de hombros', 12.5);
    const updated = stateMgr.getActiveProfile();
    assert.equal(updated.exerciseWeights['Press de hombros'], 12.5);
  });

  test('exportState and importState handles data backup and restore', () => {
    actions.createProfile({ name: 'BackupUser', weight: 75, height: 175, age: 30, gender: 'male', goal: 'get-fit' });
    const exportedJson = actions.exportState();
    
    assert.ok(exportedJson.includes('BackupUser'));

    // Clear and restore
    storage.clear();
    stateMgr.init();
    assert.equal(stateMgr.getState().profiles.length, 0);

    const importResult = actions.importState(exportedJson);
    assert.equal(importResult.success, true);
    assert.equal(stateMgr.getState().profiles.length, 1);
    assert.equal(stateMgr.getActiveProfile().name, 'BackupUser');
  });
});
