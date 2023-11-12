import Link from 'next/link';

import styles from './header-layout.module.css'

const HeaderLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link href="/">
            Jetty Chart
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="/chart-select">차트 선택</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default HeaderLayout;