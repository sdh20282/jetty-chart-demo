import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';

import styles from './description-fieldset.module.css';

const DescriptionFieldset = ({ props: { data } }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <FieldsetTitle props={{ data }} />
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default DescriptionFieldset;