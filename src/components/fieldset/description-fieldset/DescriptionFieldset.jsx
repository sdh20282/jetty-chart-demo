import FieldsetTitle from '@/components/text/fieldset-title/FieldsetTitle';

import styles from './description-fieldset.module.css';

// import EditIcon from '@mui/icons-material/Edit';

const DescriptionFieldset = ({ props: { data } }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className="IROnly">{data.name} 설정 영역</legend>
      <div className={styles.editWrapper}>
        <FieldsetTitle props={{ data }} />
        {/* {
          data.name === "data" &&
            <>
              <button className={styles.editButton}>
                <EditIcon />
                <span className="IROnly">adsfs</span>
              </button>
              <div className={styles.editModal}>

              </div>
            </>
        } */}
      </div>
      <p className={styles.description}>{data.description}</p>
    </fieldset>
  )
}

export default DescriptionFieldset;