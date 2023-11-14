import Link from 'next/link';

import HeaderLayout from '@/components/layout/header-layout/HeaderLayout';

import styles from './chart-select.module.css';

import { chartList } from '@/utils/chart/chart-list';

const ChartSelectPage = () => {
  return (
    <main>
      <section className={styles.section}>
        <header>
          <h2>Jetty Chart Select Page</h2>
        </header>
        <ul className={styles.list}>
          {
            chartList.map(chart => {
              return (
                <li key={chart}>
                  <Link href={`chart-detail/${chart}`}>{chart} 테스트 하기</Link>
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