import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';

import styles from './toggle-fieldset.module.css';

import { checkDependency } from '@/utils/common/dependency';

const ToggleFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");
  const display = checkDependency({ data, chartData });

  if (!display) {
    return;
  }

  const handleToggle = () => {
    const newData = JSON.parse(JSON.stringify(chartData));
    const state = targetParse.length === 2 ? chartData[targetParse[0]][targetParse[1]] : chartData[targetParse[0]][targetParse[1]][targetParse[2]];

    if (targetParse.length === 2) {
      newData[targetParse[0]][targetParse[1]] = !state;
    } else {
      newData[targetParse[0]][targetParse[1]][targetParse[2]] = !state;
    }

    setChartData(newData);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <FieldsetTitle props={{ data }} />
      <div className={styles.toggleWrapper} onClick={handleToggle}>
        <div className={styles.toggleContainer}>
          <div className={`${styles.toggleBackground} ${(targetParse.length === 2 ? chartData[targetParse[0]][targetParse[1]] : chartData[targetParse[0]][targetParse[1]][targetParse[2]]) ? styles.toggleBackgroundChecked : null}`}></div>
          <div className={`${styles.toggleCircle} ${(targetParse.length === 2 ? chartData[targetParse[0]][targetParse[1]] : chartData[targetParse[0]][targetParse[1]][targetParse[2]]) ? styles.toggleCircleChecked : null}`}></div>
        </div>
        <p className={styles.description}>{data.description}</p>
      </div>
    </fieldset>
  )
}

export default ToggleFieldset;