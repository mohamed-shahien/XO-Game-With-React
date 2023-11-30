import React, { Dispatch, SetStateAction } from "react";
interface Icoll {
  messageWin:string;
  cel:string;
  cells: string[];
  setCell: Dispatch<SetStateAction<string[]>>;
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
}
const Cell = ({cel, messageWin, go, id, setGo, cells, setCell }: Icoll) => {
    //handler
const handelClick = () => {
  if(messageWin){
    return;
  }
    const notaken = !cells[id]; // is empty
    if (notaken) {
      if(go === "circle"){
          handelCellChange('circle');
          setGo("cross") ;
      } else if(go === "cross"){
          handelCellChange("cross")
          setGo("circle")
      }
      
    }
  };
  function handelCellChange(cellToOnchange: string) {
    let copyCells = [...cells];
    copyCells[id] = cellToOnchange;
    setCell(copyCells)
}
  return <div className="square" onClick={handelClick}>
    <div className={cel}>
        {cel ? (cel === "circle" ? "O":"X"): null}
    </div>
  </div>;
};

export default Cell;


