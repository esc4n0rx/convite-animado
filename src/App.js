import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [mostrarCarta, setMostrarCarta] = useState(false);

  const handleClique = () => {
    setMostrarCarta(true);
  };

  return (
    <div className="App">
      {!mostrarCarta ? (
        <motion.div
          className="envelope"
          onClick={handleClique}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotate: [0, -5, 5, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <img src="envelope.png" alt="Envelope Fechado" className="imagem-envelope" />
          <h2>Clique para abrir a carta</h2>
        </motion.div>
      ) : (
        <motion.div
          className="carta"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* <img src="carta.png" alt="Carta Aberta" className="imagem-carta" /> */}
          <h2>Parabéns pela chegada da sua filha!</h2>
          <p>
            🎉 Desejamos muita saúde e felicidade para toda a família.
            <br />
            🎁 Como presente, você ganhou um vale de <strong>R$ 680,00</strong>!
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
