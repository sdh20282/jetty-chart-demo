import Link from 'next/link';

import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './header-layout.module.css'

const HeaderLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            Jetty-Chart
          </Link>
        </h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/chart-select">
                <StackedBarChartIcon />
                <span>Charts</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/sdh20282/jetty-chart">
                <GitHubIcon />
                <span>Document</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default HeaderLayout;