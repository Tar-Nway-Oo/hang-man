import { useState } from "react"
import HangMan from "./components/HangMan"
import Word from "./components/Word"
import Keyboard from "./components/Keyboard"
import Restart from "./components/Restart"
import "./index.css"
import words from "./wordList.json"

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {

  const [wordToGuess, setWordToGuest] = useState<string>(getWord);

  const [guessedletters, setGuessedletters] = useState<string[]>([]);

  const rightLetters: string[] = guessedletters.filter(letter => wordToGuess.includes(letter));

  const wrongLetters: string[] = guessedletters.filter(letter => !wordToGuess.includes(letter));

  const hasWon: boolean = wordToGuess.split("").every(letter => guessedletters.includes(letter));

  const hasLost: boolean = wrongLetters.length >= 6;


  function addLetter(letter: string) {
    setGuessedletters(prevLetters => ([
      ...prevLetters,
      letter
    ]));
  }

  function restart(){
    setWordToGuest(getWord);
    setGuessedletters([]);
  }

  return (
    <div className="app">
      <HangMan
        wrongLetters={wrongLetters}
      />
      <Word
        wordToGuess={wordToGuess}
        guessedletters={guessedletters}
        hasLost={hasLost}
        rightLetters={rightLetters}
      />
      <Keyboard
        addLetter={addLetter}
        hasWon={hasWon}
        hasLost={hasLost}
        rightLetters={rightLetters}
        wrongLetters={wrongLetters}
      />
      <Restart
        hasWon={hasWon}
        hasLost={hasLost}
        restart={restart}
      />
    </div>
  )
}

export default App
