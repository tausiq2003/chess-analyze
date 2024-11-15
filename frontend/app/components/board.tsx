import Cell from "./cell";
import { fenToBoard } from "../lib/functions";
export default function Board() {
    const fen = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1";
    const board = fenToBoard(fen);

    return (
        <div className="w-full aspect-square">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full border-2 border-gray-800 rounded-lg overflow-hidden">
                {board.map((row, rowIndex) =>
                    row.map((piece, colIndex) => {
                        const id = rowIndex * 8 + colIndex + 1;
                        return <Cell key={id} id={id} value={piece} />;
                    }),
                )}
            </div>
        </div>
    );
}
