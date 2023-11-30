


interface Iprop {
    scoreCross:number;
    scoreCircle:number;
}
const Score = ({scoreCircle,scoreCross}:Iprop) => {
  return (
    <div className="scoreContainer">
        <span className="scorex">{scoreCircle}</span>
        <span className="scoreo">{scoreCross}</span>
    </div>
  )
}

export default Score
