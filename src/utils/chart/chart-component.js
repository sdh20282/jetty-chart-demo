import { NormalBar, StackedBar, Pie } from "jetty-chart";

const chartComponent = {
  "normal-bar": NormalBar,
  "stacked-bar": StackedBar,
}

export const getChartComponent = ({ chartName }) => {
  return chartComponent[chartName];
}