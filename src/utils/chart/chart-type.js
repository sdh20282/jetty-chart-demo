import { multiLineType } from "./chart-type-list/multi-line-type";
import { normalBarType } from "./chart-type-list/normal-bar-type"
import { singleLineType } from "./chart-type-list/single-line-type";
import { StackedBarType } from "./chart-type-list/stacked-bar-type"

const chartType = {
  "normal-bar": normalBarType,
  "stacked-bar": StackedBarType,
  "single-line": singleLineType,
  "multi-line" : multiLineType,

}

export const getChartType = ({ chartName }) => {
  return chartType[chartName];
}