import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';

import styles from './select-fieldset.module.css';

import { checkDependency } from '@/utils/common/dependency';

const SelectFieldset = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");
  const selected = targetParse.length === 2 
    ? chartData[targetParse[0]][targetParse[1]] 
    : chartData[targetParse[0]][targetParse[1]][targetParse[2]]
  const display = checkDependency({ data, chartData });

  if (!display) {
    return;
  }

  const handleClick = ({ e, value }) => {
    e.preventDefault();
    const newData = JSON.parse(JSON.stringify(chartData));

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
      <ul className={styles.selectList}>
        {
          data.candidate.map(c => {
            return (
              <li key={c}>
                <button className={`${styles.selectButton} ${selected === c ? styles.selected : null}`} onClick={(e) => {handleClick({ e, value: c })}}>{c}</button>
              </li>
            );
          })
        }
      </ul>
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default SelectFieldset;