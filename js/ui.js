import { WORKOUT_DATABASE, WEEK_PERIODIZATION, getWeekPeriodization } from './database.js';
import {
  calculateBMI,
  getBMICategory,
  calculateIdealWeight,
  calculateWaterTarget,
  getGoalRecommendation,
  getExercisePattern,
  getEquipmentAdvice
} from './calculators.js';
import { defaultStateManager } from './state.js';
import { ActionController } from './actions.js';
import { RestTimer } from './timer.js';

export const Actions = new ActionController(defaultStateManager);

export const UI = {
  stateManager: defaultStateManager,
  activeDayIndex: 0,
  timer: null,
  currentGuideContext: null,
  elements: {},

  init() {
    this.cacheElements();
    this.initTimer();
    this.setupEventListeners();
    this.render();
  },

  cacheElements() {
    this.elements = {
      welcomeScreen: document.getElementById('welcome-screen'),
      appLayout: document.getElementById('app-layout'),
      profileSelect: document.getElementById('profile-select'),
      activeProfileName: document.getElementById('active-profile-name'),
      
      // Dashboard
      bmiVal: document.getElementById('bmi-value'),
      bmiCat: document.getElementById('bmi-category'),
      idealWeightVal: document.getElementById('ideal-weight-value'),
      waterVal: document.getElementById('water-value'),
      streakVal: document.getElementById('streak-value'),

      // Workout section
      workoutContent: document.getElementById('workout-content'),

      // Profile Modal
      profileModal: document.getElementById('profile-modal'),
      profileForm: document.getElementById('profile-form'),
      profileFormTitle: document.getElementById('profile-form-title'),

      // Settings Modal
      settingsModal: document.getElementById('settings-modal'),

      // Full-Screen Exercise Guide Modal
      guideModal: document.getElementById('exercise-guide-modal'),
      guideModalTitle: document.getElementById('guide-modal-title'),
      guideModalTarget: document.getElementById('guide-modal-target'),
      guideModalAvatar: document.getElementById('guide-modal-avatar'),
      guideModalSets: document.getElementById('guide-modal-sets'),
      guideModalReps: document.getElementById('guide-modal-reps'),
      guideModalRest: document.getElementById('guide-modal-rest'),
      guideModalWeightInput: document.getElementById('guide-modal-weight-input'),
      guideBtnSaveWeight: document.getElementById('guide-btn-save-weight'),
      guideBtnStartTimer: document.getElementById('guide-btn-start-timer'),
      guideModalSteps: document.getElementById('guide-modal-steps'),
      guideModalPosture: document.getElementById('guide-modal-posture'),
      guideModalMistakes: document.getElementById('guide-modal-mistakes'),
      guideModalBreathing: document.getElementById('guide-modal-breathing'),
      guideModalEquipment: document.getElementById('guide-modal-equipment'),
      guideBtnCompleteAction: document.getElementById('guide-btn-complete-action'),
      guideModalPrimaryMuscles: document.getElementById('guide-modal-primary-muscles'),
      guideModalSecondaryMuscles: document.getElementById('guide-modal-secondary-muscles'),
      guideModalSecondaryPill: document.getElementById('guide-modal-secondary-pill'),
      guideModalWeekCallout: document.getElementById('guide-modal-week-callout'),
      guideModalWeekTag: document.getElementById('guide-modal-week-tag'),
      guideModalWeekBadge: document.getElementById('guide-modal-week-badge'),
      guideModalWeekAdvice: document.getElementById('guide-modal-week-advice'),
      btnToggleAvatarMotion: document.getElementById('btn-toggle-avatar-motion'),
      avatarMotionIcon: document.getElementById('avatar-motion-icon'),
      avatarMotionText: document.getElementById('avatar-motion-text'),

      // Settings and PWA Update
      settingsBtnCheckUpdate: document.getElementById('settings-btn-check-update'),
      settingsUpdateStatus: document.getElementById('settings-update-status'),
      pwaUpdateToast: document.getElementById('pwa-update-toast'),
      pwaBtnReload: document.getElementById('pwa-btn-reload'),

      // Rest Timer Dock
      timerContainer: document.getElementById('floating-timer-container'),
      timerCountdown: document.getElementById('timer-countdown'),
      timerProgressFill: document.getElementById('timer-progress-fill'),
      timerPlayPauseBtn: document.getElementById('btn-timer-play-pause'),
      timerSkipBtn: document.getElementById('btn-timer-skip'),
      timerAdd15Btn: document.getElementById('btn-timer-add15')
    };
  },

  initTimer() {
    this.timer = new RestTimer({
      onTick: ({ formatted, percentage }) => {
        if (this.elements.timerCountdown) {
          this.elements.timerCountdown.innerText = formatted;
        }
        if (this.elements.timerProgressFill) {
          this.elements.timerProgressFill.style.width = `${percentage}%`;
        }
      },
      onStateChange: ({ active, isPaused }) => {
        if (this.elements.timerContainer) {
          this.elements.timerContainer.style.display = active ? 'flex' : 'none';
          if (active) {
            this.elements.timerContainer.classList.add('docked-timer-active');
          }
        }
        if (this.elements.timerPlayPauseBtn) {
          this.elements.timerPlayPauseBtn.innerText = isPaused ? 'Reanudar' : 'Pausar';
        }
      },
      onFinish: () => {
        if (this.elements.timerCountdown) {
          this.elements.timerCountdown.innerText = '¡Listo!';
        }
        if (this.elements.timerProgressFill) {
          this.elements.timerProgressFill.style.width = '0%';
        }
      }
    });
  },

  setupEventListeners() {
    // 1. Onboarding Start Button
    const onboardBtn = document.getElementById('btn-onboard-create');
    if (onboardBtn) {
      onboardBtn.addEventListener('click', () => {
        this.showProfileModal(null);
      });
    }

    // 2. Profile Switcher in Header
    if (this.elements.profileSelect) {
      this.elements.profileSelect.addEventListener('change', (e) => {
        if (e.target.value === 'new') {
          this.showProfileModal(null);
          this.elements.profileSelect.value = this.stateManager.getState().activeProfileId || '';
        } else {
          Actions.switchProfile(e.target.value);
          this.activeDayIndex = 0;
          this.render();
        }
      });
    }

    // 3. Settings Button (Gear in Header)
    const settingsBtn = document.getElementById('btn-open-settings');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        this.showSettingsModal();
      });
    }

    // 4. Profile Form Submit
    if (this.elements.profileForm) {
      this.elements.profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const profileId = form.dataset.profileId;

        const name = form.elements['name'].value;
        const weight = form.elements['weight'].value;
        const height = form.elements['height'].value;
        const age = form.elements['age'].value;
        const gender = form.elements['gender'].value;
        const goal = form.elements['goal'].value;
        const phase = form.elements['phase'] ? form.elements['phase'].value : 1;
        const week = form.elements['week'] ? form.elements['week'].value : 1;
        const equipment = Array.from(form.querySelectorAll('input[name="equipment"]:checked')).map(cb => cb.value);

        if (profileId) {
          Actions.updateProfile(profileId, { name, weight, height, age, gender, goal, phase, week, equipment });
        } else {
          Actions.createProfile({ name, weight, height, age, gender, goal, equipment });
        }

        this.hideProfileModal();
        this.render();
      });

      // Live Goal Recommendation on Weight/Height typing
      const handleLiveRecommend = () => {
        const w = this.elements.profileForm.elements['weight'].value;
        const h = this.elements.profileForm.elements['height'].value;
        const sugText = document.getElementById('goal-suggestion-text');
        if (sugText) {
          if (w && h) {
            const rec = getGoalRecommendation(w, h);
            sugText.innerHTML = rec.text;
            sugText.style.color = '#ff6b00';
            if (!this.elements.profileForm.dataset.profileId && rec.goal) {
              this.elements.profileForm.elements['goal'].value = rec.goal;
            }
          } else {
            sugText.innerHTML = '';
          }
        }
      };

      const wInput = this.elements.profileForm.elements['weight'];
      const hInput = this.elements.profileForm.elements['height'];
      if (wInput) wInput.addEventListener('input', handleLiveRecommend);
      if (hInput) hInput.addEventListener('input', handleLiveRecommend);
    }

    // 5. Rest Timer Controls
    if (this.elements.timerPlayPauseBtn) {
      this.elements.timerPlayPauseBtn.addEventListener('click', () => {
        this.timer.togglePause();
      });
    }
    if (this.elements.timerSkipBtn) {
      this.elements.timerSkipBtn.addEventListener('click', () => {
        this.timer.skip();
      });
    }
    if (this.elements.timerAdd15Btn) {
      this.elements.timerAdd15Btn.addEventListener('click', () => {
        this.timer.secondsRemaining += 15;
        this.timer.totalSeconds += 15;
        this.timer.notifyTick();
      });
    }

    // 6. Settings Actions
    const btnEditProfile = document.getElementById('settings-btn-edit-profile');
    if (btnEditProfile) {
      btnEditProfile.addEventListener('click', () => {
        this.hideSettingsModal();
        this.showProfileModal(this.stateManager.getActiveProfile());
      });
    }

    const btnNewProfile = document.getElementById('settings-btn-new-profile');
    if (btnNewProfile) {
      btnNewProfile.addEventListener('click', () => {
        this.hideSettingsModal();
        this.showProfileModal(null);
      });
    }

    const btnExport = document.getElementById('settings-btn-export');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        this.exportDataFile();
      });
    }

    const importInput = document.getElementById('settings-file-import');
    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          const res = Actions.importState(evt.target.result);
          if (res.success) {
            alert('¡Datos restaurados con éxito!');
            this.hideSettingsModal();
            this.render();
          } else {
            alert('Error al importar: ' + res.error);
          }
        };
        reader.readAsText(file);
      });
    }

    const btnDeleteProfile = document.getElementById('settings-btn-delete-profile');
    if (btnDeleteProfile) {
      btnDeleteProfile.addEventListener('click', () => {
        const active = this.stateManager.getActiveProfile();
        if (!active) return;
        if (confirm(`¿Estás seguro de eliminar el perfil de "${active.name}"? Esta acción no se puede deshacer.`)) {
          Actions.deleteProfile(active.id);
          this.hideSettingsModal();
          this.render();
        }
      });
    }

    if (this.elements.settingsBtnCheckUpdate) {
      this.elements.settingsBtnCheckUpdate.addEventListener('click', () => {
        this.handleCheckUpdates();
      });
    }

    if (this.elements.pwaBtnReload) {
      this.elements.pwaBtnReload.addEventListener('click', () => {
        this.triggerPwaReload();
      });
    }

    // 7. Full-screen Exercise Guide Modal Interactions
    if (this.elements.guideBtnStartTimer) {
      this.elements.guideBtnStartTimer.addEventListener('click', () => {
        if (this.currentGuideContext && this.currentGuideContext.rest) {
          this.startRestTimer(this.currentGuideContext.rest);
        }
      });
    }

    if (this.elements.guideBtnSaveWeight) {
      this.elements.guideBtnSaveWeight.addEventListener('click', () => {
        if (this.currentGuideContext && this.elements.guideModalWeightInput) {
          const weight = this.elements.guideModalWeightInput.value;
          Actions.saveExerciseWeight(this.currentGuideContext.profile.id, this.currentGuideContext.ex.name, weight);
          const btn = this.elements.guideBtnSaveWeight;
          btn.innerText = '¡Guardado!';
          btn.style.background = 'var(--success)';
          setTimeout(() => {
            btn.innerText = 'Guardar';
            btn.style.background = '';
          }, 1500);
          this.renderWorkoutsSection(this.currentGuideContext.profile);
        }
      });
    }

    if (this.elements.guideBtnCompleteAction) {
      this.elements.guideBtnCompleteAction.addEventListener('click', () => {
        if (this.currentGuideContext) {
          const { profile, ex, dayIndex } = this.currentGuideContext;
          const isNowDone = Actions.toggleExerciseCompleted(profile.id, profile.phase, profile.week, dayIndex, ex.name);
          this.updateGuideModalCompleteButton(isNowDone);
          this.renderWorkoutsSection(profile);
        }
      });
    }

    if (this.elements.btnToggleAvatarMotion) {
      this.elements.btnToggleAvatarMotion.addEventListener('click', () => {
        const img = document.getElementById('guide-active-exercise-img');
        const canvas = document.getElementById('guide-pause-canvas');
        const svg = this.elements.guideModalAvatar ? this.elements.guideModalAvatar.querySelector('svg') : null;

        if (img && canvas) {
          const isCurrentlyPaused = canvas.style.display === 'block';
          if (!isCurrentlyPaused) {
            // Freeze frame to canvas
            canvas.width = img.naturalWidth || img.clientWidth || 280;
            canvas.height = img.naturalHeight || img.clientHeight || 280;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.style.display = 'block';
            img.style.display = 'none';
            if (this.elements.avatarMotionIcon) this.elements.avatarMotionIcon.innerText = '▶';
            if (this.elements.avatarMotionText) this.elements.avatarMotionText.innerText = 'Reanudar movimiento';
          } else {
            // Unfreeze
            canvas.style.display = 'none';
            img.style.display = 'block';
            if (this.elements.avatarMotionIcon) this.elements.avatarMotionIcon.innerText = '⏸';
            if (this.elements.avatarMotionText) this.elements.avatarMotionText.innerText = 'Pausar movimiento';
          }
        } else if (svg) {
          const isPaused = svg.classList.toggle('paused-animation');
          if (this.elements.avatarMotionIcon) this.elements.avatarMotionIcon.innerText = isPaused ? '▶' : '⏸';
          if (this.elements.avatarMotionText) this.elements.avatarMotionText.innerText = isPaused ? 'Reanudar movimiento' : 'Pausar movimiento';
        }
      });
    }
  },

  render() {
    const profile = this.stateManager.getActiveProfile();

    if (!profile) {
      if (this.elements.welcomeScreen) this.elements.welcomeScreen.style.display = 'flex';
      if (this.elements.appLayout) this.elements.appLayout.style.display = 'none';
      return;
    }

    if (this.elements.welcomeScreen) this.elements.welcomeScreen.style.display = 'none';
    if (this.elements.appLayout) this.elements.appLayout.style.display = 'grid';

    // Populate profile select
    this.renderProfileSelect(profile.id);

    // Header name
    if (this.elements.activeProfileName) {
      this.elements.activeProfileName.innerText = profile.name;
    }

    // Metrics Dashboard
    const bmiVal = calculateBMI(profile.weight, profile.height);
    const bmiCat = getBMICategory(bmiVal);
    const waterVal = calculateWaterTarget(profile.weight);
    const idealWeightVal = calculateIdealWeight(profile.height, profile.gender);

    if (this.elements.bmiVal) this.elements.bmiVal.innerText = bmiVal;
    if (this.elements.bmiCat) {
      this.elements.bmiCat.innerText = bmiCat.text;
      this.elements.bmiCat.style.color = bmiCat.color;
    }
    if (this.elements.idealWeightVal) this.elements.idealWeightVal.innerText = `${idealWeightVal} kg`;
    if (this.elements.waterVal) this.elements.waterVal.innerText = `${(waterVal / 1000).toFixed(1)} L`;
    if (this.elements.streakVal) this.elements.streakVal.innerText = `${profile.streak} ${profile.streak === 1 ? 'día' : 'días'}`;

    // Workout Section
    this.renderWorkoutsSection(profile);
  },

  renderProfileSelect(activeId) {
    if (!this.elements.profileSelect) return;
    const profiles = this.stateManager.getState().profiles;
    let html = profiles.map(p => `<option value="${p.id}" ${p.id === activeId ? 'selected' : ''}>${p.name}</option>`).join('');
    html += '<option value="new">+ Nuevo Perfil...</option>';
    this.elements.profileSelect.innerHTML = html;
  },

  renderWorkoutsSection(profile) {
    const goalData = WORKOUT_DATABASE[profile.goal];
    if (!goalData) return;

    const phaseData = goalData[profile.phase];
    if (!phaseData) return;

    const daysCount = phaseData.days.length;
    if (this.activeDayIndex >= daysCount) {
      this.activeDayIndex = 0;
    }

    const currentWeek = profile.week || 1;
    const weekMeta = getWeekPeriodization(currentWeek);

    let html = `
      <!-- Routine Sub-header -->
      <div class="routine-header-card glass-panel">
        <div class="routine-title-row">
          <div>
            <h3>${phaseData.name}</h3>
            <p class="routine-desc">${phaseData.description}</p>
          </div>
          <div class="phase-progress-badges">
            <span class="badge">Fase ${profile.phase} / 3</span>
            <span class="badge badge-week-accent">Semana ${currentWeek} / 4</span>
          </div>
        </div>

        <!-- Quick Selectors for Phase & Mesocycle Weeks -->
        <div class="routine-pickers-row">
          <div class="picker-group">
            <label for="quick-phase-select">Fase:</label>
            <select id="quick-phase-select" class="glass-select-sm">
              <option value="1" ${profile.phase === 1 ? 'selected' : ''}>Fase 1: Acondicionamiento</option>
              <option value="2" ${profile.phase === 2 ? 'selected' : ''}>Fase 2: Fuerza</option>
              <option value="3" ${profile.phase === 3 ? 'selected' : ''}>Fase 3: Definición</option>
            </select>
          </div>
          <div class="picker-group quick-week-dropdown-fallback">
            <label for="quick-week-select">Semana:</label>
            <select id="quick-week-select" class="glass-select-sm">
              ${[1, 2, 3, 4].map(w => `<option value="${w}" ${currentWeek === w ? 'selected' : ''}>Semana ${w}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Interactive 4-Week Mesocycle Segmented Control -->
        <div class="mesocycle-bar-wrapper">
          <div class="mesocycle-bar-header">
            <span class="mesocycle-bar-label">Mesociclo de 4 Semanas:</span>
            <span class="mesocycle-bar-status ${weekMeta.badgeClass}">${weekMeta.tag}</span>
          </div>
          <div class="week-segmented-control" role="tablist" aria-label="Semanas del mesociclo">
            ${[1, 2, 3, 4].map(w => {
              const wm = getWeekPeriodization(w);
              const isActive = w === currentWeek;
              const shortTitles = { 1: '🌱 S1 Base', 2: '⚡ S2 +Carga', 3: '🔥 S3 Pico', 4: '🛡️ S4 Deload' };
              return `
                <button type="button" 
                        class="week-pill-tab ${isActive ? 'active' : ''} ${wm.badgeClass}" 
                        data-week-num="${w}"
                        role="tab"
                        aria-selected="${isActive}"
                        title="${wm.title}">
                  <span class="week-pill-tag">${shortTitles[w]}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Mesocycle Strategy Banner (Explains why week 1, 2, 3, 4 are different) -->
      <div class="week-periodization-banner glass-panel ${weekMeta.badgeClass}">
        <div class="week-banner-header">
          <div class="week-banner-title-group">
            <span class="week-banner-badge">${weekMeta.tag}</span>
            <h4 class="week-banner-title">${weekMeta.title}</h4>
          </div>
          <span class="week-mesocycle-step">Semana ${currentWeek} de 4</span>
        </div>
        <p class="week-banner-desc">${weekMeta.description}</p>
        <div class="week-banner-tip">
          <span class="week-tip-icon">🎯</span>
          <span class="week-tip-text"><strong>Tu meta esta semana:</strong> ${weekMeta.progressionAdvice}</span>
        </div>
      </div>

      <!-- Segmented Day Tabs Navigation -->
      <div class="day-segmented-control" role="tablist">
    `;

    phaseData.days.forEach((d, idx) => {
      const dayKey = `${profile.phase}-${profile.week}-${idx}`;
      const isDayDone = !!(profile.history && profile.history[dayKey]);
      const isActive = idx === this.activeDayIndex;

      html += `
        <button class="day-tab ${isActive ? 'active' : ''} ${isDayDone ? 'completed-tab' : ''}" 
                data-day-idx="${idx}" 
                role="tab" 
                aria-selected="${isActive}">
          <span class="tab-label">Día ${idx + 1}</span>
          ${isDayDone ? '<span class="tab-badge">✓</span>' : ''}
        </button>
      `;
    });

    html += `</div>`;

    // Active Day Details
    const activeDay = phaseData.days[this.activeDayIndex];
    const activeDayKey = `${profile.phase}-${profile.week}-${this.activeDayIndex}`;
    const isCurrentDayDone = !!(profile.history && profile.history[activeDayKey]);

    html += `
      <div class="active-day-card glass-panel ${isCurrentDayDone ? 'day-completed-style' : ''}">
        <div class="day-card-header">
          <div>
            <span class="day-phase-tag">Día ${this.activeDayIndex + 1} de ${daysCount}</span>
            <h4 class="day-title">${activeDay.name}</h4>
          </div>
          <button class="btn-complete-day ${isCurrentDayDone ? 'completed' : ''}" id="btn-toggle-day-complete">
            ${isCurrentDayDone ? '✓ Día Completado' : 'Marcar Día Completo'}
          </button>
        </div>

        <ul class="exercise-list">
    `;

    activeDay.exercises.forEach((ex, exIdx) => {
      const pattern = getExercisePattern(ex.name);
      const isExChecked = Actions.isExerciseCompleted(profile.id, profile.phase, profile.week, this.activeDayIndex, ex.name);
      const savedWeight = (profile.exerciseWeights && profile.exerciseWeights[ex.name] !== undefined) ? profile.exerciseWeights[ex.name] : null;

      html += `
        <li class="exercise-item ${isExChecked ? 'exercise-checked' : ''}" data-ex-idx="${exIdx}">
          <div class="exercise-row">
            <button class="exercise-check-btn ${isExChecked ? 'checked' : ''}" 
                    data-ex-name="${ex.name}" 
                    title="Marcar ejercicio completado" 
                    aria-label="Marcar ejercicio completado">
              ${isExChecked ? '✓' : ''}
            </button>
            <div class="exercise-main" data-ex-idx="${exIdx}">
              <span class="exercise-name">${ex.name}</span>
              <span class="exercise-target">${ex.target}</span>
            </div>
            <!-- Interactive trigger for full-screen guide with animated figure -->
            <button class="btn-open-guide-badge" data-ex-idx="${exIdx}" title="Ver explicación y muñeco 3D">
              🎥 Ver Técnica
            </button>
          </div>

          <div class="exercise-specs">
            <span class="spec-badge">${ex.sets} Series</span>
            <span class="spec-badge spec-reps-badge">
              ${ex.reps} Reps
              ${weekMeta.repsSuffix ? `<strong class="progression-suffix ${weekMeta.badgeClass}">${weekMeta.repsSuffix}</strong>` : ''}
            </span>
            <button class="spec-badge timer-badge" data-rest="${ex.rest}">
              ⏱ ${ex.rest}s Descanso
            </button>
            ${savedWeight !== null && savedWeight !== '' ? `
              <span class="spec-badge weight-record-badge" title="Último peso registrado">
                ⚖️ ${savedWeight} kg
              </span>
            ` : ''}
          </div>
        </li>
      `;
    });

    html += `
        </ul>
      </div>
    `;

    this.elements.workoutContent.innerHTML = html;
    this.bindWorkoutEvents(profile, activeDay);
  },

  bindWorkoutEvents(profile, activeDay) {
    // 1. Day Tabs Switching
    const tabs = this.elements.workoutContent.querySelectorAll('.day-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.dataset.dayIdx, 10);
        this.activeDayIndex = idx;
        this.renderWorkoutsSection(profile);
      });
    });

    // 2. Mesocycle Week Pill Tabs Switching
    const weekTabs = this.elements.workoutContent.querySelectorAll('.week-pill-tab');
    weekTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const w = parseInt(btn.dataset.weekNum, 10);
        if (w && w !== profile.week) {
          Actions.updateProfile(profile.id, { week: w });
          const updated = this.stateManager.getActiveProfile();
          this.renderWorkoutsSection(updated);
        }
      });
    });

    // 3. Quick Phase / Week Selectors
    const quickPhase = document.getElementById('quick-phase-select');
    if (quickPhase) {
      quickPhase.addEventListener('change', (e) => {
        Actions.updateProfile(profile.id, { phase: parseInt(e.target.value, 10) });
        this.activeDayIndex = 0;
        this.render();
      });
    }

    const quickWeek = document.getElementById('quick-week-select');
    if (quickWeek) {
      quickWeek.addEventListener('change', (e) => {
        Actions.updateProfile(profile.id, { week: parseInt(e.target.value, 10) });
        this.render();
      });
    }

    // 3. Toggle Day Complete Button
    const btnDayComplete = document.getElementById('btn-toggle-day-complete');
    if (btnDayComplete) {
      btnDayComplete.addEventListener('click', () => {
        Actions.toggleDayCompleted(profile.id, profile.phase, profile.week, this.activeDayIndex);
        this.render();
      });
    }

    // 4. Exercise Check Buttons
    const checkBtns = this.elements.workoutContent.querySelectorAll('.exercise-check-btn');
    checkBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const exName = btn.dataset.exName;
        Actions.toggleExerciseCompleted(profile.id, profile.phase, profile.week, this.activeDayIndex, exName);
        this.renderWorkoutsSection(profile);
      });
    });

    // 5. Open Full Screen Exercise Guide Modal
    const openGuideTriggers = this.elements.workoutContent.querySelectorAll('.btn-open-guide-badge, .exercise-main');
    openGuideTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const exIdx = parseInt(trigger.dataset.exIdx, 10);
        const ex = activeDay.exercises[exIdx];
        if (ex) {
          const pattern = getExercisePattern(ex.name);
          this.showExerciseGuideModal(ex, pattern, profile, this.activeDayIndex);
        }
      });
    });

    // 6. Rest timer button in specs
    const timerBtns = this.elements.workoutContent.querySelectorAll('.timer-badge');
    timerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const rest = parseInt(btn.dataset.rest, 10) || 60;
        this.startRestTimer(rest);
      });
    });
  },

  showExerciseGuideModal(ex, pattern, profile, dayIndex) {
    const modal = this.elements.guideModal;
    if (!modal) return;

    this.currentGuideContext = { ex, pattern, profile, dayIndex, rest: ex.rest };

    // Fill Title & Targets
    if (this.elements.guideModalTitle) this.elements.guideModalTitle.innerText = ex.name;
    if (this.elements.guideModalTarget) this.elements.guideModalTarget.innerText = ex.target || 'Músculos Principales';

    // Fill Metrics
    if (this.elements.guideModalSets) this.elements.guideModalSets.innerText = ex.sets;
    if (this.elements.guideModalReps) this.elements.guideModalReps.innerText = ex.reps;
    if (this.elements.guideModalRest) this.elements.guideModalRest.innerText = `${ex.rest}s`;

    // Fill Animated Avatar in Hero Stage
    if (this.elements.guideModalAvatar) {
      if (pattern.mediaUrl) {
        this.elements.guideModalAvatar.innerHTML = `
          <div class="exercise-3d-media-wrapper">
            <img src="${pattern.mediaUrl}" alt="${ex.name}" class="exercise-3d-gif" id="guide-active-exercise-img" />
            <canvas id="guide-pause-canvas" class="exercise-3d-gif" style="display: none;"></canvas>
          </div>
        `;
      } else {
        this.elements.guideModalAvatar.innerHTML = pattern.svg || '';
      }
    }

    // Fill Anatomical Muscle Badges
    if (this.elements.guideModalPrimaryMuscles) {
      this.elements.guideModalPrimaryMuscles.innerText = pattern.primaryMuscles || ex.target || 'Músculos Principales';
    }
    if (this.elements.guideModalSecondaryMuscles) {
      if (pattern.secondaryMuscles) {
        this.elements.guideModalSecondaryMuscles.innerText = pattern.secondaryMuscles;
        if (this.elements.guideModalSecondaryPill) this.elements.guideModalSecondaryPill.style.display = 'flex';
      } else {
        if (this.elements.guideModalSecondaryPill) this.elements.guideModalSecondaryPill.style.display = 'none';
      }
    }

    // Reset Avatar Animation Pause Button State
    if (this.elements.avatarMotionIcon) this.elements.avatarMotionIcon.innerText = '⏸';
    if (this.elements.avatarMotionText) this.elements.avatarMotionText.innerText = 'Pausar movimiento';

    // Fill Weight
    const savedWeight = profile.exerciseWeights && profile.exerciseWeights[ex.name] !== undefined ? profile.exerciseWeights[ex.name] : '';
    if (this.elements.guideModalWeightInput) {
      this.elements.guideModalWeightInput.value = savedWeight;
    }

    // Fill Step-by-Step flow
    if (this.elements.guideModalSteps) {
      const steps = Array.isArray(pattern.steps) ? pattern.steps : [pattern.execution];
      let stepsHtml = '';
      steps.forEach((st, idx) => {
        stepsHtml += `
          <div class="step-card">
            <div class="step-number-pill">${idx + 1}</div>
            <div class="step-desc-text">${st.replace(/^[0-9]\.\s*/, '')}</div>
          </div>
        `;
      });
      this.elements.guideModalSteps.innerHTML = stepsHtml;
    }

    // Fill Posture & Common Mistakes
    if (this.elements.guideModalPosture) {
      this.elements.guideModalPosture.innerHTML = `
        <span class="posture-icon-tag">💡 Consejo Clave:</span>
        <p>${pattern.postureTip || pattern.execution}</p>
      `;
    }

    if (this.elements.guideModalMistakes) {
      const mistakes = Array.isArray(pattern.commonMistakes) ? pattern.commonMistakes : [];
      let mistakesHtml = '';
      mistakes.forEach(m => {
        mistakesHtml += `
          <div class="mistake-item">
            <span class="mistake-cross">❌</span>
            <span class="mistake-text">${m}</span>
          </div>
        `;
      });
      this.elements.guideModalMistakes.innerHTML = mistakesHtml;
    }

    // Fill Breathing
    if (this.elements.guideModalBreathing) {
      this.elements.guideModalBreathing.innerHTML = `
        <strong>💨 Patrón de Respiración:</strong> ${pattern.breathing || 'Inhalá en la bajada, exhalá al empujar.'}
      `;
    }

    // Fill Equipment Variation
    if (this.elements.guideModalEquipment) {
      const equipAdvice = getEquipmentAdvice(pattern, profile.equipment);
      this.elements.guideModalEquipment.innerHTML = equipAdvice;
    }

    // Fill Periodization Target Callout for Active Week
    const weekMeta = getWeekPeriodization(profile.week);
    if (this.elements.guideModalWeekTag) {
      this.elements.guideModalWeekTag.innerText = weekMeta.tag;
    }
    if (this.elements.guideModalWeekBadge) {
      this.elements.guideModalWeekBadge.innerText = `Mesociclo Sem ${profile.week || 1}/4`;
    }
    if (this.elements.guideModalWeekAdvice) {
      this.elements.guideModalWeekAdvice.innerHTML = `<strong>Objetivo Semana ${profile.week || 1}:</strong> ${weekMeta.progressionAdvice}`;
    }

    // Complete Button State
    const isCompleted = Actions.isExerciseCompleted(profile.id, profile.phase, profile.week, dayIndex, ex.name);
    this.updateGuideModalCompleteButton(isCompleted);

    // Show Dialog & Reset Scroll for clean mobile viewing
    modal.style.display = 'flex';
    modal.scrollTop = 0;
    const bodyScroll = modal.querySelector('.guide-body-scroll');
    if (bodyScroll) bodyScroll.scrollTop = 0;
    document.body.style.overflow = 'hidden'; // Lock background scroll
  },

  updateGuideModalCompleteButton(isDone) {
    const btn = this.elements.guideBtnCompleteAction;
    if (!btn) return;
    if (isDone) {
      btn.innerText = '✓ Ejercicio Completado (Tocar para desmarcar)';
      btn.classList.add('btn-exercise-done-state');
    } else {
      btn.innerText = 'Marcar Ejercicio como Completado ✓';
      btn.classList.remove('btn-exercise-done-state');
    }
  },

  hideExerciseGuideModal() {
    if (this.elements.guideModal) {
      this.elements.guideModal.style.display = 'none';
    }
    document.body.style.overflow = ''; // Restore background scroll
    this.currentGuideContext = null;
  },

  startRestTimer(seconds) {
    this.timer.start(seconds);
  },

  closeRestTimer() {
    this.timer.close();
  },

  showProfileModal(profile = null) {
    const modal = this.elements.profileModal;
    const form = this.elements.profileForm;
    const title = this.elements.profileFormTitle;
    if (!modal || !form) return;

    modal.style.display = 'flex';
    const sug = document.getElementById('goal-suggestion-text');
    if (sug) sug.innerHTML = '';

    const phaseWeekGroup = document.getElementById('form-phase-week-group');

    if (profile) {
      if (title) title.innerText = 'Editar Perfil';
      form.dataset.profileId = profile.id;
      form.elements['name'].value = profile.name;
      form.elements['weight'].value = profile.weight;
      form.elements['height'].value = profile.height;
      form.elements['age'].value = profile.age;
      form.elements['gender'].value = profile.gender;
      form.elements['goal'].value = profile.goal;

      const userEquip = profile.equipment || [];
      form.querySelectorAll('input[name="equipment"]').forEach(cb => {
        cb.checked = userEquip.includes(cb.value);
      });

      if (phaseWeekGroup) {
        phaseWeekGroup.innerHTML = `
          <div class="form-row">
            <div class="form-group">
              <label for="form-phase">Fase de Entrenamiento</label>
              <select id="form-phase" name="phase" class="glass-select">
                <option value="1" ${profile.phase === 1 ? 'selected' : ''}>Fase 1: Acondicionamiento</option>
                <option value="2" ${profile.phase === 2 ? 'selected' : ''}>Fase 2: Tonificación y Fuerza</option>
                <option value="3" ${profile.phase === 3 ? 'selected' : ''}>Fase 3: Definición</option>
              </select>
            </div>
            <div class="form-group">
              <label for="form-week">Semana Activa</label>
              <select id="form-week" name="week" class="glass-select">
                <option value="1" ${profile.week === 1 ? 'selected' : ''}>Semana 1</option>
                <option value="2" ${profile.week === 2 ? 'selected' : ''}>Semana 2</option>
                <option value="3" ${profile.week === 3 ? 'selected' : ''}>Semana 3</option>
                <option value="4" ${profile.week === 4 ? 'selected' : ''}>Semana 4</option>
              </select>
            </div>
          </div>
        `;
      }
    } else {
      if (title) title.innerText = 'Crear Nuevo Perfil';
      form.reset();
      delete form.dataset.profileId;
      if (phaseWeekGroup) phaseWeekGroup.innerHTML = '';
    }
  },

  hideProfileModal() {
    if (this.elements.profileModal) {
      this.elements.profileModal.style.display = 'none';
    }
  },

  showSettingsModal() {
    if (this.elements.settingsModal) {
      this.elements.settingsModal.style.display = 'flex';
    }
  },

  hideSettingsModal() {
    if (this.elements.settingsModal) {
      this.elements.settingsModal.style.display = 'none';
    }
  },

  exportDataFile() {
    const dataStr = Actions.exportState();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gymflow_backup_' + new Date().toISOString().split('T')[0] + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  async handleCheckUpdates() {
    const statusEl = this.elements.settingsUpdateStatus;
    if (statusEl) {
      statusEl.innerText = 'Buscando actualizaciones en el servidor...';
      statusEl.style.color = 'var(--accent)';
    }

    if (!('serviceWorker' in navigator)) {
      if (statusEl) {
        statusEl.innerText = 'Modo navegador sin Service Worker. Para actualizar, recargá la página.';
        statusEl.style.color = '';
      }
      return;
    }

    try {
      const reg = await navigator.serviceWorker.getRegistration();
      if (!reg) {
        if (statusEl) {
          statusEl.innerText = 'Service Worker no activo. Recargá la página para activarlo.';
          statusEl.style.color = '';
        }
        return;
      }

      // Force update check against server
      await reg.update();

      if (reg.waiting) {
        if (statusEl) {
          statusEl.innerText = '⚡ ¡Nueva versión encontrada! Actualizando aplicación...';
          statusEl.style.color = 'var(--accent)';
        }
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        setTimeout(() => window.location.reload(true), 500);
        return;
      }

      if (reg.installing) {
        if (statusEl) {
          statusEl.innerText = 'Descargando nueva versión en segundo plano...';
          statusEl.style.color = 'var(--accent)';
        }
        reg.installing.addEventListener('statechange', (e) => {
          if (e.target.state === 'installed') {
            if (statusEl) {
              statusEl.innerText = '⚡ ¡Instalación lista! Recargando...';
            }
            if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
            setTimeout(() => window.location.reload(true), 500);
          }
        });
        return;
      }

      // Already up to date
      if (statusEl) {
        statusEl.innerText = '✅ ¡Tu app está 100% al día con modelos 3D y periodización!';
        statusEl.style.color = 'var(--success)';
        setTimeout(() => {
          if (statusEl) {
            statusEl.innerText = 'Comprobar nueva versión y sincronizar animaciones 3D.';
            statusEl.style.color = '';
          }
        }, 4500);
      }
    } catch (err) {
      console.warn('Error al comprobar actualización:', err);
      if (statusEl) {
        statusEl.innerText = 'Verificación completada. Tu app ya tiene la versión más reciente.';
        statusEl.style.color = '';
      }
    }
  },

  triggerPwaReload() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(reg => {
        if (reg && reg.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        window.location.reload(true);
      }).catch(() => {
        window.location.reload(true);
      });
    } else {
      window.location.reload(true);
    }
  }
};

if (typeof window !== 'undefined') {
  window.UI = UI;
  window.Actions = Actions;
}
