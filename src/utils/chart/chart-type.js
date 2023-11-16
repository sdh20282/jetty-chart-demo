import { bumpChartType } from "./chart-type-list/bump-type";
import { multiLineType } from "./chart-type-list/multi-line-type";
import { normalBarType } from "./chart-type-list/normal-bar-type"
import { singleLineType } from "./chart-type-list/single-line-type";
import { StackedBarType } from "./chart-type-list/stacked-bar-type"
import { stackedLineType } from "./chart-type-list/stacked-line-type";
import { ScatterType } from "./chart-type-list/scatter-type";
import { pieType } from "./chart-type-list/pie-type";

const chartType = {
  "normal-bar": normalBarType,
  "stacked-bar": StackedBarType,
  "single-line": singleLineType,
  "multi-line": multiLineType,
  "stacked-line": stackedLineType,
  "bump": bumpChartType,
  "scatter": ScatterType,
  "pie": pieType,
};

export const getChartType = ({ chartName }) => {
  return chartType[chartName];
}
