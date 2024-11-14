import Cell from "@/app/components/cell";
import { fenToBoard } from "../lib/functions";

export default function Board() {
    const fen = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1";
    const board = fenToBoard(fen); // Get the 2D array representing the board

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-8 grid-rows-8">
                {board.map((row, rowIndex) => {
                    return row.map((piece, colIndex) => {
                        // Create a unique key for each cell using its row and column index
                        const id = rowIndex * 8 + colIndex + 1;
                        return <Cell key={id} id={id} value={piece} />;
                    });
                })}
            </div>
        </div>
    );
}
