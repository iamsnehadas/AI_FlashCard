import Flashcard from '../components/Flashcard';
import '../styles/globals.css';

const HomePage = () => {
  const flashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is Next.js?', answer: 'A React framework for production.' },
  ];

  return (
    <div>
      <h1 className="Intro text-2xl font-bold mb-4">Welcome to the Flashcard App</h1>
      {flashcards.map((card, index) => (
        <Flashcard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default HomePage;
