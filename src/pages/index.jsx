import Link from 'next/link';

import StartIcon from '@mui/icons-material/Start';
import ArticleIcon from '@mui/icons-material/Article';
import RefreshIcon from '@mui/icons-material/Refresh';

import styles from './index.module.css';

const Home = () => {
  return (
    <>
      <header className="IROnly">
        <h1>Jetty Chart Intro Page</h1>
      </header>
      <main>
        <section className={styles.section}>
          <header className={styles.header}>
            <h2>Jetty Chart</h2>
            <p><span>React/Next</span> 차트 오픈소스 라이브러리</p>
            <nav>
              <ul className={styles.list}>
                <li>
                  <Link href="https://github.com/sdh20282/jetty-chart" className={styles.link}>
                    <StartIcon />
                    <span>Get Started</span>
                  </Link>
                </li>
                <li>
                  <Link href="/chart-select" className={styles.link}>
                    <ArticleIcon />
                    <span>Demo</span>
                  </Link>
                </li>
                {/* <li>
                  <button>
                    <RefreshIcon />
                  </button>
                </li> */}
              </ul>
            </nav>
          </header>
        </section>
      </main>
    </>
  )
}

export default Home;