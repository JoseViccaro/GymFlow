/**
 * GymFlow Action Controller
 * Contains all business logic, profile mutations, completion tracking, and backups.
 */
export class ActionController {
  constructor(stateManager) {
    this.stateManager = stateManager;
  }

  get state() {
    return this.stateManager.getState();
  }

  createProfile({ name, weight, height, age, gender, goal, equipment = [] }) {
    const newProfile = {
      id: 'profile_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      name: name ? name.trim() : 'Atleta',
      weight: parseFloat(weight) || 70,
      height: parseFloat(height) || 170,
      age: parseInt(age, 10) || 25,
      gender: gender || 'male',
      goal: goal || 'get-fit',
      phase: 1,
      week: 1,
      equipment: Array.isArray(equipment) ? equipment : [],
      streak: 0,
      lastCompletedDate: null,
      history: {},
      exerciseWeights: {},
      exerciseChecks: {}
    };

    this.state.profiles.push(newProfile);
    this.state.activeProfileId = newProfile.id;
    this.stateManager.save();
    return newProfile;
  }

  updateProfile(id, updates) {
    const profile = this.state.profiles.find(p => p.id === id);
    if (!profile) return null;

    if (updates.name !== undefined) profile.name = updates.name.trim();
    if (updates.weight !== undefined) profile.weight = parseFloat(updates.weight);
    if (updates.height !== undefined) profile.height = parseFloat(updates.height);
    if (updates.age !== undefined) profile.age = parseInt(updates.age, 10);
    if (updates.gender !== undefined) profile.gender = updates.gender;
    if (updates.goal !== undefined) profile.goal = updates.goal;
    if (updates.phase !== undefined) profile.phase = parseInt(updates.phase, 10);
    if (updates.week !== undefined) profile.week = parseInt(updates.week, 10);
    if (updates.equipment !== undefined) profile.equipment = updates.equipment;

    this.stateManager.save();
    return profile;
  }

  deleteProfile(id) {
    const index = this.state.profiles.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.state.profiles.splice(index, 1);
    if (this.state.activeProfileId === id) {
      this.state.activeProfileId = this.state.profiles.length > 0 ? this.state.profiles[0].id : null;
    }
    this.stateManager.save();
    return true;
  }

  switchProfile(id) {
    const profile = this.state.profiles.find(p => p.id === id);
    if (profile) {
      this.state.activeProfileId = id;
      this.stateManager.save();
      return true;
    }
    return false;
  }

  toggleDayCompleted(profileId, phase, week, dayIndex) {
    const profile = this.state.profiles.find(p => p.id === profileId);
    if (!profile) return { completed: false, streak: 0 };

    if (!profile.history) profile.history = {};
    const key = `${phase}-${week}-${dayIndex}`;
    const wasCompleted = !!profile.history[key];

    if (wasCompleted) {
      delete profile.history[key];
    } else {
      profile.history[key] = new Date().toISOString();

      // Streak calculation
      const todayStr = new Date().toISOString().split('T')[0];
      const lastCompleted = profile.lastCompletedDate;

      if (!lastCompleted) {
        profile.streak = 1;
      } else {
        const lastDate = new Date(lastCompleted);
        const todayDate = new Date(todayStr);
        const diffTime = todayDate - lastDate;
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          profile.streak += 1;
        } else if (diffDays > 1) {
          profile.streak = 1;
        }
      }
      profile.lastCompletedDate = todayStr;
    }

    this.stateManager.save();
    return { completed: !wasCompleted, streak: profile.streak };
  }

  toggleExerciseCompleted(profileId, phase, week, dayIndex, exerciseName) {
    const profile = this.state.profiles.find(p => p.id === profileId);
    if (!profile) return false;

    if (!profile.exerciseChecks) profile.exerciseChecks = {};
    const key = `${phase}-${week}-${dayIndex}-${exerciseName}`;
    const wasChecked = !!profile.exerciseChecks[key];

    if (wasChecked) {
      delete profile.exerciseChecks[key];
    } else {
      profile.exerciseChecks[key] = new Date().toISOString();
    }

    this.stateManager.save();
    return !wasChecked;
  }

  isExerciseCompleted(profileId, phase, week, dayIndex, exerciseName) {
    const profile = this.state.profiles.find(p => p.id === profileId);
    if (!profile || !profile.exerciseChecks) return false;
    const key = `${phase}-${week}-${dayIndex}-${exerciseName}`;
    return !!profile.exerciseChecks[key];
  }

  saveExerciseWeight(profileId, exerciseName, weight) {
    const profile = this.state.profiles.find(p => p.id === profileId);
    if (!profile) return false;

    if (!profile.exerciseWeights) profile.exerciseWeights = {};
    profile.exerciseWeights[exerciseName] = parseFloat(weight) || 0;
    this.stateManager.save();
    return true;
  }

  exportState() {
    return JSON.stringify(this.stateManager.getState(), null, 2);
  }

  importState(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || !Array.isArray(parsed.profiles)) {
        return { success: false, error: 'Estructura de archivo de respaldo inválida.' };
      }
      this.stateManager.setState(parsed);
      this.stateManager.save();
      return { success: true };
    } catch (err) {
      return { success: false, error: 'El archivo no es un JSON válido.' };
    }
  }
}
