import React from 'react';
import styles from './styles/Home.module.css';
import ParticleBackground from '../pages/components/ParticleBackground';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <ParticleBackground />
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo BAI GOO" />
        </div>
        <nav className={styles.navbar}>
          <a href="#">Abertura de Conta</a>
          <a href="#">Perfil</a>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.center}>
            <h1 className={styles.title}>Bem-vindo ao BAI GOO</h1>
            <p className={styles.description}>Aqui você encontrará conselhos de crédito bancário inteligentes.</p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.rectangle}>
            <h2 className={styles.rectangleTitle}>Objetivo do Projeto</h2>
            <p className={styles.rectangleContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi a justo ultrices, id
              ullamcorper risus molestie. Fusce finibus posuere metus vitae aliquam.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.rectangle}>
            <h2 className={styles.rectangleTitle}>Definição de Crédito Bancário</h2>
            <p className={styles.rectangleContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi a justo ultrices, id
              ullamcorper risus molestie. Fusce finibus posuere metus vitae aliquam.
            </p>
          </div>
        </section>
        <section className={styles.chatSection}>
        <h2 className={styles.chatTitle}>Chat BAI GOO</h2>
          <div className={styles.chatContainer}>
            <div className={styles.chatMessages}>
              <div className={styles.message}>
               <div className={styles.messageContent}>
                 <p className={styles.messageText}>Olá! Como posso ajudar?</p>
                 <span className={styles.messageTimestamp}>13:30</span>
               </div>
             </div>
           <div className={styles.message}>
           <div className={styles.messageContent}>
              <p className={styles.messageText}>Estou aqui para fornecer conselhos de crédito bancário inteligentes.</p>
              <span className={styles.messageTimestamp}>13:32</span>
           </div>
      </div>
      {/* Adicione mais respostas simuladas aqui */}
    </div>
    <div className={styles.chatInput}>
      <input type="text" placeholder="Escreva uma mensagem" />
      <button className={styles.sendMessageButton}>Enviar</button>
    </div>
  </div>
  <div className={styles.chatActions}>
    <button className={styles.newConversationButton}>Nova Conversa</button>
    <button className={styles.clearConversationButton}>Limpar Conversa</button>
  </div>
</section>
      </main>
      <footer className={styles.footer}>
        <p>Todos os direitos reservados. &copy; 2023 BAI GOO</p>
      </footer>
    </div>
  );
};

export default Home;
