import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const nameLine1 = 'Hello ! Bienvenue !';
const nameLine2 = 'Egun On ! Benvengut !';

export const siteTitle = 'Clemy is coding 🚀';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={'/images/favicon.ico'} />
        <meta
          name="description" 
          content="Clémentine Gourp fullstack developer"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="clementine profile picture"
            />
            <h1 className={utilStyles.heading2Xl}>{nameLine1}<br/>{nameLine2}</h1>
          </>
        ) : (
          <>
            <Link href="/">
            <img
              src="/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="clementine profile picture"
            />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                <div >{nameLine1} </div>
                {nameLine2}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}