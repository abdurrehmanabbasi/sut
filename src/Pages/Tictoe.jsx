import { useState } from "react";

const Tictoe = () => {
    const [board,setBoard]=useState(Array(9).fill(null));
    const [player,setPlayer]=useState(true)
    const winner=calculateWinner(board)
    function calculateWinner(board){
        const lines=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i];
            if(board[a]&&board[a]===board[b] && board[a]===board[c]){
                return lines[a]
            }
        }
        return null
    }
    function restart() {
        setBoard(Array(9).fill(null))
    }
    function handleCheck(i) {
        
        const newBoard=board;
        if (winner||newBoard[i]) {
            alert('Game Over')
        }
        newBoard[i]=player?'X':'O'
        setBoard(newBoard)
        setPlayer(!player)

    }
    
    return (
    <div className="flex mt-10 h-96 justify-center">
        {winner ?<div class="flex flex-col">{`Winner is ${!player?'X':'O'}`}<button onClick={restart}>Restart</button></div>:
        <div className="inline-grid grid-cols-3  space-x-1 space-y-1 w-1/2">
            {board.map((v,i)=>
                    <button className="bg-white opacity-40 text-black p-5" key={i} onClick={()=>handleCheck(i)} >{v}</button>
            )}
        <div>{`Player is ${player?'X':'O'}`}</div>
        </div>

        }
    </div> 
    );
}
 
export default Tictoe;