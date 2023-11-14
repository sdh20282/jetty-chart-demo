import { useState } from 'react';

import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';
import StringInput from '@/components/input/string-input/StringInput';

import styles from './array-fieldset.module.css';

import ClearIcon from '@mui/icons-material/Clear';

import { checkDependency } from '@/utils/common/dependency';

const ArrayFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const [input, setInput] = useState("");
  const targetParse = target.split("-");
  const display = checkDependency({ data, chartData });

  if (!display) {
    return;
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClickAdd = (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    const newData = JSON.parse(JSON.stringify(chartData));
    let value = [...(targetParse.length === 2
      ? chartData[targetParse[0]][targetParse[1]]
      : chartData[targetParse[0]][targetParse[1]][targetParse[2]]), input];

    if (targetParse.length === 2) {
      newData[targetParse[0]][targetParse[1]] = value;
    } else {
      newData[targetParse[0]][targetParse[1]][targetParse[2]] = value;
    }

    setChartData(newData);
    setInput("");
  };

  const handleClickRemove = (e, target) => {
    e.preventDefault();

    const newData = JSON.parse(JSON.stringify(chartData));
    let value = (targetParse.length === 2
      ? chartData[targetParse[0]][targetParse[1]]
      : chartData[targetParse[0]][targetParse[1]][targetParse[2]]).filter((item) => item !== target);

    if (targetParse.length === 2) {
      newData[targetParse[0]][targetParse[1]] = value;
    } else {
      newData[targetParse[0]][targetParse[1]][targetParse[2]] = value;
    }

    setChartData(newData);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <FieldsetTitle props={{ data }} />
      {
        (targetParse.length === 2
          ? chartData[targetParse[0]][targetParse[1]]
          : chartData[targetParse[0]][targetParse[1]][targetParse[2]]).length !== 0 &&
        <ul className={styles.hashList}>
          {
            (targetParse.length === 2
              ? chartData[targetParse[0]][targetParse[1]]
              : chartData[targetParse[0]][targetParse[1]][targetParse[2]]).map((item, idx) => {
                return (
                  <li key={`${item}-${idx}`} className={styles.hash}>
                    <p>{item}</p>
                    <button onClick={(e) => handleClickRemove(e, item)}>
                      <ClearIcon />
                      <span className="IROnly">제거</span>
                    </button>
                  </li>
                )
              })
          }
        </ul>
      }
      <div className={styles.inputWrapper}>
        <StringInput props={{
          id: `${data.name}-input`,
          name: data.name,
          unit: data.unit,
          value: input,
          onChange: handleChange
        }} />
        <button className={styles.addButton} onClick={handleClickAdd}>추가</button>
      </div>
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default ArrayFieldset;