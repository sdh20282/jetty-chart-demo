import { useRef, useState } from 'react';

import { getChartComponentString } from '@/utils/chart/chart-component';

import CodeIcon from '@mui/icons-material/Code';
import DataArrayIcon from '@mui/icons-material/DataArray';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import styles from './info-section.module.css'

const selectList = ["코드 보기", "데이터 보기"];
const opens = ["{", "["];
const closes = ["}", "]"];
const nexts = ["{", "[", "}", "]", ","];

const parseJSON = ({ string, toProps, initTabSize }) => {
  if (!string) {
    return "";
  }

  let tabWidth = initTabSize;
  let newLine = true;
  let isKey = true;
  let inArray = false;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let now = string[i];

    if (now === ":") {
      now = ": ";
      isKey = false;
    }

    if (now === "[") {
      inArray = true;
    }

    if (now === "]") {
      inArray = false;
    }

    if (now === ": " && tabWidth === initTabSize && toProps) {
      now = "={";
    }

    if (closes.includes(now)) {
      tabWidth -= 4;
      newLine = true;

      if (!closes.includes(string[i - 1])) {
        result += "\n";
      }
    }

    if (now === "," && closes.includes(string[i - 1])) {
      result = result.slice(0, -1);
      newLine = false;
    }

    if (now) {

    }

    if (newLine) {
      result += " ".repeat(tabWidth);
    }

    result += now;
    newLine = false;

    if (isKey && !inArray && now === `"`) {
      result = result.slice(0, -1);
    }

    if ((now === "," && toProps && tabWidth === initTabSize)) {
      result = result.slice(0, -1) + "}";
    }

    if (now === ",") {
      isKey = true;
    }

    if (opens.includes(now)) {
      tabWidth += 4;
    }

    if (now === "{") {
      isKey = true;
    }

    if (nexts.includes(now)) {
      result += "\n";
      newLine = true;
    }
  }

  if (toProps) {
    result = result.slice(-1) === "\n" ? result.slice(0, -1) + "}" : result + "}";
  }

  return result;
}

const convertStringToTag = ({ string }) => {
  const lines = string.split("\n");
  let result = ``;

  lines.map((line) => {
    let nowResult = `<div>`;
    let initialBlank = true;
    let openEmphasis = false;
    let openHilight = false;
    let openNormal = false;
    let openAnnotation = false;

    line.split("").forEach((char, idx) => {
      if (initialBlank) {
        if (char === " ") {
          if (idx === 0) {
            nowResult += `<span>`
          }

          nowResult += char;
        } else {
          nowResult += `</span>`
          initialBlank = false;

          if (char === "{" || char === "[" || char === "}" || char === "]") {
            nowResult += `<span class=${styles.emphasis}>`;
            openEmphasis = true;
          } else if (char === "'" || char === '"') {
            nowResult += `<span class=${styles.hilight}>`;
            openHilight = true;
          } else {
            nowResult += `<span class=${styles.normal}>`;
            openNormal = true;
          }

          nowResult += char;
        }
      } else {
        if (char === "{" || char === "[" || char === "}" || char === "]" || char === ",") {
          if (openHilight || openEmphasis) {
            nowResult += char;
          } else if (openNormal || openAnnotation) {
            nowResult += `</span><span class=${styles.emphasis}>` + char;
            openNormal = false;
            openAnnotation = false;
            openEmphasis = true;
          } else {
            nowResult += `<span class=${styles.emphasis}>` + char;
            openEmphasis = true;
          }
        } else if (char === '"' || char === "'") {
          if (openHilight) {
            nowResult += char + `</span>`;
            openHilight = false;
          } else {
            nowResult += `</span><span class=${styles.hilight}>` + char;
            openHilight = true;
          }
          openNormal = false;
          openAnnotation = false;
          openEmphasis = false;
        } else if (char === ":" || char === "=") {
          if (openHilight || openAnnotation) {
            nowResult += char;
          } else if (openNormal || openEmphasis) {
            nowResult += `</span><span class=${styles.annotation}>` + char;
            openNormal = false;
            openAnnotation = true;
            openEmphasis = false;
          } else {
            nowResult += `<span class=${styles.annotation}>` + char;
            openAnnotation = true;
          }
        } else {
          if (openHilight || openNormal) {
            nowResult += char;
          } else if (openAnnotation || openEmphasis) {
            nowResult += `</span><span class=${styles.normal}>` + char;
            openNormal = true;
            openAnnotation = false;
            openEmphasis = false;
          } else {
            nowResult += `<span class=${styles.normal}>` + char;
            openNormal = true;
          }
        }
      }
    });

    nowResult += `</span></div>\n`;
    result += nowResult;
  });

  return result;
}

