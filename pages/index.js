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
        <p>Développeuse depuis une dizaine d'années, j'adore découvrir de nouvelles technos et mettre mes connaissances et mes expériences passées à contribution pour réaliser votre projet ! De l'architecture à l'interface en passant par le déploiement automatisé, mon coté "couteau-suisse" me permet de prendre en charge les tâches sur l'intégralité de la conception de votre solution.
        </p>
        <p>N'hésitez pas à me contacter ⤵️</p>
        <p>
          <a className={utilStyles.link} target="_blank" href="https://fr.linkedin.com/in/clementinegourp">👩🏻‍💻 Ma page Linkedin </a>
        </p>
      </section>
    </Layout>
  );
}