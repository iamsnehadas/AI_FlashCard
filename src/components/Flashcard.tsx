import '../styles/globals.css';
interface FlashcardProps {
    question: string;
    answer: string;
  }
  
  const Flashcard = ({ question, answer }: FlashcardProps) => {
    return (
      <div className="Card bg-black shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-bold mb-2">{question}</h2>
        <p>{answer}</p>
      </div>
    );
  };
  
  export default Flashcard;
  