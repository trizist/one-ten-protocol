// On mount
useEffect(() => {
  const savedState = decodeStateFromUrl();
  if (savedState) {
    // Auto-generate if valid
    if (savedState.temporal && savedState.power) {
      handleGenerate(savedState);
    }
  }
}, []);

// When generating
const handleGenerate = async (inputs) => {
  encodeStateToUrl(inputs); // Update URL
  // ... rest of generation logic
};
