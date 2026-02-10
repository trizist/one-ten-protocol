// src/utils/urlState.js

/**
 * Encodes input state into URL search params
 */
export function encodeStateToUrl(inputs) {
  const params = new URLSearchParams();
  params.set('t', inputs.temporal);     // temporal
  params.set('p', inputs.power);        // power
  params.set('c', inputs.capacity);     // capacity
  params.set('w', inputs.weight);       // weight
  if (inputs.n) params.set('n', inputs.n); // optional N
  window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
}

/**
 * Decodes URL search params into input state
 */
export function decodeStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const state = {};
  if (params.has('t')) state.temporal = parseInt(params.get('t'), 10);
  if (params.has('p')) state.power = parseInt(params.get('p'), 10);
  if (params.has('c')) state.capacity = parseInt(params.get('c'), 10);
  if (params.has('w')) state.weight = parseFloat(params.get('w'));
  if (params.has('n')) state.n = parseInt(params.get('n'), 10);
  return Object.keys(state).length > 0 ? state : null;
}
