const daySet = new Set();
const nightSet = new Set();
const undefinedSet = new Set();

for (let i = 0; i < 24; i++) {
  undefinedSet.add(i);
  if (i >= 7 && i < 21) daySet.add(i);
  if (i < 7 || i >= 21) nightSet.add(i);
}

module.exports = {daySet, nightSet, undefinedSet};