import validateFEN from "fen-validator";
export function idToPos(id: number): string | null {
    if (id < 1 || id > 64) {
        return null;
    }
    const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const cols = ["1", "2", "3", "4", "5", "6", "7", "8"];
    return `${rows[(id - 1) % 8]}${cols[8 - Math.floor((id - 1) / 8) - 1]}`;
}
type ErrorMessage = {
    errorMessage: string;
};
type LinkData = {
    linkType: "chessCom" | "lichessId";
    linkValue: string;
};

export function fenToBoard(fen: string) {
    if (!validateFEN(fen)) {
        console.error(
            "ERROR: invalid fen, so it returned to initial fen. please enter valid fen",
        );
        fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
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
function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (
            !(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)
        ) {
            return false;
        }
    }
    return true;
}
function gameIdParsing(link: string): ErrorMessage | LinkData {
    const chessComId = "chess.com/game/live/";
    const lichessId = "lichess.org/";
    if (link.includes(chessComId)) {
        let gameId;
        if (link.split(chessComId)[0] !== "") {
            gameId = link.split(chessComId)[2];
        } else {
            gameId = link.split(chessComId)[1];
        }
        if (isAlphaNumeric(gameId)) {
            return link;
        } else {
            return {
                errorMessage: "ERROR:chesscom: invalid link (not game link)",
            };
        }
    } else if (link.includes("lichess.org/")) {
        let gameId;
        let gameData;
        if (link.split(lichessId)[0] != "") {
            gameData = link.split(lichessId)[2];
        } else {
            gameData = link.split(lichessId)[1];
        }
        if (gameData.includes("/")) {
            gameId = gameData.split("/")[0];
        } else {
            gameId = gameData;
        }
        if (isAlphaNumeric(gameId)) {
            return link;
        } else {
            return {
                errorMessage: "ERROR:lichess: invalid link (not game link)",
            };
        }
    }
    return { errorMessage: "invalid link" };
}

export async function pgnFromGameId(link: string) {
    //assume link is valid
    const result = gameIdParsing(link);
    /*    if (typeof result !== String) {
        return result;
    }*/
}
