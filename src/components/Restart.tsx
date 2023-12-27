import "../index.css"

type RestartProps = {
   hasWon: boolean
   hasLost: boolean
   restart: () => void
}

export default function Restart({hasWon, hasLost, restart}: RestartProps) {
  return (
    <div>
      {hasWon && 
       <div className="status">
         <p className="status-text">You've Won !</p>
         <button className="restart-btn" onClick={restart}>Restart</button>
       </div>
       }
       {hasLost && 
       <div className="status">
         <p className="status-text">Game Over !</p>
         <button className="restart-btn" onClick={restart}>Restart</button>
       </div>
       }
    </div>
  )
}
