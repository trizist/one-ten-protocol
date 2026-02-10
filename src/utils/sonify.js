// src/utils/sonify.js
const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || window.webkitAudioContext)() : null;

/**
 * Sonifies a Chronicle's truth nodes as harmonic tones
 * @param {Object} chronicle - Chronicle data with fidelity_score & convergence_points
 * @param {number} duration - Duration in seconds (default: 4)
 */
export async function sonifyChronicle(chronicle, duration = 4) {
  if (!audioContext) return;
  
  try {
    // Resume context if suspended (required by browsers)
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }

    const now = audioContext.currentTime;
    const baseFreq = 220; // A3
    const harmonics = [
      baseFreq,               // Root
      baseFreq * 1.5,         // Perfect fifth
      baseFreq * 2,           // Octave
      baseFreq * 2.5,         // Major tenth
    ];

    // Map fidelity score to number of active voices (1–4)
    const activeVoices = Math.max(1, Math.min(4, Math.floor(chronicle.fidelity_score / 2.5)));

    // Play converging dimensions as chords
    for (let i = 0; i < activeVoices; i++) {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(harmonics[i], now);
      
      // Smooth envelope
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.2, now + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start(now);
      oscillator.stop(now + duration);
    }

    // Add subtle "whisper" noise for narrative texture
    if (chronicle.narrative?.length > 50) {
      const noise = audioContext.createBufferSource();
      const bufferSize = audioContext.sampleRate * duration;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.02; // Very quiet white noise
      }
      
      noise.buffer = buffer;
      const noiseGain = audioContext.createGain();
      noiseGain.gain.setValueAtTime(0.05, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      
      noise.connect(noiseGain);
      noiseGain.connect(audioContext.destination);
      noise.start(now);
      noise.stop(now + duration);
    }

  } catch (err) {
    console.warn("Audio playback failed:", err);
  }
}
