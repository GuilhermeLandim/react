import React, { useState, useEffect } from 'react';
import './index.css';

const cards = [
  { id: 1, name: 'Card 1' },
  { id: 2, name: 'Card 2' },
  { id: 3, name: 'Card 3' },
  { id: 4, name: 'Card 4' },
  { id: 5, name: 'Card 5' },
  { id: 6, name: 'Card 6' }
];

function Game() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    if (matchedCards.length === cards.length*2) {
      alert(`Parabéns! Você concluiu o jogo em ${moves} jogadas.`);
    }
  }, [matchedCards, moves]);

  useEffect(() => {
    setShuffledCards(shuffle([...cards, ...duplicatedCards()]));
  }, []);

  const shuffle = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const duplicatedCards = () =>
    cards.map((card) => ({ ...card, id: card.id + cards.length }));

  const handleClick = (card) => {
    if (isCardMatched(card) || isCardSelected(card) || selectedCards.length === 2) {
      return;
    }

    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, card]);
    setMoves((prevMoves) => prevMoves + 1);
  };

  const isCardSelected = (card) =>
    selectedCards.find((selectedCard) => selectedCard.id === card.id);

  const isCardMatched = (card) => matchedCards.includes(card.id);

  const handleMatchedCards = () => {
    const [firstCard, secondCard] = selectedCards;

    if (firstCard.name === secondCard.name && firstCard.id !== secondCard.id) {
      setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstCard.id, secondCard.id]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
        handleMatchedCards();
      }, 1000);
    }
  }, [selectedCards]);

  return (
    <div className="game">
      <div className="cards">
        {shuffledCards.map((card) => (
          <div
            key={card.id}
            className={`card ${isCardSelected(card) ? 'selected' : ''} ${isCardMatched(card) ? 'matched' : ''}`}
            onClick={() => handleClick(card)}
          >
            {isCardMatched(card) || isCardSelected(card) ? card.name : <div className="card-back"></div>}
          </div>
        ))}
      </div>
      <div className="moves">Movimentos: {moves}</div>
    </div>
  );
}

export default Game;
