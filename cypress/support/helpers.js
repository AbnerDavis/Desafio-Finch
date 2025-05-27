// helpers.js
export function chooseRandomGender() {
  const options = ["1", "2"];
  return options[Math.floor(Math.random() * options.length)];
}
