import styles from './setting-section.module.css'

import { typeData } from '@/utils/data/type-data';

const SettingSection = ({ props: { type, chartData, setChartData } }) => {
  return (
    <section className={styles.settingSection}>
      <header className="IROnly">
        <h3>Chart Setting Section</h3>
      </header>
      <form action="/" onClick={(e) => e.preventDefault()}>
        <ul className={styles.settingList}>
          {
            Object.keys(type).map((key) => {
              // if (key === "animationSettings") {
              //   return;
              // }

              return type[key].map((t) => {
                const Component = typeData[t.type];

                if (!Component) {
                  return;
                }

                return (
                  <li key={t.name}>
                    <Component props={{ data: t, chartData, setChartData, target: `${key}-${t.name}` }} />
                  </li>
                );
              });
            })
          }
        </ul>
      </form>
    </section>
  )
}

export default SettingSection;