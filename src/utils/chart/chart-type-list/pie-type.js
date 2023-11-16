export const pieType = {
  base: [
    {
      name: "data",
      attribute: "object[],required",
      description:
        "차트의 데이터를 의미합니다. { value:number, label:string } 형태로 입력해야 합니다.",
      type: "description",
    },
  ],
  generalSettings: [
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
      name: "pieBackgroundColor",
      attribute: "hex-code,optional",
      description: "파이 차트 영역의 배경 색상을 의미합니다.",
      type: "color",
    },
    {
      name: "donutBackgroundColor",
      attribute: "hex-code,optional",
      description: "도넛 차트 영역의 배경 색상을 의미합니다.",
      type: "color",
    },
    {
      name: "paddingTop",
      attribute: "number,optional",
      description:
        "전체 차트 영역과 차트 윗 부분의 간격을 의미합니다. 차트의 넓이 및 크기는 해당 간격에 맞춰 자동으로 조절 됩니다.",
      type: "number",
      unit: "",
    },
    {
      name: "paddingBottom",
      attribute: "number,optional",
      description:
        "전체 차트 영역과 차트 아랫 부분의 간격을 의미합니다. 차트의 넓이 및 크기는 해당 간격에 맞춰 자동으로 조절 됩니다.",
      type: "number",
      unit: "",
    },
    {
      name: "paddingLeft",
      attribute: "number,optional",
      description:
        "전체 차트 영역과 차트 왼쪽 부분의 간격을 의미합니다. 차트의 넓이 및 크기는 해당 간격에 맞춰 자동으로 조절 됩니다.",
      type: "number",
      unit: "",
    },
    {
      name: "paddingRight",
      attribute: "number,optional",
      description:
        "전체 차트 영역과 차트 오른쪽 부분의 간격을 의미합니다. 차트의 넓이 및 크기는 해당 간격에 맞춰 자동으로 조절 됩니다.",
      type: "number",
      unit: "",
    },
    {
      name: "pieOpacity",
      attribute: "number,optional",
      description: "차트 전체의 투명도를 의미합니다.",
      type: "number",
      unit: "",
    },
    {
      name: "circleOpacity",
      attribute: "number,optional",
      description: "파이 차트의 투명도를 의미합니다.",
      type: "number",
      unit: "",
    },
    {
      name: "donutOpacity",
      attribute: "number,optional",
      description: "도넛 차트의 투명도를 의미합니다.",
      type: "number",
      unit: "",
    },
    {
      name: "pieceOpacity",
      attribute: "number,optional",
      description: "차트 조각의 투명도를 의미합니다.",
      type: "number",
      unit: "",
    },
  ],
  pieSettings: [
    {
      name: "color",
      attribute: "string[],optional",
      description: "파이 차트 조각의 색상을 의미합니다.",
      type: "colorPalette",
    },
    {
      name: "pieRadius",
      attribute: "number,optional",
      description: "파이 차트의 반지름을 의미합니다.",
      type: "number",
      unit: "",
    },
    {
      name: "innerRadius",
      attribute: "number,optional",
      description: "파이 차트 내부의 반지름을 의미합니다.",
      type: "number",
      unit: "",
    },
    {
      name: "cornerRadius",
      attribute: "number,optional",
      description: "파이 차트 조각의 꼭지점 반지름을 의미합니다.",
      type: "number",
      unit: "",
    },
    {
      name: "padAngle",
      attribute: "number,optional",
      description: "파이 차트 조각 사이의 공백를 의미합니다.",
      type: "number",
      unit: "degree",
    },
    {
      name: "startAngle",
      attribute: "number,optional",
      description: "파이 차트의 시작 위치를 의미합니다.",
      type: "number",
      unit: "degree",
    },
    {
      name: "useAngle",
      attribute: "number,optional",
      description: "파이 차트를 그릴 때 사용할 각도의 범위를 의미합니다.",
      type: "number",
      unit: "degree",
    },
    {
      name: "sortByValue",
      attribute: "boolean,optional",
      description: "값들을 기준으로 정렬할 지 여부를 의미합니다.",
      type: "boolean",
    },
    {
      name: "strokeColor",
      attribute: "string[],optional",
      description: "파이 차트 조각의 테두리 색상을 의미합니다.",
      type: "colorPalette",
    },
    {
      name: "strokeWidth",
      attribute: "number,optional",
      description: "파이 차트 조각의 테두리 굵기를 의미합니다.",
      type: "number",
      unit: "",
    },
    {
      name: "strokeOpacity",
      attribute: "number,optional",
      description: "파이 차트 조각의 테두리 투명도를 의미합니다.",
      type: "number",
      unit: "",
    },
  ],
  labelSettings: [
    {
      name: "labelIsUse",
      attribute: "boolean,optional",
      description: "레이블을 사용할 지 여부를 의미합니다.",
      type: "boolean",
    },
    {
      name: "labelColor",
      attribute: "hex-code,optional",
      description: "레이블의 폰트 색상을 의미합니다.",
      type: "color",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelFontSize",
      attribute: "number,optional",
      description: "레이블의 폰트 크기을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelFontWeight",
      attribute: "number,optional",
      description: "레이블의 폰트 두께를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelFontFamily",
      attribute: "string,optional",
      description: "레이블의 폰트를 의미합니다.",
      type: "string",
      dependency: "labelSettings-labelIsUse",bc75c7295e3d8e53ca523f970caa1effd2b01b2
      show: true,
    },
    {
      name: "labelFontStyle",
      attribute: "string,optional",
      description: "레이블의 폰트 스타일을 의미합니다.",
      type: "string",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelMoveX",
      attribute: "number,optional",
      description: "레이블의 x좌표 이동을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelMoveY",
      attribute: "number,optional",
      description: "레이블의 y좌표 이동을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelDistance",
      attribute: "number,optional",
      description: "레이블과 중심 간의 거리를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelIsRotate",
      attribute: "boolean,optional",
      description: "레이블이 중심을 향해서 회전할 지 여부를 의미합니다.",
      type: "boolean",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelDegrees",
      attribute: "number,optional",
      description: "레이블이 회전할 각도를 의미합니다.",
      type: "number",
      unit: "degree",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelText",
      attribute: "string,optional",
      description: "레이블에 표시 할 내용을 의미합니다.",
      type: "string",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelSkipRatio",
      attribute: "number,optional",
      description: "레이블에 표시 하지 않을 범위를 의미합니다.",
      type: "number",
      unit: "degree",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
    {
      name: "labelOpacity",
      attribute: "number,optional",
      description: "레이블의 투명도를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "labelSettings-labelIsUse",
      show: true,
    },
  ],
  arcLinkLabelSettings: [
    {
      name: "arcLinkLabelIsUse",
      attribute: "boolean,optional",
      description: "아크 링크 레이블을 사용할 지 여부를 의미합니다.",
      type: "boolean",
    },
    {
      name: "arcLinkLabelTextColor",
      attribute: "string[],optional",
      description: "아크 링크 레이블의 폰트 색상을 의미합니다.",
      type: "colorPalette",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelFontSize",
      attribute: "number,optional",
      description: "아크 링크 레이블의 폰트 크기를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelFontWeight",
      attribute: "number,optional",
      description: "아크 링크 레이블의 폰트 두께를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelFontFamily",
      attribute: "string,optional",
      description: "아크 링크 레이블의 폰트를 의미합니다.",
      type: "string",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelFontStyle",
      attribute: "number,optional",
      description: "아크 링크 레이블의 폰트 스타일을 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelLineColor",
      attribute: "string[],optional",
      description: "아크 링크 레이블의 라인 색상을 의미합니다.",
      type: "colorPalette",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelLineSize",
      attribute: "number,optional",
      description: "아크 링크 레이블의 라인 굵기를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelSkipAngle",
      attribute: "number,optional",
      description: "아크 링크 레이블을 표시하지 않을 범위를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelLineDistance",
      attribute: "number,optional",
      description: "아크 링크 레이블의 라인 길이와 차트 간의 거리를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelTextDistance",
      attribute: "number,optional",
      description: "아크 링크 레이블의 텍스트와 라인 간의 거리를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelStartLine",
      attribute: "number,optional",
      description: "아크 링크 레이블의 첫번째 라인 길이를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelEndLine",
      attribute: "number,optional",
      description: "아크 링크 레이블의 두번째 라인 길이를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelText",
      attribute: "string,optional",
      description: "아크 링크 레이블에서 표시할 텍스트를 의미합니다.",
      type: "string",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelLineOpacity",
      attribute: "number,optional",
      description: "아크 링크 레이블의 라인 투명도를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
    {
      name: "arcLinkLabelTextOpacity",
      attribute: "number,optional",
      description: "아크 링크 레이블의 텍스트 투명도를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "arcLinkLabelSettings-arcLinkLabelIsUse",
      show: true,
    },
  ],
  legendSettings: [
    {
      name: "useLegend",
      attribute: "boolean,optional",
      description: "범례를 사용할 지 여부를 의미합니다.",
      type: "boolean",
    },
    {
      name: "marginTop",
      attribute: "number,optional",
      description: "범례와 차트의 상단 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "marginBottom",
      attribute: "number,optional",
      description: "범례와 차트의 하단 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "marginLeft",
      attribute: "number,optional",
      description: "범례와 차트의 좌측 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "marginRight",
      attribute: "number,optional",
      description: "범례와 차트의 우측 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "legendColor",
      attribute: "string,optional",
      description: "범례의 폰트 색상을 의미합니다.",
      type: "color",
      dependency: "legendSettings-useLegend",
      show: true,
    },
  ],
};