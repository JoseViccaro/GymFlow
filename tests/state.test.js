import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { StateManager } from '../js/state.js';

// Setup Mock LocalStorage
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

describe('StateManager', () => {
  let storage;
  let stateMgr;

  beforeEach(() => {
    storage = new MockLocalStorage();
    stateMgr = new StateManager(storage);
  });

  test('initializes with default empty state when storage is empty', () => {
    const state = stateMgr.getState();
    assert.deepEqual(state.profiles, []);
    assert.equal(state.activeProfileId, null);
  });

  test('loads existing state from storage', () => {
    const mockData = {
      profiles: [{ id: 'p1', name: 'Carlos', weight: 75, height: 180, streak: 3 }],
      activeProfileId: 'p1'
    };
    storage.setItem('gymflow_state', JSON.stringify(mockData));

    stateMgr.init();
    const state = stateMgr.getState();
    assert.equal(state.profiles.length, 1);
    assert.equal(state.profiles[0].name, 'Carlos');
    assert.equal(state.activeProfileId, 'p1');
  });

  test('getActiveProfile returns correct active profile or null', () => {
    stateMgr.setState({
      profiles: [
        { id: 'p1', name: 'Ana' },
        { id: 'p2', name: 'Beto' }
      ],
      activeProfileId: 'p2'
    });

    const active = stateMgr.getActiveProfile();
    assert.ok(active);
    assert.equal(active.id, 'p2');
    assert.equal(active.name, 'Beto');
  });

  test('save persists state changes to storage', () => {
    stateMgr.setState({
      profiles: [{ id: 'p1', name: 'Lucía' }],
      activeProfileId: 'p1'
    });
    stateMgr.save();

    const stored = JSON.parse(storage.getItem('gymflow_state'));
    assert.equal(stored.profiles[0].name, 'Lucía');
  });
});
