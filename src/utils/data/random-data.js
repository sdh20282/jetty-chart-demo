const counts = [5, 6, 7];

export const getRandomData = ({ chartName }) => {
  if (chartName === "normal-bar") {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "data-" + (index + 1),
      });
    }

    return arr;
  }
}