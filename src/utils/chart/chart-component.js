import { NormalBar, StackedBar, Pie, SingleLine, MultiLine } from "jetty-chart";

const chartComponent = {
  "normal-bar": NormalBar,
  "stacked-bar": StackedBar,
  "single-line": SingleLine,
  "multi-line": MultiLine,
}

export const getChartComponent = ({ chartName }) => {
  return chartComponent[chartName];
}