const getCode = ({ name, props }) => {
  let result = `
<div><span class=${styles.annotation}>// npm install jetty-chart</span></div>
<div><span class=${styles.annotation}>// 최신 버전으로 다운로드 해주세요.</span></div>
<div><span class=${styles.emphasis}>import { </span><span class=${styles.normal}>${name}</span><span class=${styles.emphasis}> } from </span><span class=${styles.hilight}>"jetty-chart";</span></div>
<br/>
<div><span class=${styles.annotation}>// 설정이 많아질 경우 가독성이 떨어지기 때문에 함수 형태로 제공됩니다.</span></div>
<div><span class=${styles.emphasis}>const</span><span class=${styles.normal}> My${name} </span><span class=${styles.annotation}>= </span><span class=${styles.emphasis}>({ </span><span class=${styles.normal}>data </span><span class=${styles.annotation}>/* 데이터 탭을 확인해주세요. */</span><span class=${styles.emphasis}> })</span><span class=${styles.annotation}> => </span><span class=${styles.emphasis}>{</span></div>
<div><span>    </span><span class=${styles.emphasis}>return </span><span class=${styles.annotation}><</span><span class=${styles.normal}>${name}</span></div>
<div><span>        </span><span class=${styles.normal}>data</span><span class=${styles.annotation}>=</span><span class=${styles.emphasis}>{</span><span class=${styles.normal}>data</span><span class=${styles.emphasis}>}</span></div>
${props}
<div><span>    </span><span class=${styles.annotation}>/></span></div>
<div><span class=${styles.emphasis}>};</span></div>
`;

  return result;
}

const transform = (str) => {
  return str.replace(/\n/g, "");
};

const InfoSection = ({ props: { name, data, base, chartData } }) => {
  const [selected, setSelected] = useState(selectList[0]);
  const copyTarget = useRef(null);
  const copyText = useRef(null);

  const resultCode = getCode({ name: getChartComponentString({ chartName: name }), props: convertStringToTag({ string: parseJSON({ string: `${JSON.stringify({ ...base, ...chartData }).slice(1, -1)}`, toProps: true, initTabSize: 8 }) }) });
  const resultData = convertStringToTag({ string: parseJSON({ string: `[${data.map(d => JSON.stringify(d))}]`, toProps: false, initTabSize: 0 }) });

  const handleSelectClick = ({ target }) => {
    setSelected(target);
  }

  const handleClickCopy = async ({ target }) => {
    try {
      copyTarget.current.innerHTML = target === selectList[0] ? resultCode : resultData;

      await navigator.clipboard.writeText(copyTarget.current.textContent);

      copyText.current.classList.remove(`${styles.show}`);
      
      setTimeout(() => {
        copyText.current.classList.add(`${styles.show}`);
      }, 100);
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  }

  return (
    <section className={styles.section}>
      <header className="IROnly">
        <h4>추가 정보 영역</h4>
      </header>
      <ul className={styles.selectList}>
        <li>
          <button className={`${styles.selectButton} ${selected === selectList[0] ? styles.selected : null}`} onClick={() => { handleSelectClick({ target: selectList[0] }) }}>
            <CodeIcon />
            <span>{selectList[0]}</span>
          </button>
        </li>
        <li>
          <button className={`${styles.selectButton} ${selected === selectList[1] ? styles.selected : null}`} onClick={() => { handleSelectClick({ target: selectList[1] }) }}>
            <DataArrayIcon />
            <span>{selectList[1]}</span>
          </button>
        </li>
      </ul>
      <ul className={styles.selectedList}>
        <li className={`${styles.selectedCandidate} ${selected === selectList[0] ? styles.selectedArea : null}`}>
          <pre>
            <div dangerouslySetInnerHTML={{ __html: transform(resultCode) }}></div>
          </pre>
        </li>
        <li className={`${styles.selectedCandidate} ${selected === selectList[1] ? styles.selectedArea : null}`}>
          <pre>
            <div dangerouslySetInnerHTML={{ __html: transform(resultData) }}></div>
          </pre>
        </li>
      </ul>
      <div className={styles.copyWrapper}>
        <button className={styles.copyButton} onClick={() => {handleClickCopy({ target: selected === selectList[0] ? selectList[0] : selectList[1] })}}>
          <ContentCopyIcon />
          <span className="IROnly">복사</span>
        </button>
        <div className={styles.alert} ref={copyText}>Copied!</div>
      </div>
      <div className="IROnly" ref={copyTarget}></div>
    </section>
  )
}

export default InfoSection;