export const checkDependency = ({ data, chartData }) => {
  let display = false;

  if (!data.dependency || data.dependency.length === 0) {
    return true;
  }

  if (Array.isArray(data.dependency)) {
    display = true;

    data.dependency.map((dep, idx) => {
      const dependency = dep.split("-");
      const state = dependency.length === 2 ? chartData[dependency[0]][dependency[1]] : chartData[dependency[0]][dependency[1]][dependency[2]];

      if (state !== data.show[idx]) {
        display = false;

        return;
      }
    });
  } else {
    const dependency = data.dependency.split("-");

    try {
      const state = dependency.length === 2 ? chartData[dependency[0]][dependency[1]] : chartData[dependency[0]][dependency[1]][dependency[2]];

      if (state === data.show) {
        display = true;
      }
    } catch {
      console.log(dependency[0], dependency[1]);
    }
  }

  return display;
};
