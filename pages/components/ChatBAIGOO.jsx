import React, { useState } from 'react';
import styles from './Chat.module.css';
import axios from 'axios';

function ChatBAIGOO() {
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obter o texto da mensagem do estado ou do evento
    const messageText = e.target.message.value;

    try {
      // Fazer a requisição para a API
      const response = await axios.post('http://localhost:3001/api/gpt3', {
        message: messageText,
      });

      // Extrair a resposta da API
      const responseData = response.data;

      // Adicionar a mensagem enviada ao estado de mensagens
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageText, sender: 'user' },
      ]);

      // Adicionar a resposta da inteligência artificial ao estado de mensagens
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseData.answer, sender: 'chatbot' },
      ]);
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Lidar com erros de requisição, se necessário
    }

    // Limpar a área de entrada de texto
    e.target.message.value = '';
  };

  return (
    <section className={styles.chatSection}>
      <h2 className={styles.chatTitle}>Chat BAI GOO</h2>
      <div className={styles.chatContainer}>
        <div className={styles.chatMessages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[message.sender]}`}
            >
              <div className={styles.messageContent}>
                <p className={styles.messageText}>{message.text}</p>
                <span className={styles.messageTimestamp}>13:30</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.chatInput}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="message" placeholder="Escreva uma mensagem" />
            <button type="submit" className={styles.sendMessageButton}>Enviar</button>
          </form>
        </div>
      </div>
      <div className={styles.chatActions}>
        <button className={styles.newConversationButton}>Nova Conversa</button>
        <button className={styles.clearConversationButton}>Limpar Conversa</button>
      </div>
    </section>
  );
}

export default ChatBAIGOO;
