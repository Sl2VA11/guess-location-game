export function assignRandomCurrentSteps(data) {
  const steps = new Set();
  while (steps.size < data.length) {
    steps.add(Math.floor(Math.random() * data.length) + 1);
  }
  return data.map((item, index) => ({
    ...item,
    currentStep: [...steps][index],
  }));
}
