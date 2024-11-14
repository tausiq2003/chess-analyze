import validateFEN from "fen-validator";
export function idToPos(id: number): string | null {
    if (id < 1 || id > 64) {
        return null;
    }
    const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const cols = ["1", "2", "3", "4", "5", "6", "7", "8"];
    return `${rows[(id - 1) % 8]}${cols[8 - Math.floor((id - 1) / 8) - 1]}`;
}

export function fenToBoard(fen: string) {
    if (!validateFEN(fen)) {
        console.error("ERROR: invalid fen, please enter valid fen");
        return;
    }
    const board: string[][] = [];
    const akshualRepr = fen.split(" ")[0];
    let row: string[] = [];

    for (const piece of akshualRepr) {
        if (piece === "/") {
            board.push(row);
            row = [];
        } else if (isNaN(Number(piece))) {
            row.push(piece);
        } else {
            const emptySquares = Number(piece);
            for (let i = 0; i < emptySquares; i++) {
                row.push(" ");
            }
        }
    }

    if (row.length > 0) {
        board.push(row);
    }
    return board;
}
