"use client";
import { useState, useEffect } from "react";
import Cell from "./components/cell";
import Score from "./components/score";

export default function Home() {
  const winingGeame = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [cells, setCell] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [messageWin, setmessageWin] = useState("");
  const [scoreCross,setscoreCross] = useState<number>(0)
  const [scoreCircle,setscoreCircle] = useState<number>(0)


  useEffect(() => {
    winingGeame.forEach((comp) => {
      const circleWine = comp.every((ever) => cells[ever] === "circle");
      const crossWine = comp.every((ever) => cells[ever] === "cross");
      if (circleWine) {
        setmessageWin("circle is Wining");
        setscoreCircle(scoreCircle +1)
        
      } else if (crossWine) {
        setmessageWin("cross is Wining");
        setscoreCross(scoreCross +1)
      }
    }
    
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cells, messageWin]);


  useEffect(()=>{
    if(cells.every((ever) => ever !== "") && !messageWin){
      setmessageWin('the geame is drow')
    }
  },[cells, messageWin]);



  const setgame=()=> {
    setmessageWin("")
    setCell(["", "", "", "", "", "", "", "", ""]);
    
  }

  return (
    <main className="container">
      {/* <Score scoreCross={scoreCross} scoreCircle={scoreCircle} /> */}
      <div className="scoreContainer">
        <span className="scorex">{`Score X    ${scoreCross}`}</span>
        <span className="scoreo">{`Score O    ${scoreCircle}`}</span>
    </div>
      <div className="gamebord">
        {cells.map((cel, index) => (
          <Cell
            messageWin={messageWin}
            cel={cel}
            setCell={setCell}
            cells={cells}
            id={index}
            go={go}
            setGo={setGo}
            key={index}
          />
        ))}
      </div>
      <div className="message">
        <p>{messageWin && <button className="refrish" onClick={setgame}>sfchwe</button>}</p>
        {!messageWin && (
          <p>
            the Geame is
            <span className={go === "circle" ? "blue" : "red"}>{go}</span>
          </p>
        )}
      </div>
      
    </main>
  );
}
