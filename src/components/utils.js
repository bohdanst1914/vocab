export function mixWords(array) {
  const newArray = JSON.parse(JSON.stringify(array));
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const concatAndMix = words => {
  const mixedArrays = words.map(item => {
    const write = Math.random() >= 0.5;
    return { ...item, write };
  });

  return [...mixedArrays, ...mixedArrays.map(item => ({ ...item, write: !item.write }))];
};
