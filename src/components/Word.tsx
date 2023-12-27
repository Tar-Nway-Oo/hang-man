import "../index.css"

type WordProps = {
   wordToGuess: string
   guessedletters: string[]
   hasLost: boolean
   rightLetters: string[]
}

export default function Word({wordToGuess, guessedletters, hasLost, rightLetters}: WordProps) {
  return (
    <div className="word-to-guess">
      {wordToGuess.split("").map((letter, index) => (
         <p className="letter" key={index}>
            <span style={{visibility: guessedletters.includes(letter) || hasLost ? "visible" : "hidden", color: !rightLetters.includes(letter) ? "red" : "black"}}>{letter}</span>
         </p>
      ))}
    </div>
  )
}
