const counts = [5, 6, 7];

export const getRandomData = ({ chartName }) => {
  if (chartName === "normal-bar" || chartName === "single-line") {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "x" + (index + 1),
      });
    }

    return arr;
  } else if (chartName === "multi-line" || chartName === "stacked-line") {
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
  } else if (chartName === "bump") {
    const rankData = [];
    const ranks = [];
    const rankCount = 4;
    const rankers = 8;
    for (let i = 0; i < rankers; i++) {
      const numbers = Array(rankCount)
        .fill()
        .map((item, index) => index + 1);

      const rank = [];

      while (numbers.length > 0) {
        const num = Math.floor(Math.random() * numbers.length);
        const newArr = numbers.splice(num, 1);
        rank.push(newArr[0]);
      }
      ranks.push(rank);
    }
    for (let i = 0; i < rankCount; i++) {
      const d = {};
      d.id = `Serie ${i + 1}`;
      d.data = [];
      for (let index = 0; index < rankers; index++) {
        d.data.push({
          value: ranks[index][i],
          label: 2000 + index,
        });
      }
      rankData.push(d);
    }
    return rankData;
  }
};
