import RefreshIcon from '@mui/icons-material/Refresh';

import styles from './detail-section.module.css'

const DetailSection = ({ props: { Chart, data, chartData, updateData } }) => {
  const test = 
  `asdf asdfasdf
      asdfasdf
  asdfsadf asdf"`;

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
      {/* <button onClick={updateData}>redraw</button> */}
      <Chart data={data} {...base} {...JSON.parse(JSON.stringify(chartData))} />
      <pre>{test}
      </pre>
      <p>{JSON.stringify(chartData)}</p>
    </section>
  )
}

export default DetailSection;