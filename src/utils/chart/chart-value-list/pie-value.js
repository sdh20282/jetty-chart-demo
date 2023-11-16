// 차트 기본 세팅 값
const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 400;
const DEFAULT_BACKGROUND_COLOR = "transparent";
const DEFAULT_PIE_BACKGROUND_COLOR = "transparent";
const DEFAULT_DONUT_BACKGROUND_COLOR = "transparent";
const DEFAULT_PADDING = 10;
const DEFAULT_PIE_OPACITY = 1;
const DEFAULT_CIRCLE_OPACITY = 1;
const DEFAULT_DONUT_OPACITY = 1;
const DEFAULT_PIECE_OPACITY = 1;

// 파이 차트 기본 설정값 상수
const DEFAULT_PIE_RADIUS = 1;
const DEFAULT_INNER_RADIUS = 0.4;
const DEFAULT_CORNER_RADIUS = 0.05;
const DEFAULT_START_ANGLE = 0;
const DEFAULT_USE_ANGLE = 360;
const DEFAULT_PAD_ANGLE = 0;
const DEFAULT_SORT_BY_VALUE = false;
const DEFAULT_COLOR = [
  "#ffeaa7",
  "#81ecec",
  "#fab1a0",
  "#74b9ff",
  "#ff7675",
  "#a29bfe",
  "#fd79a8",
  "#55efc4",
];
const DEFAULT_STROKE_WIDTH = 0;
const DEFAULT_STROKE_OPACITY = 1;
const DEFAULT_STROKE_COLOR = [
  "#e5d296",
  "#74d4d4",
  "#e19f90",
  "#68a6e5",
  "#e56a69",
  "#918be4",
  "#e36c97",
  "#4cd7b0",
];

const DEFAULT_LABEL_COLOR = "black";
const DEFAULT_LABEL_FONT_SIZE = 0.1;
const DEFAULT_LABEL_FONT_WEIGHT = "normal";
const DEFAULT_LABEL_FONT_FAMILY = "sans-serif";
const DEFAULT_LABEL_FONT_STYLE = "normal";
const DEFAULT_LABEL_MOVE_Y = 0;
const DEFAULT_LABEL_MOVE_X = 0;
const DEFAULT_LABEL_DISTANCE = 1;
const DEFAULT_LABEL_IS_ROTATE = false;
const DEFAULT_LABEL_DEGREES = 0;
const DEFAULT_LABEL_TEXT = "value";
const DEFAULT_LABEL_SKIP_RATIO = 0;
const DEFAULT_LABEL_IS_USE = true;
const DEFAULT_LABEL_OPACITY = 1;

const DEFAULT_ARC_LINK_LABEL_TEXT_COLOR = [
  "#ffeaa7",
  "#81ecec",
  "#fab1a0",
  "#74b9ff",
  "#ff7675",
  "#a29bfe",
  "#fd79a8",
  "#55efc4",
];
const DEFAULT_ARC_LINK_LABEL_LINE_COLOR = [
  "#ffeaa7",
  "#81ecec",
  "#fab1a0",
  "#74b9ff",
  "#ff7675",
  "#a29bfe",
  "#fd79a8",
  "#55efc4",
];
const DEFAULT_ARC_LINK_LABEL_IS_USE = true;
const DEFAULT_ARC_LINK_LABEL_SKIP_ANGLE = 0;
const DEFAULT_ARC_LINK_LABEL_LINE_OPACITY = 1;
const DEFAULT_ARC_LINK_LABEL_FONT_SIZE = 0.1;
const DEFAULT_ARC_LINK_LABEL_FONT_WEIGHT = "normal";
const DEFAULT_ARC_LINK_LABEL_FONT_FAMILY = "sans-serif";
const DEFAULT_ARC_LINK_LABEL_FONT_STYLE = "normal";
const DEFAULT_ARC_LINK_LABEL_TEXT = "label";
const DEFAULT_ARC_LINK_LABEL_TEXT_OPACITY = 1;
const DEFAULT_ARC_LINK_LABEL_TEXT_DISTANCE = 1.05;
const DEFAULT_ARC_LINK_LABEL_LINE_DISTANCE = 1;
const DEFAULT_ARC_LINK_LABEL_START_LINE = 0.2;
const DEFAULT_ARC_LINK_LABEL_END_LINE = 0.2;
const DEFAULT_ARC_LINK_LABEL_LINE_SIZE = 0.02;

