import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
      // Aqui você pode adicionar a lógica para gerar uma resposta automática do Chat BAI GOO
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Bem-vindo ao BAI GOO</h1>
        <p className={styles.description}>
          Aqui você encontrará conselhos de crédito bancário inteligentes.
        </p>
        <button className={styles.button}>Começar</button>
        <div className={styles.rectangle}></div>
        <div className={styles.chat}>
          <div className={styles.chatHeader}>
            <h2>Chat BAI GOO</h2>
            <button className={styles.newConversationButton}>Nova Conversa</button>
          </div>
          <div className={styles.chatBody}>
            {/* Renderize as mensagens aqui */}
            {messages.map((message, index) => (
              <div key={index} className={styles.message}>
                {message}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              placeholder="Escreva uma mensagem..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
