export const ScatterType = {
  base: [
    {
      name: "data",
      attribute: "object[],required",
      description: "차트의 데이터를 의미합니다. { id: string, data[(x:int, y:int), ...] } 형태로 입력해야 합니다.",
      type: "description",
    },
    {
      name: "xLegend",
      attribute: "string,optional",
      description: "x축에 대한 설명입니다.",
      type: "string",
    },
    {
      name: "yLegend",
      attribute: "string,optional",
      description: "y축에 대한 설명입니다.",
      type: "string",
    },
  ],
  // 기본 세팅
  normalSettings: [
    {
      name: "width",
      attribute: "number,optional",
      description: "전체 차트 영역의 넓이를 의미합니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "height",
      attribute: "number,optional",
      description: "전체 차트 영역의 높이를 의미합니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "backgroundColor",
      attribute: "hex-code,optional",
      description: "전체 차트 영역의 배경 색상을 의미합니다.",
      type: "color",
    },
    {
      name: "margin",
      attribute: "object,optional",
      description: "차트와 전체 차트 영역 사이의 간격을 의미합니다. 차트의 넓이 및 크기는 해당 간격에 맞춰 자동으로 조절 됩니다.",
      type: "object",
      objectProperties: ["top", "right", "bottom", "left"],
      objectPropertiesType: ["number", "number", "number", "number"],
      objectPropertiesUnit: ["px", "px", "px", "px"],
    },
    {
      name: "padding",
      attribute: "number,optional",
      description: "차트 내부의 좌우 간격을 의미합니다.",
      type: "number",
      unit: "px",
    },
  	{
		  name : "xReverse",
			attribute : "boolean,optional",
			description : "x축 값을 거꾸로 배열합니다",
		  type : "boolean"
		},
		{
		  name : "yReverse",
			attribute : "boolean,optional",
			description : "y축 값을 거꾸로 배열합니다",
		  type : "boolean"
		},
    {
      name: "colorPalette",
      attribute: "string[],optional",
      description: "차트를 그릴 때 사용 할 색상을 의미합니다.",
      type: "colorPalette",
    },
  ],
  scopeSettings: [
		{
		  name : "xAutoScope",
			attribute : "boolean,optional",
			description : "데이터값에 따라 x축을 자동으로 계산하여 scope를 설정합니다.",
		  type : "boolean"
		},
		{
		  name : "yAutoScope",
			attribute : "boolean,optional",
			description : "데이터값에 따라 y축을 자동으로 계산하여 scope를 설정합니다.",
		  type : "boolean"
		},
		{
		  name : "xMaxScope",
			attribute : "number,optional",
			description : "해당 값을 x축 최대값으로 하여 scope를 설정합니다.",
		  type : "number",
			dependency: "scopeSettings-xAutoScope",
      show: false,
		},
    {
      name : "xMinScope",
      attribute : "number,optional",
      description : "해당 값을 x축 최소값으로 하여 scope를 설정합니다.",
      type : "number",
      dependency: "scopeSettings-xAutoScope",
      show: false,
    },
		{
		  name : "yMaxScope",
			attribute : "number,optional",
			description : "해당 값을 y축 최대값으로 하여 scope를 설정합니다.",
		  type : "number",
			dependency: "scopeSettings-yAutoScope",
      show: false,
		},
		{
		  name : "yMinScope",
			attribute : "number,optional",
			description : "해당 값을 y축 최소값으로 하여 scope를 설정합니다.",
		  type : "number",
			dependency: "scopeSettings-yAutoScope",
      show: false,
		},
    {
      name: "showTopScope",
      attribute: "boolean,optional",
      description: "0을 제외한 최상단, 최하단 라인을 보여줄 지 여부입니다.",
      type: "boolean",
    },
  ],
  axisYGridLineSettings: [
    {
      name: "lineVisible",
      attribute: "boolean,optional",
      description: "후방 배경에서 y축의 라인을 보여줄 지 여부입니다.",
      type: "boolean",
    },
    {
      name: "lineOpacity",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 투명도를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineColor",
      attribute: "hex-code,optional",
      description: "후방 배경에서 y축 라인의 색상을 의미합니다.",
      type: "color",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineWidth",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 굵기를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDash",
      attribute: "boolean,optional",
      description: "후방 배경에서 y축의 라인을 점선으로 생성할 지 여부입니다.",
      type: "boolean",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDashWidth",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 점선에서 점의 길이를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisYGridLineSettings-lineVisible", "axisYGridLineSettings-lineDash"],
      show: [true, true],
    },
    {
      name: "lineDashGap",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 점선에서 점 사이의 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisYGridLineSettings-lineVisible", "axisYGridLineSettings-lineDash"],
      show: [true, true],
    },
  ],
  axisXGridLineSettings: [
    {
      name: "lineVisible",
      attribute: "boolean,optional",
      description: "후방 배경에서 x축의 라인을 보여줄 지 여부입니다.",
      type: "boolean",
    },
    {
      name: "lineOpacity",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 투명도를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineColor",
      attribute: "hex-code,optional",
      description: "후방 배경에서 x축 라인의 색상을 의미합니다.",
      type: "color",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineWidth",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 굵기를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDash",
      attribute: "boolean,optional",
      description: "후방 배경에서 x축의 라인을 점선으로 생성할 지 여부입니다.",
      type: "boolean",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDashWidth",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 점선에서 점의 길이를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisXGridLineSettings-lineVisible", "axisXGridLineSettings-lineDash"],
      show: [true, true],
    },
    {
      name: "lineDashGap",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 점선에서 점 사이의 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisXGridLineSettings-lineVisible", "axisXGridLineSettings-lineDash"],
      show: [true, true],
    },
  ],
  pointSettings : [
		{
		  name : "pointSize",
			attribute : "number,optional",
			description : "point 크기를 지정합니다.",
		  type : "number",
			unit : "px"
		},
		{
      name : "pointRenderTime",
			attribute : "number,optional",
			description : "그룹별 데이터의 렌더링 간격을 설정합니다.",
		  type : "number",
			unit : "s"
		},
    {
      name : "tooltipOn",
      attribute : "boolean,optional",
      description : "마우스 호버시 점의 좌표를 출력합니다.",
      type : "boolean"
    },
		{
		  name : "xName",
			attribute : "boolean,optional",
			description : "출력하는 x좌표의 이름을 설정합니다.",
		  type : "string",
      dependency : 'pointSettings-tooltipOn',
      show : true
		},
		{
		  name : "yName",
			attribute : "boolean,optional",
			description : "출력하는 y좌표의 이름을 설정합니다.",
		  type : "string",
      dependency : 'pointSettings-tooltipOn',
      show : true
		}
	]
};
