import styles from './boolean-toggle.module.css'

const BooleanToggle = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");

  const handleToggle = () => {
    const newData = Object.assign({}, chartData);
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
      <div className={styles.textWrapper}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.type}>{data.attribute.split(",")[0]}</p>
        <p className={styles.option}>{data.attribute.split(",")[1]}</p>
      </div>
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

export default BooleanToggle;