import "../index.css"

const KEYS: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

type KeyboardProps = {
   addLetter: (letter: string) => void
   hasWon: boolean
   hasLost: boolean
   rightLetters: string[]
   wrongLetters: string[]
}
export default function Keyboard({addLetter, hasWon, hasLost, rightLetters, wrongLetters}: KeyboardProps) {
  return (
    <div className="keyboard">
      {KEYS.map(key => (
         <button 
          className={`btn ${rightLetters.includes(key) ? "active" : ""}`}
          disabled={hasWon || hasLost || rightLetters.includes(key) || wrongLetters.includes(key)}
          key={key}
          onClick={() => {addLetter(key)}}>
            {key}
         </button>
      ))}
    </div>
  )
}