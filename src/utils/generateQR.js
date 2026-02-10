// src/utils/generateQR.js
import QRCode from 'qrcode';

/**
 * Generates a data URL for a QR code encoding the Chronicle's input state
 * @param {Object} inputs - { temporal, power, capacity, weight, n }
 * @returns {Promise<string>} Data URL (e.g., "data:image/png;base64,...")
 */
export async function generateChronicleQR(inputs) {
  // Create compact, deterministic query string
  const params = new URLSearchParams();
  params.set('t', inputs.temporal);
  params.set('p', inputs.power);
  params.set('c', inputs.capacity);
  params.set('w', inputs.weight);
  if (inputs.n !== undefined) params.set('n', inputs.n);

  const url = `https://trizist.github.io/one-ten-protocol/?${params.toString()}`;
  
  return await QRCode.toDataURL(url, {
    width: 300,
    margin: 2,
    color: {
      dark: '#00ffff',   // Cyan — truth tone
      light: '#0a0f1a'   // Deep space black
    },
    errorCorrectionLevel: 'M'
  });
}
