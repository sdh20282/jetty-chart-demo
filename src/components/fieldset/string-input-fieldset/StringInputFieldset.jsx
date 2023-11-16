import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';
import StringInput from '@/components/input/string-input/StringInput';

import styles from './string-input-fieldset.module.css';

import { checkDependency } from '@/utils/common/dependency';

const StringInputFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");
  const display = checkDependency({ data, chartData });

  if (!display) {
    return;
  }

  const handleChange = (e) => {
    const newData = JSON.parse(JSON.stringify(chartData));
    let value = e.target.value;

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
      <div className={styles.inputWrapper}>
        <StringInput props={{
          id: `${target}-${data.name}-input`,
          name: data.name,
          unit: data.unit,
          value:
            targetParse.length === 2
              ? chartData[targetParse[0]][targetParse[1]]
              : chartData[targetParse[0]][targetParse[1]][targetParse[2]],
          onChange: handleChange
        }} />
        <p className={styles.description}>{data.description}</p>
      </div>
    </fieldset>
  )
}

export default StringInputFieldset;