const DEFAULT_ANIMATION_ON = true;
const DEFAULT_ANIMATION_DURATION = "0.3";
const DEFAULT_ANIMATION_DELAY = "0";
const DEFAULT_ANIMATION_TIMING = "linear";
const DEFAULT_ANIMATION_SCALE = "1.1";

const DEFAULT_LEGEND_USE = true; // 사용여부
const DEFAULT_LEGEND_POSITION = "center-center"; // 위치
const DEFAULT_LEGEND_X_LOCATION = 0; // 좌표
const DEFAULT_LEGEND_Y_LOCATION = 0; // 좌표
const DEFAULT_LEGEND_DIRECTION_COLUMN = true; // 좌우 / 상하
const DEFAULT_LEGEND_ITEM_WIDTH = 0.3; // 아이템 너비
const DEFAULT_LEGEND_ITEM_MARGIN = 0.03; // 아이템간의 간격
const DEFAULT_LEGEND_SYMBOL_SIZE = 0.1; // 심볼크기
const DEFAULT_LEGEND_SYMBOL_RADIUS = 3; // 심볼 둥글기
const DEFAULT_LEGEND_SYMBOL_MARGIN = 0.1; // 심볼 텍스트 간격
const DEFAULT_LEGEND_SYMBOL_OPACITY = 1; // 심볼 투명도
const DEFAULT_LEGEND_SIZE = 0.1; // 텍스트 크기
const DEFAULT_LEGEND_WEIGHT = 400; // 텍스트 굵기
const DEFAULT_LEGEND_OPACITY = 1; // 텍스트 투명도
const DEFAULT_LEGEND_COLOR = "#aaa"; // 텍스트 색
const DEFAULT_LEGEND_ON_START = true; // 좌우 정렬

export const setDefaultGeneralSettings = () => {
  return {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    pieBackgroundColor: DEFAULT_PIE_BACKGROUND_COLOR,
    donutBackgroundColor: DEFAULT_DONUT_BACKGROUND_COLOR,
    paddingTop: DEFAULT_PADDING,
    paddingBottom: DEFAULT_PADDING,
    paddingLeft: DEFAULT_PADDING,
    paddingRight: DEFAULT_PADDING,
    pieOpacity: DEFAULT_PIE_OPACITY,
    circleOpacity: DEFAULT_CIRCLE_OPACITY,
    donutOpacity: DEFAULT_DONUT_OPACITY,
    pieceOpacity: DEFAULT_PIECE_OPACITY,
  };
};

export const setDefaultPieSettings = () => {
  return {
    color: DEFAULT_COLOR,
    pieRadius: DEFAULT_PIE_RADIUS,
    innerRadius: DEFAULT_INNER_RADIUS,
    cornerRadius: DEFAULT_CORNER_RADIUS,
    startAngle: DEFAULT_START_ANGLE,
    padAngle: DEFAULT_PAD_ANGLE,
    strokeColor: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    strokeOpacity: DEFAULT_STROKE_OPACITY,
    useAngle: DEFAULT_USE_ANGLE,
    sortByValue: DEFAULT_SORT_BY_VALUE,
  };
};

export const setDefaultLabelSettings = () => {
  return {
    labelColor: DEFAULT_LABEL_COLOR,
    labelFontSize: DEFAULT_LABEL_FONT_SIZE,
    labelFontWeight: DEFAULT_LABEL_FONT_WEIGHT,
    labelFontFamily: DEFAULT_LABEL_FONT_FAMILY,
    labelFontStyle: DEFAULT_LABEL_FONT_STYLE,
    labelMoveY: DEFAULT_LABEL_MOVE_Y,
    labelMoveX: DEFAULT_LABEL_MOVE_X,
    labelDistance: DEFAULT_LABEL_DISTANCE,
    labelIsRotate: DEFAULT_LABEL_IS_ROTATE,
    labelText: DEFAULT_LABEL_TEXT,
    labelSkipRatio: DEFAULT_LABEL_SKIP_RATIO,
    labelIsUse: DEFAULT_LABEL_IS_USE,
    labelDegrees: DEFAULT_LABEL_DEGREES,
    labelOpacity: DEFAULT_LABEL_OPACITY,
  };
};

