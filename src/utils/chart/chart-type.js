import { normalBarType } from "./chart-type-list/normal-bar-type"
// import { StackedBarType } from "./chart-type-list/stacked-bar-type"

const chartType = {
  "normal-bar": normalBarType,
  // "stacked-bar": StackedBarType
}

export const getChartType = ({ chartName }) => {
  return chartType[chartName];
}
