import styles from './number-input.module.css'

const NumberInput = ({ props: { id, name, unit, value, onChange } }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className="IROnly">{name} 입력</label>
      <input id={id} type="text" className={styles.input} value={value} onChange={onChange} />
      <p className={styles.unit}>{unit}</p>
    </div>
  )
}

export default NumberInput;