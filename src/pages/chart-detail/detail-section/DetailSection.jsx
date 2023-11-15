import InfoSection from '../info-section/InfoSection';

import RefreshIcon from '@mui/icons-material/Refresh';

import styles from './detail-section.module.css'

const selectList = ["코드 보기", "데이터 보기"]

const DetailSection = ({ props: { Chart, name, data, chartData, updateData } }) => {
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
      <div className={styles.chartWrapper}>
        <Chart data={data} {...base} {...JSON.parse(JSON.stringify(chartData))} />
      </div>
      <InfoSection props={{ name, data, base, chartData }} />
    </section>
  )
}

export default DetailSection;