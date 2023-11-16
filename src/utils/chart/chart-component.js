import { NormalBar, StackedBar, Pie, SingleLine, MultiLine, StackedLine, BumpChart, NormalScatter } from "jetty-chart";

const chartComponent = {
  "normal-bar": NormalBar,
  "stacked-bar": StackedBar,
  "single-line": SingleLine,
  "multi-line": MultiLine,
  "stacked-line": StackedLine,
  "bump": BumpChart,
  "scatter": NormalScatter,
  "pie": Pie,
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
  "pie": "pie",
};

export const getChartComponentString = ({ chartName }) => {
  return chartComponentString[chartName];
}
