const counts = [5, 6, 7];

export const getRandomData = ({ chartName }) => {
  if (chartName === "normal-bar" || chartName === "single-line" || chartName === "pie") {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "x" + (index + 1),
      });
    }

    return arr;
  } else if (chartName === "stacked-bar") {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {

      const numbers = []

      for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 90) + 10);
      }
      
      arr.push({
        value: numbers,
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
  } else if (chartName === "scatter") {
    const groups = [];

    for (let index = 0; index < 10; index++) {
      const group = {};
      group.id = `group ${index}`;
      const arr = [];
      for (let index = 0; index < 30; index++) {
        arr.push({
          x: Math.floor(Math.random() * 130) + 10,
          y: Math.floor(Math.random() * 130) + 10,
        });
      }
      group.data = arr;
      groups.push(group);
    }
    return groups;
  } else if (chartName === "pyramid") {
    const groups = [];

    for (let index = 0; index < 70; index += 10) {
      const group = {};

      group.id = `${index}~${index + 9}`;

      const arr = [];

      arr.push({
        value: Math.floor(Math.random() * 900) + 10,
        label: "x",
      });
      arr.push({
        value: Math.floor(Math.random() * 900) + 10,
        label: "y",
      });

      group.arr = arr;
      groups.push(group);
    }
    return groups;
  }
};
