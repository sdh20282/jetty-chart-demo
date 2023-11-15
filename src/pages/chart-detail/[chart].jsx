import { useEffect, useState } from 'react';
import Link from 'next/link';

import HeaderLayout from '@/components/layout/header-layout/HeaderLayout';
import SettingSection from './setting-section/SettingSection';
import DetailSection from './detail-section/DetailSection';

import styles from './chart-detail.module.css'

import { chartList } from '@/utils/chart/chart-list'
import { getChartComponent } from '@/utils/chart/chart-component';
import { getChartType } from '@/utils/chart/chart-type';
import { getChartValue } from '@/utils/chart/chart-value';
import { getRandomData } from '@/utils/data/random-data';

const ChartDetailPage = ({ name, data, type, value }) => {
  const [randomData, setRandomData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    setRandomData(data);
    setChartData({
      ...JSON.parse(JSON.stringify(value)),
      base: {
        keys: [],
        xLegend: "x-legend",
        yLegend: "y-legend",
      }
    });
  }, []);

  const Chart = getChartComponent({ chartName: name });

  const updateRandomData = () => {
    setRandomData(getRandomData({ chartName: name }))
  }

  const checkData = () => {
    const result = {};

    Object.keys(value).forEach((setting) => {
      if (setting === "animationSettings") {
        Object.keys(value[setting]).forEach((animation) => {
          Object.keys(value[setting][animation]).forEach((detail) => {
            if (chartData[setting][animation][detail] === value[setting][animation][detail]) {
              return;
            }

            result[setting] ??= {};
            result[setting][animation] ??= {};
            result[setting][animation][detail] ??= chartData[setting][animation][detail];
          });
        });
      } else {
        Object.keys(value[setting]).forEach((detail) => {
          if (typeof chartData[setting][detail] === 'object') {
            let match = true;

            Object.keys(chartData[setting][detail]).forEach((key) => {
              if (chartData[setting][detail][key] !== value[setting][detail][key]) {
                match = false;

                return;
              }
            });

            if (match) {
              return;
            }
            result[setting] ??= {};
            result[setting][detail] ??= chartData[setting][detail];
          } else {
            if (chartData[setting][detail] === value[setting][detail]) {
              return;
            }
            result[setting] ??= {};
            result[setting][detail] ??= chartData[setting][detail];
          }
        });
      }
    });

    return result;
  }

  return (
    <main>
      <section className={styles.section}>
        <header className="IROnly">
          <h2>Jetty Chart Detail Page</h2>
        </header>
        {randomData.length !== 0 && chartData.normalSettings !== undefined && <SettingSection props={{ type, chartData, setChartData }} />}
        {randomData.length !== 0 && chartData.normalSettings !== undefined && <DetailSection props={{ Chart, name, data: randomData, chartData: checkData(chartData), updateData: updateRandomData }} />}
      </section>
    </main>
  )
}

ChartDetailPage.getLayout = function getLayout(page) {
  return (
    <HeaderLayout>{page}</HeaderLayout>
  );
};

// 추후 chart list를 db에 저장 할 경우 해당 부분에서 읽어옴
export const getStaticPaths = async () => {
  const paths = chartList.map((chart) => ({
    params: { chart: chart },
  }));

  return { paths, fallback: false }
}

// 추후 chart data를 db에 저장 할 경우 해당 부분에서 가져옴
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      name: params.chart,
      data: getRandomData({ chartName: params.chart }),
      type: getChartType({ chartName: params.chart }),
      value: getChartValue({ chartName: params.chart })
    }
  }
}

export default ChartDetailPage;