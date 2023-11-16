import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';
import NumberInput from '@/components/input/number-input/NumberInput';

import styles from './number-input-fieldset.module.css';

import { checkDependency } from '@/utils/common/dependency';

const regExp = /^[0-9]\./g

const NumberInputFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");
  const display = checkDependency({ data, chartData });

  if (!display) {
    return;
  }

  const handleChange = (e) => {
    const newData = JSON.parse(JSON.stringify(chartData));
    let value = e.target.value;

    value = value.replaceAll(/[^0-9^/.]/g, "");

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
      <NumberInput props={{
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
    </fieldset>
  )
}

export default NumberInputFieldset;