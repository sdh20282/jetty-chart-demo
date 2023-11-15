import { NormalBar, StackedBar } from "jetty-chart";

const chartComponent = {
  "normal-bar": NormalBar,
  // "stacked-bar": StackedBar,
}

export const getChartComponent = ({ chartName }) => {
  return chartComponent[chartName];
}

const chartComponentString = {
  "normal-bar": "NormalBar",
  // "stacked-bar": "StackedBar",
}

export const getChartComponentString = ({ chartName }) => {
  return chartComponentString[chartName];
}
