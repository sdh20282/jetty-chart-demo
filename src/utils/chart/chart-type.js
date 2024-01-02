import { bumpChartType } from "./chart-type-list/bump-type";
import { multiLineType } from "./chart-type-list/multi-line-type";
import { normalBarType } from "./chart-type-list/normal-bar-type"
import { singleLineType } from "./chart-type-list/single-line-type";
import { StackedBarType } from "./chart-type-list/stacked-bar-type"
import { stackedLineType } from "./chart-type-list/stacked-line-type";
import { ScatterType } from "./chart-type-list/scatter-type";
import { pieType } from "./chart-type-list/pie-type";
import { pyramidType } from "./chart-type-list/pyramid-type"
import { mapChartType } from "./chart-type-list/map-type";

const chartType = {
  "normal-bar": normalBarType,
  "stacked-bar": StackedBarType,
  "single-line": singleLineType,
  "multi-line": multiLineType,
  "stacked-line": stackedLineType,
  "bump": bumpChartType,
  "scatter": ScatterType,
  "pyramid": pyramidType,
  "pie": pieType,
  "map": mapChartType,
};

export const getChartType = ({ chartName }) => {
  return chartType[chartName];
}
