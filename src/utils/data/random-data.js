const counts = [5, 6, 7];

export const getRandomData = ({ chartName }) => {
  if (chartName === "normal-bar" || chartName === "single-line") {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "data-" + (index + 1),
      });
    }

    return arr;
  } else if (chartName === "multi-line") {
    const arr = [];
    const count = counts[Math.floor(Math.random() * counts.length)];
    for (let i = 0; i < [2, 3, 4][Math.floor(Math.random() * 3)]; i++) {
      const data = {};
      data.id = `dataSet-${i + 1}`;
      data.data = [];
      for (let index = 0; index < count; index++) {
        data.data.push({
          value: Math.floor(Math.random() * 1000),
          label: "data-" + (index + 1),
        });
      }

      arr.push(data);
    }
    return arr;
  }
};
