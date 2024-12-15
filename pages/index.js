import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>


        <p>

        As a software developer for the past ten years, I love discovering new technologies and putting my knowledge and past experience to work on your project! From architecture to interface to automated deployment, my “Swiss-knife” approach enables me to take charge of tasks covering the entire design of your solution.
        </p>
        <p>Contact me ⤵️</p>
        <p>
          <a className={utilStyles.link} target="_blank" href="https://fr.linkedin.com/in/clementinegourp">👩🏻‍💻 My Linkedin Page </a>
        </p>
      </section>
    </Layout>
  );
}