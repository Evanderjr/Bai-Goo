import Head from 'next/head';
import Image from 'next/image';
import styles from './styles/Home.module.css';
import logo from '../public/images/logo.png';
import ChatBAIGOO from './components/ChatBAIGOO';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Página Inicial - BAI GOO</title>
        <meta name="description" content="Página Inicial - BAI GOO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.button1}>Abertura de conta</button>
          <button className={styles.button2}>Perfil</button>
        </div>
    </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Bem-vindo ao BAI GOO</h1>
          <p className={styles.sectionDescription}>
            Aqui você encontrará conselhos de crédito bancário inteligentes.
          </p>
        </section>

        {/*<section className={styles.panel}>
          <h2 className={styles.panelTitle}>Objetivo do Projeto</h2>
          <p className={styles.panelContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi a justo ultrices, id ullamcorper
            risus molestie. Fusce finibus posuere metus vitae aliquam.
          </p>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Definição de Crédito Bancário</h2>
          <p className={styles.panelContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi a justo ultrices, id ullamcorper
            risus molestie. Fusce finibus posuere metus vitae aliquam.
          </p>
  </section>*/}

        <ChatBAIGOO />

      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>© 2023 BAI GOO. Todos os direitos reservados.</p>
          <p className={styles.footerText}>Rua XPTO, Luanda, Angola</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
