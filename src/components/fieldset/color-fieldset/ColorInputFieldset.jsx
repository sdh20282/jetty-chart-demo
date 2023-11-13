import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';

import styles from './color-input-fieldset.module.css';

import { checkDependency } from '@/utils/common/dependency';

const ColorInputFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");
  const display = checkDependency({ data, chartData });

  if (!display) {
    return;
  }
  
  let color = targetParse.length === 2 ? chartData[targetParse[0]][targetParse[1]] : chartData[targetParse[0]][targetParse[1]][targetParse[2]];

  if (color.length === 4) {
    color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
  }

  const handleChange = (e) => {
    const newData = JSON.parse(JSON.stringify(chartData));
    const state = e.target.value;

    if (targetParse.length === 2) {
      newData[targetParse[0]][targetParse[1]] = state;
    } else {
      newData[targetParse[0]][targetParse[1]][targetParse[2]] = state;
    }

    setChartData(newData);
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <FieldsetTitle props={{ data }} />
      <div className={styles.colorPickerWrapper}>
        <label htmlFor={`${data.name}-color-input`} className="IROnly">${data.name} 입력</label>
        <input type="color" id={`${data.name}-color-input`} className={styles.colorInput} defaultValue={color} onChange={handleChange} />
        <p className={styles.color}>{color}</p>
      </div>
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default ColorInputFieldset;