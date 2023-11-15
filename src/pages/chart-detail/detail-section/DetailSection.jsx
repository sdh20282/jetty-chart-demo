<<<<<<< HEAD
=======
import InfoSection from '../info-section/InfoSection';

>>>>>>> main
import RefreshIcon from '@mui/icons-material/Refresh';

import styles from './detail-section.module.css'

<<<<<<< HEAD
const DetailSection = ({ props: { Chart, data, chartData, updateData } }) => {
  const test = 
  `asdf asdfasdf
      asdfasdf
  asdfsadf asdf"`;

=======
const selectList = ["코드 보기", "데이터 보기"]

const DetailSection = ({ props: { Chart, name, data, chartData, updateData } }) => {
>>>>>>> main
  const base = chartData.base;
  delete chartData.base;

  return (
    <section key={JSON.stringify(chartData)} className={styles.settingSection}>
      <header className="IROnly">
        <h3>Chart Detail Section</h3>
      </header>
      <button className={styles.refreshButton} onClick={updateData}>
        <RefreshIcon />
        <span className="IROnly">roll the dice</span>
      </button>
<<<<<<< HEAD
      {/* <button onClick={updateData}>redraw</button> */}
      <Chart data={data} {...base} {...JSON.parse(JSON.stringify(chartData))} />
      <pre>{test}
      </pre>
      <p>{JSON.stringify(chartData)}</p>
=======
      <div className={styles.chartWrapper}>
        <Chart data={data} {...base} {...JSON.parse(JSON.stringify(chartData))} />
      </div>
      <InfoSection props={{ name, data, base, chartData }} />
>>>>>>> main
    </section>
  )
}

export default DetailSection;