import styles from './string-input.module.css'

const StringInput = ({ props: { id, name, value, onChange } }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className="IROnly">{name} 입력</label>
      <input id={id} type="text" className={styles.input} value={value} onChange={onChange} />
    </div>
  )
}

export default StringInput;