import { normalBarValue } from "./chart-value-list/normal-bar-value";
import { StackedBarValue } from "./chart-value-list/stacked-bar-value";

const chartValue = {
  "normal-bar": normalBarValue,
  "stacked-bar": StackedBarValue
}

export const getChartValue = ({ chartName }) => {
  const result = {};
  const chart = chartValue[chartName];

  Object.keys(chart).forEach((setting) => {
    result[setting] ??= {};

    if (setting === "animationSettings") {
      Object.keys(chart[setting]).forEach((animation) => {
        result[setting][animation] ??= {};

        Object.keys(chart[setting][animation]).forEach((detail) => {
          result[setting][animation][detail] ??= chart[setting][animation][detail];
        });
      });
    } else {
      Object.keys(chart[setting]).forEach((detail) => {
        result[setting][detail] ??= chart[setting][detail];
      });
    }
  });

  return result;
}