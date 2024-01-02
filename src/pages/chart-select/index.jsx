"use client";

import { useEffect, useState } from 'react';

import Link from 'next/link';

import HeaderLayout from '@/components/layout/header-layout/HeaderLayout';

import styles from './chart-select.module.css';

import { chartList } from '@/utils/chart/chart-list';
import { getChartComponent } from '@/utils/chart/chart-component';
import { getRandomData } from '@/utils/data/random-data';
import { colorPalette } from '@/utils/color/colorPalette';

const ChartSelectPage = () => {
  const [data, setData] = useState({});
  // const [over, setOver] = useState("");

  useEffect(() => {
    const result = {};

    chartList.forEach((chart) => {
      result[chart] = getRandomData({ chartName: chart });
    });

    setData(result);
  }, []);

  const colorKeys = Object.keys(colorPalette);

  return (
    <main>
      <section className={styles.section}>
        <header className="IROnly">
          <h2>Jetty Chart Select Page</h2>
        </header>
        <ul className={styles.list}>
          {
            data && Object.keys(data).length !== 0 && chartList.map((chart, idx) => {
              return (
                <li key={chart}>
                  <Link href={`chart-detail/${chart}`} className={styles.listItem}>
                    <div className={`${styles.chartArea} ${chart.indexOf("pie") !== -1 ? styles.scale : null}`}>
                      {
                        (() => {
                          const Chart = getChartComponent({ chartName: chart });
                          const nowColor = colorPalette[colorKeys[idx + (Math.floor(Math.random() * 10)) % colorKeys.length]];

                          return (
                            <>
                              <Chart
                                data={data[chart]}
                                normalSettings={{
                                  width: 280,
                                  height: 220,
                                  margin: { top: 1, bottom: 1, left: 1, right: 1 },
                                  colorPalette: nowColor.reverse(),
                                  useVariousColors: true
                                }}
                                generalSettings={{
                                  width: 280,
                                  height: 220,
                                  paddingTop: 1,
                                  paddingBottom: 1,
                                  paddingLeft: 1,
                                  paddingRight: 1,
                                }}
                                {...chart.indexOf("bar") !== -1 ? {
                                  barSettings: {
                                    useLabel: false
                                  }
                                } : {}}
                                {...chart.indexOf("pie") !== -1 ? {
                                  legendSettings: {
                                    useLegend: false
                                  },
                                  labelSettings: {
                                    labelIsUse: false
                                  },
                                  arcLinkLabelSettings: {
                                    arcLinkLabelIsUse: false
                                  }
                                } : {}}
                                {...chart.indexOf("pyramid") !== -1 ? {
                                  barSettings: {
                                    useLabel: false
                                  }
                                } : {}}
                                {...chart.indexOf("map") !== -1 ? {
                                  normalSetting: {
                                    width: 215,
                                    colorPalette: colorPalette[colorKeys[(idx + 1) % colorKeys.length]],
                                  }
                                } : {}}
                              />
                            </>
                          )
                        })()
                      }
                    </div>
                  </Link>
                  <div className={styles.nameWrapper}>
                    <p className={styles.chartName}>{chart}</p>
                    <p className={`${styles.support} ${styles.react}`}>React</p>
                    <p className={`${styles.support} ${styles.next}`}>Next</p>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </section>
    </main>
  );
};

ChartSelectPage.getLayout = function getLayout(page) {
  return (
    <HeaderLayout>{page}</HeaderLayout>
  );
};

export default ChartSelectPage;