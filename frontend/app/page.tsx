import Image from "next/image";
import Input from "@/app/components/inputs";
import Board from "@/app/components/board";
import { fenToBoard } from "./lib/functions";

export default function Home() {
    const a = fenToBoard(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    );
    console.log(a);
    return (
        <>
            <main>
                <div>
                    <div className="" id="board">
                        <Board />
                    </div>
                    <div className="" id="dashboard">
                        <div id="input">
                            <Input />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
