import styles from './setting-section.module.css'

import { typeData } from '@/utils/data/type-data';

const SettingSection = ({ props: { type, chartData, setChartData } }) => {
  return (
    <section className={styles.settingSection}>
      <header className="IROnly">
        <h3>Chart Setting Section</h3>
      </header>
      <form action="/">
        <ul className={styles.settingList}>
          {
            Object.keys(type).map((key) => {
              if (key === "animationSettings") {
                return [
                  // <li key={key} className={styles.settingTitleListItem}>
                  //   <div className={styles.settingTitleWrapper}>
                  //     <p className={styles.settingTitle}>
                  //       {key}
                  //     </p>
                  //   </div>
                  // </li>,
                  ...Object.keys(type[key]).map((key2) => {
                    return [
                      <li key={key2} className={styles.settingTitleListItem}>
                        <div className={styles.settingTitleWrapper}>
                          <p className={styles.settingTitle}>
                            {key} - {key2}
                          </p>
                        </div>
                      </li>,
                      ...type[key][key2].map(t => {
                        const Component = typeData[t.type];

                        if (!Component) {
                          return;
                        }

                        return (
                          <li key={`${key}-${key2}-${t.name}`}>
                            <Component props={{ data: t, chartData, setChartData, target: `${key}-${key2}-${t.name}` }} />
                          </li>
                        );
                      })
                    ]
                  })]
              } else {
                return [
                  <li key={key} className={styles.settingTitleListItem}>
                    <div className={styles.settingTitleWrapper}>
                      <p className={styles.settingTitle}>
                        {key}
                      </p>
                    </div>
                  </li>,
                  ...type[key].map((t) => {
                    const Component = typeData[t.type];

                    if (!Component) {
                      return;
                    }

                    return (
                      <li key={`${key}-${t.name}`}>
                        <Component props={{ data: t, chartData, setChartData, target: `${key}-${t.name}` }} />
                      </li>
                    );
                  })];
              }
            })
          }
        </ul>
      </form>
    </section>
  )
}

export default SettingSection;