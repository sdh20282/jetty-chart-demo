
import styles from './boolean-toggle.module.css'

const BooleanToggle = ({ children }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <div className={styles.textWrapper}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.type}>{data.attribute.split(",")[0]}</p>
        <p className={styles.option}>{data.attribute.split(",")[1]}</p>
      </div>
      {children}
    </fieldset>
  )
}

export default BooleanToggle;