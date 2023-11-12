import styles from './number-input.module.css'

const NumberInput = ({ props: { data, chartData, setChartData, target } }) => {
  const targetParse = target.split("-");

  const handleChange = (e) => {
    const newData = Object.assign({}, chartData);
    const value = e.target.value;

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
      <div className={styles.textWrapper}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.type}>{data.attribute.split(",")[0]}</p>
        <p className={styles.option}>{data.attribute.split(",")[1]}</p>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor={`${data.name}-input`} className="IROnly">{data.name} 입력</label>
        <input id={`${data.name}-input`} type="text" className={styles.input} value={targetParse.length === 2 ? chartData[targetParse[0]][targetParse[1]] : chartData[targetParse[0]][targetParse[1]][targetParse[2]]} onChange={handleChange} />
        <p className={styles.unit}>px</p>
      </div>
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default NumberInput;