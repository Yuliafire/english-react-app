import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';


const phrases = [
  'Could you please..',
  'I would like..',
  'Would you like..',
  'My bad..',
  'I apologize for..?',
  'I appreciate it',
  'May I ask you..',
  'Do you mind if..?',
  'You might be mistaken',
];

function PoliteEnglishTest() {
  const [phrase, setPhrase] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  // const [bgColor, setBgColor] = useState('bg-gray-200');

  const handleLearnClick = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setPhrase(randomPhrase);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const checkAnswer = () => {
    const userInputNormalized = userInput.trim().toLowerCase().split(' ').sort();
    const phraseNormalized = phrase.trim().toLowerCase().split(' ').sort();
  
    if(userInputNormalized.length !== phraseNormalized.length){
      alert('Try again!');
      setBgColor('bg-red-200'); // set background color to red
    } else {
      let isCorrect = true;
      for(let i = 0; i < userInputNormalized.length; i++){
        if(userInputNormalized[i] !== phraseNormalized[i]){
          isCorrect = false;
          break;
        }
      }
  
      if(isCorrect){
        setScore(score + 1);
        alert('Good job! You used the phrase correctly.');
        setBgColor('bg-green-200'); // set background color to green
      } else {
        alert('Try again!');
        setBgColor('bg-red-200'); // set background color to red
      }
    }
  
    setUserInput('');
  };
  
  
  
  // return (
  //   <>
  //   <div className={`flex flex-col items-center justify-center w-screen h-screen ${bgColor} p-8`}>
  //     <h1 className="mb-6 text-3xl font-bold text-gray-800">Learn Polite English Phrases</h1>
  //     {phrase && <p className="mb-6 text-xl text-gray-600">Your phrase to learn is: <span className="font-bold text-pink-500">{phrase}</span></p>}
  //     <button
  //       onClick={handleLearnClick}
  //       className="px-4 py-2 mb-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
  //     >
  //       Learn a phrase
  //     </button>
  //     <input
  //       value={userInput}
  //       onChange={handleInputChange}
  //       placeholder="Use the phrase in a sentence"
  //       className="px-6 py-4 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
  //     />
  //     <button
  //       onClick={checkAnswer}
  //       className="px-4 py-2 mb-8 font-bold text-white bg-green-500 rounded hover:bg-green-700">
  //       Check my answer
  //     </button>
  //     <p className="text-2xl font-bold text-blue-800">Your score is: {score}</p>
  //   </div>
  //   </>
  // );



  return (
    <>
    <div className={`flex flex-col items-center justify-center w-screen h-screen bg-black p-8`}>
      <h1 className="mb-6 text-3xl font-bold text-white">Learn Polite English Phrases</h1>
      {phrase && <p className="mb-6 text-xl text-white">Your phrase to learn is: <span className="font-bold text-pink-500">{phrase}</span></p>}
      <button
        onClick={handleLearnClick}
        className="px-4 py-2 mb-4 font-bold text-white bg-purple-500 rounded hover:bg-blue-700"
      >
        Learn a phrase
      </button>
      <input
        value={userInput}
        onChange={handleInputChange}
        placeholder="Use the phrase in a sentence"
        className="px-6 py-4 mb-6 text-white bg-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        onClick={checkAnswer}
        className="px-4 py-2 mb-8 font-bold text-white bg-green-500 rounded hover:bg-green-700">
        Check my answer
      </button>
    </div>
    </>
  );
}

export default PoliteEnglishTest;










































