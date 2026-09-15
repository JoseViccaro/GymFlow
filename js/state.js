/**
 * GymFlow State Manager
 * Manages reactive state with LocalStorage persistence and migration support.
 */
export class StateManager {
  constructor(storage = (typeof window !== 'undefined' ? window.localStorage : null)) {
    this.storage = storage;
    this.key = 'gymflow_state';
    this.state = {
      profiles: [],
      activeProfileId: null
    };
    if (this.storage) {
      this.init();
    }
  }

  init() {
    if (!this.storage) return;
    try {
      const saved = this.storage.getItem(this.key);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.profiles)) {
          this.state = parsed;
          // Ensure valid activeProfileId
          if (this.state.profiles.length > 0) {
            const exists = this.state.profiles.some(p => p.id === this.state.activeProfileId);
            if (!exists) {
              this.state.activeProfileId = this.state.profiles[0].id;
            }
          } else {
            this.state.activeProfileId = null;
          }
        }
      } else {
        this.state = {
          profiles: [],
          activeProfileId: null
        };
      }
    } catch (e) {
      console.error("Error loading GymFlow state:", e);
    }
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  getActiveProfile() {
    if (!this.state.activeProfileId) return null;
    return this.state.profiles.find(p => p.id === this.state.activeProfileId) || null;
  }

  save() {
    if (!this.storage) return;
    try {
      this.storage.setItem(this.key, JSON.stringify(this.state));
    } catch (e) {
      console.error("Error saving GymFlow state:", e);
    }
  }
}

export const defaultStateManager = new StateManager();