export const setDefaultArcLinkLabelSettings = () => {
  return {
    arcLinkLabelTextColor: DEFAULT_ARC_LINK_LABEL_TEXT_COLOR,
    arcLinkLabelLineColor: DEFAULT_ARC_LINK_LABEL_LINE_COLOR,
    arcLinkLabelFontSize: DEFAULT_ARC_LINK_LABEL_FONT_SIZE,
    arcLinkLabelFontWeight: DEFAULT_ARC_LINK_LABEL_FONT_WEIGHT,
    arcLinkLabelFontFamily: DEFAULT_ARC_LINK_LABEL_FONT_FAMILY,
    arcLinkLabelFontStyle: DEFAULT_ARC_LINK_LABEL_FONT_STYLE,
    arcLinkLabelSkipAngle: DEFAULT_ARC_LINK_LABEL_SKIP_ANGLE,
    arcLinkLabelLineDistance: DEFAULT_ARC_LINK_LABEL_LINE_DISTANCE,
    arcLinkLabelStartLine: DEFAULT_ARC_LINK_LABEL_START_LINE,
    arcLinkLabelEndLine: DEFAULT_ARC_LINK_LABEL_END_LINE,
    arcLinkLabelTextDistance: DEFAULT_ARC_LINK_LABEL_TEXT_DISTANCE,
    arcLinkLabelLineSize: DEFAULT_ARC_LINK_LABEL_LINE_SIZE,
    arcLinkLabelText: DEFAULT_ARC_LINK_LABEL_TEXT,
    arcLinkLabelIsUse: DEFAULT_ARC_LINK_LABEL_IS_USE,
    arcLinkLabelLineOpacity: DEFAULT_ARC_LINK_LABEL_LINE_OPACITY,
    arcLinkLabelTextOpacity: DEFAULT_ARC_LINK_LABEL_TEXT_OPACITY,
  };
};

export const setDefaultAnimationSettings = () => {
  return {
    animationOn: DEFAULT_ANIMATION_ON,
    animationDuration: DEFAULT_ANIMATION_DURATION,
    animationDelay: DEFAULT_ANIMATION_DELAY,
    animationTiming: DEFAULT_ANIMATION_TIMING,
    animationScale: DEFAULT_ANIMATION_SCALE,
  };
};

export const setDefaultLegendSettings = () => {
  return {
    // 이후 수정 필요
    marginTop: 2.5,
    marginBottom: 0,
    marginLeft: 2.8,
    marginRight: 0,
    // 이후 수정 필요
    useLegend: DEFAULT_LEGEND_USE,
    position: DEFAULT_LEGEND_POSITION, // bottom center top - left center right
    xLocation: DEFAULT_LEGEND_X_LOCATION,
    yLocation: DEFAULT_LEGEND_Y_LOCATION,
    directionColumn: DEFAULT_LEGEND_DIRECTION_COLUMN,
    itemWidth: DEFAULT_LEGEND_ITEM_WIDTH,
    itemMargin: DEFAULT_LEGEND_ITEM_MARGIN,
    symbolSize: DEFAULT_LEGEND_SYMBOL_SIZE,
    symbolRadius: DEFAULT_LEGEND_SYMBOL_RADIUS,
    symbolMargin: DEFAULT_LEGEND_SYMBOL_MARGIN,
    symbolOpacity: DEFAULT_LEGEND_SYMBOL_OPACITY,
    legendSize: DEFAULT_LEGEND_SIZE,
    legendWeight: DEFAULT_LEGEND_WEIGHT,
    legendOpacity: DEFAULT_LEGEND_OPACITY,
    legendColor: DEFAULT_LEGEND_COLOR,
    legendOnStart: DEFAULT_LEGEND_ON_START,
  };
};