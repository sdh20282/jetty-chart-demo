import { NormalBar, StackedBar, Pie, SingleLine, MultiLine, StackedLine, BumpChart, NormalScatter, NormalPyramid, NormalMap } from "jetty-chart";

const chartComponent = {
  "normal-bar": NormalBar,
  "stacked-bar": StackedBar,
  "single-line": SingleLine,
  "multi-line": MultiLine,
  "stacked-line": StackedLine,
  "bump": BumpChart,
  "scatter": NormalScatter,
  "pie": Pie,
  "pyramid": NormalPyramid,
  "map": NormalMap
}

export const getChartComponent = ({ chartName }) => {
  return chartComponent[chartName];
}

const chartComponentString = {
  "normal-bar": "NormalBar",
  "stacked-bar": "StackedBar",
  "single-line": "SingleLine",
  "multi-line": "MultiLine",
  "stacked-line": "StackedLine",
  "bump": "BumpChart",
  "scatter": "NormalScatter",
  "pie": "Pie",
  "pyramid": "NormalPyramid",
  "map": "NormalMap"
};

export const getChartComponentString = ({ chartName }) => {
  return chartComponentString[chartName];
}
