/**
 * GymFlow Rest Timer
 * Floating / bottom docked audio-visual timer for workout rest periods.
 */
export class RestTimer {
  constructor({ onTick, onFinish, onStateChange }) {
    this.onTick = onTick || (() => {});
    this.onFinish = onFinish || (() => {});
    this.onStateChange = onStateChange || (() => {});

    this.timerInterval = null;
    this.totalSeconds = 0;
    this.secondsRemaining = 0;
    this.isPaused = false;
  }

  start(seconds) {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    this.totalSeconds = parseInt(seconds, 10) || 60;
    this.secondsRemaining = this.totalSeconds;
    this.isPaused = false;

    this.onStateChange({ active: true, isPaused: false });
    this.notifyTick();

    this.timerInterval = setInterval(() => {
      if (!this.isPaused) {
        this.secondsRemaining--;
        this.notifyTick();

        if (this.secondsRemaining <= 0) {
          this.finish();
        }
      }
    }, 1000);
  }

  notifyTick() {
    const mins = Math.floor(this.secondsRemaining / 60);
    const secs = this.secondsRemaining % 60;
    const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const percentage = this.totalSeconds > 0 ? (this.secondsRemaining / this.totalSeconds) * 100 : 0;
    this.onTick({ formatted, percentage, remaining: this.secondsRemaining, total: this.totalSeconds });
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    this.onStateChange({ active: true, isPaused: this.isPaused });
    return this.isPaused;
  }

  skip() {
    this.finish();
  }

  close() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.onStateChange({ active: false, isPaused: false });
  }

  finish() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.playAudioBeep();
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([100, 50, 100]);
      } catch (e) {}
    }
    this.onFinish();
    setTimeout(() => {
      this.close();
    }, 1600);
  }

  playAudioBeep() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const playTone = (startTime, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, startTime);
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      const now = ctx.currentTime;
      playTone(now, 0.15);
      playTone(now + 0.22, 0.15);
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  }
}
