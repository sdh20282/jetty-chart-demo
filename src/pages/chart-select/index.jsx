"use client";

import { useEffect, useState } from 'react';

import Link from 'next/link';

import HeaderLayout from '@/components/layout/header-layout/HeaderLayout';

import styles from './chart-select.module.css';

import { chartList } from '@/utils/chart/chart-list';
import { getChartComponent } from '@/utils/chart/chart-component';
import { getRandomData } from '@/utils/data/random-data';

const ChartSelectPage = () => {
  const [data, setData] = useState({});
  const [over, setOver] = useState("");

  useEffect(() => {
    const result = {};

    chartList.forEach((chart) => {
      result[chart] = getRandomData({ chartName: chart });
    });

    setData(result);
  }, []);

  return (
    <main>
      <section className={styles.section}>
        <header className="IROnly">
          <h2>Jetty Chart Select Page</h2>
        </header>
        <ul className={styles.list}>
          {
            data && Object.keys(data).length !== 0 && chartList.map(chart => {
              return (
                <li key={chart}>
                  <Link href={`chart-detail/${chart}`} className={styles.listItem}>
                    <div className={styles.chartArea}>
                      {
                        (() => {
                          const Chart = getChartComponent({ chartName: chart });

                          return (
                            <>
                              <Chart
                                data={data[chart]}
                                normalSettings={{
                                  width: 280,
                                  height: 220,
                                  margin: { top: 1, bottom: 1, left: 1, right: 1 }
                                }}
                                {...chart.indexOf("bar") !== -1 ? {barSettings: {
                                  useLabel: false
                                }} : {}}
                              />
                            </>
                          )
                        })()
                      }
                    </div>
                    <p className={styles.chartName}>{chart}</p>
                  </Link>
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