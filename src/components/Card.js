import './Card.css'

export default function Card({card,handleChoice,flipped,disabled}) {
  const handleClick = () => {
    if(!disabled){
      handleChoice(card)
    }
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped": ""}>
        <img  
            className="front" 
            src={card.src} 
            alt="card front" />
        <img 
            className="back" 
            src="/img/cover.png" 
            onClick={handleClick} 
            alt="cover" />
      </div>
    </div>
  )
}