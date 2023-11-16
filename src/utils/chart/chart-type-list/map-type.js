export const mapChartType = {
  base: [
    {
      name: "data",
      attribute: "object[],required",
      description: "차트의 데이터를 의미합니다. { label:string, value:number } 형태로 입력해야 합니다.",
      type: "description",
    },
  ],
  // 기본세팅
  normalSettings: [
    {
      name: "backgroundColor",
      attribute: "hex-code,optional",
      description: "전체 차트 영역의 배경 색상을 의미합니다.",
      type: "color",
    },
    {
      name: "divide",
      attribute: "number,optional",
      description: "입력받은 data 에서 max 값을 기준으로 몇 등분 해서 자료를 분류할지 정합니다.",
      type: "number",
      dependency: "gagueBarSetting-useGagueBar",
    },
    {
      name: "colorPalette",
      attribute: "string[],optional",
      description: "Color Pallette 에서 어떤 색조합을 사용할지 선택합니다.",
      type: "colorPalette",
    },
    {
      name: "width",
      attribute: "number,optional",
      description: "해당 차트의 너비를 설정합니다.",
      type: "number",
      unit:"px"
    },
    {
      name: "zoomMagnification",
      attribute: "number,optional",
      description: "zoomOn 일경우 차트가 몇배수로 줌인 될 지 정합니다.",
      dependency:"normalSetting-zoomOn",
      type: "number",
    },
    {
      name: "usePercentageColor",
      attribute: "boolean,optional",
      description: "자료의 value 값에 따라 변하는 색상차트 기능을 사용할지 정합니다.",
      type: "boolean",
    },
    {
      name: "zoomOn",
      attribute: "boolean,optional",
      description: "클릭했을경우 ZoomIn 기능을 사용할지 정합니다.",
      type: "boolean",
    },
    {
      name: "animationOn",
      attribute: "boolean,optional",
      description: "Mouse Hover 기능을 사용할지 정합니다.",
      type: "boolean",
    },
    {
      name: "marginTop",
      attribute: "number,optional",
      description: "차트 전체의 MarginTop 을 조정합니다. ",
      type: "boolean",
      unit:"px"
    },
    {
      name: "marginBottom",
      attribute: "number,optional",
      description: "차트 전체의 MarginBottom 을 조정합니다. ",
      type: "boolean",
      unit:"px"
    },
    {
      name: "marginLeft",
      attribute: "number,optional",
      description: "차트 전체의 MarginLeft 를 조정합니다. ",
      type: "boolean",
      unit:"px"
    },
    {
      name: "marginRight",
      attribute: "number,optional",
      description: "차트 전체의 MarginRight 를 조정합니다. ",
      type: "boolean",
      unit:"px"
    },
    {
      name: "useChart",
      attribute: "boolean,optional",
      description: "차트를 클릭했을 경우 ZoomOut 이 이루어지며 차트를 보는 기능을 사용할지 정합니다. ",
      type: "boolean",
    },
  ],

  gagueBarSetting: [
    {
      name: "useGagueBar",
      attribute: "boolean,optional",
      description: "GagueBar 를 사용할지 결정합니다.",
      type: "boolean",
    },
    {
      name: "useValueLavel",
      attribute: "boolean,optional",
      description: "데이터의 Value 에 대한 Lavel 값을 사용할지 결정합니다.",
      dependency: "gagueBarSetting-useGagueBar",
      show: true,
    },
    {
      name: "pointerSize",
      attribute: "number,optional",
      description: "GagueBar 의 Pointer 크기를 조정합니다.",
      type: "number",
      unit: "px",
      dependency: "gagueBarSetting-useGagueBar",
      show: true,
    },
    {
      name: "pointerColor",
      attribute: "hex-code,optional",
      description: "Pointer의 색상을 설정합니다.",
      type: "boolean",
      dependency: "gagueBarSetting-useGagueBar",
      show: true,
    },
    {
      name: "gagueBarWidth",
      attribute: "number,optional",
      description: "gagueBar 의 너비를 설정합니다.",
      type: "number",
      unit: "px",
      dependency: "gagueBarSetting-useGagueBar",
      show: true,
    },
    {
      name: "gagueBarHeight",
      attribute: "number,optional",
      description: "gagueBar 의 높이를 설정합니다.",
      type: "number",
      unit: "px",
      dependency: "gagueBarSetting-useGagueBar",
      show: true,
    },
    {
      name: "gagueValueFontSize",
      attribute: "number,optional",
      description: "gagueBar Value의 폰트 크기를 설정합니다.",
      type: "number",
      unit: "px",
      dependency: ["gagueBarSetting-useGagueBar","useValueLavel"],
      show: [true,true]
    },
    {
      name: "gagueValueFontFamily",
      attribute: "string,optional",
      description: "gagueBar Value의 폰트를 설정합니다.",
      type: "string",
      dependency: ["gagueBarSetting-useGagueBar","useValueLavel"],
      show: [true,true]
    
    },
    {
      name: "gagueValueFontWeight",
      attribute: "string,optional",
      description: "gagueBar Value의 폰트Weight를 설정합니다.",
      type: "string",
      dependency: ["gagueBarSetting-useGagueBar","useValueLavel"],
      show: [true,true]
    },
    {
      name: "valueLavel",
      attribute: "string,optional",
      description: "gagueBar Value의 Lavel을 설정합니다.",
      type: "string",
      dependency: ["gagueBarSetting-useGagueBar","useValueLavel"],
      show: [true,true]
    },
  ],

  tooltipSetting: [
    {
      name: "useFollowColor",
      attribute: "boolean,optional",
      description: "tooltip의 backgroundColor를 tooltip이 mouseover된 지도의 영역과 같게합니다.",
      type: "boolean",
    },
    {
      name: "useKorea",
      attribute: "boolean,optional",
      description: "tooltip의 지역명을 한글로 사용합니다.",
      type: "boolean",
    },
    {
        name: "tooltipWidth",
        attribute: "number,optional",
        description: "해당 의 너비를 설정합니다.",
        type: "width",
        unit:"px"
      },
    {
      name: "tooltipBackGroundColor",
      attribute: "hex-code,optional",
      description: "tooltip의 backGroundColor 를 설정해줍니다. ",
      type: "color",
    },
    {
      name: "tooltipBorderRadius",
      attribute: "number,optional",
      description: "tooltip의 BorderRadius 를 설정해줍니다. ",
      type: "number",
    },
    {
      name: "tooltipBorder",
      attribute: "string,optional",
      description: "tooltip 의 Borderline 을 설정해줍니다.",
      type: "string",
    },
    {
      name: "tooltipBoxShadow",
      attribute: "string,optional",
      description: "tooltip 의 Shadow 속성을 조절합니다.",
      type: "number",
    },
    {
      name: "cityNameFontSize",
      attribute: "number,optional",
      description: "tooltip, CityName의 FontSize를 조절합니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "cityNameColor",
      attribute: "string,optional",
      description: "tooltip, CityName의 Color를 조절합니다.",
      type: "string",
    },
    {
      name: "cityNameFontWeight",
      attribute: "string,optional",
      description: "tooltip 의 CityName의 FontWeight를 조절합니다.",
      type: "string",
    },
    {
      name: "cityValueFontSize",
      attribute: "number,optional",
      description: "tooltip, cityValue의 FontSize를 조절합니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "cityValueColor",
      attribute: "string,optional",
      description: "tooltip, cityValue의 Color를 조절합니다.",
      type: "string",
    },
    {
      name: "cityValueFontWeight",
      attribute: "string,optional",
      description: "tooltip 의 cityValue의 FontWeight를 조절합니다.",
      type: "string",
    },
    {
        name: "descriptionFontSize",
        attribute: "number,optional",
        description: "tooltip, description의 FontSize를 조절합니다.",
        type: "number",
        unit: "px",
      },
      {
        name: "descriptionColor",
        attribute: "string,optional",
        description: "tooltip, description의 Color를 조절합니다.",
        type: "string",
      },
      {
        name: "descriptionFontWeight",
        attribute: "string,optional",
        description: "tooltip 의 description의 FontWeight를 조절합니다.",
        type: "string",
      },
      {
        name: "tooltipOpacity",
        attribute: "number,optional",
        description: "tooltip 의 Opacity를 조절합니다.",
        type: "number",
      },
      {
        name: "useTooltipCol",
        attribute: "boolean,optional",
        description: "tooltip 의 cityName 과 cityValue 사이에 : 를 넣을지 설정합니다. ",
        type: "boolean",
      },
      {
        name: "useTooltipChart",
        attribute: "boolean,optional",
        description: "Zoomin 됐을경우 tooltip에 tooltipChart 를 사용할지 설정합니다. ",
        type: "boolean",
        dependency:"normalSetting-zoomOn",
        show:true
      },
    ]
}