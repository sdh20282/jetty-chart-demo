import InfoSection from '../info-section/InfoSection';

import RefreshIcon from '@mui/icons-material/Refresh';

import styles from './detail-section.module.css'
import { useEffect } from 'react';

const DetailSection = ({ props: { Chart, name, data, chartData, updateData } }) => {
  const base = chartData.base;
  delete chartData.base;

  useEffect(() => {
    updateData();
  }, []);

  const convert = {};

  Object.keys(chartData).forEach((setting) => {
    convert[setting] ??= {};

    if (setting === "animationSettings") {
      Object.keys(chartData[setting]).forEach((animation) => {
        convert[setting][animation] ??= {};

        Object.keys(chartData[setting][animation]).forEach((detail) => {
          if (isNaN(Number(chartData[setting][animation][detail]))) {
            convert[setting][animation][detail] = chartData[setting][animation][detail];
          } else {
            convert[setting][animation][detail] = Number(chartData[setting][animation][detail]);
          }
        });
      });
    } else {
      Object.keys(chartData[setting]).forEach((detail) => {
        if (isNaN(Number(chartData[setting][detail]))) {
          convert[setting][detail] = chartData[setting][detail];
        } else {
          convert[setting][detail] = Number(chartData[setting][detail]);
        }

        // convert[setting][detail] ??= chartData[setting][detail];
      });
    }
  });

  return (
    <section key={JSON.stringify({ ...base, ...chartData })} className={styles.settingSection}>
      <header className="IROnly">
        <h3>Chart Detail Section</h3>
      </header>
      <button className={styles.refreshButton} onClick={updateData}>
        <RefreshIcon />
        <span className="IROnly">roll the dice</span>
      </button>
      <div className={styles.chartWrapper}>
        <Chart data={data} {...base} {...convert} />
      </div>
      <InfoSection props={{ name, data, base, chartData }} />
    </section>
  )
}

export default DetailSection;