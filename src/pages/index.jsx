import Link from 'next/link';

import styles from './index.module.css';

const Home = () => {
  return (
    <>
      <header className="IROnly">
        <h1>Jetty Chart Intro Page</h1>
      </header>
      <main>
        <section className={styles.section}>
          <header>
            <h2>Welcome to Jetty Chart</h2>
          </header>
          <Link href="/chart-select">Start Now!</Link>
        </section>
      </main>
    </>
  )
}

export default Home;