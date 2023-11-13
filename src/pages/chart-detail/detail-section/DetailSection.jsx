import styles from './detail-section.module.css'

const DetailSection = ({ props: { Chart, data, chartData, updateData } }) => {
  return (
    <section key={JSON.stringify(chartData)} className={styles.settingSection}>
      <header className="IROnly">
        <h3>Chart Detail Section</h3>
      </header>
      <button onClick={updateData}>roll the dice</button>
      {/* <button onClick={updateData}>redraw</button> */}
      <Chart data={data} {...chartData} />
    </section>
  )
}

export default DetailSection;