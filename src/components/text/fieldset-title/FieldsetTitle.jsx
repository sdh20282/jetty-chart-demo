import styles from './fieldset-title.module.css'

const FieldsetTitle = ({ props: { data }}) => {
  return (
    <div className={styles.textWrapper}>
      <p className={styles.name}>{data.name}</p>
      <p className={styles.type}>{data.attribute.split(",")[0]}</p>
      <p className={styles.option}>{data.attribute.split(",")[1]}</p>
    </div>
  )
}

export default FieldsetTitle;